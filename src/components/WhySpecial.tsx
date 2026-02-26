import { Check } from "lucide-react";

const features = [
  "Personalized for your relationship and occasion",
  "Written with a premium, expert-inspired literary style",
  "Perfect for anniversaries, apologies, surprises, or proposals",
  "Ready in minutes, even if you don't know what to write",
];

const WhySpecial = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            More than a message — a <span className="italic text-burgundy-light">meaningful moment</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-4">
              <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <p className="font-body text-lg text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySpecial;
