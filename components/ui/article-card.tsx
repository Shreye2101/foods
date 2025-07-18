"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ArticleCardProps {
  article: {
    id: string
    title: string
    excerpt: string
    author: string
    date: string
    readTime: string
    category: string
    image?: string
    featured?: boolean
  }
  variant?: "default" | "featured"
  className?: string
}

export function ArticleCard({ article, variant = "default", className = "" }: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <motion.div
        className={className}
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              {article.featured && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#93e33d] text-[#093257] font-bold px-3 py-1 shadow-lg">Featured</Badge>
                </div>
              )}
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-4 border-[#093257] text-[#093257]">
                {article.category}
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <span>{article.readTime}</span>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  className="bg-[#093257] hover:bg-[#0a4a73] text-white w-fit shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/blogs/${article.id}`}>
                    Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
        <div className="relative h-48">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            sizes="400px"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <CardContent className="p-6 flex flex-col h-full">
          <Badge variant="outline" className="w-fit mb-3 border-[#093257] text-[#093257]">
            {article.category}
          </Badge>
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 flex-1">{article.title}</h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{article.date}</span>
            </div>
            <span>{article.readTime}</span>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full bg-transparent border-[#093257] text-[#093257] hover:bg-[#093257] hover:text-white transition-all duration-300"
            >
              <Link href={`/blogs/${article.id}`}>
                Read More <ArrowRight className="ml-2 w-3 h-3" />
              </Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
