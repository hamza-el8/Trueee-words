import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I never knew how to express myself… this was perfect.",
    stars: 5,
  },
  {
    quote: "My girlfriend kept the letter forever.",
    stars: 5,
  },
  {
    quote: "The best last-minute gift idea I've ever found.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What People Are <span className="italic text-burgundy-light">Saying</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array(testimonial.stars)
                  .fill(0)
                  .map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 text-gold fill-current"
                    />
                  ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
