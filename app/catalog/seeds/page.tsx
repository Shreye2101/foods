import { MainLayout } from "@/components/layout/main-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { HorizontalScroll } from "@/components/ui/horizontal-scroll"
import { ProductCard } from "@/components/ui/product-card"

const seedsProducts = [
  {
    id: "pumpkin-seeds",
    name: "Pumpkin Seeds",
    description: "Nutritious pumpkin seeds with delicious nutty flavor and crunch",
    varieties: ["Raw", "Roasted", "Salted", "Organic"],
    benefits: ["Magnesium Rich", "Heart Healthy", "Immune Support"],
    moq: "50kg",
    rating: 4.7,
    price: "From $6.80/kg",
    category: "seeds",
    image: "/images/products/pumpkin-seeds.jpg",
  },
  {
    id: "mixed-seeds",
    name: "Mixed Seeds Blend",
    description: "Premium blend of various seeds including pumpkin, sunflower, flax, and chia seeds",
    varieties: ["Raw Mix", "Roasted Mix", "Organic Mix", "Custom Blend"],
    benefits: ["Complete Nutrition", "Omega-3 Rich", "High Protein"],
    moq: "25kg",
    rating: 4.8,
    price: "From $7.50/kg",
    category: "seeds",
    image: "/images/products/mixed-seeds.jpg",
  },
  {
    id: "chia-seeds",
    name: "Chia Seeds",
    description: "Superfood seeds packed with omega-3, fiber, and complete protein",
    varieties: ["Black", "White", "Organic", "Conventional"],
    benefits: ["Omega-3 Rich", "High Fiber", "Complete Protein"],
    moq: "25kg",
    rating: 4.9,
    price: "From $7.20/kg",
    category: "seeds",
  },
  {
    id: "flax-seeds",
    name: "Flax Seeds",
    description: "Golden and brown flax seeds rich in lignans and omega-3 fatty acids",
    varieties: ["Golden", "Brown", "Ground", "Organic"],
    benefits: ["Omega-3 ALA", "Lignans", "Digestive Health"],
    moq: "25kg",
    rating: 4.8,
    price: "From $5.40/kg",
    category: "seeds",
  },
  {
    id: "sunflower-seeds",
    name: "Sunflower Seeds",
    description: "Premium sunflower seeds perfect for snacking and food manufacturing",
    varieties: ["Raw", "Roasted", "Salted", "Kernels"],
    benefits: ["Vitamin E Rich", "Healthy Fats", "Antioxidants"],
    moq: "50kg",
    rating: 4.6,
    price: "From $4.20/kg",
    category: "seeds",
  },
  {
    id: "sesame-seeds",
    name: "Sesame Seeds",
    description: "High-quality sesame seeds with rich flavor and nutritional benefits",
    varieties: ["White", "Black", "Hulled", "Organic"],
    benefits: ["Calcium Rich", "Healthy Oils", "Protein Source"],
    moq: "25kg",
    rating: 4.5,
    price: "From $3.90/kg",
    category: "seeds",
  },
]

export default function SeedsPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nutritious Seeds Collection</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Explore our premium selection of seeds, perfect for health food products, baking ingredients, and
              nutritious snacking options for your B2B needs.
            </p>
          </div>

          {/* Horizontal Scroll Products */}
          <div className="mb-12">
            <HorizontalScroll>
              {seedsProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </HorizontalScroll>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Looking for Organic Certifications?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Many of our seeds are available with organic, non-GMO, and other specialty certifications to meet your
              specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#093257] hover:bg-[#0a4a73] text-white font-medium">
                <Link href="/pricing">Request Certified Products</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <Link href="/contact">Speak with Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
