import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Shield, AlertTriangle, Lock } from "lucide-react"; // Added Lock icon for privacy
import Link from "next/link";

// Define the content for the Privacy Policy sections
const privacySections = [
  {
    title: "1. Introduction and Scope",
    content: [
      "This Privacy Policy describes how EverTruth Foods collects, uses, and shares your personal information when you visit or make a purchase from our website and engage in business with us.",
      "By using our services, you agree to the collection and use of information in accordance with this policy.",
      "This policy applies to all data collected through our website, communications, and business interactions.",
      "We are committed to protecting your privacy and handling your data transparently.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "We collect various types of information to provide and improve our services to you.",
      "**Personal Identification Information:** Name, email address, phone number, company name, and billing/shipping addresses.",
      "**Transactional Data:** Details about products purchased, payment methods (though we do not store full credit card numbers), and order history.",
      "**Technical Data:** IP address, browser type, operating system, referring URLs, and website usage patterns collected via cookies and analytics tools.",
      "**Communication Data:** Records of your correspondence with us, including emails and chat logs.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "We use the collected information for various purposes, including:",
      "**To Process Orders:** Fulfilling your orders, managing payments, and arranging for shipping and delivery.",
      "**To Provide Services:** Operating, maintaining, and improving our website and business operations.",
      "**For Communication:** Sending order confirmations, updates, marketing materials (with consent), and responding to inquiries.",
      "**For Analytics and Improvement:** Understanding how our services are used to enhance user experience and product offerings.",
      "**For Security and Fraud Prevention:** Protecting our website and customers from fraudulent activities and ensuring data integrity.",
      "**To Comply with Legal Obligations:** Adhering to applicable laws and regulations.",
    ],
  },
  {
    title: "4. Data Sharing and Disclosure",
    content: [
      "We may share your personal information with third parties only in specific circumstances:",
      "**Service Providers:** We engage third-party companies and individuals to facilitate our services (e.g., payment processors, shipping companies, IT service providers). These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
      "**Business Transfers:** In the event of a merger, acquisition, or asset sale, your personal information may be transferred.",
      "**Legal Requirements:** We may disclose your personal information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
      "**With Your Consent:** We may share your information with other third parties when we have your explicit consent to do so.",
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "The security of your data is paramount to us. We implement a variety of security measures to maintain the safety of your personal information.",
      "These measures include encryption, firewalls, and secure socket layer (SSL) technology for data transmission.",
      "Access to your personal data is restricted to employees, agents, contractors, and other third parties who have a business need to know.",
      "While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the Internet or method of electronic storage is 100% secure.",
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.",
      "We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.",
      "We will also retain usage data for internal analysis purposes. Usage data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our service, or we are legally obligated to retain this data for longer periods.",
    ],
  },
  {
    title: "7. Your Data Protection Rights",
    content: [
      "Depending on your location, you may have the following data protection rights:",
      "**The right to access:** You have the right to request copies of your personal data.",
      "**The right to rectification:** You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.",
      "**The right to erasure:** You have the right to request that we erase your personal data, under certain conditions.",
      "**The right to restrict processing:** You have the right to request that we restrict the processing of your personal data, under certain conditions.",
      "**The right to object to processing:** You have the right to object to our processing of your personal data, under certain conditions.",
      "**The right to data portability:** You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
      "To exercise any of these rights, please contact us using the details provided below.",
    ],
  },
  {
    title: "8. Changes to This Privacy Policy",
    content: [
      "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
      "We will let you know via email and/or a prominent notice on our service, prior to the change becoming effective and update the 'Last updated' date at the top of this Privacy Policy.",
      "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      "If you have any questions about this Privacy Policy, our data practices, or your rights, please contact us:",
      "**By email:** privacy@evertruthfoods.com",
      "**By visiting this page on our website:** [Link to Contact Page]",
      "**By mail:** EverTruth Foods, [Your Company Address], Noida, Uttar Pradesh, India.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="py-12">
        {/* Header */}
        <section className="primary-bg text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Lock className="w-8 h-8 text-[#93e33d]" /> {/* Changed icon to Lock */}
                <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
              </div>
              <p className="text-xl text-gray-200 mb-6">
                Your privacy is important to us. This policy explains how we collect, use, and protect your data.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: July 22, 2025</span> {/* Updated date */}
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Version 1.0</span> {/* Initial version */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-blue-50"> {/* Changed background color for distinction */}
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-3 p-4 bg-blue-100 border border-blue-200 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" /> {/* Icon remains AlertTriangle for notice */}
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Your Privacy Matters</h3>
                  <p className="text-blue-700 text-sm">
                    We are committed to protecting your personal data and ensuring your privacy. Please read this policy carefully to understand our practices regarding your information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {privacySections.map((section, index) => (
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

              {/* Contact Information for Privacy */}
              <Card className="mt-12 bg-gray-50">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Your Privacy?</h2>
                  <p className="text-gray-600 mb-6">
                    If you have any questions or concerns regarding this Privacy Policy or your data, please contact our Data Protection Officer.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-[#093257] hover:bg-[#0a4a73] text-white font-medium">
                      <Link href="/contact">Contact Privacy Team</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    >
                      <a href="mailto:privacy@evertruthfoods.com">privacy@evertruthfoods.com</a>
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
  );
}
