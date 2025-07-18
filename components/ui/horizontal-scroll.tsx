"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
  showControls?: boolean
}

export function HorizontalScroll({ children, className, showControls = true }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScrollability()
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollability)
      return () => scrollElement.removeEventListener("scroll", checkScrollability)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320 // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative group">
      {showControls && (
        <>
          {/* Mobile Navigation Buttons - Always Visible */}
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm shadow-lg border-gray-200 hover:bg-gray-50 hover:scale-110 transition-all duration-300",
              "w-12 h-12 md:w-10 md:h-10", // Larger on mobile
              "md:opacity-0 md:group-hover:opacity-100", // Hidden on desktop unless hover
              !canScrollLeft && "opacity-50 cursor-not-allowed",
            )}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-5 h-5 md:w-4 md:h-4 text-gray-600" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm shadow-lg border-gray-200 hover:bg-gray-50 hover:scale-110 transition-all duration-300",
              "w-12 h-12 md:w-10 md:h-10", // Larger on mobile
              "md:opacity-0 md:group-hover:opacity-100", // Hidden on desktop unless hover
              !canScrollRight && "opacity-50 cursor-not-allowed",
            )}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-5 h-5 md:w-4 md:h-4 text-gray-600" />
          </Button>
        </>
      )}
      <div
        ref={scrollRef}
        className={cn(
          "flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-6 px-4",
          "[-webkit-overflow-scrolling:touch]",
          className,
        )}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children}
      </div>
    </div>
  )
}
