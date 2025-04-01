"use client"

import { useState, useEffect } from "react"

export function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(0)

  useEffect(() => {
    // Check if this is a new visit
    const lastVisit = localStorage.getItem("lastVisit")
    const today = new Date().toDateString()

    // Get current count from localStorage or start at a base number
    let count = Number.parseInt(localStorage.getItem("visitorCount") || "1000", 10)

    if (!lastVisit || lastVisit !== today) {
      // Increment count for new visit or new day
      count += 1
      localStorage.setItem("visitorCount", count.toString())
      localStorage.setItem("lastVisit", today)
    }

    setVisitorCount(count)
  }, [])

  return (
    <div className="text-sm text-muted-foreground">
      <span className="font-semibold">{visitorCount.toLocaleString()}</span> visitors
    </div>
  )
}

