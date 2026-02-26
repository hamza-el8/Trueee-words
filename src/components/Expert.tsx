const Expert = () => {
  return (
    <section className="py-24 px-6 bg-gradient-warm">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
          Meet the mind behind the <span className="italic text-burgundy-light">words</span>
        </h2>
        
        <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
          <p>
            This project was created with one mission: to bring sincerity, literature, and emotion back into modern love stories.
          </p>
          
          <p>
            Inspired by academic research in literature and a passion for romantic writing, each letter is crafted to feel deeply personal, human, and unforgettable.
          </p>
          
          <p className="text-xl text-foreground font-semibold italic">
            Because sometimes, the right words change everything.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expert;
