"use client"

import { MainLayout } from "@/components/layout/main-layout"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Headphones, FileText } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

// Define images for each category
const categoryImages = {
  nuts: [
    "/images/products/almonds-bowl.jpg",
    "/images/products/walnut.jpg",
    "/images/products/cashews-dynamic.webp",
  ],
  seeds: [
    "/images/products/chia seeds.jpg",
    "/images/products/flax-seeds.jpg",
    "/images/products/pumpkin-seeds.jpg",
  ],
  berries: [
    "/images/products/cannberries.jpg",
    "/images/products/blueberries.jpg",
    "/images/products/turkish-apricots.jpg",
  ],
};

const categories = [
  {
    id: "nuts",
    title: "Premium Nuts",
    description: "Almonds, Cashews, Walnuts, Dates, Pistachios, and more",
    href: "/catalog/nuts",
    itemCount: 9,
    gradient: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    images: categoryImages.nuts,
  },
  {
    id: "seeds",
    title: "Nutritious Seeds",
    description: "Chia, Flax, Pumpkin, Sunflower, and specialty seeds",
    href: "/catalog/seeds",
    itemCount: 8,
    gradient: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    images: categoryImages.seeds,
  },
  {
    id: "berries",
    title: "Dried Berries",
    description: "Cranberries, Blueberries, Goji Berries, and more",
    href: "/catalog/berries",
    itemCount: 7,
    gradient: "from-red-400 to-pink-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    images: categoryImages.berries,
  },
];

export default function CatalogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        {/* Enhanced Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#093257] via-[#0a4a73] to-[#093257] overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2393e33d' fillOpacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 bg-[#93e33d] rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-full opacity-10"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Product Catalog
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Browse our comprehensive collection of premium nuts, seeds, and dried berries. All products are
                available for bulk orders with competitive B2B pricing.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Categories Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {categories.map((category) => (
                <motion.div key={category.id} variants={cardVariants}>
                  <Card
                    className={`${category.bgColor} ${category.borderColor} border-2 hover:shadow-xl transition-all duration-300 overflow-hidden group`}
                  >
                    <CardContent className="p-0">
                      {/* Card Header - Replaced icon with overlapping images */}
                      <div className="p-6 pb-4">
                        <motion.div
                          className={`relative w-24 h-24 mx-auto mb-6 flex items-center justify-center`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {category.images.map((imgSrc, index) => (
                            <div
                              key={index}
                              className="absolute w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md"
                              style={{
                                zIndex: 3 - index,
                                left: `${index * 25}%`,
                                top: `${index * 15}%`,
                              }}
                            >
                              <Image
                                src={imgSrc}
                                alt={`${category.title} image ${index + 1}`}
                                fill
                                objectFit="cover"
                                className="transition-transform duration-300 group-hover:scale-110"
                                onError={(e) => {
                                  e.currentTarget.src = "https://placehold.co/64x64/E0E0E0/616161?text=Img";
                                }}
                              />
                            </div>
                          ))}
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{category.title}</h3>
                        <p className="text-gray-600 mb-4 text-center leading-relaxed">{category.description}</p>
                        <div className="text-center mb-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/70 text-gray-700 border border-gray-200">
                            {category.itemCount} Products Available
                          </span>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="px-6 pb-6">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            asChild
                            className="w-full bg-[#093257] hover:bg-[#0a4a73] text-white font-medium group-hover:shadow-lg transition-all duration-300"
                          >
                            {/* FIX: Wrap Link's children in a div or fragment to satisfy React.Children.only */}
                            <Link href={category.href}>
                              <div className="flex items-center justify-center gap-2">
                                View Products
                                <motion.div
                                  animate={{ x: [0, 4, 0] }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                  }}
                                >
                                  <ArrowRight className="w-4 h-4" />
                                </motion.div>
                              </div>
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Help Section */}
            <motion.div
              className="bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center max-w-3xl mx-auto">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-[#093257] to-[#0a4a73] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Headphones className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Need Help Finding Products?</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our B2B specialists are here to help you find the perfect products for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#93e33d] text-[#093257] hover:bg-[#7bc42d] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href="/contact" className="flex items-center gap-2">
                        <Headphones className="w-5 h-5" />
                        Contact Sales Team
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-[#093257] text-[#093257] hover:bg-[#093257] hover:text-white bg-transparent font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href="/pricing" className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Request Bulk Quote
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
