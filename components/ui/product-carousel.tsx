"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ProductCarouselProps {
  children: React.ReactNode[]
  className?: string
}

export function ProductCarousel({ children, className }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

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

  const goToSlide = (index: number) => {
    if (scrollRef.current) {
      const scrollAmount = 320 * index
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  return (
    <div className={cn("relative group", className)}>
      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm shadow-lg border-gray-200 hover:bg-gray-50 hover:scale-110 transition-all duration-300",
          "w-12 h-12 md:w-10 md:h-10",
          "md:opacity-0 md:group-hover:opacity-100",
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
          "w-12 h-12 md:w-10 md:h-10",
          "md:opacity-0 md:group-hover:opacity-100",
          !canScrollRight && "opacity-50 cursor-not-allowed",
        )}
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
      >
        <ChevronRight className="w-5 h-5 md:w-4 md:h-4 text-gray-600" />
      </Button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-6 px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children.map((child, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 snap-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {child}
          </motion.div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(children.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === Math.floor(currentIndex / 3) ? "bg-[#093257] w-6" : "bg-gray-300 hover:bg-gray-400",
            )}
          />
        ))}
      </div>
    </div>
  )
}
