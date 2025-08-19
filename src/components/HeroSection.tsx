import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, FileText } from "lucide-react";

const HeroSection = () => {

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-br from-brand-charcoal to-brand-charcoal-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 to-transparent" />
      
      {/* Content */}
      <div className="relative flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              ABV Boards Zimbabwe
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium animate-fade-in" style={{ animationDelay: '200ms' }}>
              "Cutting Through with Precision and Style"
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
              Professional cutting machines and edge banding services for perfect results
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '600ms' }}>
              <a href="https://wa.me/263780555268?text=Hi%20ABV%20Boards%2C%20I%20would%20like%20to%20get%20a%20quote." target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="gap-2 px-8 hover-scale transition-all duration-300 hover:shadow-2xl">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
              <a href="tel:+263780555268">
                <Button variant="outline" size="lg" className="gap-2 px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-brand-charcoal hover-scale transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/263718456811?text=Hi%20ABV%20Boards%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20my%20project." target="_blank" rel="noopener noreferrer">
                <Button variant="charcoal" size="lg" className="gap-2 px-8 hover-scale transition-all duration-300 hover:shadow-2xl">
                  <FileText className="w-5 h-5" />
                  Request Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;