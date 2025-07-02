import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Building2, Award, Users, MapPin, Badge } from "lucide-react";
import { Link } from "react-router-dom";

const CorporateEvents = () => {
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
              Corporate Events
              <span className="block text-spark-gold">Professional Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional signage and awards for business events and conferences in the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Conference Signage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Professional directional and informational signage for conferences</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Award Presentations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom awards and recognition plaques for employees</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Corporate Gifts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Branded corporate gifts and promotional items</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Badge className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Name Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Professional name badges and identification plates</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Directional Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Wayfinding and directional signage for events</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateEvents;