"use client"; // REQUIRED for using hooks like useRouter

import { useRouter } from "next/navigation"; // Correct import for App Router
import { MainLayout } from "@/components/layout/main-layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Package, MapPin, Leaf, FlaskConical, Scale, Tag, Info } from "lucide-react";

// Your nutsProducts data - ENSURE THIS IS THE CORRECT DATA ARRAY
// It's best practice to put this data in a shared file (e.g., data/products.ts)
// and import it here to avoid duplication and keep data consistent.
const nutsProducts = [
  {
    id: "green-raisin-kishmish",
    name: "Green Raisin/Kishmish",
    description: "Sweet and tangy green raisins, perfect for snacking and baking.",
    varieties: ["Long", "Capsule", "Round", "Premium", "Normal"],
    benefits: ["Good Source of Energy", "Rich in Antioxidants", "Aids Digestion"],
    moq: "10Kg",
    rating: 4.7,
    price: "From $3.50/kg",
    category: "dry-fruits", // Note: category is 'dry-fruits' here, but the path is 'nuts'. Ensure consistency if needed.
    image: "/images/products/green-raisin.avif",
    origin: "India, Afghanistan",
    grading: "Premium, normal",
    size: ["Long", "medium", "regular"],
    packing: ["10Kg", "15 Kg", "20 Kg"],
  },
  {
    id: "anjeer-fig",
    name: "Anjeer/Fig",
    description: "Naturally sweet and chewy figs, a healthy addition to your diet.",
    varieties: ["Jumbo", "medium", "regular"],
    benefits: ["High in Fiber", "Rich in Minerals", "Supports Bone Health"],
    moq: "10Kg",
    rating: 4.6,
    price: "From $8.00/kg",
    category: "dry-fruits",
    image: "/images/products/anjeer-fig.jpg",
    origin: "Afghanistan, Turkey",
    colour: ["Snow white", "white", "golden", "brown"],
    packing: ["10 Kg", "20 Kg"],
  },
  {
    id: "almond-badam",
    name: "Almond/Badam",
    description: "Nutritious and versatile almonds, perfect for snacking and cooking.",
    varieties: ["NP", "Indy", "Sonora", "Mamra", "Gurbandi", "Shasta"],
    benefits: ["High in Vitamin E", "Heart Healthy", "Rich in Protein"],
    moq: "25kg",
    rating: 4.8,
    price: "From $9.50/kg",
    category: "dry-fruits",
    image: "/images/products/almonds-bowl.jpg",
    origin: "USA, Australia, Iran, Afghanistan, India",
    size: ["18/20", "20/22", "23/25", "27/30"],
  },
  {
    id: "walnut-akhrot",
    name: "Walnut/Akhrot",
    description: "Wholesome walnuts, known for their brain-boosting benefits and rich flavor.",
    varieties: ["Inshell", "Walnut Kernel (Half, Quarter, Broken)"],
    benefits: ["Omega-3 Rich", "Brain Health", "Antioxidants"],
    moq: "25kg",
    rating: 4.9,
    price: "From $12.00/kg",
    category: "dry-fruits",
    image: "/images/products/walnut.jpg",
    origin: "Chile, USA, India",
    type: ["Inshell walnut", "walnut kernel (Half, Quarter, Broken)"],
    packing: ["25Kg PP bag", "50 Kg PP bag", "10 Kg box"],
  },
  {
    id: "cashew-foods",
    name: "Cashew",
    description: "Creamy and delicious cashews, great for snacking and culinary uses.",
    varieties: ["Whole180", "W210", "W240", "W320", "W400", "Broken LWP", "SWP"],
    benefits: ["Rich in Minerals", "Heart Healthy", "Good Fats"],
    moq: "10Kg",
    rating: 4.8,
    price: "From $11.50/kg",
    category: "dry-fruits",
    image: "/images/products/cashews-dynamic.webp",
    origin: "India, Ghana, Togo, Nigeria, Ivory Coast, Benin",
    type: ["Whole180", "W210", "W240", "W320", "W400", "Broken LWP,SWP"],
    packing: "10Kg Bucket",
  },
  {
    id: "pistachio",
    name: "Pistachio",
    description: "Flavorful pistachios, perfect for snacking and a healthy lifestyle.",
    varieties: ["Inshell pista", "Kernel", "salted", "roasted", "California", "Fandoghi", "Ahmad Aghaei"],
    benefits: ["Protein Rich", "Healthy Fats", "Antioxidants"],
    moq: "25kg",
    rating: 4.9,
    price: "From $14.50/kg",
    category: "dry-fruits",
    image: "/images/products/pistachios.jpg",
    origin: "USA, Iran, Turkey",
    type: ["Inshell pista", "Kernel", "salted and roasted"],
    variety: ["California", "Fandoghi", "Ahmad Aghaei"],
    size: ["21/25", "24/26", "26/28", "28/30"],
  },
  {
    id: "black-raisin",
    name: "Black Raisin",
    description: "Naturally sweet black raisins, ideal for various culinary applications.",
    varieties: ["With seed", "Seedless"],
    benefits: ["Good for Iron", "Energy Booster", "Aids Digestion"],
    moq: "200gm",
    rating: 4.5,
    price: "From $4.00/kg",
    category: "dry-fruits",
    image: "/images/products/black-raisins.jpg",
    origin: "Afghanistan",
    type: ["With seed", "Seedless"],
    count: ["140/160", "160/180", "180/200"],
    packing: ["200gm pouch in 20 Kg box", "20 Kg loose box"],
  },
  {
    id: "makhana-fox-nuts",
    name: "Makhana/Fox Nuts",
    description: "Light and crunchy fox nuts, a popular healthy snack.",
    varieties: ["Raw makhana", "Roasted makhana"],
    benefits: ["Low in Calories", "Gluten-Free", "Rich in Calcium"],
    moq: "10Kg",
    rating: 4.7,
    price: "From $7.50/kg",
    category: "dry-fruits",
    image: "/images/products/makhana-fox.webp",
    origin: "Bihar, West bengal",
    type: ["Raw makhana", "Roasted makhana"],
    size: "Suta 6+, 5+, 4+",
    packing: ["10Kg PP bag", "20Kg PP bag", "25Kg PP bag"],
  },
  {
    id: "fard-dates",
    name: "Fard Dates",
    description: "Naturally sweet Fard dates, known for their unique flavor and texture.",
    varieties: ["Black", "Brown"],
    benefits: ["Natural Sweetener", "High Fiber", "Potassium Rich"],
    moq: "10kg",
    rating: 4.6,
    price: "From $5.50/kg",
    category: "dates",
    image: "/images/products/fard.jpg",
    origin: "Oman, UAE",
    colour: ["Black and Brown"],
    packing: "10Kg carton box",
    count_in_1_kg: ["165", "195"],
  },
  {
    id: "zahidi-dates",
    name: "Zahidi Dates",
    description: "Semi-dry Zahidi dates with a nutty flavor, ideal for various uses.",
    varieties: ["Regular", "Jumbo"],
    benefits: ["Energy Booster", "Rich in Vitamins", "Good for Digestion"],
    moq: "10kg",
    rating: 4.7,
    price: "From $4.80/kg",
    category: "dates",
    image: "/images/products/zahidi-dates.jpg",
    origin: "Iraq, Iran",
    colour: "Yellow brown",
    packing: ["10Kg carton box and 25 Kg bag"],
    size: ["Regular", "Jumbo"],
  },
  {
    id: "kalmi-safawi-dates",
    name: "Kalmi/Safawi Dates",
    description: "Dark and soft Kalmi/Safawi dates, a popular choice for their rich taste.",
    varieties: ["Small", "Medium", "Large", "Jumbo"],
    benefits: ["High in Minerals", "Natural Sweetener", "Digestive Aid"],
    moq: "10kg",
    rating: 4.8,
    price: "From $7.00/kg",
    category: "dates",
    image: "/images/products/kalmi-dates.jpg",
    origin: "Saudi Arabia, UAE",
    size: ["Small", "Medium", "Large", "Jumbo"],
    packing: ["10Kg", "5Kg", "3Kg"],
  },
  {
    id: "sayer-dates",
    name: "Sayer Dates",
    description: "Sweet and semi-dry Sayer dates, commonly used for processing and consumption.",
    varieties: ["Super select", "Select", "GAQ", "FAQ"],
    benefits: ["Good Source of Energy", "Rich in Iron", "Bone Health"],
    moq: "10kg",
    rating: 4.5,
    price: "From $4.20/kg",
    category: "dates",
    image: "/images/products/sayer-dates.webp",
    origin: "Iran, UAE",
    grade: ["Super select", "Select", "GAQ", "FAQ"],
    colour: ["Black sayer", "Brown sayer"],
  },
  {
    id: "khalas-dates",
    name: "Khalas Dates",
    description: "Moist and sticky Khalas dates, a delight for date lovers.",
    varieties: ["Regular", "Premium"],
    benefits: ["High in Fiber", "Natural Energy", "Antioxidants"],
    moq: "5kg",
    rating: 4.7,
    price: "From $6.00/kg",
    category: "dates",
    image: "/images/products/dates-elegant.jpg",
    origin: "UAE, Saudi, Oman",
    size: ["Regular", "Premium"],
    packing: ["5Kg", "3Kg"],
  },
  {
    id: "medjool-dates",
    name: "Medjool Dates",
    description: "Large, soft, and sweet Medjool dates, often called the 'King of Dates'.",
    varieties: ["Jumbo", "Large", "Medium"],
    benefits: ["Rich in Potassium", "High Fiber", "Natural Sweetener"],
    moq: "5kg",
    rating: 4.9,
    price: "From $8.50/kg",
    category: "dates",
    image: "/images/products/dates-premium.webp",
    origin: "Saudi Arabia, Jordan, UAE, Israel",
    colour: ["Black", "Brown"],
    size: ["Jumbo", "Large", "Medium"],
    packing: ["5Kg", "3Kg"],
  },
  {
    id: "ajwa-dates",
    name: "Ajwa Dates",
    description: "Soft, black Ajwa dates, a highly prized variety with unique benefits.",
    varieties: ["Regular", "Jumbo"],
    benefits: ["Heart Protective", "Antioxidant Rich", "Energy Boosting"],
    moq: "5kg",
    rating: 4.9,
    price: "From $15.00/kg",
    category: "dates",
    image: "/images/products/dates-basket.webp",
    origin: "Saudi Arabia",
    size: ["Regular", "Jumbo"],
    packing: ["5Kg", "3Kg"],
  },
  {
    id: "mabroom-dates",
    name: "Mabroom Dates",
    description: "Slender and long Mabroom dates with a unique chewy texture.",
    varieties: ["Small", "Medium", "Large"],
    benefits: ["Good Source of Fiber", "Natural Sweetener", "Rich in Minerals"],
    moq: "5kg",
    rating: 4.6,
    price: "From $7.80/kg",
    category: "dates",
    image: "/images/products/mabroom-dates.webp",
    origin: "Saudi Arabia, UAE",
    size: ["Small", "Medium", "Large"],
    packing: ["5Kg", "3Kg"],
  },
];

// Define a type for the product to ensure type safety
type Product = typeof nutsProducts[0];

// Define props for the page component to receive params from the URL
interface ProductDetailPageProps {
  params: {
    id: string; // The dynamic segment from the URL
  };
}

export default function NutsProductDetailPage({ params }: ProductDetailPageProps) { // Renamed component for clarity
  const { id } = params; // Get the product ID from the params prop

  // Find the product based on the ID
  const product = nutsProducts.find((p) => p.id === id);

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
            <Link href="/catalog/nuts"> {/* Back link to the main nuts listing page */}
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Nuts Collection
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
            <Link href="/catalog/nuts"> {/* Back link to the main nuts listing page */}
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Nuts Collection
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
                {/* Dynamically render other product-specific properties for nuts/dates */}
                {product.hasOwnProperty('grading') && renderDetail("Grading", (product as any).grading, Info)}
                {product.hasOwnProperty('size') && renderDetail("Size", (product as any).size, Scale)}
                {product.hasOwnProperty('packing') && renderDetail("Packing", (product as any).packing, Package)}
                {product.hasOwnProperty('colour') && renderDetail("Colour", (product as any).colour, Tag)}
                {product.hasOwnProperty('type') && renderDetail("Type", (product as any).type, Info)}
                {product.hasOwnProperty('count') && renderDetail("Count", (product as any).count, Info)}
                {product.hasOwnProperty('count_in_1_kg') && renderDetail("Count in 1 Kg", (product as any).count_in_1_kg, Info)}
                {product.hasOwnProperty('grade') && renderDetail("Grade", (product as any).grade, Info)}
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Explore More Nuts</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {nutsProducts.slice(0, 4).map((relatedProduct) => ( // Showing first 4 as "related"
                <Link key={relatedProduct.id} href={`/catalog/nuts/${relatedProduct.id}`} passHref>
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
                      <p className="text-gray-600 text-xs sm:text-sm">{relatedProduct.price}</p>
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
