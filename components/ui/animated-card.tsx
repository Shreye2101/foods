"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type React from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
  variant?: "slide" | "fade" | "scale" | "bounce"
}

export function AnimatedCard({ children, delay = 0, className = "", variant = "slide" }: AnimatedCardProps) {
  const variants = {
    slide: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    bounce: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants[variant]}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">{children}</Card>
    </motion.div>
  )
}
