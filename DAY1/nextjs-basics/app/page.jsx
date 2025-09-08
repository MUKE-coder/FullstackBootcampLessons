import Button from "@/components/Button";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Mission from "@/components/Mission";
import OurTeam from "@/components/OurTeam";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="p-16">
        <ProductCard title="Apple watch" description="my nice description" />
      </div>
      <div className="py-16 flex gap">
        <Button title="Download" color="red" />
        <Button />
      </div>
      <HeroSection />
      <Mission />
      <OurTeam />
    </div>
  );
}
