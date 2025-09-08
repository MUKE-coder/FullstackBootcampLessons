import React from "react";
import Product from "./Product";
import { ProductCardProps } from "@/types/product.schema";

async function getProducts() {
  try {
    const res = await fetch(
      "https://inventory-app-ten-gilt.vercel.app/api/v1/products"
    );
    const result = await res.json();
    const products = result.data as ProductCardProps[];
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function ProductListing() {
  const products = await getProducts();
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
