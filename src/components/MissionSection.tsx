import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap } from "lucide-react";
import precisionCuttingImage from "/lovable-uploads/7b09093b-8966-4d09-8031-9cb3cc0035f0.png";

const MissionSection = () => {
  const strengths = [
    {
      icon: null,
      image: precisionCuttingImage,
      title: "Precision Cutting",
      description: "State-of-the-art cutting machines ensure perfect cuts every time"
    },
    {
      icon: null,
      image: "/lovable-uploads/ad7865e0-31da-43d3-a194-30c83634b09c.png",
      title: "Quality Materials",
      description: "Only premium PVC, melamine, and hardware from trusted suppliers"
    },
    {
      icon: null,
      image: "/lovable-uploads/ec17cf19-e928-4b7d-929d-6c3facc7f63f.png",
      title: "Expert Service",
      description: "Experienced team dedicated to bringing your vision to life"
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick processing and delivery to keep your projects on schedule"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To provide Zimbabwe's furniture makers and DIY enthusiasts with the highest quality 
            boards, precise cutting services, and reliable hardware solutions. Based in Gweru, 
            we're committed to supporting your creative projects with professional expertise 
            and exceptional customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-lg flex items-center justify-center mx-auto mb-4 hover-scale overflow-hidden">
                  {strength.image ? (
                    <img 
                      src={strength.image} 
                      alt={strength.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <strength.icon className="w-8 h-8 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-charcoal mb-3">
                  {strength.title}
                </h3>
                <p className="text-muted-foreground">
                  {strength.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-brand-red to-brand-red-dark p-8 rounded-xl text-white hover-scale transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 animate-fade-in">Why Choose ABV Boards Zimbabwe?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="animate-fade-in" style={{ animationDelay: '1000ms' }}>
                <div className="text-3xl font-bold mb-2 transition-transform duration-300 hover:scale-110">2+</div>
                <div className="text-white/90">Years Experience</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '1200ms' }}>
                <div className="text-3xl font-bold mb-2 transition-transform duration-300 hover:scale-110">500+</div>
                <div className="text-white/90">Projects Completed</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '1400ms' }}>
                <div className="text-3xl font-bold mb-2 transition-transform duration-300 hover:scale-110">24hr</div>
                <div className="text-white/90">Quick Turnaround</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;