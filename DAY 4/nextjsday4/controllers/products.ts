import { ProductCardProps } from "@/types/product.schema";

export async function getProducts() {
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
