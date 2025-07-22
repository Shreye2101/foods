import type React from "react";
import { Header, AppSidebar } from "./header";
import { Footer } from "./footer";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "../whatsapp-button";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <SidebarProvider defaultOpen={false}>
        <div className="flex min-h-screen">
          <SidebarInset className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </SidebarInset>
          <AppSidebar />
        </div>
      </SidebarProvider>
       <WhatsAppButton phoneNumber="917060288428" message="Hello! I'd like to know more about your services." />
    </div>
  )
}