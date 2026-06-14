import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

function buildCheckoutMessage(
  items: { id: string; name: string; quantity: number; price: number }[],
  total: number
) {
  const lines = items.map(
    (item) =>
      `- ${item.name}${item.id !== item.name ? ` (${item.id})` : ""}: ${item.quantity}x €${item.price.toFixed(2)} = €${(item.quantity * item.price).toFixed(2)}`
  );

  return `Offerte / bestelling aanvraag:\n\n${lines.join("\n")}\n\nSubtotaal: €${total.toFixed(2)}`;
}

export function CartDrawer() {
  const { items, itemCount, total, isOpen, setIsOpen, updateQuantity, removeItem, clearCart } = useCart();
  const checkoutState = {
    onderwerp: "Vraag over bestelling",
    bericht: buildCheckoutMessage(items, total),
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full sm:w-[420px] p-0 bg-background border-l border-border flex flex-col">
        {/* Header */}
        <SheetHeader className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2 text-lg font-semibold">
              <ShoppingBag className="h-5 w-5" />
              Winkelwagen
              {itemCount > 0 && (
                <span className="text-sm font-normal text-muted-foreground">
                  ({itemCount} {itemCount === 1 ? "item" : "items"})
                </span>
              )}
            </SheetTitle>
          </div>
        </SheetHeader>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">Je winkelwagen is leeg</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Ontdek onze collectie professionele werkhandschoenen
              </p>
              <Button asChild variant="shop" onClick={() => setIsOpen(false)}>
                <Link to="/shop" className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Bekijk Shop
                </Link>
              </Button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-muted/30 rounded-lg border border-border/50 animate-fade-in"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-md bg-muted flex-shrink-0 overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ShoppingBag className="h-8 w-8 text-muted-foreground/50" />
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm leading-tight line-clamp-2 mb-1">
                      {item.name}
                    </h4>
                    <p className="text-primary font-semibold text-sm">
                      €{item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-muted transition-colors"
                          aria-label="Verminder aantal"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm font-medium min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-muted transition-colors"
                          aria-label="Verhoog aantal"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-destructive hover:bg-destructive/10 rounded-md transition-colors ml-auto"
                        aria-label="Verwijder item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 space-y-4 bg-background">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotaal</span>
              <span className="text-lg font-semibold">€{total.toFixed(2)}</span>
            </div>

            {/* Free shipping notice */}
            {total < 150 ? (
              <div className="text-xs text-muted-foreground text-center p-2 bg-muted/50 rounded-md">
                Nog <span className="font-medium text-primary">€{(150 - total).toFixed(2)}</span> voor gratis verzending
              </div>
            ) : (
              <div className="text-xs text-green-600 text-center p-2 bg-green-500/10 rounded-md flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Gratis verzending!
              </div>
            )}

            {/* Actions */}
            <div className="space-y-2">
              <Button asChild variant="shop" className="w-full" onClick={() => setIsOpen(false)}>
                <Link to="/contact" state={checkoutState}>
                  Offerte aanvragen
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                Winkelwagen legen
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
