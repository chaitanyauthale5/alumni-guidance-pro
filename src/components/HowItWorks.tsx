import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, Video, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover Mentors",
      description: "Browse through our curated list of industry experts from top companies",
      color: "from-primary to-primary-glow",
    },
    {
      icon: Calendar,
      title: "Book a Session",
      description: "Choose your preferred time slot and pay securely based on duration",
      color: "from-secondary to-success",
    },
    {
      icon: Video,
      title: "Connect & Learn",
      description: "Join your mentor in a video call with real-time timer and tracking",
      color: "from-accent to-primary",
    },
    {
      icon: Star,
      title: "Rate & Review",
      description: "Share your experience and help other students find the best mentors",
      color: "from-trust to-secondary",
    },
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get expert career guidance in just a few simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-muted-foreground/30 to-transparent z-0"></div>
                )}
                
                <Card className="text-center hover:shadow-soft transition-all duration-300 relative z-10">
                  <CardContent className="pt-6">
                    {/* Step Number */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;