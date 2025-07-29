"use client"

import { MainLayout } from "@/components/layout/main-layout"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCarousel } from "@/components/ui/product-carousel"
import { Timeline } from "@/components/ui/timeline"
import { Sparkles, Star, TrendingUp, Bell, Check } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const newLaunches = [
  {
    id: "organic-cashew-blend",
    name: "Organic Cashew Blend",
    description: "Premium organic cashews with a special roasting process for enhanced flavor",
    varieties: ["Lightly Salted", "Herb Seasoned", "Honey Roasted", "Plain"],
    benefits: ["Certified Organic", "Enhanced Flavor", "Premium Quality"],
    moq: "50kg",
    rating: 4.9,
    price: "From $14.50/kg",
    category: "nuts", // Category is still 'nuts' but the detail page path is different
    image: "/images/products/cashews-dynamic.webp",
    isNew: true,
    launchDate: "January 2024",
  },
  {
    id: "superfood-seed-mix",
    name: "Superfood Seed Mix",
    description: "Carefully curated blend of chia, flax, pumpkin, and sunflower seeds",
    varieties: ["Original Mix", "Protein Plus", "Omega Boost", "Organic"],
    benefits: ["Complete Nutrition", "Omega-3 Rich", "High Protein"],
    moq: "25kg",
    rating: 4.8,
    price: "From $9.80/kg",
    category: "seeds", // Category is still 'seeds'
    image: "/images/products/mixed-seeds.jpg",
    isNew: true,
    launchDate: "February 2024",
  },
  {
    id: "premium-date-collection",
    name: "Premium Date Collection",
    description: "Exclusive collection of the finest Medjool and Deglet Noor dates",
    varieties: ["Jumbo Medjool", "Premium Deglet", "Stuffed Dates", "Gift Boxes"],
    benefits: ["Premium Grade", "Natural Sweetness", "Luxury Packaging"],
    moq: "25kg",
    rating: 4.9,
    price: "From $12.90/kg",
    category: "nuts", // Category is still 'nuts'
    image: "/images/products/dates-basket.webp",
    isNew: true,
    launchDate: "March 2024",
  },
  {
    id: "antioxidant-berry-blend",
    name: "Antioxidant Berry Blend",
    description: "Power-packed blend of goji berries, cranberries, and blueberries",
    varieties: ["Classic Blend", "Tropical Mix", "Organic Blend", "Sugar-Free"],
    benefits: ["Antioxidant Rich", "Immune Support", "Natural Energy"],
    moq: "20kg",
    rating: 4.7,
    price: "From $16.50/kg",
    category: "berries", // Category is still 'berries'
    image: "/images/products/dried-berries.jpg",
    isNew: true,
    launchDate: "March 2024",
  },
]

const timelineItems = [
  {
    name: "Organic Cashew Blend",
    date: "January 2024",
    category: "Nuts",
    description: "Premium organic cashews with enhanced roasting process",
  },
  {
    name: "Superfood Seed Mix",
    date: "February 2024",
    category: "Seeds",
    description: "Curated blend of nutritious seeds for health-conscious consumers",
  },
  {
    name: "Premium Date Collection",
    date: "March 2024",
    category: "Nuts",
    description: "Exclusive collection of finest Medjool and Deglet Noor dates",
  },
  {
    name: "Antioxidant Berry Blend",
    date: "March 2024",
    category: "Berries",
    description: "Power-packed blend of antioxidant-rich berries",
  },
]

const upcomingLaunches = [
  {
    title: "Freeze-Dried Fruit Collection",
    description:
      "Revolutionary freeze-drying technology preserving maximum nutrition and flavor for premium applications",
    expectedLaunch: "Q2 2024",
    category: "Fruits",
    comingSoon: true,
  },
  {
    title: "Protein-Enhanced Nut Mixes",
    description: "Specially formulated nut blends with added plant proteins for fitness and health markets",
    expectedLaunch: "Q3 2024",
    category: "Nuts",
    comingSoon: true,
  },
  {
    title: "Organic Sprouted Seeds",
    description: "Nutrient-dense sprouted seeds for health-conscious consumers and premium food applications",
    expectedLaunch: "Q3 2024",
    category: "Seeds",
    comingSoon: true,
  },
]

export default function NewLaunchesPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#093257] via-[#0a4a73] to-[#093257] text-white overflow-hidden">
          {/* Dynamic Background Animation */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2393e33d' fillOpacity='0.4'%3E%3Cpath d='M50 50c0-13.8-11.2-25-25-25s-25 11.2-25 25 11.2 25 25 25 25-11.2 25-25zm25 0c0-13.8-11.2-25-25-25s-25 11.2-25 25 11.2 25 25 25 25-11.2 25-25z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-10 w-24 h-24 bg-[#93e33d] rounded-full opacity-20"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Sparkles className="w-10 h-10 text-[#93e33d]" />
                </motion.div>
                <motion.h1
                  className="text-4xl md:text-6xl font-bold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  New Launches
                </motion.h1>
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                >
                  <Sparkles className="w-10 h-10 text-[#93e33d]" />
                </motion.div>
              </div>
              <motion.p
                className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Discover our latest premium products and innovative blends, crafted to meet evolving market demands and
                consumer preferences.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#93e33d] text-[#093257] hover:bg-[#7bc42d] font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="#new-products">Explore New Products</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#093257] bg-transparent font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/pricing">Get Samples</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Latest Product Launches */}
        <section id="new-products" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Product Launches</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our newest additions to the premium product line, now available for bulk orders.
              </p>
            </motion.div>

            <ProductCarousel>
              {newLaunches.map((product) => (
                <Card
                  key={product.id}
                  className="w-80 hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden group"
                >
                  <CardContent className="p-0 bg-gradient-to-br from-white to-gray-50 rounded-xl">
                    {/* Product Image */}
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        objectFit="cover"
                        className="object-cover"
                        sizes="320px"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/320x192/E0E0E0/616161?text=Image+Not+Found";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/10"></div>

                      {/* NEW Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-[#93e33d] text-[#093257] font-bold px-3 py-1 shadow-lg">NEW</Badge>
                      </div>

                      {/* Rating */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#093257] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                        {/* <div className="text-lg font-bold text-[#093257]">{product.price}</div> */}
                      </div>

                      {/* Available Varieties */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Available Varieties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.varieties.slice(0, 3).map((variety) => (
                            <motion.div key={variety} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Badge
                                variant="secondary"
                                className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer transition-colors"
                              >
                                {variety}
                              </Badge>
                            </motion.div>
                          ))}
                          {product.varieties.length > 3 && (
                            <Badge variant="outline" className="text-xs border-gray-300">
                              +{product.varieties.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Key Benefits */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Benefits:</h4>
                        <div className="space-y-1">
                          {product.benefits.slice(0, 2).map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-[#93e33d]" />
                              <span className="text-xs text-gray-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-xs text-gray-500">MOQ: </span>
                          <span className="font-semibold text-gray-800 text-sm">{product.moq}</span>
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            asChild
                            size="sm"
                            className="bg-[#093257] hover:bg-[#0a4a73] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <Link href={`/new-launches/${product.id}`}>
                              {/* FIX: Wrap the text content in a span */}
                              <span>View Details</span>
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </ProductCarousel>
          </div>
        </section>

        {/* 2024 Launch Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">2024 Launch Timeline</h2>
              <p className="text-xl text-gray-600">Track our product launches throughout the year</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Timeline items={timelineItems} />
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get a sneak peek at our upcoming product innovations and be the first to know when they launch.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {upcomingLaunches.map((launch, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-[#093257] to-[#0a4a73] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <TrendingUp className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{launch.title}</h3>
                      <p className="text-gray-600 mb-4 flex-1 leading-relaxed">{launch.description}</p>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <Badge className="bg-[#93e33d] text-[#093257] font-semibold">{launch.category}</Badge>
                        <span className="text-sm text-gray-500 font-medium">{launch.expectedLaunch}</span>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#093257] text-[#093257] hover:bg-[#093257] hover:text-white transition-all duration-300 bg-transparent"
                        >
                          <Bell className="w-4 h-4 mr-2" />
                          Notify Me
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-r from-[#093257] to-[#0a4a73] text-white border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="w-16 h-16 bg-[#93e33d] rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="w-8 h-8 text-[#093257]" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on New Launches</h3>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    Be the first to know about our latest products, exclusive previews, and early access opportunities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        size="lg"
                        className="bg-[#93e33d] text-[#093257] hover:bg-[#7bc42d] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Link href="/contact">Subscribe to Updates</Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-2 border-white text-white hover:bg-white hover:text-[#093257] bg-transparent font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Link href="/pricing">Request Samples</Link>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
