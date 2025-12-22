import { useState, useEffect } from "react";
import { Home, ShoppingBag, MessageCircle, Phone } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/shop", icon: ShoppingBag, label: "Shop" },
  { to: "/contact", icon: MessageCircle, label: "Contact" },
  { to: "tel:+31854444645", icon: Phone, label: "Bellen", external: true },
];

export function MobileBottomNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border md:hidden safe-area-bottom transition-all duration-300 ${
        isVisible ? "translate-y-0 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)]" : "translate-y-full shadow-none"
      }`}
    >
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => (
          item.external ? (
            <a
              key={item.label}
              href={item.to}
              className="relative flex flex-col items-center justify-center gap-1 flex-1 h-full text-muted-foreground hover:text-primary transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className="relative flex flex-col items-center justify-center gap-1 flex-1 h-full text-muted-foreground hover:text-primary transition-colors group"
              activeClassName="text-primary [&>.active-indicator]:scale-x-100"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
              <span className="active-indicator absolute bottom-1 w-8 h-0.5 bg-primary rounded-full scale-x-0 transition-transform duration-300 origin-center" />
            </NavLink>
          )
        ))}
      </div>
    </nav>
  );
}
