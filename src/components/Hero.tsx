import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import circlee from "@/assets/circlee.png";
import stylo from "@/assets/stylo.png";



const Hero = () => {
  return (
    <section className="relative min-h-screen flex  items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Lettre manuscrite avec pétales de rose"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-gold-light/30 rounded-full px-5 py-2 mb-8 animate-fade-in">
          {/* <Heart className="w-4 h-4 text-gold" fill="currentColor" /> */}
          <img src={circlee} className="w-10 h-10  text-gold" alt="" />
          <span className="text-primary-foreground/90 text-sm font-body tracking-wide">
            ⭐⭐⭐⭐⭐ Trusted by 10,000+ souls to articulate the unsaid
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up">
          The Art of Eloquence <span className="text-gradient-gold italic"> Your Story, </span>Masterfully Written
        </h1> 

        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Bespoke literary compositions tailored to your deepest emotions, your partner, and your moment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href="#masterpiece-category">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-accent-foreground font-body font-semibold text-base px-8 py-6 rounded-full shadow-gold transition-all duration-300 hover:scale-105">
              Commission Your Masterpiece
              <img src={stylo} alt="stylo" className="w-10 h-10 object-contain ml-2" />
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
        <p className="font-body text-sm text-primary-foreground/70 max-w-xl mx-auto mt-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Curated by our Proprietary Literary Engine        </p>
      </div>

      {/* Scroll indicator (replaced with stylo image) */}
      <div className="absolute bottom-1 flex items-center justify-center">
        <img src={circlee} alt="stylo" className="w-35 h-20 object-contain" />
      </div>


    </section>
  );
};

export default Hero;
