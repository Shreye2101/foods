"use client"

import { motion, useAnimation } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import SafeImage from "./safe-image"

interface CustomerLogoProps {
  src: string
  alt: string
  width: number
  height: number
  bgColor?: string
}

const CustomerLogo = ({ src, alt, width, height, bgColor }: CustomerLogoProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Background decorative elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-50 to-amber-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: "0 0 15px rgba(147, 227, 61, 0.3)",
        }}
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Main content */}
      <div
        className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 flex items-center justify-center h-24 relative z-10 ${bgColor ? bgColor : ""}`}
      >
        <div className="relative h-full w-full flex items-center justify-center">
          <motion.div animate={isHovered ? { scale: 1.05, y: -2 } : { scale: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <SafeImage
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="object-contain max-h-full max-w-full"
              fallbackSrc={`/placeholder.svg?text=${encodeURIComponent(alt)}&width=${width}&height=${height}`}
            />
          </motion.div>
        </div>
      </div>

      {/* Customer name tooltip */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md z-20 whitespace-nowrap"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-xs font-medium text-gray-700">Trusted Partner</p>
      </motion.div>
    </div>
  )
}

export default function TrustedCustomers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const scrollControls = useAnimation()

  const logos = [
    { src: "images/farmley-logo.png", alt: "Farmley", width: 120, height: 40 },
    { src: "images/hyperpure-zomato.png", alt: "Zomato Hyperpure", width: 120, height: 60 },
    { src: "images/whole-truth-logo.png", alt: "Whole Truth", width: 130, height: 60 },
    { src: "images/yogabar-logo.jpg", alt: "Yoga Bar", width: 100, height: 100 },
    { src: "images/open-secret-logo.png", alt: "Open Secret", width: 120, height: 50 },
    { src: "images/happilo-logo.jpg", alt: "Happilo", width: 120, height: 50 },
    { src: "images/Reliance-logo.png", alt: "Reliance", width: 120, height: 60 },
    { src: "images/Cornitos_logo.jpg", alt: "Cornitos", width: 120, height: 60, bgColor: "bg-white" },
  ]

  useEffect(() => {
    if (isInView) {
      const startScrolling = async () => {
        while (true) {
          await scrollControls.start({
            x: [0, -100 * logos.length],
            transition: { duration: 15, ease: "linear" },
          })
          await scrollControls.start({
            x: 0,
            transition: { duration: 0 },
          })
        }
      }

      startScrolling()
    }

    return () => {
      scrollControls.stop()
    }
  }, [isInView, scrollControls, logos.length])

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#93e33d]/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#093257]/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-[#93e33d] rounded-full"></div>
        <div className="absolute top-16 right-16 w-12 h-12 border-2 border-[#093257] rounded-full"></div>
        <div className="absolute bottom-8 left-1/4 w-20 h-20 border-2 border-[#93e33d] rounded-full"></div>
        <div className="absolute bottom-16 right-1/3 w-10 h-10 border-2 border-[#093257] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-[#093257]">Our Trusted</span> <span className="text-[#93e33d]">Customers</span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#093257] to-[#93e33d] rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-base">
            We are proud to partner with some of India's most respected brands who trust us for our quality and
            consistency.
          </p>
        </motion.div>

        <div className="relative">
          {/* Auto-scrolling logos container */}
          <div className="overflow-hidden">
            <motion.div className="flex gap-6 items-center" animate={scrollControls} style={{ width: "max-content" }}>
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="flex-shrink-0" style={{ width: "140px" }}>
                  <CustomerLogo
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    bgColor={logo.bgColor}
                  />
                </div>
              ))}

              {/* Duplicate set of logos to create seamless loop */}
              {logos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="flex-shrink-0" style={{ width: "140px" }}>
                  <CustomerLogo
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    bgColor={logo.bgColor}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 italic text-sm">
              "We're honored to supply premium quality products to these industry leaders."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
