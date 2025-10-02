import MetaBalls from './MetaBalls';

const OrganicBlobs = ({ 
  className = "",
  // Optimized parameters for multiple smaller, separate blobs
  color = "#1a1a1a",
  glowColor = "#00ff41",
  glowIntensity = 1.5,
  morphStrength = 0.8,
  ballCount = 4,  // 4 separate blob objects
  speed = 0.3,
  cursorBallSize = 4,
  enableTransparency = true,
  enableMouseInteraction = true,
  hoverSmoothness = 0.06,
  animationSize = 25,  // Smaller overall scale
  clumpFactor = 2.5    // Much more spread out for separation
}) => {
  return (
    <MetaBalls 
      className={`${className}`}
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
