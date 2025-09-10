import ProductListing from "@/components/ProductListing";
import UsersListing from "@/components/UsersListing";

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
