import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the timeframe for a masterful composition ?",
    answer: "To ensure literary depth and emotional resonance, our expert dedicates thenecessary time to refine every word. Your bespoke manuscript will be delivered to your inbox within a few hours.",
  },
  {
    question: "How is the intimacy of my story preserved ?",
    answer: "Confidentiality is the cornerstone of our service. Your memories are treated with the utmost discretion, held as securely as a private letter under a wax seal.",
  },
{
  question: "Can I further personalize my masterpiece ?",
    answer: "Absolument. Bien que chaque lettre soit une œuvre achevée, vous recevez un format qui vous permet d'apporter votre touche finale personnelle avant de l'offrir",
  },
{
  question: "Do I need to be a writer to use this service?",
    answer: "Nullement. Votre rôle est de nous confier l'émotion ; notre expertise est de lui donner une voix poétique et intemporelle que vous serez fier de signer.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-gradient-warm">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked <span className="italic text-burgundy-light">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-primary/5"
            >
              <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
