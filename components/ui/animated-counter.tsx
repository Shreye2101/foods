"use client"

import { useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}
