import type React from "react"
import { Header, AppSidebar } from "./header"
import { Footer } from "./footer"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

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
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </SidebarInset>
          <AppSidebar />
        </div>
      </SidebarProvider>
    </div>
  )
}
