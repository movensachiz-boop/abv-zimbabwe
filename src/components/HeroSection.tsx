import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, FileText } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const heroImages = [
  "/lovable-uploads/ef680d7f-4384-4331-a47e-5c383504e95a.png",
  "/lovable-uploads/a79ca269-b3da-4a13-90b3-c3f98b6fcc63.png",
  "/lovable-uploads/a53ccc0d-fc4f-4dc9-a909-67a2371e0cdd.png",
  "/lovable-uploads/824d4f06-7ad3-4932-85d5-2ae89c1ed7fa.png",
  "/lovable-uploads/081f61aa-2059-49e2-9afb-6526f27715b4.png",
  "/lovable-uploads/048f881f-2feb-4129-ae36-c6f8f8be4a37.png"
];
import boardsStack from "@/assets/boards-stack.jpg";
import cuttingMachine from "@/assets/board-cutting-machine.jpg";
import finishedFurniture from "@/assets/finished-furniture.jpg";
import mdfBoards from "@/assets/mdf-boards.jpg";
import plywoodBoards from "@/assets/plywood-boards.jpg";
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const projectAssets = [{
    image: boardsStack,
    title: "Premium Board Stack",
    delay: "0ms"
  }, {
    image: cuttingMachine,
    title: "Precision Cutting Machine",
    delay: "200ms"
  }, {
    image: finishedFurniture,
    title: "Finished Furniture Projects",
    delay: "400ms"
  }, {
    image: mdfBoards,
    title: "MDF Boards",
    delay: "600ms"
  }, {
    image: plywoodBoards,
    title: "Plywood Boards",
    delay: "800ms"
  }];

  return <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Hero Background Images with Sliding Effect */}
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`ABV Boards showcase ${index + 1}`}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/80 to-brand-charcoal-dark/90" />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              ABV Boards Zimbabwe
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium animate-fade-in" style={{
            animationDelay: '200ms'
          }}>
              "Cutting Through with Precision and Style"
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{
            animationDelay: '400ms'
          }}>
              Professional cutting machines and edge banding services for perfect results
            </p>
            
            {/* Project Assets Showcase */}
            <div className="mb-8 max-w-4xl mx-auto animate-fade-in" style={{
            animationDelay: '600ms'
          }}>
              <Carousel className="w-full" opts={{
              align: "start",
              loop: true
            }}>
                <CarouselContent className="-ml-2 md:-ml-4">
                  {projectAssets.map((asset, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                      
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white" />
                <CarouselNext className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white" />
              </Carousel>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{
            animationDelay: '800ms'
          }}>
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
    </section>;
};
export default HeroSection;