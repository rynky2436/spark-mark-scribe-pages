import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Cake, Gift, Award, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const SpecialCelebrations = () => {
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
              Special Celebrations
              <span className="block text-spark-gold">Milestone Moments</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Birthdays, retirements, and milestone celebrations with custom laser engraving in the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Cake className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Birthday Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom birthday signs and party decorations</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Retirement Gifts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Commemorative retirement plaques and keepsakes</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Milestone Markers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Special markers for important life milestones</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Party Decorations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom decorations for special celebrations</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Memory Books</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom memory books and guest registries</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialCelebrations;