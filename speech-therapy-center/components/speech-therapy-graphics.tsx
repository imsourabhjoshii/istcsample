"use client"

import { useEffect, useRef } from "react"

interface SpeechWaveProps {
  color?: string
  height?: number
  width?: number
  className?: string
}

export function SpeechWave({ color = "#3b82f6", height = 100, width = 200, className = "" }: SpeechWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let phase = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2)

      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin(x * 0.05 + phase) * 20 + canvas.height / 2
        ctx.lineTo(x, y)
      }

      ctx.strokeStyle = color
      ctx.lineWidth = 2
      ctx.stroke()

      phase += 0.05
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [color])

  return <canvas ref={canvasRef} height={height} width={width} className={className} />
}

interface VoiceVisualizerProps {
  color?: string
  height?: number
  width?: number
  className?: string
}

export function VoiceVisualizer({
  color = "#3b82f6",
  height = 100,
  width = 200,
  className = "",
}: VoiceVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const barCount = 20
    const barWidth = width / barCount
    const bars: number[] = []

    // Initialize bars
    for (let i = 0; i < barCount; i++) {
      bars[i] = Math.random() * 50
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update bars
      for (let i = 0; i < barCount; i++) {
        const targetHeight = Math.random() * 50 + 10
        bars[i] = bars[i] * 0.9 + targetHeight * 0.1

        ctx.fillStyle = color
        ctx.fillRect(i * barWidth, canvas.height - bars[i], barWidth - 2, bars[i])
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, width])

  return <canvas ref={canvasRef} height={height} width={width} className={className} />
}

interface BrainActivityProps {
  color?: string
  height?: number
  width?: number
  className?: string
}

export function BrainActivity({ color = "#3b82f6", height = 100, width = 200, className = "" }: BrainActivityProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const points: { x: number; y: number; vx: number; vy: number; connections: number[] }[] = []

    // Create random points
    for (let i = 0; i < 20; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points
      points.forEach((point, i) => {
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        // Draw point
        ctx.beginPath()
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        // Find and draw connections
        point.connections = []
        points.forEach((otherPoint, j) => {
          if (i === j) return

          const dx = point.x - otherPoint.x
          const dy = point.y - otherPoint.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 50) {
            point.connections.push(j)

            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            ctx.strokeStyle = `${color}${Math.floor((1 - distance / 50) * 255)
              .toString(16)
              .padStart(2, "0")}`
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, width, height])

  return <canvas ref={canvasRef} height={height} width={width} className={className} />
}

