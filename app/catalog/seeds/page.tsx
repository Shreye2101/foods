import { MainLayout } from "@/components/layout/main-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { HorizontalScroll } from "@/components/ui/horizontal-scroll"
import { ProductCard } from "@/components/ui/product-card"

const seedsProducts = [
  {
    id: "chia-seeds",
    name: "Chia Seeds",
    description: "Premium chia seeds, excellent for health and various culinary uses.",
    varieties: ["Black", "White", "Organic"], // Inferred
    benefits: ["Omega-3 Rich", "High Fiber", "Antioxidants"], // Inferred
    moq: "25kg",
    rating: 4.8, // Inferred
    // price: "From $7.20/kg", // Inferred
    category: "seeds",
    image: "/images/products/chia seeds.jpg",
    origin: "MP, Karnataka",
    purity: "99.99%",
    colour: ["Black", "White"],
    clean: "Double sortex",
    packing: "25Kg, 50Kg",
  },
  {
    id: "flax-seeds",
    name: "Flax Seeds (Alsi Beej)",
    description: "High-quality flax seeds, known for their nutritional benefits and versatility.",
    varieties: ["Regular", "Bold", "Organic", "Ground"], // Inferred
    benefits: ["Omega-3 ALA", "Digestive Health", "Lignans"], // Inferred
    moq: "25kg",
    rating: 4.7, // Inferred
    // price: "From $5.40/kg", // Inferred
    category: "seeds",
    image: "/images/products/flax-seeds.jpg",
    origin: "MP, Rajasthan",
    purity: "99.99%",
    size: ["Regular", "Bold"],
    clean: "Double sortex",
    packing: "25Kg, 50Kg",
  },
  {
    id: "pumpkin-seeds",
    name: "Pumpkin Seeds",
    description: "Nutritious pumpkin seeds with a delicious nutty flavor and crunch.",
    varieties: ["AA", "AAA", "Raw", "Roasted"], // Inferred
    benefits: ["Magnesium Rich", "Zinc Source", "Antioxidants"], // Inferred
    moq: "25kg",
    rating: 4.6, // Inferred
    // price: "From $6.80/kg", // Inferred
    category: "seeds",
    image: "/images/products/pumpkin-seeds.jpg",
    origin: "China",
    type: ["AA", "AAA"],
    clean: "100% clean",
    packing: "25Kg Carton box",
  },
  {
    id: "sunflower-seeds",
    name: "Sunflower Seeds",
    description: "Premium sunflower seeds perfect for snacking and food manufacturing.",
    varieties: ["Confectionery grade", "Raw", "Roasted", "Kernels"], // Inferred
    benefits: ["Vitamin E Rich", "Healthy Fats", "Antioxidants"], // Inferred
    moq: "25kg",
    rating: 4.5, // Inferred
    // price: "From $4.20/kg", // Inferred
    category: "seeds",
    image: "/images/products/sunflower-seeds.jpg",
    origin: "China",
    type: "Confectionery grade",
    clean: "100% clean",
    packing: "25Kg Carton box",
  },
  {
    id: "quinoa-seeds",
    name: "Quinoa Seeds",
    description: "Healthy quinoa seeds, a complete protein source with versatile uses.",
    varieties: ["White", "Red", "Organic"], // Inferred
    benefits: ["Complete Protein", "High Fiber", "Iron Rich"], // Inferred
    moq: "25kg",
    rating: 4.7, // Inferred
    // price: "From $8.50/kg", // Inferred
    category: "seeds",
    image: "/images/products/quinoa-seeds.jpg",
    origin: "MP, Rajasthan",
    purity: "99.99%, 100%",
    colour: ["White", "Red"],
    size: ["Regular", "Bold"],
    packing: "25Kg, 50Kg",
  },
  {
    id: "basil-seeds",
    name: "Basil Seeds (Tulsi Beej)",
    description: "Cooling and healthful basil seeds, ideal for beverages and desserts.",
    varieties: ["Black", "Organic"], // Inferred
    benefits: ["Cooling Properties", "Fiber Rich", "Detoxifying"], // Inferred
    moq: "25kg",
    rating: 4.6, // Inferred
    // price: "From $9.00/kg", // Inferred
    category: "seeds",
    image: "/images/products/basil.webp",
    origin: "India, Afghanistan",
    purity: "99.99%, 100%",
    colour: "Black",
    size: "Regular",
    packing: "25Kg, 50Kg",
  },
  {
    id: "watermelon-seeds",
    name: "Watermelon Seeds",
    description: "Nutrient-rich watermelon seeds, great for snacking and health.",
    varieties: ["Sadir", "Tumba", "Regular", "Jumbo"], // Inferred
    benefits: ["Protein Source", "Magnesium Rich", "Healthy Fats"], // Inferred
    moq: "25kg",
    rating: 4.5, // Inferred
    // price: "From $5.80/kg", // Inferred
    category: "seeds",
    image: "/images/products/watermelon.jpg",
    origin: "Sudan, India",
    variety: ["Sadir", "Tumba"],
    size: ["Regular", "Jumbo"],
    packing: "25Kg, 50Kg",
  },
  {
    id: "sesame-seeds",
    name: "Sesame Seeds",
    description: "High-quality sesame seeds with rich flavor and nutritional benefits.",
    varieties: ["White", "Black", "Hulled", "Un-hulled"], // Inferred
    benefits: ["Calcium Rich", "Healthy Oils", "Protein Source"], // Inferred
    moq: "25kg",
    rating: 4.7, // Inferred
    // price: "From $3.90/kg", // Inferred
    category: "seeds",
    image: "/images/products/saseme.jpg",
    origin: "Gujarat, RJ, UP, MP",
    purity: "99.99%, 100%",
    colour: ["White", "Black"],
    size: ["Regular", "Bold"],
    packing: "25Kg, 50Kg",
  },
];

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
