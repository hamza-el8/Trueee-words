import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import circlee from "@/assets/circlee.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Occasions", href: "/#occasions" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={circlee} alt="Love Letter Generator" className="w-12 sm:w-16 h-12 sm:h-16 rounded-full" />
          <span className="font-display text-lg sm:text-xl font-bold text-foreground hidden sm:inline">
            <span className="italic text-gold">True </span> Words
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
         <a href="#masterpiece-category">
          <Button className="bg-gold hover:bg-gold-light text-accent-foreground font-body text-sm rounded-full px-6">
            Create My Letter
          </Button>
        </a>
        {/* <Link to="/commander" className="hidden sm:block">
          <Button className="bg-gold hover:bg-gold-light text-accent-foreground font-body text-sm rounded-full px-6">
            Create My Letter
          </Button>
        </Link> */}

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-foreground hover:text-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link to="/commander" >
                <Button className="w-full bg-gold hover:bg-gold-light text-accent-foreground font-body rounded-full">
                  Create My Letter
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;