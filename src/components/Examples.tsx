import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
const examples = [
  {
    style: "Romantic & Heartfelt",
    preview: '"Every moment with you feels like home…"',
  },
  {
    style: "Short & Sweet",
    preview: '"You are my favorite part of every day."',
  },
  {
    style: "Deep & Poetic",
    preview: '"In your presence, even silence becomes beautiful…"',
  },
];

const Examples = () => {
  const gallery = useMemo(
    () => [
      {
        src: "/examples/exp1.png",
        title: "Surprise delivery moment",
      },
      {
        src: "/examples/exp2.png",
        title: "Sealed envelope close-up",
      },
      {
        src: "/examples/exp3.png",
        title: "Handwritten letter layout",
      },
    ],
    [],
  );

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : gallery[activeIndex];

  return (
    <section className="py-24 px-6 bg-gradient-warm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Preview Real Letter <span className="italic text-burgundy-light">Styles</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {examples.map((example, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {example.style}
              </h3>
              <p className="font-body text-muted-foreground italic text-sm leading-relaxed">
                {example.preview}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card/40 p-6 md:p-10 mb-12">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Examples <span className="italic text-burgundy-light">in images</span>
              </h3>
              <p className="font-body text-muted-foreground mt-2">
                Click any photo to view it larger.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                  setOpen(true);
                }}
                className="group text-left rounded-2xl border border-border bg-card overflow-hidden shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`Open image: ${img.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-body text-white/95 text-sm font-semibold">{img.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/commander">
            <Button className="bg-primary hover:bg-burgundy-light text-primary-foreground font-body font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
              Generate Yours Now
            </Button>
          </Link>
        </div>
      </div>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setActiveIndex(null);
        }}
      >
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-0 shadow-none">
          {active ? (
            <div className="rounded-2xl border border-border bg-background shadow-elegant overflow-hidden">
              <img
                src={active.src}
                alt={active.title}
                className="w-full h-auto max-h-[80vh] object-contain bg-black/10"
              />
              <div className="p-5">
                <p className="font-display text-xl font-semibold text-foreground">{active.title}</p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="font-body text-muted-foreground">No image selected.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Examples;
