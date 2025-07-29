"use client"; // This directive is crucial for using hooks like useRouter

import { useRouter } from "next/navigation"; // Correct import for App Router
import { MainLayout } from "@/components/layout/main-layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Package, MapPin, Leaf, FlaskConical, Scale, Tag, Info } from "lucide-react";

// Your seedsProducts data, copied directly from your app/catalog/seeds/page.tsx
// For a real application, consider moving this data to a central file (e.g., data/products.ts)
// and importing it into both nuts and seeds detail pages to avoid duplication.
const seedsProducts = [
  {
    id: "chia-seeds",
    name: "Chia Seeds",
    description: "Premium chia seeds, excellent for health and various culinary uses.",
    varieties: ["Black", "White", "Organic"],
    benefits: ["Omega-3 Rich", "High Fiber", "Antioxidants"],
    moq: "25kg",
    rating: 4.8,
    price: "From $7.20/kg",
    category: "seeds",
    image: "/images/products/chia seeds.jpg",
    origin: "MP, Karnataka",
    purity: "99.99%",
    colour: ["Black", "White"],
    clean: "Double sortex",
    packing: "25Kg, 50Kg",
  },
  {
    id: "flax-seeds",
    name: "Flax Seeds (Alsi Beej)",
    description: "High-quality flax seeds, known for their nutritional benefits and versatility.",
    varieties: ["Regular", "Bold", "Organic", "Ground"],
    benefits: ["Omega-3 ALA", "Digestive Health", "Lignans"],
    moq: "25kg",
    rating: 4.7,
    price: "From $5.40/kg",
    category: "seeds",
    image: "/images/products/flax-seeds.jpg",
    origin: "MP, Rajasthan",
    purity: "99.99%",
    size: ["Regular", "Bold"],
    clean: "Double sortex",
    packing: "25Kg, 50Kg",
  },
  {
    id: "pumpkin-seeds",
    name: "Pumpkin Seeds",
    description: "Nutritious pumpkin seeds with a delicious nutty flavor and crunch.",
    varieties: ["AA", "AAA", "Raw", "Roasted"],
    benefits: ["Magnesium Rich", "Zinc Source", "Antioxidants"],
    moq: "25kg",
    rating: 4.6,
    price: "From $6.80/kg",
    category: "seeds",
    image: "/images/products/pumpkin-seeds.jpg",
    origin: "China",
    type: ["AA", "AAA"],
    clean: "100% clean",
    packing: "25Kg Carton box",
  },
  {
    id: "sunflower-seeds",
    name: "Sunflower Seeds",
    description: "Premium sunflower seeds perfect for snacking and food manufacturing.",
    varieties: ["Confectionery grade", "Raw", "Roasted", "Kernels"],
    benefits: ["Vitamin E Rich", "Healthy Fats", "Antioxidants"],
    moq: "25kg",
    rating: 4.5,
    price: "From $4.20/kg",
    category: "seeds",
    image: "/images/products/sunflower-seeds.jpg",
    origin: "China",
    type: "Confectionery grade",
    clean: "100% clean",
    packing: "25Kg Carton box",
  },
  {
    id: "quinoa-seeds",
    name: "Quinoa Seeds",
    description: "Healthy quinoa seeds, a complete protein source with versatile uses.",
    varieties: ["White", "Red", "Organic"],
    benefits: ["Complete Protein", "High Fiber", "Iron Rich"],
    moq: "25kg",
    rating: 4.7,
    price: "From $8.50/kg",
    category: "seeds",
    image: "/images/products/quinoa-seeds.jpg",
    origin: "MP, Rajasthan",
    purity: "99.99%, 100%",
    colour: ["White", "Red"],
    size: ["Regular", "Bold"],
    packing: "25Kg, 50Kg",
  },
  {
    id: "basil-seeds",
    name: "Basil Seeds (Tulsi Beej)",
    description: "Cooling and healthful basil seeds, ideal for beverages and desserts.",
    varieties: ["Black", "Organic"],
    benefits: ["Cooling Properties", "Fiber Rich", "Detoxifying"],
    moq: "25kg",
    rating: 4.6,
    price: "From $9.00/kg",
    category: "seeds",
    image: "/images/products/basil.webp",
    origin: "India, Afghanistan",
    purity: "99.99%, 100%",
    colour: "Black",
    size: "Regular",
    packing: "25Kg, 50Kg",
  },
  {
    id: "watermelon-seeds",
    name: "Watermelon Seeds",
    description: "Nutrient-rich watermelon seeds, great for snacking and health.",
    varieties: ["Sadir", "Tumba", "Regular", "Jumbo"],
    benefits: ["Protein Source", "Magnesium Rich", "Healthy Fats"],
    moq: "25kg",
    rating: 4.5,
    price: "From $5.80/kg",
    category: "seeds",
    image: "/images/products/watermelon.jpg",
    origin: "Sudan, India",
    variety: ["Sadir", "Tumba"],
    size: ["Regular", "Jumbo"],
    packing: "25Kg, 50Kg",
  },
  {
    id: "sesame-seeds",
    name: "Sesame Seeds",
    description: "High-quality sesame seeds with rich flavor and nutritional benefits.",
    varieties: ["White", "Black", "Hulled", "Un-hulled"],
    benefits: ["Calcium Rich", "Healthy Oils", "Protein Source"],
    moq: "25kg",
    rating: 4.7,
    price: "From $3.90/kg",
    category: "seeds",
    image: "/images/products/saseme.jpg",
    origin: "Gujarat, RJ, UP, MP",
    purity: "99.99%, 100%",
    colour: ["White", "Black"],
    size: ["Regular", "Bold"],
    packing: "25Kg, 50Kg",
  },
];

// Define a type for the product to ensure type safety
type Product = typeof seedsProducts[0];

// Define props for the page component to receive params from the URL
interface ProductDetailPageProps {
  params: {
    id: string; // The dynamic segment from the URL
  };
}

export default function SeedProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = params; // Get the product ID from the params prop

  // Find the product based on the ID
  const product = seedsProducts.find((p) => p.id === id);

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
            <Link href="/catalog/seeds"> {/* Back link to the main seeds listing page */}
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Seeds Collection
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
            <Link href="/catalog/seeds"> {/* Back link to the main seeds listing page */}
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Seeds Collection
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
                {/* Dynamically render other product-specific properties for seeds */}
                {product.hasOwnProperty('purity') && renderDetail("Purity", (product as any).purity, Info)}
                {product.hasOwnProperty('colour') && renderDetail("Colour", (product as any).colour, Tag)}
                {product.hasOwnProperty('clean') && renderDetail("Clean", (product as any).clean, Info)}
                {product.hasOwnProperty('packing') && renderDetail("Packing", (product as any).packing, Package)}
                {product.hasOwnProperty('size') && renderDetail("Size", (product as any).size, Scale)}
                {product.hasOwnProperty('type') && renderDetail("Type", (product as any).type, Info)}
                {product.hasOwnProperty('variety') && renderDetail("Variety", (product as any).variety, Info)}
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Explore More Seeds</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {seedsProducts.slice(0, 4).map((relatedProduct) => ( // Showing first 4 as "related"
                <Link key={relatedProduct.id} href={`/catalog/seeds/${relatedProduct.id}`} passHref>
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
