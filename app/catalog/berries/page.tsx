import { MainLayout } from "@/components/layout/main-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { HorizontalScroll } from "@/components/ui/horizontal-scroll"
import { ProductCard } from "@/components/ui/product-card"

const berriesProducts = [
  {
    id: "dried-cranberry",
    name: "Dried Cranberry",
    description: "Sweet and tart dried cranberries, perfect for snacks, baking, and cereals.",
    varieties: ["Whole", "Sliced", "Sweetened", "Unsweetened"], // Inferred varieties
    benefits: ["Rich in Antioxidants", "Urinary Tract Health", "High in Fiber"], // Inferred benefits
    moq: "11.34kg",
    rating: 4.7, // Inferred rating
    // price: "From $9.50/kg", // Inferred price
    category: "berries",
    image: "/images/products/cannberries.jpg",
    origin: "USA, Canada",
    type: ["Whole", "Sliced"],
    packing: "11.34 Kg carton",
  },
  {
    id: "dried-blueberry",
    name: "Dried Blueberry",
    description: "Plump and flavorful dried blueberries, packed with natural goodness.",
    varieties: ["Sweetened", "Unsweetened", "Organic"], // Inferred varieties
    benefits: ["Antioxidant Powerhouse", "Brain Health", "Eye Health"], // Inferred benefits
    moq: "1kg pouch in 10kg box",
    rating: 4.8, // Inferred rating
    // price: "From $12.00/kg", // Inferred price
    category: "berries",
    image: "/images/products/blueberries.jpg",
    origin: "USA, Canada, China",
    packing: "1 Kg pouch in 10kg box",
  },
  {
    id: "turkish-apricot",
    name: "Turkish Apricot",
    description: "Sun-dried Turkish apricots, naturally sweet and chewy, ideal for snacking and cooking.",
    varieties: ["Size 0,1, 2,3"], // Inferred varieties
    benefits: ["Rich in Vitamin A", "High in Fiber", "Potassium Source"], // Inferred benefits
    moq: "12.5kg",
    rating: 4.6, // Inferred rating
    // price: "From $6.50/kg", // Inferred price
    category: "dried-fruits",
    image: "/images/products/turkish-apricots.jpg",
    origin: "Turkey",
    size: ["Size 0,1", "2,3"],
    packing: "12.5 Kg carton box",
  },
  {
    id: "dried-prunes",
    name: "Dried Prunes",
    description: "Sweet and succulent dried prunes, known for their digestive benefits.",
    varieties: ["30/40", "40/50", "50/60"], // Inferred varieties
    benefits: ["Digestive Health", "High in Fiber", "Bone Health"], // Inferred benefits
    moq: "11.34kg",
    rating: 4.7, // Inferred rating
    // price: "From $5.80/kg", // Inferred price
    category: "dried-fruits",
    image: "/images/products/prunes.jpg",
    origin: "USA, Chile, Argentina",
    size: ["30/40", "40/50", "50/60"],
    packing: "11.34 Kg, 12.5 Kg box",
  },
  {
    id: "dried-mango",
    name: "Dried Mango",
    description: "Chewy and naturally sweet dried mango pieces, a tropical delight.",
    varieties: ["Low sugar", "High sugar", "Diced", "Sliced", "Cube"], // Inferred varieties
    benefits: ["Rich in Vitamin C", "Good for Digestion", "Immune Support"], // Inferred benefits
    moq: "1kg pouch in 10kg box",
    rating: 4.8, // Inferred rating
    // price: "From $8.00/kg", // Inferred price
    category: "dried-fruits",
    image: "/images/products/dried-mango.avif",
    origin: "India, Thailand",
    type: ["Low sugar", "High sugar"],
    shape: ["Diced", "sliced", "cube"],
    packing: "1 Kg pouch in 10kg box",
  },
  {
    id: "dried-kiwi",
    name: "Dried Kiwi",
    description: "Vibrant green dried kiwi slices, offering a tangy and sweet flavor.",
    varieties: ["Sliced", "Diced", "Sweetened"], // Inferred varieties
    benefits: ["High in Vitamin C", "Fiber Rich", "Antioxidants"], // Inferred benefits
    moq: "1kg pouch in 10kg box",
    rating: 4.7, // Inferred rating
    // price: "From $9.00/kg", // Inferred price
    category: "dried-fruits",
    image: "/images/products/dried-kiwi.jpg",
    origin: "Thailand, India, China",
    shape: ["Sliced", "Diced"],
    packing: "1 Kg pouch in 10kg box",
  },
  {
    id: "dried-papaya",
    name: "Dried Papaya",
    description: "Sweet and tender dried papaya pieces, a delightful tropical snack.",
    varieties: ["Low sugar", "High sugar", "Diced", "Sliced"], // Inferred varieties
    benefits: ["Digestive Enzymes", "Vitamin C Source", "Antioxidant Support"], // Inferred benefits
    moq: "1kg pouch in 10kg box",
    rating: 4.5, // Inferred rating
    // price: "From $7.00/kg", // Inferred price
    category: "dried-fruits",
    image: "/images/products/dried-papaya.avif",
    origin: "India, Thailand",
    shape: ["Diced", "Sliced"],
    type: ["Low sugar", "High sugar"],
    packing: "1 Kg pouch in 10kg box",
  },
  {
    id: "dried-pineapple",
    name: "Dried Pineapple",
    description: "Chewy and tangy dried pineapple rings, a sweet and tropical treat.",
    varieties: ["Sliced", "Coin", "Low sugar", "High sugar"], // Inferred varieties
    benefits: ["Rich in Vitamin C", "Bromelain Source", "Digestive Aid"], // Inferred benefits
    moq: "1kg pouch in 10kg box",
    rating: 4.6, // Inferred rating
    // price: "From $7.50/kg", // Inferred price
    category: "dried-fruits",
    image: "/images/products/dried-pineapple.webp",
    origin: "India, Thailand",
    shape: ["Sliced", "Coin"],
    type: ["Low sugar", "High sugar"],
    packing: "1 Kg pouch in 10kg box",
  },
];

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
