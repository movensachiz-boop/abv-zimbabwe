import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Zap } from "lucide-react";

const MissionSection = () => {
  const strengths = [
    {
      icon: Target,
      title: "Precision Cutting",
      description: "State-of-the-art CNC machines ensure perfect cuts every time"
    },
    {
      icon: Award,
      title: "Quality Materials",
      description: "Only premium PVC, melamine, and hardware from trusted suppliers"
    },
    {
      icon: Users,
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
        <div className="text-center mb-12">
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
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <strength.icon className="w-8 h-8 text-white" />
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

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-brand-red to-brand-red-dark p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose ABV Boards Zimbabwe?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-white/90">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-white/90">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24hr</div>
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