import React from "react";
import HeroSection from "@/components/catalog/HeroSection";
import ProductsGrid from "@/components/catalog/ProductsGrid";
import FeaturedSection from "@/components/catalog/FeaturedSection";
import OrderCTA from "@/components/catalog/OrderCTA";
import Footer from "@/components/catalog/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductsGrid />
      <FeaturedSection />
      <OrderCTA />
      <Footer />
    </div>
  );
}