import type React from "react"
import { Header, AppSidebar } from "./header"
import { Footer } from "./footer"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { WhatsAppButton } from "../whatsapp-button"
import { WelcomePopup } from "../WelcomePopup"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SidebarProvider defaultOpen={false}>
        <div className="flex min-h-screen  w-screen overflow-x-hidden">
          <SidebarInset className="w-0 flex-1 flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1 w-full pt-16">{children}</main>
            <Footer />
          </SidebarInset>
          <AppSidebar />
        </div>
      </SidebarProvider>
      {/* <WelcomePopup/> */}
      <WhatsAppButton phoneNumber="918109429996" message="Hello! I'd like to know more about your services." />
    </div>
  )
}
