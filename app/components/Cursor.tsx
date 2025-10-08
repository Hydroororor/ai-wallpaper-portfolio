'use client'

import { useEffect, useState } from 'react'

export default function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [trails, setTrails] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      
      // Add trail effect
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      }
      
      setTrails(prev => [...prev.slice(-10), newTrail])
      
      // Remove old trails
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id))
      }, 1000)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('cursor-pointer')) {
        document.body.style.cursor = 'none'
      }
    }

    const handleMouseLeave = () => {
      document.body.style.cursor = 'auto'
    }

    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      <div
        className="cursor"
        style={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
      />
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 2,
            top: trail.y - 2,
            opacity: (index + 1) / trails.length,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </>
  )
}
