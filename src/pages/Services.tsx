import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Phone, MessageCircle } from "lucide-react";
import boardCuttingMachine from "@/assets/board-cutting-machine.jpg";
import quartziteCuttingMachine from "@/assets/quartzite-cutting-machine.jpg";

const Services = () => {
  const services = [
    {
      title: "Board Cutting Services",
      description: "Precision cutting for all types of boards including PVC, melamine, chipboard, MDF, and plywood using our state-of-the-art cutting machinery.",
      image: boardCuttingMachine,
      features: [
        "Precision CNC cutting technology",
        "Custom dimensions and shapes",
        "Clean, smooth edges",
        "Professional edge banding available",
        "24-hour turnaround time",
        "Bulk order discounts"
      ],
      materials: [
        "PVC Boards",
        "Melamine Surfaces",
        "Chipboard & Particleboard", 
        "MDF (Medium Density Fiberboard)",
        "Plywood",
        "Hardboard"
      ]
    },
    {
      title: "Quartzite Slab Cutting",
      description: "Professional stone cutting services for quartzite slabs and strips with precision water-cooled cutting equipment for perfect countertops and surfaces.",
      image: quartziteCuttingMachine,
      features: [
        "Water-cooled precision cutting",
        "Custom slab dimensions",
        "Smooth polished edges",
        "Template cutting available",
        "Professional installation guidance",
        "Quality guarantee"
      ],
      materials: [
        "Quartzite Slabs",
        "Quartzite Strips", 
        "Natural Stone Surfaces",
        "Engineered Stone",
        "Kitchen Countertops",
        "Bathroom Vanities"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
              Professional Cutting Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              State-of-the-art machinery and expert craftsmanship for precision cutting 
              of boards and quartzite slabs. Serving Zimbabwe with quality and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+263780555268">
                <Button size="lg" className="gap-2 hover-scale">
                  <Phone className="w-5 h-5" />
                  Call for Quote
                </Button>
              </a>
              <a href="https://wa.me/263780555268" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="gap-2 hover-scale">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Service Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-brand-red flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Materials */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Materials We Work With</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {service.materials.map((material) => (
                          <div key={material} className="bg-muted rounded-md px-3 py-2 text-sm text-center">
                            {material}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+263780555268" className="flex-1">
                      <Button variant="outline" className="w-full gap-2">
                        <Phone className="w-4 h-4" />
                        Get Quote
                      </Button>
                    </a>
                    <a href="https://wa.me/263780555268" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="whatsapp" className="w-full gap-2">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-brand-charcoal to-brand-charcoal/90 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us today for professional cutting services and expert advice. 
              We're here to help bring your projects to life with precision and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+263780555268">
                <Button size="lg" variant="outline" className="gap-2 hover-scale border-white text-white hover:bg-white hover:text-brand-charcoal">
                  <Phone className="w-5 h-5" />
                  Call +263 780 555 268
                </Button>
              </a>
              <a href="https://wa.me/263780555268" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="whatsapp" className="gap-2 hover-scale">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;