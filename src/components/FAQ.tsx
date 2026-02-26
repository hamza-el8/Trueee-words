import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take?",
    answer: "Most letters are ready instantly. Priority delivery in 4 hours is available for those who need it faster.",
  },
  {
    question: "Is it private?",
    answer: "Yes — everything is confidential and secure. We take your privacy seriously and never share your personal information.",
  },
  {
    question: "Can I edit the letter?",
    answer: "Of course. You can adjust it anytime. We provide you with the complete letter so you can make any changes you'd like.",
  },
  {
    question: "Do I need writing skills?",
    answer: "Not at all. Just share your story — we do the rest. Our algorithm creates beautiful, personalized letters regardless of your writing experience.",
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
