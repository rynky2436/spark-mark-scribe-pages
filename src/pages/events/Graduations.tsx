import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, GraduationCap, Award, Camera, Users, School } from "lucide-react";
import { Link } from "react-router-dom";

const Graduations = () => {
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
              Graduation Celebrations
              <span className="block text-spark-gold">Honor Academic Achievements</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Commemorate academic achievements with custom engraved graduation items in the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Graduation Plaques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom plaques celebrating academic milestones</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Achievement Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Recognition awards for outstanding academic performance</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Photo Frames</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Personalized frames for graduation photos</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Class Year Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom items featuring graduation year and class information</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <School className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>School Memorabilia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom school-branded keepsakes and memorabilia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Graduations;