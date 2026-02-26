import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-display text-2xl font-bold mb-2">
          <span className="italic text-gradient-gold">Love</span> Letters
        </h3>
        <p className="font-body text-primary-foreground/60 text-sm mb-8">
          Write something unforgettable.
        </p>
        <div className="flex items-center justify-center gap-6 mb-8 font-body text-sm text-primary-foreground/50 flex-wrap">
          <a href="#how-it-works" className="hover:text-gold transition-colors">How It Works</a>
          <a href="#occasions" className="hover:text-gold transition-colors">Occasions</a>
          <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="font-body text-xs text-primary-foreground/40 flex items-center justify-center gap-1">
            © 2026 Love Letters — Made with <Heart className="w-3 h-3 text-rose" fill="currentColor" /> for you
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
