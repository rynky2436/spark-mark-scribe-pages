import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomBusinessSigns from "./pages/services/CustomBusinessSigns";
import AwardsRecognition from "./pages/services/AwardsRecognition";
import MedicalEngraving from "./pages/industries/MedicalEngraving";
import RestaurantEngraving from "./pages/industries/RestaurantEngraving";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/custom-business-signs" element={<CustomBusinessSigns />} />
          <Route path="/services/awards-recognition" element={<AwardsRecognition />} />
          <Route path="/industries/medical-engraving" element={<MedicalEngraving />} />
          <Route path="/industries/restaurant-engraving" element={<RestaurantEngraving />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
