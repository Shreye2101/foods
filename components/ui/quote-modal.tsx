"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, X } from "lucide-react"

interface QuoteModalProps {
  children: React.ReactNode
  triggerClassName?: string
}

export function QuoteModal({ children, triggerClassName }: QuoteModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className={triggerClassName}>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-md max-h-[90vh] overflow-y-auto p-0 bg-white">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="text-xl font-bold text-gray-900 pr-8">Submit Quote Request</DialogTitle>
          {/* <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button> */}
        </DialogHeader>

        <form className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-sm font-medium">
                Company Name *
              </Label>
              <Input id="companyName" placeholder="Your Company Ltd." className="text-sm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPerson" className="text-sm font-medium">
                Contact Person *
              </Label>
              <Input id="contactPerson" placeholder="John Doe" className="text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <Input id="email" type="email" placeholder="john@company.com" className="text-sm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="country" className="text-sm font-medium">
                Country/Region *
              </Label>
              <Select>
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="in">India</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessType" className="text-sm font-medium">
                Business Type *
              </Label>
              <Select>
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manufacturer">Food Manufacturer</SelectItem>
                  <SelectItem value="distributor">Distributor/Wholesaler</SelectItem>
                  <SelectItem value="retailer">Retailer</SelectItem>
                  <SelectItem value="foodservice">Food Service</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="products" className="text-sm font-medium">
              Products of Interest *
            </Label>
            <Textarea
              id="products"
              placeholder="e.g., Almonds - 1000kg, Chia Seeds - 500kg, Dried Cranberries - 200kg"
              rows={3}
              className="text-sm resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="volume" className="text-sm font-medium">
                Total Monthly Volume
              </Label>
              <Select>
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Select volume" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100-500">100kg - 500kg</SelectItem>
                  <SelectItem value="500-1000">500kg - 1,000kg</SelectItem>
                  <SelectItem value="1000-5000">1,000kg - 5,000kg</SelectItem>
                  <SelectItem value="5000+">5,000kg+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline" className="text-sm font-medium">
                Required Timeline
              </Label>
              <Select>
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                  <SelectItem value="month">Within 1 month</SelectItem>
                  <SelectItem value="quarter">Within 3 months</SelectItem>
                  <SelectItem value="planning">Future planning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements" className="text-sm font-medium">
              Special Requirements
            </Label>
            <Textarea
              id="requirements"
              placeholder="Any special requirements such as organic certification, custom packaging, private labeling, specific processing methods, etc."
              rows={3}
              className="text-sm resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#093257] hover:bg-[#0a4a73] text-white font-medium py-3"
            onClick={() => setOpen(false)}
          >
            <Send className="mr-2 w-4 h-4" />
            Submit Quote Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
