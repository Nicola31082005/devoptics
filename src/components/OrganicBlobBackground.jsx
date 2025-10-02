import MetaBalls from './MetaBalls';

const OrganicBlobs = ({ 
  className = "",
  // Professional MetaBalls configuration for business automation
  color = "#1a1a1a",  // Deep black
  glowColor = "#404040",  // Subtle gray glow
  glowIntensity = 2.0,  // Elegant glow
  morphStrength = 1.5,  // Gentle morphing for smooth peach-like shapes
  ballCount = 8,  // Balanced count for performance
  speed = 0.35,
  cursorBallSize = 5,  // Larger cursor interaction
  enableTransparency = true,
  enableMouseInteraction = true,
  hoverSmoothness = 0.08,
  animationSize = 28,
  clumpFactor = 0.8  // Slightly tighter for more interaction
}) => {
  return (
    <MetaBalls 
      className={className}
      color={color}
      glowColor={glowColor}
      glowIntensity={glowIntensity}
      morphStrength={morphStrength}
      ballCount={ballCount}
      speed={speed}
      cursorBallSize={cursorBallSize}
      enableTransparency={enableTransparency}
      enableMouseInteraction={enableMouseInteraction}
      hoverSmoothness={hoverSmoothness}
      animationSize={animationSize}
      clumpFactor={clumpFactor}
    />
  );
};

export default OrganicBlobs;
