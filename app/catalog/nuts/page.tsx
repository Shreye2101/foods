import { MainLayout } from "@/components/layout/main-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { HorizontalScroll } from "@/components/ui/horizontal-scroll"
import { ProductCard } from "@/components/ui/product-card"

const nutsProducts = [
  {
    id: "green-raisin-kishmish",
    name: "Green Raisin/Kishmish",
    description: "Sweet and tangy green raisins, perfect for snacking and baking.",
    varieties: ["Long", "Capsule", "Round", "Premium", "Normal"],
    benefits: ["Good Source of Energy", "Rich in Antioxidants", "Aids Digestion"],
    moq: "10Kg",
    rating: 4.7,
    price: "From $3.50/kg", // Inferred price
    category: "dry-fruits",
    image: "/images/products/green-raisin.avif",
    origin: "India, Afghanistan",
    grading: "Premium, normal",
    size: ["Long", "medium", "regular"],
    packing: ["10Kg", "15 Kg", "20 Kg"],
  },
  {
    id: "anjeer-fig",
    name: "Anjeer/Fig",
    description: "Naturally sweet and chewy figs, a healthy addition to your diet.",
    varieties: ["Jumbo", "medium", "regular"],
    benefits: ["High in Fiber", "Rich in Minerals", "Supports Bone Health"],
    moq: "10Kg",
    rating: 4.6,
    price: "From $8.00/kg", // Inferred price
    category: "dry-fruits",
    image: "/images/products/anjeer-fig.jpg",
    origin: "Afghanistan, Turkey",
    colour: ["Snow white", "white", "golden", "brown"],
    packing: ["10 Kg", "20 Kg"],
  },
  {
    id: "almond-badam",
    name: "Almond/Badam",
    description: "Nutritious and versatile almonds, perfect for snacking and cooking.",
    varieties: ["NP", "Indy", "Sonora", "Mamra", "Gurbandi", "Shasta"],
    benefits: ["High in Vitamin E", "Heart Healthy", "Rich in Protein"],
    moq: "25kg",
    rating: 4.8,
    price: "From $9.50/kg", // Inferred price
    category: "dry-fruits",
    image: "/images/products/almonds-bowl.jpg",
    origin: "USA, Australia, Iran, Afghanistan, India",
    size: ["18/20", "20/22", "23/25", "27/30"],
  },
  {
    id: "walnut-akhrot",
    name: "Walnut/Akhrot",
    description: "Wholesome walnuts, known for their brain-boosting benefits and rich flavor.",
    varieties: ["Inshell", "Walnut Kernel (Half, Quarter, Broken)"],
    benefits: ["Omega-3 Rich", "Brain Health", "Antioxidants"],
    moq: "25kg",
    rating: 4.9,
    price: "From $12.00/kg", // Inferred price
    category: "dry-fruits",
    image: "/images/products/walnut.jpg",
    origin: "Chile, USA, India",
    type: ["Inshell walnut", "walnut kernel (Half, Quarter, Broken)"],
    packing: ["25Kg PP bag", "50 Kg PP bag", "10 Kg box"],
  },
  {
    id: "cashew-foods",
    name: "Cashew",
    description: "Creamy and delicious cashews, great for snacking and culinary uses.",
    varieties: ["Whole180", "W210", "W240", "W320", "W400", "Broken LWP", "SWP"],
    benefits: ["Rich in Minerals", "Heart Healthy", "Good Fats"],
    moq: "10Kg",
    rating: 4.8,
    price: "From $11.50/kg", // Inferred price
    category: "dry-fruits",
    image: "/images/products/cashews-dynamic.webp",
    origin: "India, Ghana, Togo, Nigeria, Ivory Coast, Benin",
    type: ["Whole180", "W210", "W240", "W320", "W400", "Broken LWP,SWP"],
    packing: "10Kg Bucket",
  },
  {
    id: "pistachio",
    name: "Pistachio",
    description: "Flavorful pistachios, perfect for snacking and a healthy lifestyle.",
    varieties: ["Inshell pista", "Kernel", "salted", "roasted", "California", "Fandoghi", "Ahmad Aghaei"],
    benefits: ["Protein Rich", "Healthy Fats", "Antioxidants"],
    moq: "25kg",
    rating: 4.9,
    price: "From $14.50/kg", // Inferred price
    category: "dry-fruits",
    image: "/images/products/pistachios.jpg",
    origin: "USA, Iran, Turkey",
    type: ["Inshell pista", "Kernel", "salted and roasted"],
    variety: ["California", "Fandoghi", "Ahmad Aghaei"],
    size: ["21/25", "24/26", "26/28", "28/30"],
  },
  {
    id: "black-raisin",
    name: "Black Raisin",
    description: "Naturally sweet black raisins, ideal for various culinary applications.",
    varieties: ["With seed", "Seedless"],
    benefits: ["Good for Iron", "Energy Booster", "Aids Digestion"],
    moq: "200gm",
    rating: 4.5,
    price: "From $4.00/kg", // Inferred price
    category: "dry-fruits",
    image: "/images/products/black-raisins.jpg",
    origin: "Afghanistan",
    type: ["With seed", "Seedless"],
    count: ["140/160", "160/180", "180/200"],
    packing: ["200gm pouch in 20 Kg box", "20 Kg loose box"],
  },
  {
    id: "makhana-fox-nuts",
    name: "Makhana/Fox Nuts",
    description: "Light and crunchy fox nuts, a popular healthy snack.",
    varieties: ["Raw makhana", "Roasted makhana"],
    benefits: ["Low in Calories", "Gluten-Free", "Rich in Calcium"],
    moq: "10Kg",
    rating: 4.7,
    price: "From $7.50/kg", // Inferred price
    category: "dry-fruits",
    image: "/images/products/makhana-fox.webp",
    origin: "Bihar, West bengal",
    type: ["Raw makhana", "Roasted makhana"],
    size: "Suta 6+, 5+, 4+",
    packing: ["10Kg PP bag", "20Kg PP bag", "25Kg PP bag"],
  },
  {
    id: "fard-dates",
    name: "Fard Dates",
    description: "Naturally sweet Fard dates, known for their unique flavor and texture.",
    varieties: ["Black", "Brown"],
    benefits: ["Natural Sweetener", "High Fiber", "Potassium Rich"], // Inferred benefits
    moq: "10kg",
    rating: 4.6, // Inferred rating
    price: "From $5.50/kg", // Inferred price
    category: "dates",
    image: "/images/products/fard.jpg",
    origin: "Oman, UAE",
    colour: ["Black and Brown"],
    packing: "10Kg carton box",
    count_in_1_kg: ["165", "195"],
  },
  {
    id: "zahidi-dates",
    name: "Zahidi Dates",
    description: "Semi-dry Zahidi dates with a nutty flavor, ideal for various uses.",
    varieties: ["Regular", "Jumbo"],
    benefits: ["Energy Booster", "Rich in Vitamins", "Good for Digestion"], // Inferred benefits
    moq: "10kg",
    rating: 4.7, // Inferred rating
    price: "From $4.80/kg", // Inferred price
    category: "dates",
    image: "/images/products/zahidi-dates.jpg",
    origin: "Iraq, Iran",
    colour: "Yellow brown",
    packing: ["10Kg carton box and 25 Kg bag"],
    size: ["Regular", "Jumbo"],
  },
  {
    id: "kalmi-safawi-dates",
    name: "Kalmi/Safawi Dates",
    description: "Dark and soft Kalmi/Safawi dates, a popular choice for their rich taste.",
    varieties: ["Small", "Medium", "Large", "Jumbo"],
    benefits: ["High in Minerals", "Natural Sweetener", "Digestive Aid"], // Inferred benefits
    moq: "10kg",
    rating: 4.8, // Inferred rating
    price: "From $7.00/kg", // Inferred price
    category: "dates",
    image: "/images/products/kalmi-dates.jpg",
    origin: "Saudi Arabia, UAE",
    size: ["Small", "Medium", "Large", "Jumbo"],
    packing: ["10Kg", "5Kg", "3Kg"],
  },
  {
    id: "sayer-dates",
    name: "Sayer Dates",
    description: "Sweet and semi-dry Sayer dates, commonly used for processing and consumption.",
    varieties: ["Super select", "Select", "GAQ", "FAQ"],
    benefits: ["Good Source of Energy", "Rich in Iron", "Bone Health"], // Inferred benefits
    moq: "10kg",
    rating: 4.5, // Inferred rating
    price: "From $4.20/kg", // Inferred price
    category: "dates",
    image: "/images/products/sayer-dates.webp",
    origin: "Iran, UAE",
    grade: ["Super select", "Select", "GAQ", "FAQ"],
    colour: ["Black sayer", "Brown sayer"],
  },
  {
    id: "khalas-dates",
    name: "Khalas Dates",
    description: "Moist and sticky Khalas dates, a delight for date lovers.",
    varieties: ["Regular", "Premium"],
    benefits: ["High in Fiber", "Natural Energy", "Antioxidants"], // Inferred benefits
    moq: "5kg",
    rating: 4.7, // Inferred rating
    price: "From $6.00/kg", // Inferred price
    category: "dates",
    image: "/images/products/dates-elegant.jpg",
    origin: "UAE, Saudi, Oman",
    size: ["Regular", "Premium"],
  },
  {
    id: "medjool-dates",
    name: "Medjool Dates",
    description: "Large, soft, and sweet Medjool dates, often called the 'King of Dates'.",
    varieties: ["Jumbo", "Large", "Medium"],
    benefits: ["Rich in Potassium", "High Fiber", "Natural Sweetener"], // Inferred benefits
    moq: "5kg",
    rating: 4.9, // Inferred rating
    price: "From $8.50/kg", // Inferred price
    category: "dates",
    image: "/images/products/dates-premium.webp",
    origin: "Saudi Arabia, Jordan, UAE, Israel",
    colour: ["Black", "Brown"],
    size: ["Jumbo", "Large", "Medium"],
    packing: ["5Kg", "3Kg"],
  },
  {
    id: "ajwa-dates",
    name: "Ajwa Dates",
    description: "Soft, black Ajwa dates, a highly prized variety with unique benefits.",
    varieties: ["Regular", "Jumbo"],
    benefits: ["Heart Protective", "Antioxidant Rich", "Energy Boosting"], // Inferred benefits
    moq: "5kg",
    rating: 4.9, // Inferred rating
    price: "From $15.00/kg", // Inferred price
    category: "dates",
    image: "/images/products/dates-basket.webp",
    origin: "Saudi Arabia",
    size: ["Regular", "Jumbo"],
    packing: ["5Kg", "3Kg"],
  },
  {
    id: "mabroom-dates",
    name: "Mabroom Dates",
    description: "Slender and long Mabroom dates with a unique chewy texture.",
    varieties: ["Small", "Medium", "Large"],
    benefits: ["Good Source of Fiber", "Natural Sweetener", "Rich in Minerals"], // Inferred benefits
    moq: "5kg",
    rating: 4.6, // Inferred rating
    price: "From $7.80/kg", // Inferred price
    category: "dates",
    image: "/images/products/mabroom-dates.webp",
    origin: "Saudi Arabia, UAE",
    size: ["Small", "Medium", "Large"],
    packing: ["5Kg", "3Kg"],
  },
];

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
