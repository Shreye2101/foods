import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Star, Globe, Award, TrendingUp, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

const customerStats = [
  { number: "1000+", label: "Active B2B Clients", icon: Users },
  { number: "50+", label: "Countries Served", icon: Globe },
  { number: "98%", label: "Customer Satisfaction", icon: Star },
  { number: "14+", label: "Years of Excellence", icon: Award },
]

const testimonials = [
  {
    company: "Global Snacks Inc.",
    industry: "Food Manufacturing",
    location: "United States",
    testimonial:
      "EverTruth Foods has been our trusted partner for over 5 years. Their consistent quality and reliable delivery have helped us maintain our production schedules without any disruptions.",
    contact: "Sarah Johnson, Procurement Manager",
    rating: 5,
    products: ["Almonds", "Cashews", "Dried Cranberries"],
  },
  {
    company: "European Health Foods Ltd.",
    industry: "Health Food Distribution",
    location: "United Kingdom",
    testimonial:
      "The organic certification and traceability documentation provided by EverTruth Foods exceeds our requirements. Their customer service team is always responsive and professional.",
    contact: "Marcus Weber, Quality Director",
    rating: 5,
    products: ["Organic Seeds", "Goji Berries", "Walnuts"],
  },
  {
    company: "Asia Pacific Nutrition",
    industry: "Nutritional Supplements",
    location: "Singapore",
    testimonial:
      "Working with EverTruth Foods has streamlined our supply chain significantly. Their flexible packaging options and competitive pricing have improved our margins.",
    contact: "Li Wei, Supply Chain Director",
    rating: 5,
    products: ["Chia Seeds", "Flax Seeds", "Pumpkin Seeds"],
  },
]

const industrySegments = [
  {
    title: "Food Manufacturing",
    description: "Large-scale food processors and manufacturers",
    clients: "400+",
    icon: TrendingUp,
    examples: ["Snack Food Companies", "Bakery Manufacturers", "Cereal Producers"],
  },
  {
    title: "Health & Wellness",
    description: "Health food stores and wellness brands",
    clients: "250+",
    icon: Shield,
    examples: ["Supplement Companies", "Health Food Retailers", "Organic Brands"],
  },
  {
    title: "Food Service",
    description: "Restaurants, cafes, and catering companies",
    clients: "200+",
    icon: Users,
    examples: ["Restaurant Chains", "Catering Services", "Hotel Groups"],
  },
  {
    title: "Retail Distribution",
    description: "Wholesale and retail distribution networks",
    clients: "150+",
    icon: Globe,
    examples: ["Wholesale Distributors", "Retail Chains", "E-commerce Platforms"],
  },
]

const successStories = [
  {
    title: "50% Cost Reduction",
    company: "Premium Snacks Co.",
    description: "Achieved significant cost savings through our bulk pricing and optimized logistics solutions.",
    metric: "Annual Savings: $2.3M",
  },
  {
    title: "Zero Quality Issues",
    company: "Organic Foods Ltd.",
    description: "Maintained perfect quality record for 3 consecutive years with our premium organic products.",
    metric: "Quality Score: 100%",
  },
  {
    title: "Global Expansion",
    company: "Health Nutrition Inc.",
    description: "Supported expansion into 15 new markets with reliable supply chain and documentation.",
    metric: "Markets Served: 15",
  },
]

export default function CustomersPage() {
  return (
    <MainLayout>
      <div className="py-12">
        {/* Header */}
        <section className="primary-bg text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-8 h-8 text-[#93e33d]" />
                <h1 className="text-4xl md:text-5xl font-bold">Our Valued Customers</h1>
              </div>
              <p className="text-xl text-gray-200 mb-8">
                Trusted by leading companies worldwide for premium quality nuts, seeds, and dried fruits. Join our
                growing family of satisfied B2B partners.
              </p>
              <Button size="lg" className="secondary-bg text-[#093257] hover:bg-[#7bc42d] font-medium">
                <Link href="/contact">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Customer Stats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Worldwide</h2>
                <p className="text-xl text-gray-600">Numbers that speak to our commitment and reliability</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {customerStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-[#093257] rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#093257] mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Segments */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
                <p className="text-xl text-gray-600">Specialized solutions for diverse industry needs</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {industrySegments.map((segment, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-[#93e33d] rounded-full flex items-center justify-center mx-auto mb-4">
                        <segment.icon className="w-8 h-8 text-[#093257]" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{segment.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{segment.description}</p>
                      <Badge className="bg-[#093257] text-white mb-4">{segment.clients} Clients</Badge>
                      <div className="space-y-1">
                        {segment.examples.map((example, exIndex) => (
                          <div key={exIndex} className="text-xs text-gray-500">
                            {example}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                <p className="text-xl text-gray-600">Real feedback from our valued B2B partners</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.testimonial}"</p>
                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-gray-900">{testimonial.company}</h4>
                        <p className="text-sm text-gray-600 mb-2">{testimonial.contact}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                          <span>{testimonial.industry}</span>
                          <span>•</span>
                          <span>{testimonial.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {testimonial.products.map((product, pIndex) => (
                            <Badge key={pIndex} variant="outline" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <p className="text-xl text-gray-600">How we've helped our customers achieve their goals</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {successStories.map((story, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-[#93e33d] rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-[#093257]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#093257] mb-2">{story.title}</h3>
                      <h4 className="font-semibold text-gray-900 mb-3">{story.company}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                      <Badge className="bg-[#093257] text-white">{story.metric}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Portal */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-[#093257] to-[#0a4a73] text-white">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Existing Customer?</h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Access your dedicated customer portal for order tracking, documentation, and account management.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="secondary-bg text-[#093257] hover:bg-[#7bc42d] font-medium">
                      Customer Portal Login
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-[#093257] bg-transparent"
                    >
                      <Link href="/contact">Contact Account Manager</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Join Our Network */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Network?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the EverTruth Foods difference. Join thousands of satisfied customers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#093257] hover:bg-[#0a4a73] text-white font-medium">
                  <Link href="/pricing">Get Started Today</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
