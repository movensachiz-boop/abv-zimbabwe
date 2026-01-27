import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";
import PromotionalPopup from "@/components/PromotionalPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <MissionSection />
      <Footer />
      <PromotionalPopup />
    </div>
  );
};

export default Index;
