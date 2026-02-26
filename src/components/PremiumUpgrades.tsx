import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const upgrades = [
  {
    title: "Instant Digital Letter",
    description: "Receive your personalized love letter in seconds.",
    price: null,
    icon: Zap,
  },
  {
    title: "Priority Delivery (4 Hours)",
    description: "Need it fast? Get your letter delivered within 4 hours.",
    price: "+$19.90",
    icon: Zap,
  },
  {
    title: "Heritage Physical Editions",
    description: "Choose between a gold-wax sealed envelope on archival paper or a museum-grade framed masterpiece.",
    badge: "Limited Artisanal Release",
    icon: Zap,
  },
];

const PremiumUpgrades = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Upgrade Your Letter <span className="italic text-burgundy-light">Experience</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {upgrades.map((upgrade, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 relative"
            >
              {upgrade.badge && (
                <div className="absolute top-4 right-4 bg-gold text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {upgrade.badge}
                </div>
              )}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <upgrade.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {upgrade.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                {upgrade.description}
              </p>
              {upgrade.price && (
                <p className="font-display text-lg font-bold text-gold">
                  {upgrade.price}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/commander">
            <Button className="bg-gold hover:bg-gold-light text-accent-foreground font-body font-semibold px-8 py-6 rounded-full shadow-gold transition-all duration-300 hover:scale-105">
              Start Writing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PremiumUpgrades;
