import { SneakerProduct } from "@/components/ProductDetail";
import { BeautyProduct } from "@/components/ProductListing";

export async function getProducts(): Promise<BeautyProduct[]> {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const result = await res.json();
    const resData: BeautyProduct[] = result.products.map((item: any) => {
      return {
        id: item.id,
        name: item.title,
        price: item.price,
        image: item.thumbnail,
        brand: item.brand,
        description: item.description,
        slug: "",
      };
    });
    return resData;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getSingleProductById(
  id: number
): Promise<SneakerProduct | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await res.json();
    const resData = result;

    const product = {
      id: resData.id,
      name: resData.title,
      price: resData.price,
      discountPrice: 0,
      description: resData.description,
      images: resData.images,
    };
    return product;
  } catch (error) {
    console.log(error);
    return null;
  }
}
