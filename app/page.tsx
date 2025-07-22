import { MainLayout } from "@/components/layout/main-layout"
import { HeroSection } from "@/components/sections/hero-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { FeaturesSection } from "@/components/sections/features-section"
import TrustedCustomers from "../components/Trusted-customer"
import { WhatsAppButton } from "@/components/whatsapp-button"
export default function HomePage() {
  return (
    <>
    <MainLayout>
      <HeroSection />
      <CategoriesSection />
      <FeaturesSection />
      <TrustedCustomers />
    </MainLayout>
     <WhatsAppButton phoneNumber="917060288428" message="Hello! I'd like to know more about your services." />
    </>
  )
}
