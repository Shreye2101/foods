"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, Package, DollarSign, HelpCircle, Mail, Info, FileText, Users, Rss } from "lucide-react"
import { QuoteModal } from "../ui/quote-modal"

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "New Launches", href: "/new-launches", icon: Package },
  { name: "Product Catalog", href: "/catalog", icon: Package },
  { name: "Pricing / Bulk Inquiry", href: "/pricing", icon: DollarSign },
  { name: "FAQs", href: "/faqs", icon: HelpCircle },
  { name: "Contact Us", href: "/contact", icon: Mail },
]

const sidebarItems = [
  { name: "About Us", href: "/about", icon: Info },
  { name: "Terms & Conditions", href: "/terms", icon: FileText },
  { name: "Blogs", href: "/blogs", icon: Rss },
  { name: "Customer Section", href: "/customers", icon: Users },
]

export function AppSidebar() {
  return (
    <Sidebar side="right" variant="sidebar" className="border-l border-gray-200 bg-white">
      <SidebarHeader className="border-b border-gray-100 bg-white p-6">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-8">
            <Image src="/images/logo-new.png" alt="EverTruth Foods" fill className="object-contain" sizes="48px" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-gray-900 text-sm">B2B Solutions</span>
            <span className="text-xs text-gray-500">Premium Quality</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <SidebarMenu className="p-4">
          <div className="px-2 py-2 text-gray-400 font-medium text-xs uppercase tracking-wider">Navigation</div>
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                className="text-gray-700 hover:bg-gray-50 hover:text-[#093257] transition-colors mx-0 rounded-md font-normal"
              >
                <Link href={item.href} className="flex items-center gap-3 px-3 py-2.5">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <div className="border-t border-gray-100 mx-4"></div>

        <SidebarMenu className="p-4">
          <div className="px-2 py-2 text-gray-400 font-medium text-xs uppercase tracking-wider">More</div>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                className="text-gray-700 hover:bg-gray-50 hover:text-[#093257] transition-colors mx-0 rounded-md font-normal"
              >
                <Link href={item.href} className="flex items-center gap-3 px-3 py-2.5">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 bg-white">
        {/* Left side - Logo only */}
       <Link href="/" className="flex items-center">
  <div className="relative w-28 h-16 md:w-32 md:h-20 font-medium">
    <Image
      src="/images/logo-new.png"
      alt="EverTruth Foods"
      fill
      className="object-contain"
      sizes="(max-width: 768px) 128px, 160px"
    />
  </div>
</Link>


        {/* Right side - CTA Button and Sidebar trigger */}
        <div className="flex items-center gap-3">
          <QuoteModal>
          <Button
            size="sm"
            className="bg-[#093257] hover:bg-[#0a4a73] text-white font-medium px-4 py-2 rounded-md transition-colors"
          >
            Get Quote
          </Button>
          </QuoteModal>
          <SidebarTrigger className="p-2 hover:bg-gray-100 rounded-md transition-colors" />
        </div>
      </div>
    </header>
  )
}
