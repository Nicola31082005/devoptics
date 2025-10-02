import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Transform, Vec3, Camera } from 'ogl';
import { gsap } from 'gsap';

import './MetaBalls.css';

function parseHexColor(hex) {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return [r, g, b];
}

function fract(x) {
  return x - Math.floor(x);
}

function hash31(p) {
  let r = [p * 0.1031, p * 0.103, p * 0.0973].map(fract);
  const r_yzx = [r[1], r[2], r[0]];
  const dotVal = r[0] * (r_yzx[0] + 33.33) + r[1] * (r_yzx[1] + 33.33) + r[2] * (r_yzx[2] + 33.33);
  for (let i = 0; i < 3; i++) {
    r[i] = fract(r[i] + dotVal);
  }
  return r;
}

function hash33(v) {
  let p = [v[0] * 0.1031, v[1] * 0.103, v[2] * 0.0973].map(fract);
  const p_yxz = [p[1], p[0], p[2]];
  const dotVal = p[0] * (p_yxz[0] + 33.33) + p[1] * (p_yxz[1] + 33.33) + p[2] * (p_yxz[2] + 33.33);
  for (let i = 0; i < 3; i++) {
    p[i] = fract(p[i] + dotVal);
  }
  const p_xxy = [p[0], p[0], p[1]];
  const p_yxx = [p[1], p[0], p[0]];
  const p_zyx = [p[2], p[1], p[0]];
  const result = [];
  for (let i = 0; i < 3; i++) {
    result[i] = fract((p_xxy[i] + p_yxx[i]) * p_zyx[i]);
  }
  return result;
}

const vertex = `#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision mediump float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec3 iMouse;
uniform vec3 iColor;
uniform vec3 iCursorColor;
uniform float iAnimationSize;
uniform int iBallCount;
uniform float iCursorBallSize;
uniform vec3 iMetaBalls[50];
uniform float iClumpFactor;
uniform bool enableTransparency;
uniform vec3 iGlowColor;
uniform float iGlowIntensity;
uniform float iMorphStrength;
out vec4 outColor;

// Simple noise function for better performance
float simpleNoise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

float getMetaBallValue(vec2 c, float r, vec2 p) {
  // Simple organic distortion without heavy calculations
  vec2 offset = vec2(
    sin(iTime * 0.5 + p.x * 0.01) * iMorphStrength * 0.3,
    cos(iTime * 0.4 + p.y * 0.01) * iMorphStrength * 0.3
  );
  
  vec2 distortedP = p + offset;
  vec2 d = distortedP - c;
  float dist2 = dot(d, d);
  return (r * r) / max(dist2, 0.1);
}

void main() {
  vec2 fc = gl_FragCoord.xy;
  float scale = iAnimationSize / iResolution.y;
  vec2 coord = (fc - iResolution.xy * 0.5) * scale;
  vec2 mouseW = (iMouse.xy - iResolution.xy * 0.5) * scale;
  
  float m1 = 0.0;
  for (int i = 0; i < 50; i++) {
    if (i >= iBallCount) break;
    m1 += getMetaBallValue(iMetaBalls[i].xy, iMetaBalls[i].z, coord);
  }
  float m2 = getMetaBallValue(mouseW, iCursorBallSize, coord);
  float total = m1 + m2;
  
  // Simplified threshold for better performance
  float threshold = 1.0;
  float f = smoothstep(threshold - 0.2, threshold + 0.2, total);
  
  // Simple lighting without heavy gradient calculations
  vec2 center = vec2(0.0);
  float distFromCenter = length(coord - center) / 15.0;
  
  vec3 cFinal = vec3(0.0);
  if (f > 0.01) {
    // Base color mixing
    float alpha1 = m1 / max(total, 0.01);
    float alpha2 = m2 / max(total, 0.01);
    vec3 baseColor = mix(iColor, iCursorColor, alpha2);
    
    // Simple radial gradient
    float gradientFactor = 1.0 - smoothstep(0.0, 1.0, distFromCenter);
    vec3 centerColor = baseColor * 0.7;
    vec3 edgeColor = baseColor * 1.1;
    vec3 gradientColor = mix(centerColor, edgeColor, gradientFactor);
    
    // Simple lighting
    float lightFactor = 0.8 + 0.2 * sin(iTime * 0.5 + distFromCenter * 2.0);
    cFinal = gradientColor * lightFactor;
    
    // Simple edge glow
    float edgeGlow = (1.0 - f) * f * 2.0;
    cFinal += iGlowColor * edgeGlow * iGlowIntensity * 0.4;
  }
  
  outColor = vec4(cFinal, enableTransparency ? f : 1.0);
}
`;

const MetaBalls = ({
  className = '',
  color = '#2a2a2a',  // Dark base color like in the image
  speed = 0.3,
  enableMouseInteraction = true,
  hoverSmoothness = 0.05,
  animationSize = 30,
  ballCount = 12,
  clumpFactor = 1,
  cursorBallSize = 3,
  cursorBallColor = '#2a2a2a',
  enableTransparency = true,
  glowColor = '#00ff41',  // Bright green glow like in the image
  glowIntensity = 2.0,
  morphStrength = 1.5
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dpr = 1;
    const renderer = new Renderer({ dpr, alpha: true, premultipliedAlpha: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, enableTransparency ? 0 : 1);
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, {
      left: -1,
      right: 1,
      top: 1,
      bottom: -1,
      near: 0.1,
      far: 10
    });
    camera.position.z = 1;

    const geometry = new Triangle(gl);
    const [r1, g1, b1] = parseHexColor(color);
    const [r2, g2, b2] = parseHexColor(cursorBallColor);
    const [gr, gg, gb] = parseHexColor(glowColor);

    const metaBallsUniform = [];
    for (let i = 0; i < 50; i++) {
      metaBallsUniform.push(new Vec3(0, 0, 0));
    }

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vec3(0, 0, 0) },
        iMouse: { value: new Vec3(0, 0, 0) },
        iColor: { value: new Vec3(r1, g1, b1) },
        iCursorColor: { value: new Vec3(r2, g2, b2) },
        iGlowColor: { value: new Vec3(gr, gg, gb) },
        iAnimationSize: { value: animationSize },
        iBallCount: { value: ballCount },
        iCursorBallSize: { value: cursorBallSize },
        iMetaBalls: { value: metaBallsUniform },
        iClumpFactor: { value: clumpFactor },
        iGlowIntensity: { value: glowIntensity },
        iMorphStrength: { value: morphStrength },
        enableTransparency: { value: enableTransparency }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    const scene = new Transform();
    mesh.setParent(scene);

    const maxBalls = 50;
    const effectiveBallCount = Math.min(ballCount, maxBalls);
    const ballParams = [];
    
    // Create GSAP animations for each ball
    const gsapAnimations = [];
    
    for (let i = 0; i < effectiveBallCount; i++) {
      const idx = i + 1;
      const h1 = hash31(idx);
      const st = h1[0] * (2 * Math.PI);
      const dtFactor = 0.05 * Math.PI + h1[1] * (0.15 * Math.PI - 0.05 * Math.PI);
      const baseScale = 6.0 + h1[1] * (10.0 - 6.0);  // Reduced scale to help stay in bounds
      const h2 = hash33(h1);
      const toggle = Math.floor(h2[0] * 2.0);
      const radiusVal = 1.8 + h2[2] * (2.5 - 1.8);
      
      const ballParam = { 
        st, 
        dtFactor, 
        baseScale, 
        toggle, 
        radius: radiusVal,
        // Much simpler GSAP animated properties
        gsapX: 0,
        gsapY: 0,
        gsapRadius: radiusVal
      };
      
      ballParams.push(ballParam);
      
      // Calculate safe movement range based on screen bounds
      // Keep movement within a safe zone to prevent going off-screen
      const safeZoneX = (gl.canvas.width * 0.3) / animationSize;  // Convert to shader coordinates
      const safeZoneY = (gl.canvas.height * 0.3) / animationSize;
      const moveRangeX = Math.min(3 + i * 1.5, safeZoneX);
      const moveRangeY = Math.min(3 + i * 1.5, safeZoneY);
      
      gsap.to(ballParam, {
        duration: 6 + h1[2] * 4,
        gsapX: (h1[0] - 0.5) * moveRangeX,
        gsapY: (h1[1] - 0.5) * moveRangeY,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 1.5
      });
      
      // Simple radius pulsing
      gsap.to(ballParam, {
        duration: 4 + h2[2] * 2,
        gsapRadius: radiusVal * (0.8 + h1[0] * 0.4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 1
      });
    }

    const mouseBallPos = { x: 0, y: 0 };
    let pointerInside = false;
    let pointerX = 0;
    let pointerY = 0;

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width * dpr, height * dpr);
      gl.canvas.style.width = width + 'px';
      gl.canvas.style.height = height + 'px';
      program.uniforms.iResolution.value.set(gl.canvas.width, gl.canvas.height, 0);
    }
    window.addEventListener('resize', resize);
    resize();

    function onPointerMove(e) {
      if (!enableMouseInteraction) return;
      const rect = container.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      pointerX = (px / rect.width) * gl.canvas.width;
      pointerY = (1 - py / rect.height) * gl.canvas.height;
    }
    function onPointerEnter() {
      if (!enableMouseInteraction) return;
      pointerInside = true;
    }
    function onPointerLeave() {
      if (!enableMouseInteraction) return;
      pointerInside = false;
    }
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerenter', onPointerEnter);
    container.addEventListener('pointerleave', onPointerLeave);

    const startTime = performance.now();
    let animationFrameId;
    function update(t) {
      animationFrameId = requestAnimationFrame(update);
      const elapsed = (t - startTime) * 0.001;
      program.uniforms.iTime.value = elapsed;

      for (let i = 0; i < effectiveBallCount; i++) {
        const p = ballParams[i];
        const dt = elapsed * speed * p.dtFactor;
        const th = p.st + dt;
        
        // Combine base oscillation with simplified GSAP animations
        const baseX = Math.cos(th) * p.baseScale;
        const baseY = Math.sin(th + dt * p.toggle) * p.baseScale;
        
        // Apply simplified GSAP modifications
        const finalX = (baseX + p.gsapX) * clumpFactor;
        const finalY = (baseY + p.gsapY) * clumpFactor;
        const finalRadius = p.gsapRadius;
        
        metaBallsUniform[i].set(finalX, finalY, finalRadius);
      }

      let targetX, targetY;
      if (pointerInside) {
        targetX = pointerX;
        targetY = pointerY;
      } else {
        const cx = gl.canvas.width * 0.5;
        const cy = gl.canvas.height * 0.5;
        // Smaller orbit radius to keep cursor blob on screen
        const rx = gl.canvas.width * 0.1;
        const ry = gl.canvas.height * 0.1;
        targetX = cx + Math.cos(elapsed * speed * 0.7) * rx;
        targetY = cy + Math.sin(elapsed * speed * 0.7) * ry;
      }
      
      // Clamp cursor position to screen bounds
      const margin = 50; // pixels margin from edge
      targetX = Math.max(margin, Math.min(gl.canvas.width - margin, targetX));
      targetY = Math.max(margin, Math.min(gl.canvas.height - margin, targetY));
      
      mouseBallPos.x += (targetX - mouseBallPos.x) * hoverSmoothness;
      mouseBallPos.y += (targetY - mouseBallPos.y) * hoverSmoothness;
      program.uniforms.iMouse.value.set(mouseBallPos.x, mouseBallPos.y, 0);

      renderer.render({ scene, camera });
    }
    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      
      // Kill all GSAP animations more efficiently
      gsap.killTweensOf(ballParams);
      
      window.removeEventListener('resize', resize);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerenter', onPointerEnter);
      container.removeEventListener('pointerleave', onPointerLeave);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [
    color,
    cursorBallColor,
    glowColor,
    speed,
    enableMouseInteraction,
    hoverSmoothness,
    animationSize,
    ballCount,
    clumpFactor,
    cursorBallSize,
    enableTransparency,
    glowIntensity,
    morphStrength
  ]);

  return <div ref={containerRef} className={`metaballs-container ${className}`} />;
};

export default MetaBalls;
