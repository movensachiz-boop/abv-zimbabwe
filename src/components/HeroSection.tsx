import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageCircle, Phone, FileText } from "lucide-react";
import heroCuttingWorkshop from "@/assets/hero-cutting-workshop.jpg";
import boardsStack from "@/assets/boards-stack.jpg";
import finishedFurniture from "@/assets/finished-furniture.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroCuttingWorkshop,
      title: "Precision Cutting & Expert Craftsmanship",
      subtitle: "Professional cutting machines and edge banding services for perfect results",
      cta: "Our Services"
    },
    {
      image: boardsStack,
      title: "Premium Quality Boards & Materials",
      subtitle: "PVC, Melamine, Chipboard, and Quartz countertops in stock",
      cta: "View Products"
    },
    {
      image: finishedFurniture,
      title: "Complete Hardware Solutions",
      subtitle: "From boards to hinges - everything you need for furniture projects",
      cta: "Get Quote"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              ABV Boards Zimbabwe
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium animate-fade-in" style={{ animationDelay: '200ms' }}>
              "Cutting Through with Precision and Style"
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
              {slides[currentSlide].subtitle}
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

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover-scale hover:shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover-scale hover:shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${
              index === currentSlide ? "bg-white shadow-lg" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;