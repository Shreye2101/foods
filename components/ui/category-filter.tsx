"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  className?: string
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange, className }: CategoryFilterProps) {
  return (
    <div className={cn("flex gap-3 overflow-x-auto scrollbar-hide pb-2", className)}>
      {categories.map((category, index) => (
        <motion.button
          key={index}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300",
            activeCategory === category
              ? "bg-[#093257] text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200",
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}
