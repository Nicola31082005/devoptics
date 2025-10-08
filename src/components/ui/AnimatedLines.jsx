import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedLines = ({
  theme = 'dark', // 'dark' or 'light'
  size = 'large', // 'large' or 'small'
  paths = [], // Array of path data objects
  viewBox = '0 0 1200 800',
  opacity = { start: 0, end: 0.6 },
  strokeWidth = { primary: 2, secondary: 1.5 },
  animation = {
    duration: 3,
    stagger: 0.5,
    floatingRange: { x: [-5, 5], y: [-5, 5] },
    floatingDuration: [6, 8],
    delay: 1
  },
  colors = {
    primary: { start: '#84cc16', middle: '#22c55e', end: '#84cc16' },
    secondary: { start: '#22c55e', middle: '#84cc16', end: '#22c55e' }
  }
}) => {
  const linesRef = useRef([]);
  const containerRef = useRef(null);

  // Default paths for different themes and sizes
  const defaultPaths = {
    dark: {
      large: [
        {
          d: "M0,50 Q200,150 400,120 Q600,90 800,180 Q1000,250 1200,200",
          gradient: 'primary',
          strokeWidth: strokeWidth.primary
        },
        {
          d: "M-50,700 Q150,600 350,650 Q550,700 750,620 Q950,540 1150,600",
          gradient: 'secondary',
          strokeWidth: strokeWidth.secondary
        }
      ]
    },
    light: {
      small: [
        {
          d: "M200,100 Q400,150 600,120 Q800,90 1000,140",
          gradient: 'primary',
          strokeWidth: strokeWidth.primary
        },
        {
          d: "M100,450 Q300,400 500,430 Q700,460 900,420",
          gradient: 'secondary',
          strokeWidth: strokeWidth.secondary
        }
      ]
    }
  };

  // Get paths to use
  const pathsToUse = paths.length > 0 
    ? paths 
    : (defaultPaths[theme]?.[size] || defaultPaths.dark.large);

  // Adjust opacity based on theme
  const finalOpacity = theme === 'light' 
    ? Math.min(opacity.end + 0.1, 1) 
    : opacity.end;

  useEffect(() => {
    if (!linesRef.current.length) return;

    // Set up each path for drawing animation
    linesRef.current.forEach((path) => {
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      }
    });

    // Create timeline for smooth sequencing
    const tl = gsap.timeline();

    // Animate the lines drawing in
    tl.fromTo(linesRef.current, 
      { 
        strokeDashoffset: (i, el) => el?.getTotalLength() || 0,
        opacity: opacity.start 
      },
      {
        strokeDashoffset: 0,
        opacity: finalOpacity,
        duration: animation.duration,
        stagger: animation.stagger,
        ease: "power2.out"
      }
    );

    // Add floating animation if enabled
    if (animation.floatingRange) {
      tl.to(linesRef.current, {
        y: `random(${animation.floatingRange.y[0]}, ${animation.floatingRange.y[1]})`,
        x: `random(${animation.floatingRange.x[0]}, ${animation.floatingRange.x[1]})`,
        duration: `random(${animation.floatingDuration[0]}, ${animation.floatingDuration[1]})`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      }, `+=${animation.delay}`);
    }

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [pathsToUse, finalOpacity, animation, opacity.start]);

  return (
    <svg 
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none" 
      viewBox={viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`lineGradient1-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.primary.start} stopOpacity="0.8" />
          <stop offset="50%" stopColor={colors.primary.middle} stopOpacity="0.6" />
          <stop offset="100%" stopColor={colors.primary.end} stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={`lineGradient2-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.secondary.start} stopOpacity="0.7" />
          <stop offset="50%" stopColor={colors.secondary.middle} stopOpacity="0.6" />
          <stop offset="100%" stopColor={colors.secondary.end} stopOpacity="0.4" />
        </linearGradient>
      </defs>
      
      {pathsToUse.map((pathData, index) => (
        <path
          key={index}
          ref={el => linesRef.current[index] = el}
          d={pathData.d}
          stroke={`url(#lineGradient${pathData.gradient === 'primary' ? '1' : '2'}-${theme})`}
          strokeWidth={pathData.strokeWidth}
          fill="none"
          className="drop-shadow-sm"
        />
      ))}
    </svg>
  );
};

export default AnimatedLines;
