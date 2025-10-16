import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// Constants
const BLOB_CONFIG = {
  count: 3,
  minSize: 80,
  maxSize: 140,
  numPoints: 8,
  morphIntensity: 15,
  rotationSpeed: 0.008,
  movementSpeed: 0.02,
  animationDuration: { min: 15, max: 25 },
  colors: {
    fill: '#2d3541',
    stroke: 'rgba(132, 255, 71, 0.8)',
    glow: '#84ff47',
  },
  style: {
    lineWidth: 3,
    shadowBlur: 20,
  },
}

// Blob Class - Handles individual blob logic
class Blob {
  constructor(x, y, size) {
    this.x = x
    this.y = y
    this.targetX = x
    this.targetY = y
    this.size = size
    this.rotation = Math.random() * Math.PI * 2
    this.rotationSpeed = (Math.random() - 0.5) * BLOB_CONFIG.rotationSpeed
    this.time = Math.random() * 100
    this.points = this.initializePoints()
  }

  initializePoints() {
    const points = []
    for (let i = 0; i < BLOB_CONFIG.numPoints; i++) {
      points.push({
        angle: (Math.PI * 2 * i) / BLOB_CONFIG.numPoints,
        radius: this.size,
        offset: Math.random() * BLOB_CONFIG.morphIntensity,
      })
    }
    return points
  }

  update(deltaTime) {
    this.time += deltaTime * 0.001
    this.rotation += this.rotationSpeed

    // Smooth movement towards target position
    this.x += (this.targetX - this.x) * BLOB_CONFIG.movementSpeed
    this.y += (this.targetY - this.y) * BLOB_CONFIG.movementSpeed

    // Update points for organic morphing
    this.points.forEach((point, i) => {
      point.offset = Math.sin(this.time + i) * BLOB_CONFIG.morphIntensity
    })
  }

  draw(ctx) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.rotation)

    this.drawBlobShape(ctx)
    this.drawGlowingEdge(ctx)

    ctx.restore()
  }

  drawBlobShape(ctx) {
    this.createBlobPath(ctx)
    ctx.fillStyle = BLOB_CONFIG.colors.fill
    ctx.fill()
  }

  drawGlowingEdge(ctx) {
    this.createBlobPath(ctx)
    ctx.strokeStyle = BLOB_CONFIG.colors.stroke
    ctx.lineWidth = BLOB_CONFIG.style.lineWidth
    ctx.shadowBlur = BLOB_CONFIG.style.shadowBlur
    ctx.shadowColor = BLOB_CONFIG.colors.glow
    ctx.stroke()
  }

  createBlobPath(ctx) {
    ctx.beginPath()

    for (let i = 0; i < BLOB_CONFIG.numPoints; i++) {
      const point = this.points[i]
      const nextPoint = this.points[(i + 1) % BLOB_CONFIG.numPoints]

      const radius = point.radius + point.offset
      const nextRadius = nextPoint.radius + nextPoint.offset

      const x = Math.cos(point.angle) * radius
      const y = Math.sin(point.angle) * radius
      const nextX = Math.cos(nextPoint.angle) * nextRadius
      const nextY = Math.sin(nextPoint.angle) * nextRadius

      if (i === 0) {
        ctx.moveTo(x, y)
      }

      // Control points for smooth curves
      const cpX = (x + nextX) / 2 + Math.sin(this.time + i) * 10
      const cpY = (y + nextY) / 2 + Math.cos(this.time + i) * 10

      ctx.quadraticCurveTo(cpX, cpY, nextX, nextY)
    }

    ctx.closePath()
  }
}

// Main Component
const CanvasBlobs = () => {
  const canvasRef = useRef(null)
  const blobsRef = useRef([])
  const animationFrameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    // Canvas setup
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Create blobs
    blobsRef.current = createBlobs(canvas)

    // Animate blob positions with GSAP
    animateBlobPositions(canvas)

    // Start render loop
    const stopAnimation = startAnimationLoop(ctx, canvas)

    // Handle window resize
    const handleResize = () => setCanvasSize()
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      stopAnimation()
      blobsRef.current.forEach((blob) => gsap.killTweensOf(blob))
    }
  }, [])

  // Helper function to create blobs
  const createBlobs = (canvas) => {
    const blobs = []
    for (let i = 0; i < BLOB_CONFIG.count; i++) {
      const size = BLOB_CONFIG.minSize + Math.random() * (BLOB_CONFIG.maxSize - BLOB_CONFIG.minSize)
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      blobs.push(new Blob(x, y, size))
    }
    return blobs
  }

  // Helper function to animate blob positions
  const animateBlobPositions = (canvas) => {
    blobsRef.current.forEach((blob, index) => {
      setTimeout(() => {
        const timeline = gsap.timeline({ repeat: -1 })

        for (let i = 0; i < 6; i++) {
          timeline.to(blob, {
            targetX: Math.random() * canvas.width,
            targetY: Math.random() * canvas.height,
            duration:
              BLOB_CONFIG.animationDuration.min +
              Math.random() * (BLOB_CONFIG.animationDuration.max - BLOB_CONFIG.animationDuration.min),
            ease: 'sine.inOut',
          })
        }
      }, index * 1000)
    })
  }

  // Helper function to start animation loop
  const startAnimationLoop = (ctx, canvas) => {
    let lastTime = 0

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      blobsRef.current.forEach((blob) => {
        blob.update(deltaTime)
        blob.draw(ctx)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate(0)

    // Return cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  )
}

export default CanvasBlobs
