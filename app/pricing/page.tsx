"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Package, Truck, Shield, Clock } from "lucide-react"
import { PricingTierCard } from "@/components/ui/pricing-tier-card"
import { QuoteModal } from "@/components/ui/quote-modal"
import { motion } from "framer-motion"

const pricingTiers = [
  {
    name: "Starter",
    minOrder: "100kg - 500kg",
    discount: "5-10%",
    features: [
      "Standard packaging",
      "Regional shipping",
      "Email support",
      "Basic quality certificates",
      "30-day payment terms",
    ],
    color: "border-gray-200 bg-white",
  },
  {
    name: "Professional",
    minOrder: "500kg - 2000kg",
    discount: "10-15%",
    features: [
      "Custom packaging options",
      "Priority shipping",
      "Dedicated account manager",
      "Full quality documentation",
      "45-day payment terms",
      "Free samples",
    ],
    color: "border-[#093257] bg-blue-50/30",
    popular: true,
  },
  {
    name: "Enterprise",
    minOrder: "2000kg+",
    discount: "15-25%",
    features: [
      "Fully customized packaging",
      "Express shipping worldwide",
      "Priority customer support",
      "Complete traceability reports",
      "60-day payment terms",
      "Free samples & R&D support",
      "Volume guarantees",
      "Private labeling available",
    ],
    color: "border-[#93e33d] bg-green-50/30",
  },
]

const benefits = [
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Private labeling and custom packaging options available for your brand requirements",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Truck,
    title: "Global Shipping",
    description: "Worldwide delivery with temperature-controlled logistics and real-time tracking",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee with comprehensive quality certifications and testing",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "24-48 hour quote response and flexible delivery schedules to meet your deadlines",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
  },
]

export default function PricingPage() {
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
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 pb-20">
        {/* Enhanced Header with Texture */}
        <section className="relative bg-gradient-to-br from-[#093257] via-[#0a4a73] to-[#093257] text-white py-16 overflow-hidden">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2393e33d' fillOpacity='0.3'%3E%3Cpath d='M30 30c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 bg-[#93e33d] rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
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
              <motion.h1
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Volume-Based Pricing
              </motion.h1>
              <motion.p
                className="text-lg text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                The more you order, the better rates you get. All prices are FOB and subject to market conditions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Pricing Tiers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {pricingTiers.map((tier, index) => (
                <PricingTierCard key={index} tier={tier} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Animated Feature Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose Our B2B Solutions</h2>
              <p className="text-lg text-gray-600">Comprehensive solutions designed for your business success</p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      className={`${benefit.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}
                    >
                      <CardContent className="p-6 text-center">
                        <motion.div
                          className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <benefit.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-r from-[#093257] to-[#0a4a73] text-white border-0 shadow-2xl">
                <CardContent className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-[#93e33d] rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Package className="w-8 h-8 text-[#093257]" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Finding Products?</h2>
                  <p className="text-lg md:text-xl text-gray-200 mb-8">
                    Our B2B specialists are here to help you find the perfect pricing solution for your business needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                      <QuoteModal>
                        <Button
                          size="lg"
                          className="bg-[#93e33d] text-[#093257] hover:bg-[#7bc42d] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          Request Customized Quote
                        </Button>
                      </QuoteModal>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-[#093257] bg-transparent font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <a href="/contact">Speak to Sales Expert</a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Sticky Global Quote Button */}
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden">
          <QuoteModal triggerClassName="w-full">
            <Button size="lg" className="w-full bg-[#093257] hover:bg-[#0a4a73] text-white font-semibold py-4">
              Get Quote Now
            </Button>
          </QuoteModal>
        </div>
      </div>
    </MainLayout>
  )
}
