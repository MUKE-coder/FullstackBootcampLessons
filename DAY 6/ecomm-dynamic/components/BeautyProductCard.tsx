import React from "react";
import { BeautyProduct } from "./ProductListing";
import Image from "next/image";
import Link from "next/link";
const formatPrice = (price: number, currency: string = "$") => {
  return `${currency}${price.toFixed(2)}`;
};

export default function BeautyProductCard({
  product,
}: {
  product: BeautyProduct;
}) {
  return (
    <div className="rounded-lg bg-white border border-gray-100 p-4 relative transition-all hover:shadow-md">
      <Link
        href={`/products/${product.id}`}
        className="relative h-48 mb-4 bg-gray-50 rounded flex items-center justify-center"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </Link>

      <Link href={`/products/${product.id}`} className="block">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="font-medium text-sm text-gray-900 mb-1 line-clamp-2">
          {product.name || product.description}
        </h3>

        <div className="mt-2">
          <p className="font-semibold text-base">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </div>
  );
}
