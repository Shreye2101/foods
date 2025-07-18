import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Nut, Sprout, Cherry, ArrowRight } from "lucide-react"
import { HorizontalScroll } from "@/components/ui/horizontal-scroll"

const categories = [
  {
    id: "nuts",
    title: "Premium Nuts",
    description:
      "High-quality almonds, cashews, walnuts, and more. Perfect for retail, food service, and manufacturing.",
    icon: Nut,
    href: "/catalog/nuts",
    image: "/images/products/almonds.jpg",
    color: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
    products: ["Almonds", "Cashews", "Walnuts", "Dates", "Pistachios"],
  },
  {
    id: "seeds",
    title: "Nutritious Seeds",
    description: "Chia, flax, pumpkin, and sunflower seeds. Ideal for health food products and bulk distribution.",
    icon: Sprout,
    href: "/catalog/seeds",
    image: "/images/products/mixed-seeds.jpg",
    color: "bg-gradient-to-br from-green-50 to-green-100",
    iconColor: "text-green-600",
    products: ["Chia Seeds", "Flax Seeds", "Pumpkin Seeds", "Sunflower Seeds"],
  },
  {
    id: "berries",
    title: "Dried Berries",
    description: "Premium dried cranberries, blueberries, goji berries, and more. Perfect for snacks and ingredients.",
    icon: Cherry,
    href: "/catalog/berries",
    image: "/images/products/dried-berries.jpg",
    color: "bg-gradient-to-br from-red-50 to-red-100",
    iconColor: "text-red-600",
    products: ["Cranberries", "Blueberries", "Goji Berries", "Mulberries"],
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of premium nuts, seeds, and dried berries, carefully sourced and processed
            to meet the highest B2B standards.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden"
            >
              <CardContent className={`p-0 text-center ${category.color} rounded-lg`}>
                {/* Image Section */}
                <div className="relative h-48 w-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.products.map((product) => (
                        <span
                          key={product}
                          className="px-3 py-1 bg-white/70 rounded-full text-sm text-gray-700 font-medium"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="bg-[#093257] hover:bg-[#0a4a73] text-white font-medium">
                    <Link href={category.href}>
                      Explore Products <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <HorizontalScroll>
            {categories.map((category) => (
              <Card
                key={category.id}
                className="flex-shrink-0 w-80 hover:shadow-lg transition-all duration-300 border-0 shadow-sm snap-start overflow-hidden"
              >
                <CardContent className={`p-0 text-center ${category.color} rounded-lg h-full`}>
                  {/* Image Section */}
                  <div className="relative h-40 w-full">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <category.icon className={`w-5 h-5 ${category.iconColor}`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {category.products.slice(0, 3).map((product) => (
                          <span
                            key={product}
                            className="px-2 py-1 bg-white/70 rounded-full text-xs text-gray-700 font-medium"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button asChild size="sm" className="bg-[#093257] hover:bg-[#0a4a73] text-white font-medium w-full">
                      <Link href={category.href}>
                        Explore <ArrowRight className="ml-2 w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </HorizontalScroll>
        </div>
      </div>
    </section>
  )
}
