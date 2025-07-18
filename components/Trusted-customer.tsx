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
          boxShadow: "0 0 15px rgba(138, 179, 62, 0.3)",
        }}
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Main content */}
      <div
        className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex items-center justify-center h-32 relative z-10 ${bgColor ? bgColor : ""}`}
      >
        <div className="relative h-full w-full flex items-center justify-center">
          <motion.div animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }} transition={{ duration: 0.3 }}>
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
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-md z-20 whitespace-nowrap"
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
    { src: "images/farmley-logo.png", alt: "Farmley", width: 180, height: 60 },
    { src: "images/hyperpure-zomato.png", alt: "Zomato Hyperpure", width: 180, height: 100 },
    { src: "images/whole-truth-logo.png", alt: "Whole Truth", width: 200, height: 100 },
    { src: "images/yogabar-logo.jpg", alt: "Yoga Bar", width: 150, height: 150 },
    { src: "images/open-secret-logo.png", alt: "Open Secret", width: 180, height: 80 },
    { src: "images/happilo-logo.jpg", alt: "Happilo", width: 180, height: 80 },
    { src: "images/Reliance-logo.png", alt: "Reliance", width: 180, height: 100 },
    { src: "images/Cornitos_logo.jpg", alt: "Cornitos", width: 180, height: 100, bgColor: "bg-white" },
  ]

  useEffect(() => {
    if (isInView) {
      const startScrolling = async () => {
        while (true) {
          await scrollControls.start({
            x: [0, -1920],
            transition: { duration: 20, ease: "linear" },
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
  }, [isInView, scrollControls])

  return (
    <section
      id="trusted-customers"
      className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-green-600/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#d5b684]/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-green-600 rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-[#d5b684] rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 border-2 border-green-600 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 border-2 border-[#d5b684] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="text-[#d5b684]">Our Trusted</span> <span className="text-green-600">Customers</span>
            <motion.div
              className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-[#d5b684] to-green-600"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-6 text-lg">
            We are proud to partner with some of India's most respected brands who trust us for our quality and
            consistency.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Auto-scrolling logos */}
          <div className="w-full overflow-hidden">
            <motion.div className="flex gap-8 items-center" animate={scrollControls} style={{ width: "fit-content" }}>
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="w-[180px] flex-shrink-0">
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
                <div key={`logo-2-${index}`} className="w-[180px] flex-shrink-0">
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
            <p className="text-gray-600 italic">
              "We're honored to supply premium quality products to these industry leaders."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
