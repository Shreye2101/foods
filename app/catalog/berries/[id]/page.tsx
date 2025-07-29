"use client"; // This directive is crucial for using hooks like useRouter

import { useRouter } from "next/navigation"; // Correct import for App Router
import { MainLayout } from "@/components/layout/main-layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Package, MapPin, Leaf, FlaskConical, Scale, Tag, Info } from "lucide-react";

// Your berriesProducts data, copied directly from your app/catalog/berries/page.tsx
// For a real application, consider moving this data to a central file (e.g., data/products.ts)
// and importing it into all relevant detail pages to avoid duplication.
const berriesProducts = [
  {
    id: "dried-cranberry",
    name: "Dried Cranberry",
    description: "Sweet and tart dried cranberries, perfect for snacks, baking, and cereals.",
    varieties: ["Whole", "Sliced", "Sweetened", "Unsweetened"],
    benefits: ["Rich in Antioxidants", "Urinary Tract Health", "High in Fiber"],
    moq: "11.34kg",
    rating: 4.7,
    price: "From $9.50/kg",
    category: "berries",
    image: "/images/products/cannberries.jpg",
    origin: "USA, Canada",
    type: ["Whole", "Sliced"],
    packing: "11.34 Kg carton",
  },
  {
    id: "dried-blueberry",
    name: "Dried Blueberry",
    description: "Plump and flavorful dried blueberries, packed with natural goodness.",
    varieties: ["Sweetened", "Unsweetened", "Organic"],
    benefits: ["Antioxidant Powerhouse", "Brain Health", "Eye Health"],
    moq: "1kg pouch in 10kg box",
    rating: 4.8,
    price: "From $12.00/kg",
    category: "berries",
    image: "/images/products/blueberries.jpg",
    origin: "USA, Canada, China",
    packing: "1 Kg pouch in 10kg box",
  },
  {
    id: "turkish-apricot",
    name: "Turkish Apricot",
    description: "Sun-dried Turkish apricots, naturally sweet and chewy, ideal for snacking and cooking.",
    varieties: ["Size 0,1, 2,3"],
    benefits: ["Rich in Vitamin A", "High in Fiber", "Potassium Source"],
    moq: "12.5kg",
    rating: 4.6,
    price: "From $6.50/kg",
    category: "dried-fruits", // Note: This is 'dried-fruits' category
    image: "/images/products/turkish-apricots.jpg",
    origin: "Turkey",
    size: ["Size 0,1", "2,3"],
    packing: "12.5 Kg carton box",
  },
  {
    id: "dried-prunes",
    name: "Dried Prunes",
    description: "Sweet and succulent dried prunes, known for their digestive benefits.",
    varieties: ["30/40", "40/50", "50/60"],
    benefits: ["Digestive Health", "High in Fiber", "Bone Health"],
    moq: "11.34kg",
    rating: 4.7,
    price: "From $5.80/kg",
    category: "dried-fruits",
    image: "/images/products/prunes.jpg",
    origin: "USA, Chile, Argentina",
    size: ["30/40", "40/50", "50/60"],
    packing: "11.34 Kg, 12.5 Kg box",
  },
  {
    id: "dried-mango",
    name: "Dried Mango",
    description: "Chewy and naturally sweet dried mango pieces, a tropical delight.",
    varieties: ["Low sugar", "High sugar", "Diced", "Sliced", "Cube"],
    benefits: ["Rich in Vitamin C", "Good for Digestion", "Immune Support"],
    moq: "1kg pouch in 10kg box",
    rating: 4.8,
    price: "From $8.00/kg",
    category: "dried-fruits",
    image: "/images/products/dried-mango.avif",
    origin: "India, Thailand",
    type: ["Low sugar", "High sugar"],
    shape: ["Diced", "sliced", "cube"],
    packing: "1 Kg pouch in 10kg box",
  },
  {
    id: "dried-kiwi",
    name: "Dried Kiwi",
    description: "Vibrant green dried kiwi slices, offering a tangy and sweet flavor.",
    varieties: ["Sliced", "Diced", "Sweetened"],
    benefits: ["High in Vitamin C", "Fiber Rich", "Antioxidants"],
    moq: "1kg pouch in 10kg box",
    rating: 4.7,
    price: "From $9.00/kg",
    category: "dried-fruits",
    image: "/images/products/dried-kiwi.jpg",
    origin: "Thailand, India, China",
    shape: ["Sliced", "Diced"],
    packing: "1 Kg pouch in 10kg box",
  },
  {
    id: "dried-papaya",
    name: "Dried Papaya",
    description: "Sweet and tender dried papaya pieces, a delightful tropical snack.",
    varieties: ["Low sugar", "High sugar", "Diced", "Sliced"],
    benefits: ["Digestive Enzymes", "Vitamin C Source", "Antioxidant Support"],
    moq: "1kg pouch in 10kg box",
    rating: 4.5,
    price: "From $7.00/kg",
    category: "dried-fruits",
    image: "/images/products/dried-papaya.avif",
    origin: "India, Thailand",
    shape: ["Diced", "Sliced"],
    type: ["Low sugar", "High sugar"],
    packing: "1 Kg pouch in 10kg box",
  },
  {
    id: "dried-pineapple",
    name: "Dried Pineapple",
    description: "Chewy and tangy dried pineapple rings, a sweet and tropical treat.",
    varieties: ["Sliced", "Coin", "Low sugar", "High sugar"],
    benefits: ["Rich in Vitamin C", "Bromelain Source", "Digestive Aid"],
    moq: "1kg pouch in 10kg box",
    rating: 4.6,
    price: "From $7.50/kg",
    category: "dried-fruits",
    image: "/images/products/dried-pineapple.webp",
    origin: "India, Thailand",
    shape: ["Sliced", "Coin"],
    type: ["Low sugar", "High sugar"],
    packing: "1 Kg pouch in 10kg box",
  },
];

// Define a type for the product to ensure type safety
type Product = typeof berriesProducts[0];

// Define props for the page component to receive params from the URL
interface ProductDetailPageProps {
  params: {
    id: string; // The dynamic segment from the URL
  };
}

export default function BerriesProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = params; // Get the product ID from the params prop

  // Find the product based on the ID
  const product = berriesProducts.find((p) => p.id === id);

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
            <Link href="/catalog/berries"> {/* Back link to the main berries listing page */}
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Berries Collection
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  // Helper function to render details that might be arrays or strings
  const renderDetail = (label: string, value: string | string[] | undefined, Icon: React.ElementType) => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return null; // Don't render if value is empty or undefined
    }

    const displayValue = Array.isArray(value) ? value.join(", ") : value;

    return (
      // Adjusted padding and font sizes for smaller screens, added flex-1 for grid item sizing
      <div className="flex flex-col items-start gap-1 p-3 bg-gray-50 rounded-lg shadow-sm flex-1">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-[#093257] flex-shrink-0" /> {/* Slightly smaller icon */}
          <p className="text-xs font-medium text-gray-700">{label}</p> {/* Smaller label */}
        </div>
        <p className="text-sm font-semibold text-gray-900">{displayValue}</p> {/* Smaller value text */}
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6 hover:bg-gray-100 transition-colors">
            <Link href="/catalog/berries"> {/* Back link to the main berries listing page */}
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Berries Collection
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
              <p className="text-xl text-gray-700 font-semibold">{product.price}</p>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Key Details Grid - Now uses grid-cols-2 for all screen sizes (default) and sm:grid-cols-3 for larger mobiles/tablets */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {renderDetail("Category", product.category, Tag)}
                {renderDetail("Origin", product.origin, MapPin)}
                {renderDetail("MOQ", product.moq, Scale)}
                {renderDetail("Rating", `${product.rating} / 5`, Star)}
                {product.varieties && renderDetail("Varieties", product.varieties, Leaf)}
                {product.benefits && renderDetail("Benefits", product.benefits, FlaskConical)}
                {/* Dynamically render other product-specific properties for berries/dried-fruits */}
                {product.hasOwnProperty('type') && renderDetail("Type", (product as any).type, Info)}
                {product.hasOwnProperty('packing') && renderDetail("Packing", (product as any).packing, Package)}
                {product.hasOwnProperty('size') && renderDetail("Size", (product as any).size, Scale)}
                {product.hasOwnProperty('shape') && renderDetail("Shape", (product as any).shape, Info)}
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

          {/* Related Products / Horizontal Scroll (Optional, but good for UX) */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Explore More Berries</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {berriesProducts.slice(0, 4).map((relatedProduct) => ( // Showing first 4 as "related"
                <Link key={relatedProduct.id} href={`/catalog/berries/${relatedProduct.id}`} passHref>
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
                      <p className="text-gray-600 text-xs sm:text-sm">Click to Know more</p>
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
