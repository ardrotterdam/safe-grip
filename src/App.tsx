import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/contexts/CartContext";

import Index from "./pages/Index";
import Contact from "./pages/Contact";
import OverOns from "./pages/OverOns";
import Shop from "./pages/Shop";
import Privacy from "./pages/Privacy";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden";
import SnijbestendigeWerkhandschoenen from "./pages/collecties/SnijbestendigeWerkhandschoenen";
import WinterWerkhandschoenen from "./pages/collecties/WinterWerkhandschoenen";
import ChemischBestendigeHandschoenen from "./pages/collecties/ChemischBestendigeHandschoenen";
import ImpactbestendigeWerkhandschoenen from "./pages/collecties/ImpactbestendigeWerkhandschoenen";
import AdminInzendingen from "./pages/admin/Inzendingen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/over-ons" element={<OverOns />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collecties/snijbestendige-werkhandschoenen" element={<SnijbestendigeWerkhandschoenen />} />
              <Route path="/collecties/winter-werkhandschoenen" element={<WinterWerkhandschoenen />} />
              <Route path="/collecties/chemisch-bestendige-handschoenen" element={<ChemischBestendigeHandschoenen />} />
              <Route path="/collecties/impactbestendige-werkhandschoenen" element={<ImpactbestendigeWerkhandschoenen />} />
              <Route path="/admin/inzendingen" element={<AdminInzendingen />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
