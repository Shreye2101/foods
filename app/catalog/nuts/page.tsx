import { MainLayout } from "@/components/layout/main-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { HorizontalScroll } from "@/components/ui/horizontal-scroll"
import { ProductCard } from "@/components/ui/product-card"

const nutsProducts = [
  {
    id: "almond",
    name: "Premium Almonds",
    description: "California-grown almonds with exceptional taste and nutritional value",
    varieties: ["Raw", "Roasted", "Blanched", "Sliced", "Organic"],
    benefits: ["High in Vitamin E", "Heart Healthy", "Rich in Protein"],
    moq: "100kg",
    rating: 4.8,
    price: "From $8.50/kg",
    category: "nuts",
    image: "/images/products/almonds.jpg",
  },
  {
    id: "almonds-bowl",
    name: "Natural Almonds",
    description: "Premium natural almonds in their brown skins, perfect for processing and manufacturing",
    varieties: ["Natural", "Blanched", "Sliced", "Slivered", "Organic"],
    benefits: ["Protein Rich", "Heart Healthy", "Vitamin E Source"],
    moq: "100kg",
    rating: 4.9,
    price: "From $9.20/kg",
    category: "nuts",
    image: "/images/products/almonds-bowl.jpg",
  },
  {
    id: "cashew",
    name: "Premium Cashews",
    description: "Creamy, buttery cashews sourced from premium farms worldwide",
    varieties: ["Raw", "Roasted", "Salted", "Pieces", "Organic"],
    benefits: ["Rich in Minerals", "Heart Healthy", "Good Fats"],
    moq: "100kg",
    rating: 4.9,
    price: "From $12.20/kg",
    category: "nuts",
    image: "/images/products/cashews-dynamic.webp",
  },
  {
    id: "pistachio",
    name: "Premium Pistachios",
    description: "Premium pistachios with distinctive flavor and satisfying crunch",
    varieties: ["Roasted", "Raw", "Salted", "Kernels", "Organic"],
    benefits: ["Protein Rich", "Healthy Fats", "Antioxidants"],
    moq: "100kg",
    rating: 4.9,
    price: "From $15.40/kg",
    category: "nuts",
    image: "/images/products/pistachios-bowl.webp",
  },
  {
    id: "dates-premium",
    name: "Premium Medjool Dates",
    description: "Premium Medjool dates, naturally sweet and nutritious with exceptional quality",
    varieties: ["Medjool", "Deglet Noor", "Zahidi", "Pitted", "Organic"],
    benefits: ["Natural Sweetener", "High Fiber", "Potassium Rich"],
    moq: "50kg",
    rating: 4.8,
    price: "From $6.90/kg",
    category: "nuts",
    image: "/images/products/dates-premium.webp",
  },
  {
    id: "dates-elegant",
    name: "Elegant Dates",
    description: "Beautifully presented dates perfect for premium packaging and retail",
    varieties: ["Medjool", "Deglet Noor", "Premium Grade", "Gift Packaging"],
    benefits: ["Natural Energy", "Fiber Rich", "Antioxidants"],
    moq: "50kg",
    rating: 4.7,
    price: "From $7.50/kg",
    category: "nuts",
    image: "/images/products/dates-elegant.jpg",
  },
  {
    id: "walnut",
    name: "Premium Walnuts",
    description: "Premium walnuts rich in omega-3 fatty acids and brain-boosting nutrients",
    varieties: ["Halves", "Pieces", "Light", "Organic"],
    benefits: ["Omega-3 Rich", "Brain Health", "Heart Healthy"],
    moq: "100kg",
    rating: 4.8,
    price: "From $11.60/kg",
    category: "nuts",
  },
]

export default function NutsPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Nuts Collection</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Discover our extensive range of premium nuts, carefully sourced and processed to meet the highest quality
              standards for B2B clients worldwide.
            </p>
          </div>

          {/* Horizontal Scroll Products */}
          <div className="mb-12">
            <HorizontalScroll>
              {nutsProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </HorizontalScroll>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Custom Packaging or Specifications?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer custom packaging, private labeling, and specific processing requirements for bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#093257] hover:bg-[#0a4a73] text-white font-medium">
                <Link href="/pricing">Get Custom Quote</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <Link href="/contact">Contact Specialist</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
