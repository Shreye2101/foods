"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  icon?: React.ReactNode
}

export function AccordionSection({ title, children, defaultOpen = false, icon }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-[#093257]">{icon}</div>}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <ChevronDown
          className={cn("w-5 h-5 text-gray-500 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">{children}</div>
      </div>
    </div>
  )
}
