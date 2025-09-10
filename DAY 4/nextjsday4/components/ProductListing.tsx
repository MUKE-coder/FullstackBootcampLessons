"use client";
import React from "react";
import Product from "./Product";
import { ProductCardProps } from "@/types/product.schema";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/controllers/products";
import { Skeleton } from "./ui/skeleton";

export default function ProductListing() {
  // const products = await getProducts();
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="">
          <h2 className="text-6xl py-3 ">Trending Products</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[1, 2, 3, 4, 5, 6].map((_, i) => {
            return (
              <Skeleton key={i} className="h-[125px] w-[250px] rounded-xl" />
            );
          })}
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="p-8">
        <div className="">
          <h2 className="text-6xl py-3 text-red-500">
            Products Could not be fetched
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="">
        <h2 className="text-6xl py-3 ">Trending Products</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item, i) => {
          return <Product key={i} data={item} />;
        })}
      </div>
    </div>
  );
}
