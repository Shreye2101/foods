"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ContactMethod {
  icon: React.ElementType
  title: string
  primary: string
  secondary?: string
  action?: () => void
  href?: string
}

const contactMethods: ContactMethod[] = [
  {
    icon: Phone,
    title: "Phone Support",
    primary: "+1 (555) 123-4567",
    secondary: "Mon-Fri 9AM-6PM EST",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email Support",
    primary: "sales@evertruthfoods.com",
    secondary: "24-48 hour response",
    href: "mailto:Info@evertruth.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "123 Business District",
    secondary: "New York, NY 10001",
  },
  {
    icon: Clock,
    title: "Business Hours",
    primary: "Mon-Fri: 9AM-6PM",
    secondary: "Sat: 10AM-4PM",
  },
]

export function ContactAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {contactMethods.map((method, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#093257] rounded-full flex items-center justify-center">
                <method.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{method.title}</h3>
                <p className="text-sm text-gray-600">{method.primary}</p>
              </div>
            </div>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-gray-400 transition-transform duration-200",
                openIndex === index && "rotate-180",
              )}
            />
          </button>

          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              openIndex === index ? "max-h-32 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="px-4 pb-4 pt-2 bg-gray-50">
              {method.secondary && <p className="text-sm text-gray-600 mb-3">{method.secondary}</p>}
              {method.href && (
                <Button asChild size="sm" className="bg-[#093257] hover:bg-[#0a4a73] text-white">
                  <a href={method.href}>
                    {method.icon === Phone ? "Call Now" : method.icon === Mail ? "Send Email" : "Get Directions"}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
