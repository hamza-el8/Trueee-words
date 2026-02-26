import { Heart, HandHeart, MessageCircleHeart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Love Letter",
    description: "Lettre romantique, originale et émotionnelle, adaptée à votre relation.",
    delivery: "6 – 12 H",
    price: "39 $",
  },
  {
    icon: HandHeart,
    title: "Apology Letter",
    description: "Lettre d'excuse sincère, soigneusement formulée pour réparer une relation.",
    delivery: "12 H",
    price: "39 $",
  },
  {
    icon: MessageCircleHeart,
    title: "Breakup Letter",
    description: "Lettre respectueuse et claire pour mettre fin à une relation sans conflit.",
    delivery: "12 H",
    price: "39 $",
  },
  {
    icon: Sparkles,
    title: "Confession / Heartfelt",
    description: "Avouez vos sentiments, exprimez une émotion forte ou surprenez quelqu'un.",
    delivery: "6 – 12 H",
    price: "39 $",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm tracking-widest uppercase">Nos Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Chaque lettre est <span className="italic text-burgundy-light">unique</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Choisissez le type de lettre qui correspond à votre situation. Nous rédigeons des mots qui résonnent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs font-body text-muted-foreground">⏱ {service.delivery}</span>
                <span className="font-display text-lg font-bold text-primary">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
