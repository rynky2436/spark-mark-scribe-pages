import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sanitizeUserInput, validateEmail, validatePhoneNumber, formRateLimit, processFormData } from "@/lib/security";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send 
} from "lucide-react";

// Enhanced form validation schema with security checks
const contactFormSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .refine((val) => !/<script|javascript:|data:/i.test(val), "Invalid characters detected"),
  lastName: z.string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .refine((val) => !/<script|javascript:|data:/i.test(val), "Invalid characters detected"),
  email: z.string()
    .min(1, "Email is required")
    .refine(validateEmail, "Please enter a valid email address"),
  phone: z.string()
    .min(1, "Phone number is required")
    .refine(validatePhoneNumber, "Please enter a valid phone number"),
  companyName: z.string()
    .max(100, "Company name must be less than 100 characters")
    .refine((val) => !val || !/<script|javascript:|data:/i.test(val), "Invalid characters detected")
    .optional(),
  projectDetails: z.string()
    .min(10, "Please provide at least 10 characters describing your project")
    .max(1000, "Project description must be less than 1000 characters")
    .refine((val) => !/<script|javascript:|data:/i.test(val), "Invalid characters detected"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      projectDetails: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Check rate limiting
      const userKey = `contact_${data.email}`;
      if (!formRateLimit.isAllowed(userKey, 3, 300000)) { // 3 attempts per 5 minutes
        toast({
          title: "Too Many Requests",
          description: "Please wait a few minutes before submitting another request.",
          variant: "destructive",
        });
        return;
      }

      // Sanitize all input data
      const sanitizedData = processFormData(data);
      
      // Additional validation
      if (!validateEmail(sanitizedData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        return;
      }

      if (!validatePhoneNumber(sanitizedData.phone)) {
        toast({
          title: "Invalid Phone",
          description: "Please enter a valid phone number.",
          variant: "destructive",
        });
        return;
      }

      // Simulate form submission with sanitized data
      console.log("Secure form submission:", sanitizedData);
      
      // Here you would typically send the sanitized data to your backend
      // For now, we'll just show a success message
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with your custom quote.",
      });
      
      // Reset form and rate limit after successful submission
      form.reset();
      formRateLimit.reset(userKey);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send your request. Please try again or call us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Sparks & Marks
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your laser engraving project? Get in touch with our Washington DC Metro Area team for a free consultation and quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your first name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your last name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="(240) 324-7110" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="projectDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your laser engraving project, materials, quantities, and timeline..."
                                rows={6}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        variant="spark" 
                        size="lg" 
                        className="w-full"
                        disabled={form.formState.isSubmitting}
                      >
                        <Send className="mr-2 h-5 w-5" />
                        {form.formState.isSubmitting ? "Sending..." : "Send Quote Request"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">(240) 324-7110</p>
                  <p className="text-muted-foreground">Call for immediate assistance</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-foreground">info@sparksandmarks.com</p>
                  <p className="text-muted-foreground">We respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground">Washington DC Metro Area</p>
                  <p className="text-muted-foreground">Serving MD, DC, Northern VA</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;