import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Mail, FileText, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface QuoteFormData {
  name: string;
  surname: string;
  phone: string;
  address: string;
  projectDetails: string;
}

const Quote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<QuoteFormData>();

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      // Format the quote request message for WhatsApp with all form information
      const message = `*QUOTE REQUEST - ABV BOARDS*

*Customer Details:*
Name: ${data.name} ${data.surname}
Phone: ${data.phone}
Address: ${data.address}

*Project Details:*
${data.projectDetails || 'No additional details provided'}

*Request Date:* ${new Date().toLocaleDateString()}

Please provide a quote for the above requirements. Thank you!`;

      // Create WhatsApp URL with all the form data
      const whatsappUrl = `https://wa.me/263780555268?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp immediately with all the information
      window.open(whatsappUrl, '_blank');
      
      // Save to database as backup (but don't block WhatsApp if it fails)
      supabase
        .from('quote_requests')
        .insert({
          name: data.name,
          surname: data.surname,
          phone: data.phone,
          address: data.address,
          project_details: data.projectDetails,
        })
        .then(({ error }) => {
          if (error) {
            console.error('Database save error:', error);
          }
        });
      
      toast({
        title: "Redirecting to WhatsApp!",
        description: "Opening WhatsApp with your complete quote request information.",
      });
      
      reset();
    } catch (error) {
      console.error('Error creating WhatsApp message:', error);
      toast({
        title: "Error",
        description: "Failed to prepare WhatsApp message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Request Your Quote
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '200ms'}}>
              Get a personalized quote for your board cutting and hardware needs. 
              Fill out the form below and we'll respond within 24 hours.
            </p>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Prefer to talk directly? Contact us using any of the methods below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call Us</h3>
                      <p className="text-muted-foreground">+263 780 555 268</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp</h3>
                      <p className="text-muted-foreground">+263 780 555 268</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">artipelbusinessventures@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Visit Us</h3>
                      <p className="text-muted-foreground">ABV Boards, Gweru</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
                  <div className="flex flex-col space-y-3">
                    <a href="tel:+263780555268">
                      <Button variant="outline" className="w-full gap-2 justify-start">
                        <Phone className="w-4 h-4" />
                        Call Now
                      </Button>
                    </a>
                    <a href="https://wa.me/263780555268" target="_blank" rel="noopener noreferrer">
                      <Button variant="whatsapp" className="w-full gap-2 justify-start">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Us
                      </Button>
                    </a>
                    <a href="https://maps.app.goo.gl/Bt29GnvzrZyhw9zj8" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full gap-2 justify-start border-red-500 text-red-600 hover:bg-red-500 hover:text-white">
                        <MapPin className="w-4 h-4" />
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quote Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Quote Request Form
                  </CardTitle>
                  <CardDescription>
                    Fill out your details and project requirements for a personalized quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">First Name *</Label>
                        <Input
                          id="name"
                          {...register("name", { required: "First name is required" })}
                          placeholder="Enter your first name"
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="surname">Last Name *</Label>
                        <Input
                          id="surname"
                          {...register("surname", { required: "Last name is required" })}
                          placeholder="Enter your last name"
                        />
                        {errors.surname && (
                          <p className="text-sm text-destructive mt-1">{errors.surname.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone", { 
                          required: "Phone number is required",
                          pattern: {
                            value: /^[\+]?[0-9\s\-\(\)]+$/,
                            message: "Please enter a valid phone number"
                          }
                        })}
                        placeholder="+263 xxx xxx xxx"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        {...register("address", { required: "Address is required" })}
                        placeholder="Enter your full address"
                      />
                      {errors.address && (
                        <p className="text-sm text-destructive mt-1">{errors.address.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="projectDetails">Project Details</Label>
                      <Textarea
                        id="projectDetails"
                        {...register("projectDetails")}
                        placeholder="Tell us about your project - board types needed, dimensions, quantities, etc."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Quote;