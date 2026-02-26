import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
          Ready to write something <span className="italic text-burgundy-light">unforgettable</span>?
        </h2>

        <Link to="/commander">
          <Button size="lg" className="bg-gold hover:bg-gold-light text-accent-foreground font-body font-semibold px-8 py-6 rounded-full shadow-gold transition-all duration-300 hover:scale-105 mb-6">
            Create My Love Letter
          </Button>
        </Link>

        <p className="font-body text-muted-foreground italic">
          Your story deserves beautiful words.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
