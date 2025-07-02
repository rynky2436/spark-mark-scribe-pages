import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, TreePine, Gift, Tag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const HolidayEvents = () => {
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
              Holiday Events
              <span className="block text-spark-gold">Seasonal Celebrations</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Seasonal decorations and gift items for all holidays in the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <TreePine className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Christmas Ornaments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom Christmas ornaments and holiday decorations</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Holiday Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Festive holiday signs for home and business</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Seasonal Decorations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Decorative items for all seasonal celebrations</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Tag className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Gift Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Personalized gift tags for holiday presents</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Memorial Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Memorial ornaments and remembrance items</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HolidayEvents;