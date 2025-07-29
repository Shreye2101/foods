"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    varieties: string[]
    benefits?: string[]
    moq: string
    rating: number
    price: string
    category: string // Ensure category is always present
    image?: string
  }
  className?: string
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  // Determine the base path for the product detail page based on its category
  let productDetailBasePath = "";
  if (product.category === "seeds") {
    productDetailBasePath = "/catalog/seeds";
  } else if (product.category === "berries" || product.category === "dried-fruits") {
    productDetailBasePath = "/catalog/berries";
  } else {
    // Default for nuts, dry-fruits, dates (all go to the nuts detail page)
    productDetailBasePath = "/catalog/nuts";
  }

  return (
    <Card
      className={`flex-shrink-0 w-80 hover:shadow-xl transition-all duration-300 border-0 shadow-md snap-start group hover:scale-[1.02] overflow-hidden ${className}`}
    >
      <CardContent className="p-0 bg-gradient-to-br from-white to-gray-50 rounded-xl">
        {/* Image Section */}
        {product.image && (
          <div className="relative h-48 w-full">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              sizes="320px"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/320x192/E0E0E0/616161?text=Image+Not+Found"; // Fallback image
              }}
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-700 font-medium">{product.rating}</span>
            </div>
          </div>
        )}

        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#093257] transition-colors">
                {product.name}
              </h3>
              {!product.image && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
                </div>
              )}
            </div>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
            {/* <div className="text-lg font-semibold text-[#093257] mb-3">{product.price}</div> */}
          </div>

          {/* Varieties */}
          <div className="mb-4">
            <h4 className="font-medium text-gray-800 mb-2 text-sm">Available Varieties:</h4>
            <div className="flex flex-wrap gap-2">
              {product.varieties.slice(0, 3).map((variety) => (
                <Badge key={variety} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                  {variety}
                </Badge>
              ))}
              {product.varieties.length > 3 && (
                <Badge variant="outline" className="text-xs border-gray-300">
                  +{product.varieties.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Benefits */}
          {product.benefits && (
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2 text-sm">Key Benefits:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {product.benefits.slice(0, 2).map((benefit) => (
                  <li key={benefit} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#93e33d] rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <span className="text-xs text-gray-500">MOQ: </span>
              <span className="font-medium text-gray-800 text-sm">{product.moq}</span>
            </div>
            <Button
              asChild
              size="sm"
              className="bg-[#093257] hover:bg-[#0a4a73] text-white font-medium hover:scale-105 transition-all"
            >
              <Link href={`${productDetailBasePath}/${product.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
