"use client"

import { useState } from "react"
import { Star, StarHalf } from "lucide-react"

interface GoogleRatingProps {
  className?: string
}

export function GoogleRating({ className = "" }: GoogleRatingProps) {
  const [rating, setRating] = useState(4.8)
  const [reviewCount, setReviewCount] = useState(256)

  // In a real implementation, you would fetch this data from Google's API
  // For now, we're using static data

  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-1">
        <span className="font-bold text-lg">{rating}</span>
        <div className="flex">
          {[...Array(fullStars)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          {hasHalfStar && <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />}
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{reviewCount} Google reviews</p>
    </div>
  )
}

