import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Expert from "@/components/Expert";
import WhySpecial from "@/components/WhySpecial";
import Occasions from "@/components/Occasions";
import PremiumUpgrades from "@/components/PremiumUpgrades";
import Examples from "@/components/Examples";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Expert />
      <WhySpecial />
      <Occasions />
      <PremiumUpgrades />
      <Examples />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
