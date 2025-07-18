"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Rocket, Award } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "24-48hr quotes & rapid delivery worldwide",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    description: "ISO certified with full traceability",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Rocket,
    title: "Global Reach",
    description: "Serving 50+ countries reliably",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    description: "1000+ satisfied B2B clients",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50",
  },
]

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold primary-text mb-3"
            style={{ fontFamily: "Inter, system-ui, sans-serif", fontWeight: "700" }}
          >
            Your Success, Our Mission
          </h2>
          <p
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, system-ui, sans-serif", fontWeight: "400" }}
          >
            Fast, reliable, premium quality - everything you need in a B2B partner
          </p>
        </motion.div>

        {/* Mobile: 2x2 Grid */}
        <motion.div
          className="grid grid-cols-2 md:hidden gap-4 px-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`text-center bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 ${feature.bgColor} border border-gray-100`}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center shadow-md`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3
                className="text-sm font-bold primary-text mb-2"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-xs text-gray-600 leading-relaxed"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop: Horizontal Layout */}
        <motion.div
          className="hidden md:grid grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${feature.bgColor} border border-gray-100`}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center shadow-lg`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3
                className="text-lg font-bold primary-text mb-3"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
