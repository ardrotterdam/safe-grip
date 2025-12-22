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
import safeGripLogo from "@/assets/safe-grip-logo.png";

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
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled 
          ? "bg-background/98 backdrop-blur-lg border-border shadow-lg shadow-primary/5" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className={`container flex items-center justify-between transition-all duration-300 ${
        scrolled ? "h-14" : "h-20"
      }`}>
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={safeGripLogo} 
            alt="Safe-Grip Logo" 
            className={`w-auto transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Collecties <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border">
              {collecties.map((collectie) => (
                <DropdownMenuItem key={collectie.url} asChild>
                  <Link to={collectie.url} className="cursor-pointer">
                    {collectie.naam}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/over-ons" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Over Ons
          </Link>
          
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Shop CTA Button */}
        <div className="hidden md:flex">
          <Button asChild variant="shop" className={`transition-all duration-300 glow-yellow ${scrolled ? "scale-95" : "scale-100"}`}>
            <Link to="/shop" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Shop Nu
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-primary">Collecties</span>
              {collecties.map((collectie) => (
                <Link
                  key={collectie.url}
                  to={collectie.url}
                  className="text-sm text-muted-foreground pl-4 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {collectie.naam}
                </Link>
              ))}
            </div>
            
            <Link 
              to="/over-ons" 
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Over Ons
            </Link>
            
            <Link 
              to="/contact" 
              className="text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button asChild variant="shop" className="mt-2 glow-yellow">
              <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                Shop Nu
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}