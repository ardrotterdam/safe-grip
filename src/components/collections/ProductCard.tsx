import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";

interface ProductCardProps {
  naam: string;
  beschrijving: string;
  kenmerken: string[];
  bundel: string;
}

export function ProductCard({ naam, beschrijving, kenmerken, bundel }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {/* Placeholder image area */}
      <div className="aspect-square bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Package className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Productafbeelding</p>
          </div>
        </div>
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
        
        {/* Bundel info */}
        <div className="pt-2 border-t border-border flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {bundel}
          </span>
          <Button size="sm" variant="ghost" asChild className="text-primary">
            <Link to="/contact">Offerte</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
