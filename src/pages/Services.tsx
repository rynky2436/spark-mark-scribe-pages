import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Zap, Scissors, Award, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "General Laser Services",
      description: "Custom laser engraving, cutting, etching, and marking on all materials",
      features: ["Custom laser engraving", "Precision laser cutting", "Serial numbers & barcodes", "Photo engraving"],
      link: "/services/general-laser-services"
    },
    {
      icon: Award,
      title: "Corporate & Business Services", 
      description: "Professional signage, awards, and branded promotional items",
      features: ["Business signage", "Corporate awards", "Promotional items", "Custom business cards"],
      link: "/services/corporate-services"
    },
    {
      icon: Gift,
      title: "Personalization & Gifts",
      description: "Custom personalized items for special occasions and gifts",
      features: ["Wedding favors", "Custom nameplates", "Drinkware engraving", "Pet ID tags"],
      link: "/services/personalization-gifts"
    },
    {
      icon: Scissors,
      title: "Home Decor & Lifestyle",
      description: "Custom wall art, family signs, and decorative home items", 
      features: ["Wall art", "Family name signs", "LED acrylic signs", "Home organizers"],
      link: "/services/home-decor-lifestyle"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
              <span className="block text-spark-gold">Professional Laser Engraving</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Comprehensive laser engraving and cutting services for businesses across Washington DC Metro Area, Maryland, and Virginia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Laser Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From precision medical device marking to custom corporate awards, we provide professional laser engraving solutions for all industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <Link key={index} to={service.link}>
                  <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                    <CardHeader>
                      <div className="p-3 bg-gradient-spark rounded-lg w-fit mb-3">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl flex items-center justify-between">
                        {service.title}
                        <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-1 transition-transform" />
                      </CardTitle>
                      <p className="text-muted-foreground text-lg">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="h-2 w-2 bg-primary rounded-full"></div>
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Additional Service Categories */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Specialized Services</h3>
            <p className="text-lg text-muted-foreground mb-8">Professional solutions for specific industries and applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/services/industrial-manufacturing">
              <Card className="group hover:shadow-spark transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Industrial & Manufacturing</h4>
                  <p className="text-muted-foreground text-sm">Metal part marking, cable tags, tool identification</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/medical-scientific">
              <Card className="group hover:shadow-spark transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Medical & Scientific</h4>
                  <p className="text-muted-foreground text-sm">FDA-compliant medical device marking, lab equipment</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/creative-art-services">
              <Card className="group hover:shadow-spark transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Creative & Art Services</h4>
                  <p className="text-muted-foreground text-sm">Custom stencils, puzzles, model making, mixed-media art</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Materials We Work With
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced laser equipment handles a wide variety of materials with precision and consistency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-spark p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">W</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Wood</h3>
              <p className="text-muted-foreground">Cherry, Oak, Maple, Bamboo, MDF, Plywood</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-laser p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Metal</h3>
              <p className="text-muted-foreground">Aluminum, Stainless Steel, Brass, Copper, Titanium</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-spark p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Glass</h3>
              <p className="text-muted-foreground">Tempered, Annealed, Mirrors, Drinkware, Awards</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-laser p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Acrylic</h3>
              <p className="text-muted-foreground">Clear, Colored, Frosted, Cast, Extruded, LED-Compatible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to completion, we ensure every project meets our high standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground">Discuss your project requirements and material options</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Design</h3>
              <p className="text-muted-foreground">Create and approve the design and specifications</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Production</h3>
              <p className="text-muted-foreground">Precise laser engraving using state-of-the-art equipment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Delivery</h3>
              <p className="text-muted-foreground">Quality inspection and delivery to your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today to discuss your laser engraving needs and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Custom Quote
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;