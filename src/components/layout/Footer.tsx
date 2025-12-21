import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import safeGripLogo from "@/assets/safe-grip-logo.png";

const collecties = [
  { naam: "Snijbestendige werkhandschoenen", url: "/collecties/snijbestendige-werkhandschoenen" },
  { naam: "Winter werkhandschoenen", url: "/collecties/winter-werkhandschoenen" },
  { naam: "Chemisch bestendige handschoenen", url: "/collecties/chemisch-bestendige-handschoenen" },
  { naam: "Impactbestendige werkhandschoenen", url: "/collecties/impactbestendige-werkhandschoenen" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={safeGripLogo} 
                alt="Safe-Grip Logo" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Professionele B2B groothandel in werkhandschoenen. Officieel Granberg distributeur voor de Benelux.
            </p>
          </div>

          {/* Collecties */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Collecties</h3>
            <ul className="space-y-2">
              {collecties.map((collectie) => (
                <li key={collectie.url}>
                  <Link 
                    to={collectie.url} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {collectie.naam}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Informatie</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/over-ons" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@safegrip.nl" className="hover:text-primary transition-colors">
                  info@safegrip.nl
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+31201234567" className="hover:text-primary transition-colors">
                  +31 (0)20 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Nederland & België</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SafeGrip. Alle rechten voorbehouden.
          </p>
          <p className="text-sm text-muted-foreground">
            Officieel Granberg distributeur Benelux
          </p>
        </div>
      </div>
    </footer>
  );
}
