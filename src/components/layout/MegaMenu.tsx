import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Scissors, Snowflake, FlaskConical, Shield, ArrowRight, Sparkles } from "lucide-react";

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
}

const collecties: CollectionItem[] = [
  { 
    naam: "Snijbestendige werkhandschoenen", 
    url: "/collecties/snijbestendige-werkhandschoenen",
    beschrijving: "Maximale bescherming tegen snijwonden met EN 388 certificering.",
    icon: Scissors,
    image: gloveCut,
    highlight: "Bestseller",
    features: ["EN 388 Level A-F", "Kevlar® vezels", "Tactiele grip"]
  },
  { 
    naam: "Winter werkhandschoenen", 
    url: "/collecties/winter-werkhandschoenen",
    beschrijving: "Warme isolatie met behoud van behendigheid tot -30°C.",
    icon: Snowflake,
    image: gloveWinter,
    features: ["Thinsulate™", "-30°C rating", "Waterdicht"]
  },
  { 
    naam: "Chemisch bestendige handschoenen", 
    url: "/collecties/chemisch-bestendige-handschoenen",
    beschrijving: "Bestand tegen chemicaliën, oliën en oplosmiddelen.",
    icon: FlaskConical,
    image: gloveChemical,
    highlight: "Nieuw",
    features: ["EN 374 gecertificeerd", "Nitril coating", "Lange manchet"]
  },
  { 
    naam: "Impactbestendige werkhandschoenen", 
    url: "/collecties/impactbestendige-werkhandschoenen",
    beschrijving: "TPR bescherming voor offshore, mining en zware industrie.",
    icon: Shield,
    image: gloveImpact,
    features: ["EN 13594", "TPR padding", "Hi-Vis opties"]
  },
];

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveIndex(null);
    }, 150);
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
