import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Standard",
    price: "39",
    description: "Une lettre personnalisée et sincère",
    features: [
      "Lettre personnalisée",
      "Livraison en 12H",
      "Format PDF",
      "1 révision incluse",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "59",
    description: "L'excellence pour les mots qui comptent",
    features: [
      "Lettre personnalisée premium",
      "Livraison express en 6H",
      "Format PDF + design soigné",
      "2 révisions incluses",
      "Mise en page élégante",
    ],
    highlighted: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-warm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm tracking-widest uppercase">Tarifs</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Investissez dans les <span className="italic text-burgundy-light">émotions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-primary shadow-gold"
                  : "bg-card border-border shadow-elegant"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-accent-foreground px-4 py-1 rounded-full text-xs font-body font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Populaire
                </div>
              )}
              <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`font-body text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display text-5xl font-bold">{plan.price}</span>
                <span className={`font-body text-sm ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>$ / lettre</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-body text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-gold" : "text-primary"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/commander">
                <Button
                  className={`w-full rounded-full py-6 font-body font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.highlighted
                      ? "bg-gold hover:bg-gold-light text-accent-foreground"
                      : "bg-primary hover:bg-burgundy-light text-primary-foreground"
                  }`}
                >
                  Commander
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
