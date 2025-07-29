"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { HelpCircle, Search, Package, Truck, Shield, DollarSign } from "lucide-react"
import { AccordionSection } from "@/components/ui/accordion-section"
import Link from "next/link"
import { motion } from "framer-motion"

const faqCategories = [
  {
    title: "Product Information",
    icon: Package,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    faqs: [
      {
        question: "What types of certifications do your products have?",
        answer:
          "Our products come with various certifications including HACCP, ISO 22000, Organic (USDA/EU), Non-GMO, Kosher, and Halal certifications. Specific certifications vary by product and can be provided upon request.",
      },
      {
        question: "How do you ensure product quality and freshness?",
        answer:
          "We maintain strict quality control through temperature-controlled storage, regular testing, proper packaging, and fast turnover. All products are stored in optimal conditions and shipped with quality guarantees.",
      },
      {
        question: "Can you provide custom packaging and private labeling?",
        answer:
          "Yes, we offer comprehensive custom packaging solutions including private labeling, custom bag sizes, branded packaging, and specialized packaging for different market requirements.",
      },
      {
        question: "What is the shelf life of your products?",
        answer:
          "Shelf life varies by product: Nuts (12-24 months), Seeds (12-18 months), Dried Berries (12-24 months). All products are shipped with at least 75% of shelf life remaining.",
      },
    ],
  },
  {
    title: "Ordering & Pricing",
    icon: DollarSign,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    faqs: [
      {
        question: "What are your minimum order quantities (MOQ)?",
        answer:
          "MOQs vary by product: Nuts (typically 100kg), Seeds (25-50kg), Dried Berries (25-50kg). We can accommodate smaller quantities for trial orders or new customers.",
      },
      {
        question: "How is pricing determined?",
        answer:
          "Pricing is based on product type, quantity, packaging requirements, certifications needed, and current market conditions. Volume discounts are available for larger orders.",
      },
      {
        question: "Do you offer samples?",
        answer:
          "Yes, we provide free samples (up to 500g per product) for qualified B2B customers. Sample shipping costs may apply depending on location.",
      },
      {
        question: "What payment terms do you offer?",
        answer:
          "We offer flexible payment terms: 30-day terms for established customers, Letter of Credit, Wire Transfer, and other arrangements based on order size and customer relationship.",
      },
    ],
  },
  {
    title: "Shipping & Logistics",
    icon: Truck,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    faqs: [
      {
        question: "Which countries do you ship to?",
        answer:
          "We ship to 50+ countries worldwide including North America, Europe, Asia-Pacific, and select markets in other regions. Contact us for specific country availability.",
      },
      {
        question: "How long does shipping take?",
        answer:
          "Shipping times vary by destination: Domestic (2-5 days), North America (5-10 days), Europe (7-14 days), Asia-Pacific (10-21 days). Express shipping options available.",
      },
      {
        question: "How do you handle temperature-sensitive products?",
        answer:
          "We use temperature-controlled logistics, insulated packaging, and cold chain management for sensitive products. Real-time temperature monitoring is available for premium shipments.",
      },
      {
        question: "What are your shipping costs?",
        answer:
          "Shipping costs depend on destination, weight, volume, and service level. We provide detailed shipping quotes with all orders and offer freight optimization for large shipments.",
      },
    ],
  },
  {
    title: "Quality & Compliance",
    icon: Shield,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    faqs: [
      {
        question: "How do you handle quality complaints?",
        answer:
          "We have a comprehensive quality complaint process: immediate investigation, product replacement or credit, root cause analysis, and preventive measures implementation.",
      },
      {
        question: "Do you provide Certificates of Analysis (COA)?",
        answer:
          "Yes, we provide detailed COAs for all shipments including nutritional analysis, microbiological testing, pesticide residue testing, and other relevant quality parameters.",
      },
      {
        question: "Are your facilities audited?",
        answer:
          "Our facilities undergo regular third-party audits for food safety, quality management, and certification compliance. Audit reports are available upon request.",
      },
      {
        question: "How do you ensure traceability?",
        answer:
          "We maintain complete traceability from farm to customer through lot tracking, supplier documentation, processing records, and shipping documentation.",
      },
    ],
  },
]

export default function FAQsPage() {
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
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
        {/* Enhanced Header */}
        <section className="relative bg-gradient-to-br from-[#093257] via-[#0a4a73] to-[#093257] text-white py-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2393e33d' fillOpacity='0.3'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <HelpCircle className="w-8 h-8 text-[#93e33d]" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
              </div>
              <p className="text-xl text-gray-200 mb-8">
                Find answers to common questions about our products, services, and processes. Can't find what you're
                looking for? Contact our support team.
              </p>

              {/* Enhanced Search Bar */}
              <motion.div
                className="max-w-md mx-auto relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search FAQs..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
              <p className="text-xl text-gray-600">Find answers organized by topic</p>
            </motion.div>

            <motion.div
              className="max-w-5xl mx-auto space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {faqCategories.map((category, categoryIndex) => (
                <motion.div key={categoryIndex} variants={categoryVariants}>
                  <Card
                    className={`${category.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <category.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      </div>

                      <div className="space-y-4">
                        {category.faqs.map((faq, faqIndex) => (
                          <AccordionSection
                            key={faqIndex}
                            title={faq.question}
                            defaultOpen={categoryIndex === 0 && faqIndex === 0}
                          >
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </AccordionSection>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Contact Support */}
        <section className="py-16">
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
                      <HelpCircle className="w-8 h-8 text-[#093257]" />
                    </motion.div>
                    <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                    <p className="text-xl text-gray-200 mb-8">
                      Our expert team is here to help with any questions not covered in our FAQ section.
                    </p>
                    <di className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          href="/contact"
                          className="inline-flex items-center px-6 py-3 bg-[#93e33d] text-[#093257] hover:bg-[#7bc42d] font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Contact Support Team
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                        <a
                          href="tel:+15551234567"
                          className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-[#093257] font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Call: +91 810-942-9996
                        </a>
                      </motion.div>
                    </di                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
