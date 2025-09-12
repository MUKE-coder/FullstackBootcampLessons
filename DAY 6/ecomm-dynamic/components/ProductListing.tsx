"use client";
import { useQuery } from "@tanstack/react-query";
import BeautyProductCard from "./BeautyProductCard";
import { getProducts } from "@/controllers/products";

// Types
export interface BeautyProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  slug: string;
  description?: string;
}

// Main Component
const ProductListing = () => {
  const {
    data: products = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (isLoading) {
    return (
      <div className="">
        <p>Loading Products...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="">
        <p>Failed to Load Products</p>
      </div>
    );
  }
  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Trending Products
        </h2>
        <a
          href={"#"}
          className="text-gray-600 text-sm flex items-center hover:text-gray-900"
        >
          Check all items <span className="ml-1">→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <BeautyProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductListing;
