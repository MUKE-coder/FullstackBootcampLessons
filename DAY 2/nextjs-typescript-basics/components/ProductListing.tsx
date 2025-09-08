import React from "react";
import ProductCard from "./ProductCard";

export default function ProductListing() {
  const product = {
    title: "Apple Watch",
    price: 300,
    image: "/apple-watch.png",
  };
  const products = [
    {
      title: "Apple Watch",
      price: 300,
      image: "/apple-watch.png",
    },
    {
      title: "Iphone 15 Pro",
      price: 300,
      image: "/iphone.webp",
    },
  ];
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      {products.map((product, i) => {
        return <ProductCard data={product} key={i} />;
      })}
    </div>
  );
}
