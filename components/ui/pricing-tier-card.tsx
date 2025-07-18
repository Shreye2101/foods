"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { QuoteModal } from "./quote-modal"
import { cn } from "@/lib/utils"

interface PricingTierCardProps {
  tier: {
    name: string
    minOrder: string
    discount: string
    features: string[]
    popular?: boolean
    color: string
  }
}

export function PricingTierCard({ tier }: PricingTierCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className={cn("relative transition-all duration-300", tier.color, isExpanded && "shadow-lg")}>
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-[#93e33d] text-[#093257] px-4 py-1 font-semibold">Most Popular</Badge>
        </div>
      )}

      <CardContent className="p-0">
        {/* Collapsed Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 text-left hover:bg-gray-50/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Minimum Order</p>
                <p className="text-lg font-semibold text-gray-900">{tier.minOrder}</p>
                <p className="text-base font-semibold text-[#93e33d]">Save {tier.discount}</p>
              </div>
            </div>
            <div className="ml-4">
              {isExpanded ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </div>
          </div>
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="px-6 pb-6 border-t border-gray-100">
            <div className="pt-4 space-y-3">
              <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
              {tier.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}

              <div className="pt-4">
                <QuoteModal>
                  <Button className="w-full bg-[#093257] hover:bg-[#0a4a73] text-white font-medium">
                    Get Quote for {tier.name}
                  </Button>
                </QuoteModal>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
