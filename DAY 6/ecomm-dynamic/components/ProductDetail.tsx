"use client";
// NikeSneakerDetail.tsx
import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  ChevronDown,
  Star,
  ShoppingBag,
  TruckIcon,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getSingleProductById } from "@/controllers/products";

// Types
export interface SneakerProduct {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  description: string;
  images: string[];
}

// Mock data
const sneaker: SneakerProduct = {
  id: "nike-running-01",
  name: "Nike Sneakers Shoes for Running Men",
  price: 49.0,
  discountPrice: 59.99,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut amet a a blandit id non viverra massa semper. Varius bibendum suscipit sed mattis turpis enim in ornare. In orci condimentum id in. Sit sodales tempor, sed feugiat sit at fames a tellus.",
  images: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  ],
};

// Related products would go here in a real application

export function ProductDetail({ id }: { id: number }) {
  const [activeImage, setActiveImage] = useState(0);
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProductById(id),
    enabled: !!id,
  });

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  };
  if (isLoading) {
    return <p>Loading Product ...</p>;
  }
  if (error || !product) {
    return <p>Failed to Load Product</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-md">
      <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column - Images */}
        <div className="md:w-1/2">
          <div className="relative aspect-square bg-orange-100 rounded-xl overflow-hidden mb-4">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden ${
                  activeImage === index
                    ? "ring-2 ring-black"
                    : "ring-1 ring-gray-200"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right column - Product Info */}
        <div className="md:w-1/2">
          {/* Product title and rating */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.discountPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  {formatPrice(product.discountPrice)}
                </span>
              )}
            </div>

            {product.discountPrice && (
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
                SAVE{" "}
                {Math.round(
                  ((product.discountPrice - product.price) /
                    product.discountPrice) *
                    100
                )}
                %
              </span>
            )}
          </div>

          <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-gray-900 hover:bg-black text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition duration-150">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Add to cart
            </button>
            <button className="border border-gray-300 hover:border-gray-400 p-3 rounded-md">
              <Heart className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
