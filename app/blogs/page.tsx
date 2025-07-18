"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Rss, Calendar, User, ArrowRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

const featuredPost = {
  id: "future-of-sustainable-sourcing",
  title: "The Future of Sustainable Sourcing in the Nuts and Seeds Industry",
  excerpt:
    "Explore how sustainable farming practices are revolutionizing the nuts and seeds industry, and what it means for B2B buyers looking for environmentally responsible suppliers.",
  author: "Dr. Sarah Johnson",
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "Sustainability",
  image: "/images/products/mixed-seeds.jpg",
  featured: true,
}

const latestPosts = [
  {
    id: "quality-control-standards",
    title: "Understanding Quality Control Standards in Food Manufacturing",
    excerpt:
      "A comprehensive guide to quality control standards and certifications that matter most in the food manufacturing industry.",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Quality Assurance",
    image: "/images/products/almonds.jpg",
  },
  {
    id: "market-trends-2024",
    title: "2024 Market Trends: What's Driving Demand in Healthy Snacking",
    excerpt:
      "Analyze the latest consumer trends and market data that are shaping the healthy snacking industry in 2024.",
    author: "Emma Rodriguez",
    date: "March 10, 2024",
    readTime: "5 min read",
    category: "Market Analysis",
    image: "/images/products/dried-berries.jpg",
  },
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization for Global Food Distribution",
    excerpt:
      "Learn how modern supply chain technologies are improving efficiency and reducing costs in global food distribution.",
    author: "David Kim",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Logistics",
    image: "/images/products/pumpkin-seeds.jpg",
  },
]

const categories = [
  "All Posts",
  "Sustainability",
  "Quality Assurance",
  "Market Analysis",
  "Logistics",
  "Nutrition",
  "Technology",
  "Certification",
]

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts")
  const [searchQuery, setSearchQuery] = useState("")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-br from-[#093257] via-[#0a4a73] to-[#093257] text-white py-16 overflow-hidden">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2393e33d' fillOpacity='0.3'%3E%3Cpath d='M40 40c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28zm28 0c0-15.5-12.5-28-28-28s-28 12.5-28 28 12.5 28 28 28 28-12.5 28-28z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 bg-[#93e33d] rounded-full opacity-20"
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
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
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Rss className="w-10 h-10 text-[#93e33d]" />
                </motion.div>
                <motion.h1
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Industry Insights & Blog
                </motion.h1>
              </div>
              <motion.p
                className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Stay informed with the latest industry trends, insights, and expert knowledge from the world of premium
                nuts, seeds, and dried fruits.
              </motion.p>

              {/* Integrated Search Bar */}
              <motion.div
                className="max-w-lg mx-auto relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 bg-white/10 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm rounded-xl text-lg focus:bg-white/20 transition-all duration-300"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scrollable Categories */}
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#093257] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-[#093257] to-[#0a4a73] rounded-lg flex items-center justify-center">
                  <Rss className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Article</h2>
              </div>

              <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#93e33d] text-[#093257] font-bold px-3 py-1 shadow-lg">Featured</Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <Badge variant="outline" className="w-fit mb-4 border-[#093257] text-[#093257]">
                        {featuredPost.category}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          asChild
                          className="bg-[#093257] hover:bg-[#0a4a73] text-white w-fit shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Link href={`/blogs/${featuredPost.id}`}>
                            Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                <p className="text-lg text-gray-600">Fresh insights and expert analysis from our team</p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {latestPosts.map((post, index) => (
                  <motion.div key={post.id} variants={cardVariants}>
                    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                        <div className="relative h-48">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="400px"
                          />
                          <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                        <CardContent className="p-6 flex flex-col h-full">
                          <Badge variant="outline" className="w-fit mb-3 border-[#093257] text-[#093257]">
                            {post.category}
                          </Badge>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 flex-1">{post.title}</h3>
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                            <span>{post.readTime}</span>
                          </div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="w-full bg-transparent border-[#093257] text-[#093257] hover:bg-[#093257] hover:text-white transition-all duration-300"
                            >
                              <Link href={`/blogs/${post.id}`}>
                                Read More <ArrowRight className="ml-2 w-3 h-3" />
                              </Link>
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* View All Articles Button */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#093257] hover:bg-[#0a4a73] text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/blogs/archive">View All Articles</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
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
                      <Rss className="w-8 h-8 text-[#093257]" />
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-8">
                      Subscribe to our newsletter and never miss the latest industry insights and expert analysis.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                      <Input
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm"
                      />
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Button className="bg-[#93e33d] text-[#093257] hover:bg-[#7bc42d] font-semibold whitespace-nowrap px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                          Subscribe Now
                        </Button>
                      </motion.div>
                    </div>
                    <p className="text-sm text-gray-300 mt-4">
                      Join 5,000+ industry professionals who trust our insights
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
