import { ClipboardList, PenTool, Mail } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Share Your Narrative",
    description: "Entrust us with your story and the emotions you wish to immortalize.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Expert Composition",
    description: "Our writer draws inspiration from your memories to craft a bespoke masterpiece.",
  },
  {
    icon: Mail,
    step: "03",
    title: "Elegant Delivery",
    description: " Receive your refined, handcurated letter via email within a few hours.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm tracking-widest uppercase">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Simple as <span className="italic text-burgundy-light">that</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={step.step} className="text-center relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-gold/30" />
              )}
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 relative">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-accent-foreground font-display text-sm font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
