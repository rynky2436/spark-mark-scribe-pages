import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import medicalImage from "@/assets/medical-engraving.jpg";
import professionalImage from "@/assets/professional-signs.jpg";
import restaurantImage from "@/assets/restaurant-engraving.jpg";
import { 
  Heart, 
  Building2, 
  Utensils, 
  Home, 
  Tractor, 
  ShoppingBag, 
  Factory, 
  Laptop, 
  Hotel,
  ArrowRight 
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: "Medical Device Engraving",
      description: "Medical equipment laser engraving, compliance labels, hospital signage in MD, DE, VA",
      image: medicalImage,
      gradient: "bg-gradient-spark"
    },
    {
      icon: Building2,
      title: "Professional Office Signs",
      description: "Custom office signs, nameplates, awards laser engraved on wood, metal, glass",
      image: professionalImage,
      gradient: "bg-gradient-laser"
    },
    {
      icon: Utensils,
      title: "Restaurant Laser Engraving",
      description: "Menu boards, table numbers, promotional signage laser cut for Maryland restaurants",
      image: restaurantImage,
      gradient: "bg-gradient-spark"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property signs, office displays, and marketing materials",
      gradient: "bg-gradient-laser"
    },
    {
      icon: Tractor,
      title: "Agriculture Equipment Tags",
      description: "Farm equipment laser engraving, livestock tags, agricultural signage MD VA DE",
      gradient: "bg-gradient-spark"
    },
    {
      icon: ShoppingBag,
      title: "Retail Store Displays",
      description: "Store displays, product labels, promotional items laser cut on wood metal glass",
      gradient: "bg-gradient-laser"
    },
    {
      icon: Factory,
      title: "Industrial Laser Marking",
      description: "Safety signs, equipment tags, compliance marking laser engraved in Maryland",
      gradient: "bg-gradient-spark"
    },
    {
      icon: Laptop,
      title: "Technology Laser Engraving",
      description: "Product labels, corporate awards, tech signage laser cut in Hagerstown MD",
      gradient: "bg-gradient-laser"
    },
    {
      icon: Hotel,
      title: "Hospitality Custom Signs",
      description: "Hotel room signs, guest amenities, promotional displays laser engraved MD DE VA",
      gradient: "bg-gradient-spark"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Laser Engraving Services by Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sparks & Marks provides specialized laser engraving and cutting services on wood, metal, glass for businesses across all industries in Hagerstown MD and throughout the tri-state area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {industry.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className={`p-3 ${industry.gradient} rounded-lg w-fit mb-3`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {industry.description}
                  </p>
                  <Button variant="outline" size="sm" className="group-hover:border-primary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;