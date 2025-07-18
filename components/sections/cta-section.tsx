"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, Package, Gift, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  const infoItems = [
    { icon: Package, text: "Minimum Order Quantity: 100kg" },
    { icon: Gift, text: "Free samples available" },
    { icon: Clock, text: "24/7 customer support" },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced background with geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#093257] via-[#0a4a73] to-[#093257]">
        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2393e33d' fillOpacity='0.4'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#93e33d]/5 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "Inter, system-ui, sans-serif", fontWeight: "700" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Partner with Us?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-200"
            style={{ fontFamily: "Inter, system-ui, sans-serif", fontWeight: "400", lineHeight: "1.6" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get competitive bulk pricing, reliable delivery, and exceptional service. Contact our B2B team today for a
            customized quote.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="secondary-bg text-[#093257] hover:bg-[#7bc42d] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/pricing">
                  <Mail className="mr-2 w-5 h-5" />
                  Request Quote
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#093257] bg-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/contact">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Sales Team
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced info section with icons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-5 h-5 secondary-bg rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 10 }}
                >
                  <item.icon className="w-3 h-3 text-[#093257]" />
                </motion.div>
                <span className="text-sm font-medium" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
