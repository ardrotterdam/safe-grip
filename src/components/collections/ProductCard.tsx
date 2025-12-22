import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface ResponsiveImageSet {
  mobile?: string;
  tablet?: string;
  desktop: string;
}

interface ProductCardProps {
  naam: string;
  beschrijving: string;
  kenmerken: string[];
  bundel: string;
  afbeelding?: string | ResponsiveImageSet;
  sku?: string;
  prijs?: number;
}

export function ProductCard({ naam, beschrijving, kenmerken, bundel, afbeelding, sku, prijs = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  
  // Handle both string and responsive image set
  const imageSrc = typeof afbeelding === 'string' ? afbeelding : afbeelding?.desktop;
  const srcSet = typeof afbeelding === 'object' && afbeelding 
    ? `${afbeelding.mobile || afbeelding.desktop} 480w, ${afbeelding.tablet || afbeelding.desktop} 768w, ${afbeelding.desktop} 1280w`
    : undefined;

  const handleAddToCart = () => {
    addItem({
      id: sku || naam,
      name: naam,
      price: prijs,
      image: imageSrc,
    });
    toast.success(`${naam} toegevoegd aan winkelwagen`);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {/* Product image */}
      <div className="aspect-square bg-muted relative overflow-hidden">
        {imageSrc ? (
          <OptimizedImage 
            src={imageSrc} 
            srcSet={srcSet}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            alt={naam}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <div className="text-center text-muted-foreground">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🧤</span>
              </div>
              <p className="text-sm">Afbeelding volgt</p>
            </div>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground line-clamp-2">
          {naam}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {beschrijving}
        </p>
        
        {/* Kenmerken */}
        <div className="flex flex-wrap gap-1">
          {kenmerken.slice(0, 3).map((kenmerk) => (
            <span 
              key={kenmerk}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {kenmerk}
            </span>
          ))}
        </div>
        
        {/* Bundel info & Add to cart */}
        <div className="pt-2 border-t border-border flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {bundel}
          </span>
          <Button 
            size="sm" 
            variant="default" 
            onClick={handleAddToCart}
            className="gap-1"
          >
            <ShoppingCart className="h-4 w-4" />
            Toevoegen
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
