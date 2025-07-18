import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"

const sections = [
  {
    title: "1. Agreement Overview",
    content: [
      "These Terms and Conditions govern the business relationship between EverTruth Foods and our B2B customers.",
      "By placing an order or engaging our services, you agree to be bound by these terms.",
      "These terms apply to all products, services, and transactions unless otherwise specified in writing.",
      "We reserve the right to modify these terms with 30 days written notice to existing customers.",
    ],
  },
  {
    title: "2. Product Orders and Pricing",
    content: [
      "All orders are subject to acceptance by EverTruth Foods and product availability.",
      "Prices are quoted in USD and are subject to change based on market conditions.",
      "Minimum order quantities (MOQ) apply as specified in our product catalog.",
      "Custom pricing may be available for large volume orders or long-term contracts.",
      "All prices are FOB (Free on Board) our warehouse unless otherwise specified.",
    ],
  },
  {
    title: "3. Payment Terms",
    content: [
      "Payment terms are Net 30 days for approved customers with established credit.",
      "New customers may be required to pay in advance or provide a letter of credit.",
      "Late payments may incur a service charge of 1.5% per month or the maximum allowed by law.",
      "We accept wire transfers, letters of credit, and other approved payment methods.",
      "All bank charges and fees are the responsibility of the customer.",
    ],
  },
  {
    title: "4. Shipping and Delivery",
    content: [
      "Delivery dates are estimates and not guaranteed unless specifically agreed in writing.",
      "Risk of loss transfers to the customer upon delivery to the carrier.",
      "Customers are responsible for inspecting shipments upon receipt.",
      "Claims for damaged or missing products must be reported within 5 business days.",
      "We maintain insurance on shipments but customers may arrange additional coverage.",
    ],
  },
  {
    title: "5. Quality Assurance",
    content: [
      "All products meet or exceed industry standards and specifications.",
      "Certificates of Analysis (COA) are provided with each shipment.",
      "Products are guaranteed to meet specifications at time of shipment.",
      "Quality complaints must be reported within 30 days of receipt.",
      "Our liability is limited to replacement of non-conforming products or credit.",
    ],
  },
  {
    title: "6. Returns and Refunds",
    content: [
      "Returns are only accepted for products that do not meet specifications.",
      "All returns must be pre-authorized and returned in original packaging.",
      "Customers are responsible for return shipping costs unless product is defective.",
      "Perishable products may not be returnable due to food safety regulations.",
      "Refunds will be processed within 30 days of approved return receipt.",
    ],
  },
  {
    title: "7. Intellectual Property",
    content: [
      "All trademarks, logos, and proprietary information remain our property.",
      "Customers may not use our intellectual property without written permission.",
      "Product specifications and formulations are confidential information.",
      "Any custom packaging or private labeling agreements are subject to separate terms.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "Our liability is limited to the value of the specific products in question.",
      "We are not liable for consequential, incidental, or punitive damages.",
      "Customers are responsible for compliance with local laws and regulations.",
      "Force majeure events may excuse performance delays or cancellations.",
      "These limitations apply to the maximum extent permitted by law.",
    ],
  },
  {
    title: "9. Compliance and Regulations",
    content: [
      "Customers are responsible for compliance with import/export regulations.",
      "All products are sold for commercial use and not for direct consumer sale unless specified.",
      "Customers must maintain appropriate licenses and permits for their business.",
      "We comply with all applicable food safety and quality regulations.",
      "Documentation for regulatory compliance is available upon request.",
    ],
  },
  {
    title: "10. Governing Law",
    content: [
      "These terms are governed by the laws of [Jurisdiction] without regard to conflict of law principles.",
      "Any disputes will be resolved through binding arbitration or in the courts of [Jurisdiction].",
      "The prevailing party in any dispute is entitled to reasonable attorney fees.",
      "If any provision is found unenforceable, the remainder of the terms remain in effect.",
    ],
  },
]

export default function TermsPage() {
  return (
    <MainLayout>
      <div className="py-12">
        {/* Header */}
        <section className="primary-bg text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FileText className="w-8 h-8 text-[#93e33d]" />
                <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
              </div>
              <p className="text-xl text-gray-200 mb-6">
                Please read these terms carefully as they govern our business relationship and all transactions.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: January 1, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Version 2.1</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-3 p-4 bg-yellow-100 border border-yellow-200 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
                  <p className="text-yellow-700 text-sm">
                    These terms constitute a legally binding agreement. By conducting business with EverTruth Foods, you
                    acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                      <div className="space-y-4">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-600 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Information */}
              <Card className="mt-12 bg-gray-50">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about these terms and conditions, please contact our legal department.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-[#093257] hover:bg-[#0a4a73] text-white font-medium">
                      <Link href="/contact">Contact Legal Team</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    >
                      <a href="mailto:legal@evertruthfoods.com">legal@evertruthfoods.com</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Download Options */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Need a copy for your records?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    Print Version
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
