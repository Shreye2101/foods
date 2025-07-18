"use client"

import { motion } from "framer-motion"
import { Nut, Sprout, Cherry } from "lucide-react"

export function FloatingElements() {
  // Skip rendering on the server to prevent `window is not defined` errors
  if (typeof window === "undefined") return null

  const elements = [
    { Icon: Nut, color: "text-orange-400", size: "w-6 h-6" },
    { Icon: Sprout, color: "text-green-400", size: "w-5 h-5" },
    { Icon: Cherry, color: "text-red-400", size: "w-4 h-4" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color} opacity-20`}
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 0),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 0),
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <element.Icon className={element.size} />
        </motion.div>
      ))}
    </div>
  )
}
