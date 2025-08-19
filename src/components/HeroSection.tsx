import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, FileText } from "lucide-react";
import heroImage from "@/assets/hero-cutting-workshop.jpg";
import boardsStack from "@/assets/boards-stack.jpg";
import cuttingMachine from "@/assets/board-cutting-machine.jpg";
import finishedFurniture from "@/assets/finished-furniture.jpg";
import mdfBoards from "@/assets/mdf-boards.jpg";
import plywoodBoards from "@/assets/plywood-boards.jpg";

const HeroSection = () => {
  const projectAssets = [
    { image: boardsStack, title: "Premium Board Stack", delay: "0ms" },
    { image: cuttingMachine, title: "Precision Cutting Machine", delay: "200ms" },
    { image: finishedFurniture, title: "Finished Furniture Projects", delay: "400ms" },
    { image: mdfBoards, title: "MDF Boards", delay: "600ms" },
    { image: plywoodBoards, title: "Plywood Boards", delay: "800ms" },
  ];

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/80 to-brand-charcoal-dark/90" />
      </div>
      
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
            
            {/* Project Assets Showcase */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '600ms' }}>
              {projectAssets.map((asset, index) => (
                <div 
                  key={index}
                  className="group relative aspect-square rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover-scale transition-all duration-300"
                  style={{ animationDelay: asset.delay }}
                >
                  <img 
                    src={asset.image} 
                    alt={asset.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-xs font-medium text-center">{asset.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '800ms' }}>
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