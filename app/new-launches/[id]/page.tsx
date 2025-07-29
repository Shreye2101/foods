"use client"; // This directive is crucial for using hooks like useRouter

import { useRouter } from "next/navigation"; // Correct import for App Router
import { MainLayout } from "@/components/layout/main-layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Package, MapPin, Leaf, FlaskConical, Scale, Tag, Info, CalendarDays, Sparkles } from "lucide-react";

// Your newLaunches data, copied directly from your app/new-launches/page.tsx
// For a real application, consider moving this data to a central file (e.g., data/products.ts)
// and importing it into all relevant detail pages to avoid duplication.
const newLaunches = [
  {
    id: "organic-cashew-blend",
    name: "Organic Cashew Blend",
    description: "Premium organic cashews with a special roasting process for enhanced flavor",
    varieties: ["Lightly Salted", "Herb Seasoned", "Honey Roasted", "Plain"],
    benefits: ["Certified Organic", "Enhanced Flavor", "Premium Quality"],
    moq: "50kg",
    rating: 4.9,
    price: "From $14.50/kg",
    category: "nuts",
    image: "/images/products/cashews-dynamic.webp",
    isNew: true,
    launchDate: "January 2024",
  },
  {
    id: "superfood-seed-mix",
    name: "Superfood Seed Mix",
    description: "Carefully curated blend of chia, flax, pumpkin, and sunflower seeds",
    varieties: ["Original Mix", "Protein Plus", "Omega Boost", "Organic"],
    benefits: ["Complete Nutrition", "Omega-3 Rich", "High Protein"],
    moq: "25kg",
    rating: 4.8,
    price: "From $9.80/kg",
    category: "seeds",
    image: "/images/products/mixed-seeds.jpg",
    isNew: true,
    launchDate: "February 2024",
  },
  {
    id: "premium-date-collection",
    name: "Premium Date Collection",
    description: "Exclusive collection of the finest Medjool and Deglet Noor dates",
    varieties: ["Jumbo Medjool", "Premium Deglet", "Stuffed Dates", "Gift Boxes"],
    benefits: ["Premium Grade", "Natural Sweetness", "Luxury Packaging"],
    moq: "25kg",
    rating: 4.9,
    price: "From $12.90/kg",
    category: "nuts",
    image: "/images/products/dates-basket.webp",
    isNew: true,
    launchDate: "March 2024",
  },
  {
    id: "antioxidant-berry-blend",
    name: "Antioxidant Berry Blend",
    description: "Power-packed blend of goji berries, cranberries, and blueberries",
    varieties: ["Classic Blend", "Tropical Mix", "Organic Blend", "Sugar-Free"],
    benefits: ["Antioxidant Rich", "Immune Support", "Natural Energy"],
    moq: "20kg",
    rating: 4.7,
    price: "From $16.50/kg",
    category: "berries",
    image: "/images/products/dried-berries.jpg",
    isNew: true,
    launchDate: "March 2024",
  },
];

// Define a type for the product to ensure type safety
type Product = typeof newLaunches[0];

// Define props for the page component to receive params from the URL
interface NewLaunchProductDetailPageProps {
  params: {
    id: string; // The dynamic segment from the URL
  };
}

export default function NewLaunchProductDetailPage({ params }: NewLaunchProductDetailPageProps) {
  const { id } = params; // Get the product ID from the params prop

  // Find the product based on the ID
  const product = newLaunches.find((p) => p.id === id);

  // If product is not found, display a loading state or a 404 message
  if (!product) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The product you are looking for does not exist or has been moved.
          </p>
          <Button asChild className="bg-[#093257] hover:bg-[#0a4a73] text-white">
            <Link href="/new-launches"> {/* Back link to the main new launches listing page */}
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to New Launches
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  // Helper function to render details that might be arrays or strings
  const renderDetail = (label: string, value: string | string[] | boolean | undefined, Icon: React.ElementType) => {
    if (value === undefined || (Array.isArray(value) && value.length === 0)) {
      return null; // Don't render if value is empty or undefined
    }

    let displayValue: string;
    if (typeof value === 'boolean') {
      displayValue = value ? "Yes" : "No";
    } else if (Array.isArray(value)) {
      displayValue = value.join(", ");
    } else {
      displayValue = value;
    }

    return (
      <div className="flex flex-col items-start gap-1 p-3 bg-gray-50 rounded-lg shadow-sm flex-1">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-[#093257] flex-shrink-0" />
          <p className="text-xs font-medium text-gray-700">{label}</p>
        </div>
        <p className="text-sm font-semibold text-gray-900">{displayValue}</p>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6 hover:bg-gray-100 transition-colors">
            <Link href="/new-launches"> {/* Back link to the main new launches listing page */}
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to New Launches
            </Link>
          </Button>

          {/* Product Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Product Image */}
            <div className="relative w-full h-80 sm:h-96 lg:h-[400px] lg:max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/616161?text=Image+Not+Found";
                }}
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
              {/* <p className="text-xl text-gray-700 font-semibold">{product.price}</p> */}
              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Key Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {renderDetail("Category", product.category, Tag)}
                {renderDetail("MOQ", product.moq, Scale)}
                {renderDetail("Rating", `${product.rating} / 5`, Star)}
                {renderDetail("Launch Date", product.launchDate, CalendarDays)}
                {product.varieties && renderDetail("Varieties", product.varieties, Leaf)}
                {product.benefits && renderDetail("Key Benefits", product.benefits, FlaskConical)}
                {product.hasOwnProperty('isNew') && renderDetail("New Product", product.isNew, Sparkles)}
                {/* Add more specific properties from newLaunches if needed */}
              </div>

              {/* Call to Action */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#093257] hover:bg-[#0a4a73] text-white font-medium">
                  <Link href="/contact">Inquire About This Product</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  <Link href="/pricing">Get a Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Explore More New Launches (Optional) */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Explore More New Launches</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newLaunches.filter(item => item.id !== product.id).slice(0, 4).map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/new-launches/${relatedProduct.id}`} passHref>
                  <div className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      width={400}
                      height={300}
                      objectFit="cover"
                      className="w-full h-36 sm:h-48"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x300/E0E0E0/616161?text=Image+Not+Found";
                      }}
                    />
                    <div className="p-2 sm:p-4">
                      <h3 className="font-semibold text-sm sm:text-lg text-gray-900 mb-1 line-clamp-1">{relatedProduct.name}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">click to know more</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
