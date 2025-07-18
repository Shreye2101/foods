"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface TimelineItem {
  name: string
  date: string
  category: string
  description?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  }

  return (
    <motion.div
      className={`relative ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 w-0.5 bg-gray-200 h-full">
        <motion.div className="w-full bg-gradient-to-b from-[#093257] to-[#93e33d]" variants={lineVariants} />
      </div>

      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div key={index} className="relative flex items-start gap-6" variants={itemVariants}>
            {/* Timeline Dot */}
            <motion.div
              className="relative z-10 w-12 h-12 bg-gradient-to-r from-[#093257] to-[#0a4a73] rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Calendar className="w-6 h-6 text-white" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                </div>
                {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
