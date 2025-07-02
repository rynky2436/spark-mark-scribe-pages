import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Star, Building2, Scissors, Users, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const GrandOpenings = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6">
              <Link to="/events-occasions" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grand Openings
              <span className="block text-spark-gold">Launch Your Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Make your business launch memorable with custom signage in the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Opening Ceremony Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Welcome signs for grand opening ceremonies</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Scissors className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Ribbon Cutting Plaques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Commemorative plaques for ribbon cutting ceremonies</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Promotional Displays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Eye-catching displays to promote your opening</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Business Card Holders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Professional displays for business cards and brochures</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Welcome Banners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Large welcome banners for grand opening events</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrandOpenings;