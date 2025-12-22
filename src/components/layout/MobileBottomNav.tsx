import { Home, ShoppingBag, MessageCircle, Phone } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/shop", icon: ShoppingBag, label: "Shop" },
  { to: "/contact", icon: MessageCircle, label: "Contact" },
  { to: "tel:+31854444645", icon: Phone, label: "Bellen", external: true },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border md:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => (
          item.external ? (
            <a
              key={item.label}
              href={item.to}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full text-muted-foreground hover:text-primary transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          )
        ))}
      </div>
    </nav>
  );
}
