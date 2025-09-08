import ProductListing from "@/components/ProductListing";
import UsersListing from "@/components/UsersListing";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="py-16">
        <UsersListing />
      </div>
      <ProductListing />
    </div>
  );
}
