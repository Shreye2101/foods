"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  ]

  const navigationLinks = [
    { name: "About Us", href: "/about" },
    { name: "Product Catalog", href: "/catalog" },
    { name: "Bulk Pricing", href: "/pricing" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
    { name: "Premium Nuts", href: "/catalog/nuts" },
    { name: "Nutritious Seeds", href: "/catalog/seeds" },
    { name: "Dried Berries", href: "/catalog/berries" },
    { name: "New Launches", href: "/new-launches" },
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@evertruthfoods.com",
      href: "mailto:info@evertruthfoods.com",
      description: "24-48 hour response",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Noida, Uttar Pradesh, India",
      href: "#",
      description: "Visit our facility",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-[#093257] via-[#0a4a73] to-[#093257] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2393e33d' fillOpacity='0.4'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Company Info & Social */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-20 h-12">
                <Image src="/images/logo-new.png" alt="EverTruth Foods" fill className="object-contain" sizes="80px" />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Premium quality nuts, seeds, and dried berries for B2B clients worldwide.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={social.href}
                    className={`p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 ${social.color} group`}
                  >
                    <social.icon className="w-5 h-5 transition-colors duration-300" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-6 text-[#93e33d]">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {navigationLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-[#93e33d] transition-colors duration-300 py-1 text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-semibold text-lg text-[#93e33d]">Contact Info</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={contact.href}
                    className="flex items-start gap-3 hover:text-[#93e33d] transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-[#93e33d] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-5 h-5 text-[#093257]" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-[#93e33d] transition-colors duration-300">
                        {contact.value}
                      </p>
                      <p className="text-sm text-gray-400">{contact.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm mb-2">
                Premium quality nuts, seeds, and dried berries for B2B clients worldwide.
              </p>
              <p className="text-gray-400 text-sm">
                © 2025 EverTruth Foods. Noida, Uttar Pradesh, India. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-[#93e33d] text-sm transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-[#93e33d] text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
