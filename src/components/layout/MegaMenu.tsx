import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Scissors, Snowflake, FlaskConical, Shield, ArrowRight, Sparkles, Search, X, Command, CornerDownLeft } from "lucide-react";

// Import product images
import gloveCut from "@/assets/products/glove-cut.jpg";
import gloveWinter from "@/assets/products/glove-winter.jpg";
import gloveChemical from "@/assets/products/glove-chemical.jpg";
import gloveImpact from "@/assets/products/glove-impact.jpg";

interface CollectionItem {
  naam: string;
  url: string;
  beschrijving: string;
  icon: typeof Scissors;
  image: string;
  highlight?: string;
  features: string[];
  keywords: string[];
}

const collecties: CollectionItem[] = [
  { 
    naam: "Snijbestendige werkhandschoenen", 
    url: "/collecties/snijbestendige-werkhandschoenen",
    beschrijving: "Maximale bescherming tegen snijwonden met EN 388 certificering.",
    icon: Scissors,
    image: gloveCut,
    highlight: "Bestseller",
    features: ["EN 388 Level A-F", "Kevlar® vezels", "Tactiele grip"],
    keywords: ["snijbestendig", "cut", "kevlar", "mes", "scherp", "snijden", "glas", "metaal"]
  },
  { 
    naam: "Winter werkhandschoenen", 
    url: "/collecties/winter-werkhandschoenen",
    beschrijving: "Warme isolatie met behoud van behendigheid tot -30°C.",
    icon: Snowflake,
    image: gloveWinter,
    features: ["Thinsulate™", "-30°C rating", "Waterdicht"],
    keywords: ["winter", "koud", "warm", "thinsulate", "isolatie", "vorst", "sneeuw", "ijs"]
  },
  { 
    naam: "Chemisch bestendige handschoenen", 
    url: "/collecties/chemisch-bestendige-handschoenen",
    beschrijving: "Bestand tegen chemicaliën, oliën en oplosmiddelen.",
    icon: FlaskConical,
    image: gloveChemical,
    highlight: "Nieuw",
    features: ["EN 374 gecertificeerd", "Nitril coating", "Lange manchet"],
    keywords: ["chemisch", "chemical", "nitril", "olie", "oplosmiddel", "zuur", "base", "vloeistof"]
  },
  { 
    naam: "Impactbestendige werkhandschoenen", 
    url: "/collecties/impactbestendige-werkhandschoenen",
    beschrijving: "TPR bescherming voor offshore, mining en zware industrie.",
    icon: Shield,
    image: gloveImpact,
    features: ["EN 13594", "TPR padding", "Hi-Vis opties"],
    keywords: ["impact", "stoot", "offshore", "mining", "tpr", "bescherming", "zwaar", "industrie"]
  },
];

// Quick links for search
const quickLinks = [
  { naam: "Shop", url: "/shop", beschrijving: "Bekijk alle producten" },
  { naam: "Over Ons", url: "/over-ons", beschrijving: "Leer ons kennen" },
  { naam: "Contact", url: "/contact", beschrijving: "Neem contact op" },
  { naam: "Granberg", url: "/over-ons", beschrijving: "Officieel distributeur" },
];

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Filter results based on search query
  const searchResults = searchQuery.trim() 
    ? collecties.filter(c => 
        c.naam.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.beschrijving.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
        c.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const quickLinkResults = searchQuery.trim()
    ? quickLinks.filter(l => 
        l.naam.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.beschrijving.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const totalResults = searchResults.length + quickLinkResults.length;
  const hasResults = totalResults > 0;
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
          prev < totalResults - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedResultIndex(prev => 
          prev > 0 ? prev - 1 : totalResults - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (hasResults) {
          let url: string;
          if (selectedResultIndex < searchResults.length) {
            url = searchResults[selectedResultIndex].url;
          } else {
            url = quickLinkResults[selectedResultIndex - searchResults.length].url;
          }
          navigate(url);
          setIsOpen(false);
          setSearchQuery("");
        }
        break;
      case "Escape":
        setSearchQuery("");
        searchInputRef.current?.blur();
        break;
    }
  }, [showSearchResults, totalResults, selectedResultIndex, searchResults, quickLinkResults, navigate, hasResults]);

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
      setActiveIndex(null);
      setSearchQuery("");
    }, 150);
  };

  const clearSearch = () => {
    setSearchQuery("");
    searchInputRef.current?.focus();
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
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50"
          >
            {/* Glass container */}
            <div className="relative w-[900px] rounded-2xl overflow-hidden">
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-2xl border border-foreground/10 rounded-2xl" />
              
              {/* Gradient accents */}
              <div className="absolute top-0 left-0 w-1/2 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-accent via-accent/50 to-transparent rounded-tr-2xl" />
              
              {/* Content */}
              <div className="relative p-6">
                {/* Search Bar */}
                <div className="mb-6">
                  <div className={`relative flex items-center transition-all duration-300 ${
                    searchFocused ? "ring-2 ring-primary" : "ring-1 ring-foreground/10"
                  } rounded-xl bg-foreground/5 overflow-hidden`}>
                    <Search className={`absolute left-4 h-4 w-4 transition-colors ${
                      searchFocused ? "text-primary" : "text-foreground/40"
                    }`} />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                      onKeyDown={handleKeyDown}
                      placeholder="Zoek handschoenen, certificeringen, toepassingen..."
                      className="w-full pl-11 pr-24 py-3.5 bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                    />
                    
                    {/* Clear button or keyboard shortcut hint */}
                    <div className="absolute right-3 flex items-center gap-2">
                      {searchQuery ? (
                        <button
                          onClick={clearSearch}
                          className="p-1.5 rounded-lg hover:bg-foreground/10 transition-colors"
                        >
                          <X className="h-4 w-4 text-foreground/40" />
                        </button>
                      ) : (
                        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-foreground/10 text-foreground/40">
                          <Command className="h-3 w-3" />
                          <span className="text-xs font-medium">K</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Search Results */}
                <AnimatePresence mode="wait">
                  {showSearchResults ? (
                    <motion.div
                      key="search-results"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                    >
                      {hasResults ? (
                        <div className="space-y-4">
                          {/* Collection Results */}
                          {searchResults.length > 0 && (
                            <div>
                              <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2 px-1">
                                Collecties ({searchResults.length})
                              </h4>
                              <div className="grid grid-cols-2 gap-3">
                                {searchResults.map((collectie, index) => {
                                  const Icon = collectie.icon;
                                  const isSelected = selectedResultIndex === index;
                                  
                                  return (
                                    <Link
                                      key={collectie.url}
                                      to={collectie.url}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setSearchQuery("");
                                      }}
                                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group ${
                                        isSelected 
                                          ? "bg-primary/10 ring-2 ring-primary" 
                                          : "bg-foreground/5 hover:bg-foreground/10"
                                      }`}
                                    >
                                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                          src={collectie.image} 
                                          alt={collectie.naam}
                                          className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                                        <div className={`absolute bottom-1 right-1 w-6 h-6 rounded flex items-center justify-center ${
                                          isSelected ? "bg-primary text-primary-foreground" : "bg-background/80"
                                        }`}>
                                          <Icon className="h-3 w-3" />
                                        </div>
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <h5 className={`font-semibold text-sm truncate transition-colors ${
                                            isSelected ? "text-primary" : "text-foreground group-hover:text-primary"
                                          }`}>
                                            {collectie.naam}
                                          </h5>
                                          {collectie.highlight && (
                                            <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                                              collectie.highlight === "Bestseller" 
                                                ? "bg-primary/20 text-primary" 
                                                : "bg-accent/20 text-accent"
                                            }`}>
                                              {collectie.highlight}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-xs text-foreground/60 mt-0.5 line-clamp-1">
                                          {collectie.beschrijving}
                                        </p>
                                        <div className="flex items-center gap-1.5 mt-2">
                                          {collectie.features.slice(0, 2).map(f => (
                                            <span key={f} className="px-1.5 py-0.5 rounded bg-foreground/5 text-[9px] font-medium text-foreground/60">
                                              {f}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                      {isSelected && (
                                        <CornerDownLeft className="h-4 w-4 text-primary/60" />
                                      )}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Quick Link Results */}
                          {quickLinkResults.length > 0 && (
                            <div>
                              <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2 px-1">
                                Pagina's
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {quickLinkResults.map((link, index) => {
                                  const resultIndex = searchResults.length + index;
                                  const isSelected = selectedResultIndex === resultIndex;
                                  
                                  return (
                                    <Link
                                      key={link.url}
                                      to={link.url}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setSearchQuery("");
                                      }}
                                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                                        isSelected 
                                          ? "bg-primary/10 ring-2 ring-primary text-primary" 
                                          : "bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground"
                                      }`}
                                    >
                                      <span className="text-sm font-medium">{link.naam}</span>
                                      <ArrowRight className="h-3 w-3" />
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Keyboard hints */}
                          <div className="flex items-center justify-center gap-4 pt-4 border-t border-foreground/10">
                            <div className="flex items-center gap-1.5 text-xs text-foreground/40">
                              <kbd className="px-1.5 py-0.5 rounded bg-foreground/10 font-mono">↑</kbd>
                              <kbd className="px-1.5 py-0.5 rounded bg-foreground/10 font-mono">↓</kbd>
                              <span>navigeren</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-foreground/40">
                              <kbd className="px-1.5 py-0.5 rounded bg-foreground/10 font-mono">↵</kbd>
                              <span>selecteren</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-foreground/40">
                              <kbd className="px-1.5 py-0.5 rounded bg-foreground/10 font-mono">esc</kbd>
                              <span>wissen</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <Search className="h-10 w-10 text-foreground/20 mx-auto mb-3" />
                          <p className="text-foreground/60 font-medium">Geen resultaten voor "{searchQuery}"</p>
                          <p className="text-sm text-foreground/40 mt-1">Probeer andere zoektermen</p>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collections-grid"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-foreground/10">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">Onze Collecties</h3>
                          <p className="text-sm text-foreground/60">Professionele werkhandschoenen voor elke toepassing</p>
                        </div>
                        <Link 
                          to="/shop"
                          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                          onClick={() => setIsOpen(false)}
                        >
                          Bekijk alles
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* Grid of collections */}
                      <div className="grid grid-cols-4 gap-4">
                        {collecties.map((collectie, index) => {
                          const Icon = collectie.icon;
                          const isActive = activeIndex === index;
                          
                          return (
                            <Link
                              key={collectie.url}
                              to={collectie.url}
                              onClick={() => setIsOpen(false)}
                              onMouseEnter={() => setActiveIndex(index)}
                              onMouseLeave={() => setActiveIndex(null)}
                              className="group relative"
                            >
                              <motion.div
                                initial={false}
                                animate={isActive ? { scale: 1.02 } : { scale: 1 }}
                                transition={{ duration: 0.2 }}
                                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                                  isActive 
                                    ? "ring-2 ring-primary shadow-lg shadow-primary/20" 
                                    : "ring-1 ring-foreground/10 hover:ring-foreground/20"
                                }`}
                              >
                                {/* Image with overlay */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                  <motion.img
                                    src={collectie.image}
                                    alt={collectie.naam}
                                    className="w-full h-full object-cover"
                                    initial={false}
                                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                  />
                                  
                                  {/* Gradient overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                                  
                                  {/* Highlight badge */}
                                  {collectie.highlight && (
                                    <motion.div
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      className="absolute top-3 left-3"
                                    >
                                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                                        collectie.highlight === "Bestseller" 
                                          ? "bg-primary text-primary-foreground" 
                                          : "bg-accent text-accent-foreground"
                                      }`}>
                                        <Sparkles className="h-3 w-3" />
                                        {collectie.highlight}
                                      </span>
                                    </motion.div>
                                  )}
                                  
                                  {/* Icon */}
                                  <div className={`absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                    isActive ? "bg-primary text-primary-foreground" : "bg-background/80 text-foreground/60"
                                  }`}>
                                    <Icon className="h-4 w-4" />
                                  </div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-4">
                                  <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                    {collectie.naam}
                                  </h4>
                                  <p className="text-xs text-foreground/60 mb-3 line-clamp-2">
                                    {collectie.beschrijving}
                                  </p>
                                  
                                  {/* Features */}
                                  <div className="flex flex-wrap gap-1.5">
                                    {collectie.features.map((feature, i) => (
                                      <motion.span
                                        key={feature}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="inline-block px-2 py-0.5 rounded-md bg-foreground/5 text-[10px] font-medium text-foreground/70"
                                      >
                                        {feature}
                                      </motion.span>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* Hover indicator */}
                                <motion.div
                                  initial={{ scaleX: 0 }}
                                  animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left"
                                />
                              </motion.div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Bottom CTA */}
                      <div className="mt-6 pt-4 border-t border-foreground/10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-foreground/60">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                              250+ modellen op voorraad
                            </div>
                            <div className="w-px h-4 bg-foreground/20" />
                            <span className="text-sm text-foreground/60">Gratis verzending vanaf €150</span>
                          </div>
                          <Link 
                            to="/contact"
                            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Advies nodig? Neem contact op →
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
