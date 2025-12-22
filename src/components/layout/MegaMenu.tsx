import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, X, Command, Star, ArrowRight, CornerDownLeft } from "lucide-react";

// Menu data
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

// Quick links for search
const allLinks = [
  ...beschermingLinks.map(l => ({ ...l, category: "Bescherming" })),
  ...industrieLinks.map(l => ({ ...l, category: "Industrie" })),
  ...bestsellers.map(l => ({ ...l, category: "Bestsellers" })),
  { naam: "Shop", url: "/shop", category: "Pagina's" },
  { naam: "Over Ons", url: "/over-ons", category: "Pagina's" },
  { naam: "Contact", url: "/contact", category: "Pagina's" },
];

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Filter results based on search query
  const searchResults = searchQuery.trim() 
    ? allLinks.filter(l => 
        l.naam.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const hasResults = searchResults.length > 0;
  const showSearchResults = searchQuery.trim().length > 0;

  // Reset selected index when results change
  useEffect(() => {
    setSelectedResultIndex(0);
  }, [searchQuery]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!showSearchResults) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedResultIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedResultIndex(prev => 
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (hasResults && searchResults[selectedResultIndex]) {
          navigate(searchResults[selectedResultIndex].url);
          setIsOpen(false);
          setSearchQuery("");
        }
        break;
      case "Escape":
        setSearchQuery("");
        searchInputRef.current?.blur();
        break;
    }
  }, [showSearchResults, searchResults, selectedResultIndex, navigate, hasResults]);

  // Global keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setSearchQuery("");
    }, 150);
  };

  const clearSearch = () => {
    setSearchQuery("");
    searchInputRef.current?.focus();
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
          isOpen 
            ? "text-primary bg-primary/10" 
            : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Collecties 
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.div>
      </button>

      {/* Mega Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
          >
            {/* Container */}
            <div className="relative w-[700px] max-h-[400px] rounded-xl overflow-hidden bg-background border border-border shadow-xl">
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-[#0AADEF] to-accent" />
              
              {/* Content */}
              <div className="p-5">
                {/* Search Bar */}
                <div className="mb-5">
                  <div className={`relative flex items-center transition-all duration-200 ${
                    searchFocused ? "ring-2 ring-[#0AADEF]" : "ring-1 ring-border"
                  } rounded-lg bg-muted/50 overflow-hidden`}>
                    <Search className={`absolute left-3 h-4 w-4 transition-colors ${
                      searchFocused ? "text-[#0AADEF]" : "text-muted-foreground"
                    }`} />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                      onKeyDown={handleKeyDown}
                      placeholder="Zoek handschoenen..."
                      className="w-full pl-9 pr-20 py-2.5 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                    
                    <div className="absolute right-2 flex items-center gap-2">
                      {searchQuery ? (
                        <button
                          onClick={clearSearch}
                          className="p-1 rounded hover:bg-foreground/10 transition-colors"
                        >
                          <X className="h-4 w-4 text-muted-foreground" />
                        </button>
                      ) : (
                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                          <Command className="h-3 w-3" />
                          <span className="text-xs font-medium">K</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                  {showSearchResults ? (
                    <motion.div
                      key="search-results"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="max-h-[280px] overflow-y-auto"
                    >
                      {hasResults ? (
                        <div className="space-y-1">
                          {searchResults.map((result, index) => {
                            const isSelected = selectedResultIndex === index;
                            return (
                              <Link
                                key={`${result.url}-${index}`}
                                to={result.url}
                                onClick={handleLinkClick}
                                className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-sm ${
                                  isSelected 
                                    ? "bg-[#0AADEF]/10 text-[#0AADEF]" 
                                    : "text-foreground/80 hover:bg-muted hover:text-[#0AADEF]"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <span>{result.naam}</span>
                                  <span className="text-xs text-muted-foreground">{result.category}</span>
                                </div>
                                {isSelected && <CornerDownLeft className="h-3 w-3" />}
                              </Link>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-muted-foreground text-sm">Geen resultaten voor "{searchQuery}"</p>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu-content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {/* 3-Column Grid */}
                      <div className="grid grid-cols-3 gap-8">
                        {/* Column 1 - Bescherming */}
                        <div>
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            Bescherming
                          </h4>
                          <ul className="space-y-1">
                            {beschermingLinks.map((link) => (
                              <li key={link.naam}>
                                <Link
                                  to={link.url}
                                  onClick={handleLinkClick}
                                  className="block text-sm text-foreground/80 hover:text-[#0AADEF] transition-colors py-1"
                                >
                                  {link.naam}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2 - Industrie */}
                        <div>
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            Industrie
                          </h4>
                          <ul className="space-y-1">
                            {industrieLinks.map((link) => (
                              <li key={link.naam}>
                                <Link
                                  to={link.url}
                                  onClick={handleLinkClick}
                                  className="block text-sm text-foreground/80 hover:text-[#0AADEF] transition-colors py-1"
                                >
                                  {link.naam}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 3 - Populair */}
                        <div>
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            Populair
                          </h4>
                          <ul className="space-y-1 mb-4">
                            {bestsellers.map((link) => (
                              <li key={link.naam}>
                                <Link
                                  to={link.url}
                                  onClick={handleLinkClick}
                                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-[#0AADEF] transition-colors py-1"
                                >
                                  <Star className="h-3 w-3 text-primary fill-primary" />
                                  {link.naam}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to="/shop"
                            onClick={handleLinkClick}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0AADEF] hover:text-[#0AADEF]/80 transition-colors"
                          >
                            Bekijk alle producten
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>

                      {/* Trust Bar */}
                      <div className="mt-5 pt-4 border-t border-border">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              250+ modellen op voorraad
                            </div>
                            <span>•</span>
                            <span>Gratis verzending vanaf €150</span>
                          </div>
                          <Link 
                            to="/contact"
                            onClick={handleLinkClick}
                            className="hover:text-[#0AADEF] transition-colors"
                          >
                            Advies nodig? →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
