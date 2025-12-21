import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={safeGripLogo} 
            alt="Safe-Grip Logo" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
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

          <Link to="/over-ons" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Over Ons
          </Link>
          
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button asChild>
            <Link to="/contact">Offerte Aanvragen</Link>
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
        <div className="md:hidden border-t border-border bg-background">
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
                  className="text-sm text-muted-foreground pl-4"
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
            
            <Button asChild className="mt-2">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Offerte Aanvragen
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
