import Button from "@/components/Button";
import HeroSection from "@/components/HeroSection";
import ProductListing from "@/components/ProductListing";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="p-16">
        <ProductListing />
      </div>
      <div className="p-8">
        <Button title="Sign in withGithub" color="blue" />
      </div>
    </div>
  );
}
