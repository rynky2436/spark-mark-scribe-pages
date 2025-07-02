import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Gift, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Anniversaries = () => {
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
              Wedding & Anniversary Celebrations
              <span className="block text-spark-gold">Cherish Every Milestone</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Custom wedding signs, table numbers, guest books, and anniversary gifts laser engraved in the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Welcome Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Beautiful welcome signs for wedding ceremonies and receptions</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Table Numbers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Elegant table numbers and seating arrangement signs</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Guest Book Alternatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Creative alternatives to traditional guest books</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Anniversary Plaques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Commemorative plaques for milestone anniversaries</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Wedding Favors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Personalized wedding favors for your guests</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Anniversaries;