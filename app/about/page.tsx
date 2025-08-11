import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Award, Globe, Users, Truck, Target, Leaf, Clock } from "lucide-react"
import { AccordionSection } from "@/components/ui/accordion-section"
import Link from "next/link"

const stats = [
  { number: "1+", label: "Proven Experience", icon: Clock },
  { number: "100+", label: "B2B Clients", icon: Users },
  { number: "1", label: "Country Serving", icon: Globe },
  { number: "50+", label: "Products", icon: Award },
]

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description:
      "We never compromise on quality. Every batch undergoes rigorous testing and quality control processes.",
  },
  {
    icon: Globe,
    title: "Nationwide Reach",
    description: "Serving clients across the Nation with reliable logistics and consistent supply chains.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building long-term partnerships through exceptional service and customized solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Continuous improvement and innovation in our products, processes, and services.",
  },
]

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#093257] to-[#0a4a73] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About EverTruth Foods</h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Your trusted partner in premium nuts, seeds, and dried berries since 2010.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#93e33d] rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-[#093257]" />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-[#93e33d] mb-1">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Optimized Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Accordion Sections for Mobile */}
            <div className="md:hidden space-y-4 mb-12">
              <AccordionSection title="Our Mission" icon={<Target className="w-5 h-5" />} defaultOpen>
                <p className="text-gray-600 leading-relaxed">
                  To provide the highest quality nuts, seeds, and dried berries to B2B clients worldwide while
                  maintaining sustainable practices and building lasting partnerships.
                </p>
              </AccordionSection>

              <AccordionSection title="Our Process" icon={<Leaf className="w-5 h-5" />}>
                <p className="text-gray-600 leading-relaxed mb-3">We follow a rigorous 5-step quality process:</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#93e33d] rounded-full mr-3"></span>
                    Careful sourcing from premium farms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#93e33d] rounded-full mr-3"></span>
                    Advanced processing and packaging
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#93e33d] rounded-full mr-3"></span>
                    Quality testing and certification
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#93e33d] rounded-full mr-3"></span>
                    Temperature-controlled storage
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#93e33d] rounded-full mr-3"></span>
                    Nationwide logistics and delivery
                  </li>
                </ul>
              </AccordionSection>

              <AccordionSection title="Our Global Reach" icon={<Globe className="w-5 h-5" />}>
               <p className="text-gray-600 leading-relaxed mb-3">
                  We serve clients across India with regional offices in:
                </p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="font-medium text-gray-900">North India</div>
                    <div className="text-gray-600">Delhi</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="font-medium text-gray-900">West India</div>
                    <div className="text-gray-600">Mumbai</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="font-medium text-gray-900">South India</div>
                    <div className="text-gray-600">Bengaluru</div>
                  </div>
                </div>
              </AccordionSection>
            </div>

            {/* Desktop Content */}
           <div className="hidden md:block">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Story</h2>
    <div className="prose prose-lg mx-auto text-gray-600">
      <p className="text-xl leading-relaxed mb-6">
        EverTruth Foods began as a vision to bridge the gap between premium quality agricultural products
        and businesses that demand excellence. Founded by a team of agricultural experts and
        business professionals, we started with a simple mission: to provide the highest quality nuts,
        seeds, and dried berries to B2B clients across India.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        What started as a small operation has grown into a leading enterprise, but our core values remain
        unchanged. We believe in building lasting relationships with our suppliers, ensuring fair trade
        practices, and maintaining the highest standards of quality control throughout our supply chain.
      </p>
    </div>
  </div>
</div>

            {/* Values Section */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#93e33d] rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-6 h-6 text-[#093257]" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Two-column sections for mobile */}
            <div className="mt-16 space-y-8">
              {/* Section 1 */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our state-of-the-art facilities maintain the highest standards of food safety and quality control.
                      Every product is tested and certified to meet international standards.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Shield className="w-16 h-16 text-[#093257] mx-auto mb-4" />
                    <div className="text-2xl font-bold text-[#093257]">Quality Approved</div>
                    <div className="text-gray-600">Certified</div>
                  </div>
                </div>
              </div>

              {/* Section 2 - Reversed */}
              <div className="bg-blue-50 rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="md:order-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Nationwide Logistics</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our robust distribution network ensures timely delivery across India with temperature-controlled storage and
                      transportation to maintain product integrity.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center md:order-1">
                    <Truck className="w-16 h-16 text-[#093257] mx-auto mb-4" />
                    <div className="text-2xl font-bold text-[#093257]">24-48h</div>
                    <div className="text-gray-600">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky CTA Button for Mobile */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
          <Button asChild size="lg" className="w-full bg-[#093257] hover:bg-[#0a4a73] text-white font-medium shadow-lg">
            <Link href="/pricing">Get Quote Now</Link>
          </Button>
        </div>

        {/* Desktop CTA */}
        <section className="hidden md:block py-16 bg-[#093257]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
              <p className="text-xl mb-8 text-gray-200">
                Get competitive bulk pricing, reliable delivery, and exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#93e33d] text-[#093257] hover:bg-[#7bc42d] font-medium">
                  <Link href="/pricing">Request Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#093257] bg-transparent"
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
