import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SafeGripLogo } from "@/components/brand/SafeGripLogo";

const collecties = [
  { naam: "Snijbestendige werkhandschoenen", url: "/collecties/snijbestendige-werkhandschoenen" },
  { naam: "Winter werkhandschoenen", url: "/collecties/winter-werkhandschoenen" },
  { naam: "Chemisch bestendige handschoenen", url: "/collecties/chemisch-bestendige-handschoenen" },
  { naam: "Impactbestendige werkhandschoenen", url: "/collecties/impactbestendige-werkhandschoenen" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? "bg-background/70 backdrop-blur-xl border-b border-foreground/10 shadow-2xl shadow-background/50" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className={`container flex items-center justify-between transition-all duration-500 ${
        scrolled ? "h-16" : "h-20"
      }`}>
        {/* Logo with custom SVG */}
        <Link to="/" className="group">
          <SafeGripLogo 
            size={scrolled ? 36 : 44} 
            showText={true}
            className="transition-all duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation - Refined styling */}
        <nav className="hidden md:flex items-center gap-1">
          <Link 
            to="/" 
            className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200"
          >
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200">
              Collecties <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background/95 backdrop-blur-xl border-foreground/10 shadow-2xl">
              {collecties.map((collectie) => (
                <DropdownMenuItem key={collectie.url} asChild>
                  <Link to={collectie.url} className="cursor-pointer">
                    {collectie.naam}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            to="/over-ons" 
            className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200"
          >
            Over Ons
          </Link>
          
          <Link 
            to="/contact" 
            className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Shop CTA Button - Premium styling */}
        <div className="hidden md:flex">
          <Button asChild variant="shop" className={`transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 ${scrolled ? "scale-95" : "scale-100"}`}>
            <Link to="/shop" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Shop Nu
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu - Glassmorphism style */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-foreground/10 bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container py-6 flex flex-col gap-1">
            <Link 
              to="/" 
              className="px-4 py-3 text-sm font-medium text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="flex flex-col">
              <span className="px-4 py-3 text-sm font-semibold text-primary">Collecties</span>
              {collecties.map((collectie) => (
                <Link
                  key={collectie.url}
                  to={collectie.url}
                  className="text-sm text-foreground/70 pl-8 py-2.5 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {collectie.naam}
                </Link>
              ))}
            </div>
            
            <Link 
              to="/over-ons" 
              className="px-4 py-3 text-sm font-medium text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Over Ons
            </Link>
            
            <Link 
              to="/contact" 
              className="px-4 py-3 text-sm font-medium text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="mt-4 px-4">
              <Button asChild variant="shop" className="w-full shadow-lg shadow-primary/20">
                <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Shop Nu
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}