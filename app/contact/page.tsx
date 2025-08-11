"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MessageCircle, Linkedin, Instagram, Send, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const communicationChannels = [
  {
    icon: Phone,
    name: "Call Us",
    detail: "+91 8109429996",
    description: "Mon-Fri 9AM-6PM IST",
    href: "tel:+918109429996",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
  },
  {
    icon: Mail,
    name: "Email Us",
    detail: "info@evertruth.com",
    description: "24-48 hour response",
    href: "mailto:Info@evertruth.com",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    detail: "+91 8109429996",
    description: "Quick messaging",
    href: "https://wa.me/918109429996",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    hoverColor: "hover:bg-emerald-100",
  },
  {
    icon: Linkedin,
    name: "Connect on LinkedIn",
    detail: "EverTruth Foods",
    description: "Professional network",
    href: "https://linkedin.com/company/evertruth-foods",
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
  },
  {
    icon: Instagram,
    name: "Follow on Instagram",
    detail: "@evertruthfoods",
    description: "Latest updates",
    href: "https://instagram.com/evertruthfoods",
    color: "from-pink-500 to-purple-600",
    bgColor: "bg-pink-50",
    hoverColor: "hover:bg-pink-100",
  },
  {
    icon: MapPin,
    name: "Visit Us",
    detail: "Noida, Uttar Pradesh",
    description: "India",
    href: "https://www.google.com/maps/place/Evertruth+Foods/@28.5835979,77.319028,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5d989f66b69:0x22879a811d739c3e!8m2!3d28.5835979!4d77.319028!16s%2Fg%2F11b6d76r1d?entry=ttu",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    hoverColor: "hover:bg-orange-100",
}
]

export default function ContactPage() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const form = e.currentTarget
  const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)?.value || ""
  const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)?.value || ""
  const company = (form.elements.namedItem("company") as HTMLInputElement)?.value || ""
  const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || ""
  const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || ""
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || ""

  const subject = `New Inquiry from ${firstName} ${lastName}`
  const body = `
Name: ${firstName} ${lastName}
Company: ${company}
Email: ${email}
Phone: ${phone}

Message:
${message}
  `

  const mailtoLink = `mailto:Info@evertruth.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoLink
}

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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-br from-[#093257] via-[#0a4a73] to-[#093257] text-white py-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2393e33d' fillOpacity='0.4'%3E%3Cpath d='M25 25m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-10 w-16 h-16 bg-[#93e33d] rounded-full opacity-20"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
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
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Contact Us
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Ready to partner with us? Get in touch with our B2B specialists for quotes, product information, or any
                questions about our services.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Get In Touch Section - Grid Format */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">Choose your preferred way to connect with us</p>
            </motion.div>

            {/* Mobile: 2x3 Grid, Desktop: 3x2 Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {communicationChannels.map((channel, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <motion.a
                    href={channel.href}
                    className="block"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      className={`${channel.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group ${channel.hoverColor} h-full`}
                    >
                      <CardContent className="p-4 md:p-6 text-center flex flex-col justify-center h-full min-h-[140px] md:min-h-[160px]">
                        <motion.div
                          className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-r ${channel.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <channel.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </motion.div>
                        <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-[#093257] transition-colors">
                          {channel.name}
                        </h3>
                        <p className="text-[#093257] font-semibold mb-1 text-xs md:text-sm">{channel.detail}</p>
                        <p className="text-xs text-gray-600">{channel.description}</p>
                      </CardContent>
                    </Card>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-2xl border-0">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Enter Your first Name"
                          className="border-gray-300 focus:border-[#093257] focus:ring-[#093257] transition-colors"
                        />
                      </motion.div>
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Enter Your Last Name"
                          className="border-gray-300 focus:border-[#093257] focus:ring-[#093257] transition-colors"
                        />
                      </motion.div>
                    </div>

                    {/* Company Name */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        placeholder="Enter Your Company Name"
                        className="border-gray-300 focus:border-[#093257] focus:ring-[#093257] transition-colors"
                      />
                    </motion.div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter Your Email Address"
                          className="border-gray-300 focus:border-[#093257] focus:ring-[#093257] transition-colors"
                        />
                      </motion.div>
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          placeholder="+91"
                          className="border-gray-300 focus:border-[#093257] focus:ring-[#093257] transition-colors"
                        />
                      </motion.div>
                    </div>

                    {/* Inquiry Type */}
                    <motion.div
                      className="space-y-2 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Label htmlFor="inquiry" className="text-sm font-semibold text-gray-700">
                        Inquiry Type *
                      </Label>
                      <Select>
                        <SelectTrigger className="border-gray-300 focus:border-[#093257] focus:ring-[#093257]">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white shadow-md rounded-md border border-gray-200">
                          <SelectItem className="cursor-pointer" value="bulk-quote">Bulk Quote Request</SelectItem>
                          <SelectItem className="cursor-pointer" value="product-info">Product Information</SelectItem>
                          <SelectItem className="cursor-pointer" value="samples">Sample Request</SelectItem>
                          <SelectItem className="cursor-pointer" value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem className="cursor-pointer" value="technical">Technical Support</SelectItem>
                          <SelectItem className="cursor-pointer" value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your requirements, including product types, quantities, delivery location, and timeline..."
                        rows={6}
                        className="border-gray-300 focus:border-[#093257] focus:ring-[#093257] transition-colors resize-none"
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      className="pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-[#093257] hover:bg-[#0a4a73] text-white font-semibold py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
