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
import ProfessionalOfficeSigns from "./pages/industries/ProfessionalOfficeSigns";
import RealEstate from "./pages/industries/RealEstate";
import Agriculture from "./pages/industries/Agriculture";
import Retail from "./pages/industries/Retail";
import Industrial from "./pages/industries/Industrial";
import Technology from "./pages/industries/Technology";
import Hospitality from "./pages/industries/Hospitality";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import AreasWeServe from "./pages/AreasWeServe";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import EventsOccasions from "./pages/EventsOccasions";
import Weddings from "./pages/events/Weddings";
import RetirementParties from "./pages/events/RetirementParties";
import BabyShowers from "./pages/events/BabyShowers";
import Anniversaries from "./pages/events/Anniversaries";
import Graduations from "./pages/events/Graduations";
import CorporateEvents from "./pages/events/CorporateEvents";
import HolidayEvents from "./pages/events/HolidayEvents";
import SpecialCelebrations from "./pages/events/SpecialCelebrations";
import GrandOpenings from "./pages/events/GrandOpenings";

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
          <Route path="/industries/professional-office-signs" element={<ProfessionalOfficeSigns />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/agriculture" element={<Agriculture />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/industrial" element={<Industrial />} />
          <Route path="/industries/technology" element={<Technology />} />
          <Route path="/industries/hospitality" element={<Hospitality />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/areas-we-serve" element={<AreasWeServe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events-occasions" element={<EventsOccasions />} />
          <Route path="/events/weddings" element={<Weddings />} />
          <Route path="/events/retirement-parties" element={<RetirementParties />} />
          <Route path="/events/baby-showers" element={<BabyShowers />} />
          <Route path="/events/anniversaries" element={<Anniversaries />} />
          <Route path="/events/graduations" element={<Graduations />} />
          <Route path="/events/corporate-events" element={<CorporateEvents />} />
          <Route path="/events/holiday-events" element={<HolidayEvents />} />
          <Route path="/events/special-celebrations" element={<SpecialCelebrations />} />
          <Route path="/events/grand-openings" element={<GrandOpenings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
