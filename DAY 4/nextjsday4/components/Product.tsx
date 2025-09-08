import { ProductCardProps } from "@/types/product.schema";
import Link from "next/link";
import React from "react";

export default function Product({ data }: { data: ProductCardProps }) {
  return (
    <div className="bg-white rounded-sm p-4 shadow-sm">
      <div className="">
        <img src={data.productThumbnail} alt="" />
      </div>
      <p className="text-xs text-blue-600 py-2">
        In stock {data.stockQty} Items
      </p>
      <p className="text-black font-medium text-xl py-2">{data.name}</p>
      <p className="text-black font-medium text-xl py-2">{data.productPrice}</p>
      <Link
        href="#"
        className="cursor-pointer w-full bg-black text-white rounded-sm py-2 px-6 block text-center"
      >
        View Details
      </Link>
    </div>
  );
}
