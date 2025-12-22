import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, ChevronRight, Star, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafeGripLogo } from "@/components/brand/SafeGripLogo";
import { MegaMenu } from "./MegaMenu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
// Mobile menu data - matches mega menu structure
const beschermingLinks = [
  { naam: "Snijbestendige handschoenen", url: "/collecties/snijbestendige-werkhandschoenen" },
  { naam: "Chemisch bestendige handschoenen", url: "/collecties/chemisch-bestendige-handschoenen" },
  { naam: "Impact handschoenen", url: "/collecties/impactbestendige-werkhandschoenen" },
  { naam: "Warmte & lashandschoenen", url: "/shop" },
  { naam: "Winterhandschoenen", url: "/collecties/winter-werkhandschoenen" },
  { naam: "Assemblage handschoenen", url: "/shop" },
];

const industrieLinks = [
  { naam: "Offshore & Olie/Gas", url: "/shop" },
  { naam: "Bouw & Constructie", url: "/shop" },
  { naam: "Maritiem & Scheepvaart", url: "/shop" },
  { naam: "Voedselindustrie", url: "/shop" },
  { naam: "Logistiek & Warehouse", url: "/shop" },
  { naam: "Bosbouw & Groen", url: "/shop" },
];

const bestsellers = [
  { naam: "Granberg 116.560 Cut Pro", url: "/collecties/snijbestendige-werkhandschoenen" },
  { naam: "Granberg 117.660 Impact Pro", url: "/collecties/impactbestendige-werkhandschoenen" },
  { naam: "Granberg 115.520 Arctic Pro", url: "/collecties/winter-werkhandschoenen" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectiesOpen, setCollectiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { itemCount, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setCollectiesOpen(false);
    setSearchQuery("");
  };

  // Filter for mobile search
  const allLinks = [...beschermingLinks, ...industrieLinks, ...bestsellers];
  const filteredLinks = searchQuery 
    ? allLinks.filter(l => l.naam.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

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
        {/* Logo wordmark */}
        <Link to="/" className="group transition-all duration-300 hover:scale-[1.02]">
          <SafeGripLogo variant="yellow" />
        </Link>

        {/* Desktop Navigation with Mega Menu */}
        <nav className="hidden md:flex items-center gap-1">
          <Link 
            to="/" 
            className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200"
          >
            Home
          </Link>
          
          {/* Mega Menu for Collecties */}
          <MegaMenu />

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
        <div className="hidden md:flex items-center gap-3">
          {/* Cart Icon with Badge */}
          <button 
            onClick={() => setIsOpen(true)}
            className="relative p-2 rounded-lg hover:bg-foreground/5 transition-colors"
            aria-label="Winkelwagen openen"
          >
            <ShoppingBag className="h-5 w-5 text-foreground/70 hover:text-foreground transition-colors" />
            {itemCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 min-w-[20px] flex items-center justify-center p-0 text-[10px] font-bold bg-primary text-primary-foreground border-2 border-background animate-in zoom-in-50 duration-200"
              >
                {itemCount > 99 ? "99+" : itemCount}
              </Badge>
            )}
          </button>
          
          <Button asChild variant="shop" className={`transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 ${scrolled ? "scale-95" : "scale-100"}`}>
            <Link to="/shop" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Shop Nu
            </Link>
          </Button>
        </div>

        {/* Mobile Menu - Sheet Drawer */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          
          <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-background border-l border-border">
            <div className="flex flex-col h-full">
              {/* Header */}
              <SheetHeader className="p-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-left">
                    <SafeGripLogo variant="black" />
                  </SheetTitle>
                </div>
              </SheetHeader>

              {/* Search Bar */}
              <div className="p-4 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Zoek handschoenen..."
                    className="w-full pl-9 pr-4 py-2.5 bg-muted/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0AADEF]"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                  )}
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Search Results */}
                {searchQuery && (
                  <div className="p-4 border-b border-border">
                    {filteredLinks.length > 0 ? (
                      <div className="space-y-1">
                        {filteredLinks.map((link) => (
                          <Link
                            key={link.naam}
                            to={link.url}
                            onClick={handleLinkClick}
                            className="block py-2 px-3 text-sm text-foreground hover:text-[#0AADEF] hover:bg-muted rounded-lg transition-colors"
                          >
                            {link.naam}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        Geen resultaten voor "{searchQuery}"
                      </p>
                    )}
                  </div>
                )}

                {/* Navigation */}
                {!searchQuery && (
                  <nav className="p-4 space-y-1">
                    {/* Home */}
                    <Link 
                      to="/" 
                      onClick={handleLinkClick}
                      className="flex items-center justify-between py-3 px-3 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                    >
                      Home
                    </Link>

                    {/* Collecties - Expandable */}
                    <div>
                      <button
                        onClick={() => setCollectiesOpen(!collectiesOpen)}
                        className="flex items-center justify-between w-full py-3 px-3 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                      >
                        <span>Collecties</span>
                        <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${collectiesOpen ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {collectiesOpen && (
                        <div className="mt-2 ml-3 pl-3 border-l-2 border-[#0AADEF]/30 space-y-4">
                          {/* Bescherming */}
                          <div>
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                              Bescherming
                            </h4>
                            <div className="space-y-0.5">
                              {beschermingLinks.map((link) => (
                                <Link
                                  key={link.naam}
                                  to={link.url}
                                  onClick={handleLinkClick}
                                  className="block py-2 px-3 text-sm text-foreground/80 hover:text-[#0AADEF] hover:bg-muted/50 rounded-lg transition-colors"
                                >
                                  {link.naam}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Industrie */}
                          <div>
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                              Industrie
                            </h4>
                            <div className="space-y-0.5">
                              {industrieLinks.map((link) => (
                                <Link
                                  key={link.naam}
                                  to={link.url}
                                  onClick={handleLinkClick}
                                  className="block py-2 px-3 text-sm text-foreground/80 hover:text-[#0AADEF] hover:bg-muted/50 rounded-lg transition-colors"
                                >
                                  {link.naam}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Bestsellers */}
                          <div>
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                              Populair
                            </h4>
                            <div className="space-y-0.5">
                              {bestsellers.map((link) => (
                                <Link
                                  key={link.naam}
                                  to={link.url}
                                  onClick={handleLinkClick}
                                  className="flex items-center gap-2 py-2 px-3 text-sm text-foreground/80 hover:text-[#0AADEF] hover:bg-muted/50 rounded-lg transition-colors"
                                >
                                  <Star className="h-3 w-3 text-primary fill-primary" />
                                  {link.naam}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Over Ons */}
                    <Link 
                      to="/over-ons" 
                      onClick={handleLinkClick}
                      className="flex items-center justify-between py-3 px-3 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                    >
                      Over Ons
                    </Link>

                    {/* Contact */}
                    <Link 
                      to="/contact" 
                      onClick={handleLinkClick}
                      className="flex items-center justify-between py-3 px-3 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                    >
                      Contact
                    </Link>
                  </nav>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-border space-y-3">
                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    250+ modellen
                  </div>
                  <span>•</span>
                  <span>Gratis vanaf €150</span>
                </div>

                {/* Shop Button */}
                <Button asChild variant="shop" className="w-full shadow-lg shadow-primary/20">
                  <Link to="/shop" onClick={handleLinkClick} className="flex items-center justify-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Shop Nu
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
