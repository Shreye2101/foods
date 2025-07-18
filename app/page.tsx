import { MainLayout } from "@/components/layout/main-layout"
import { HeroSection } from "@/components/sections/hero-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <CategoriesSection />
      <FeaturesSection />
      <CTASection />
    </MainLayout>
  )
}
