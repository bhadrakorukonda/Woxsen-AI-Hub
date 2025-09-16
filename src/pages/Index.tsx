import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedTools } from "@/components/FeaturedTools";
import { CategoryTabs } from "@/components/CategoryTabs";
import { UserDashboard } from "@/components/UserDashboard";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedTools />
        <CategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        <UserDashboard />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
