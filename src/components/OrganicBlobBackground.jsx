import MetaBalls from './MetaBalls';

const OrganicBlobs = ({ 
  className = "",
  // MetaBalls configuration props
  color = "#2a2a2a",
  glowColor = "#00ff41",
  glowIntensity = 2.5,
  morphStrength = 2.0,
  ballCount = 10,
  speed = 0.4,
  cursorBallSize = 4,
  enableTransparency = true,
  enableMouseInteraction = true,
  hoverSmoothness = 0.05,
  animationSize = 30,
  clumpFactor = 1
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
