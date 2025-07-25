import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Shield } from "lucide-react";

const RoleSelection = () => {
  const roles = [
    {
      icon: GraduationCap,
      title: "I'm a Student",
      description: "Looking for career guidance and mentorship from industry experts",
      features: ["Browse expert mentors", "Book 1-on-1 sessions", "Pay per minute", "Get career guidance"],
      buttonText: "Start Learning",
      variant: "default" as const,
    },
    {
      icon: Users,
      title: "I'm a Mentor",
      description: "Share your expertise and earn money helping students grow",
      features: ["Set your hourly rate", "Flexible scheduling", "Withdraw earnings", "Build your reputation"],
      buttonText: "Start Mentoring",
      variant: "secondary" as const,
    },
    {
      icon: Shield,
      title: "I'm an Admin",
      description: "Manage the platform, approve mentors, and track analytics",
      features: ["Approve mentor profiles", "Track platform analytics", "Manage payments", "Handle disputes"],
      buttonText: "Admin Dashboard",
      variant: "professional" as const,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Role</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're seeking guidance or sharing expertise, we have the perfect portal for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{role.title}</CardTitle>
                  <CardDescription className="text-base">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    {role.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={role.variant} 
                    className="w-full group"
                  >
                    {role.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoleSelection;