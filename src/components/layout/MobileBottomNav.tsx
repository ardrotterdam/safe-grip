import { useState, useEffect } from "react";
import { Home, ShoppingBag, MessageCircle, Phone } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useCart } from "@/contexts/CartContext";
import { CONTACT_INFO } from "@/config/contact";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/shop", icon: ShoppingBag, label: "Shop", isCart: true },
  { to: "/contact", icon: MessageCircle, label: "Contact" },
  { to: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`, icon: Phone, label: "Bellen", external: true },
];

export function MobileBottomNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { itemCount, setIsOpen } = useCart();

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
          ) : item.isCart ? (
            <button
              key={item.label}
              onClick={() => setIsOpen(true)}
              className="relative flex flex-col items-center justify-center gap-1 flex-1 h-full text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="relative">
                <item.icon className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center bg-primary text-primary-foreground text-[10px] font-bold rounded-full px-1 animate-scale-in">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
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
