"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Package, Users, Globe } from "lucide-react"
import { FloatingElements } from "@/components/ui/floating-elements"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { motion } from "framer-motion"

export function HeroSection() {
  const stats = [
    { icon: Package, number: 50, suffix: "+", label: "Products" },
    { icon: Users, number: 100, suffix: "+", label: "B2B Clients" },
    { icon: Globe, number: 1, suffix: "", label: "Countries" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative pt-28 pb-12 md:pt-20 md:pb-20 bg-gradient-to-br from-[#093257] via-[#0a4a73] to-[#093257] hero-section overflow-hidden">
      <FloatingElements />

      {/* Dynamic Organic Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Shimmering Particles */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 50%, rgba(147, 227, 61, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(147, 227, 61, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(147, 227, 61, 0.06) 0%, transparent 50%)`,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 50%, rgba(147, 227, 61, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(147, 227, 61, 0.08) 0%, transparent 50%),
               radial-gradient(circle at 40% 80%, rgba(147, 227, 61, 0.06) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 30%, rgba(147, 227, 61, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 20% 70%, rgba(147, 227, 61, 0.08) 0%, transparent 50%),
               radial-gradient(circle at 60% 20%, rgba(147, 227, 61, 0.06) 0%, transparent 50%)`,
              `radial-gradient(circle at 40% 70%, rgba(147, 227, 61, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 70% 40%, rgba(147, 227, 61, 0.08) 0%, transparent 50%),
               radial-gradient(circle at 30% 30%, rgba(147, 227, 61, 0.06) 0%, transparent 50%)`,
            ],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Light Trails */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(45deg, transparent 0%, rgba(147, 227, 61, 0.03) 50%, transparent 100%)`,
          }}
          animate={{
            background: [
              `linear-gradient(45deg, transparent 0%, rgba(147, 227, 61, 0.03) 50%, transparent 100%)`,
              `linear-gradient(135deg, transparent 0%, rgba(147, 227, 61, 0.03) 50%, transparent 100%)`,
              `linear-gradient(225deg, transparent 0%, rgba(147, 227, 61, 0.03) 50%, transparent 100%)`,
              `linear-gradient(315deg, transparent 0%, rgba(147, 227, 61, 0.03) 50%, transparent 100%)`,
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Enhanced animated background shapes */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#93e33d] rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-60 h-60 bg-[#93e33d] rounded-full opacity-5"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-white rounded-full opacity-5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Organic Motion Graphics */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-[#93e33d] rounded-full opacity-30"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 0.5, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-3 h-3 bg-white rounded-full opacity-40"
          animate={{
            x: [0, -80, 120, 0],
            y: [0, 100, -40, 0],
            scale: [1, 1.5, 0.8, 1],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#93e33d] rounded-full opacity-50"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -60, 80, 0],
            scale: [1, 0.3, 1.8, 1],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Parallax background pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2393e33d' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6"
            variants={itemVariants}
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Premium Quality
            <motion.span
              className="block secondary-text"
              variants={itemVariants}
              style={{ fontFamily: "Inter, system-ui, sans-serif", fontWeight: "800" }}
            >
              Nuts, Seeds & Berries
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 px-2"
            variants={itemVariants}
            style={{ fontFamily: "Inter, system-ui, sans-serif", fontWeight: "400", lineHeight: "1.6" }}
          >
            Your trusted B2B partner for bulk orders of premium dried fruits, nuts, and seeds. Competitive pricing,
            reliable delivery, and exceptional quality guaranteed.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="secondary-bg text-[#093257] hover:bg-[#7bc42d] font-semibold mobile-button sm:w-auto transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/catalog">
                  View Product Catalog <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#093257] bg-transparent mobile-button sm:w-auto transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/pricing">Get Bulk Quote</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats - Desktop Grid */}
          <motion.div className="hidden md:grid grid-cols-3 gap-8 mt-16" variants={containerVariants}>
            {stats.map((stat, index) => (
              <motion.div key={index} className="flex flex-col items-center" variants={statsVariants}>
                <motion.div
                  className="w-16 h-16 secondary-bg rounded-full flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="w-8 h-8 text-[#093257]" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </h3>
                <p className="text-gray-300" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats - Mobile: Compact Layout */}
          <motion.div className="md:hidden mt-8" variants={itemVariants}>
            <div className="flex justify-center gap-4 px-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center min-w-[80px]"
                  variants={statsVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 secondary-bg rounded-full flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-[#093257]" />
                  </div>
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </h3>
                  <p
                    className="text-gray-300 text-xs text-center leading-tight"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
