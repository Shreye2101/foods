import { MainLayout } from "@/components/layout/main-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { HorizontalScroll } from "@/components/ui/horizontal-scroll"
import { ProductCard } from "@/components/ui/product-card"

const berriesProducts = [
  {
    id: "dried-berries-mix",
    name: "Mixed Dried Berries",
    description: "Premium blend of dried cranberries, blueberries, and other antioxidant-rich berries",
    varieties: ["Mixed Berry", "Cranberry Blend", "Antioxidant Mix", "Organic"],
    benefits: ["Antioxidant Rich", "Natural Sweetness", "Immune Support"],
    moq: "25kg",
    rating: 4.8,
    price: "From $11.90/kg",
    category: "berries",
    image: "/images/products/dried-berries.jpg",
  },
  {
    id: "dried-blueberries",
    name: "Dried Blueberries",
    description: "Premium dried blueberries bursting with natural sweetness and antioxidants",
    varieties: ["Sweetened", "Unsweetened", "Freeze Dried", "Organic"],
    benefits: ["Antioxidant Powerhouse", "Brain Health", "Natural Sweetness"],
    moq: "25kg",
    rating: 4.9,
    price: "From $12.40/kg",
    category: "berries",
    image: "/images/products/blueberries.jpg",
  },
  {
    id: "dried-kiwi",
    name: "Dried Kiwi Slices",
    description: "Sweet and tangy dried kiwi slices with vibrant color and tropical flavor",
    varieties: ["Natural", "Sweetened", "Freeze Dried", "Organic"],
    benefits: ["Vitamin C Rich", "Digestive Health", "Natural Enzymes"],
    moq: "25kg",
    rating: 4.6,
    price: "From $16.80/kg",
    category: "berries",
    image: "/images/products/dried-kiwi.jpg",
  },
  {
    id: "dried-cranberries",
    name: "Dried Cranberries",
    description: "Sweet-tart dried cranberries perfect for baking, snacking, and food manufacturing",
    varieties: ["Sweetened", "Unsweetened", "Organic", "Juice Infused"],
    benefits: ["Antioxidant Rich", "Urinary Health", "Natural Flavor"],
    moq: "50kg",
    rating: 4.8,
    price: "From $8.90/kg",
    category: "berries",
  },
  {
    id: "goji-berries",
    name: "Goji Berries",
    description: "Superfood goji berries with exceptional nutritional profile and antioxidants",
    varieties: ["Tibetan", "Ningxia", "Organic", "Premium Grade"],
    benefits: ["Superfood Status", "Immune Support", "Anti-Aging"],
    moq: "25kg",
    rating: 4.7,
    price: "From $18.50/kg",
    category: "berries",
  },
  {
    id: "dried-strawberries",
    name: "Dried Strawberries",
    description: "Sweet dried strawberries with concentrated flavor and vibrant color",
    varieties: ["Sliced", "Whole", "Freeze Dried", "Organic"],
    benefits: ["Vitamin C", "Natural Sweetness", "Versatile Use"],
    moq: "25kg",
    rating: 4.5,
    price: "From $14.20/kg",
    category: "berries",
  },
]

export default function BerriesPage() {
  return (
    <MainLayout>
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4 hover:bg-gray-100 transition-colors">
              <Link href="/catalog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Catalog
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Dried Berries</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Discover our exceptional range of dried and freeze-dried berries, perfect for snack mixes, baking
              ingredients, and health food applications.
            </p>
          </div>

          {/* Horizontal Scroll Products */}
          <div className="mb-12">
            <HorizontalScroll>
              {berriesProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </HorizontalScroll>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interested in Freeze-Dried Options?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer advanced freeze-drying technology to preserve maximum nutrition and flavor in our berry products
              for premium applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#093257] hover:bg-[#0a4a73] text-white font-medium">
                <Link href="/pricing">Explore Freeze-Dried</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <Link href="/contact">Technical Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
