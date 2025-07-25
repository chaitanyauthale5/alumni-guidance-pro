import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Shield, Zap } from "lucide-react";
import Header from "@/components/Header";

const Pricing = () => {
  const plans = [
    {
      name: "Student Basic",
      price: "₹0",
      period: "Free Forever",
      description: "Perfect for students just starting their career journey",
      features: [
        "Browse all mentor profiles",
        "Basic search and filters",
        "Read mentor reviews",
        "Access to community resources",
        "Email support",
        "Basic career guidance articles"
      ],
      buttonText: "Get Started Free",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Student Pro",
      price: "₹299",
      period: "per month",
      description: "Enhanced features for serious career growth",
      features: [
        "Everything in Basic",
        "10% discount on all sessions",
        "Priority booking slots",
        "Advanced mentor filters",
        "Resume review credits (2/month)",
        "Career roadmap templates",
        "Priority support",
        "Exclusive webinars"
      ],
      buttonText: "Start Pro Trial",
      variant: "hero" as const,
      popular: true
    },
    {
      name: "Student Premium",
      price: "₹599",
      period: "per month",
      description: "Complete career acceleration package",
      features: [
        "Everything in Pro",
        "20% discount on all sessions",
        "Unlimited resume reviews",
        "Mock interview sessions (4/month)",
        "Personal career advisor",
        "Industry reports access",
        "1-on-1 career planning session",
        "Job referral assistance"
      ],
      buttonText: "Go Premium",
      variant: "professional" as const,
      popular: false
    }
  ];

  const mentorPlans = [
    {
      name: "Mentor Starter",
      commission: "20%",
      description: "Perfect for new mentors getting started",
      features: [
        "Create mentor profile",
        "Set your own rates",
        "Basic calendar integration",
        "Payment processing",
        "Student reviews system",
        "Basic analytics",
        "Email support"
      ],
      buttonText: "Start Mentoring",
      variant: "secondary" as const
    },
    {
      name: "Mentor Pro",
      commission: "15%",
      description: "For established mentors who want to grow",
      features: [
        "Everything in Starter",
        "Featured profile placement",
        "Advanced analytics",
        "Custom availability slots",
        "Batch session hosting",
        "Priority support",
        "Marketing assistance"
      ],
      buttonText: "Upgrade to Pro",
      variant: "professional" as const
    },
    {
      name: "Mentor Elite",
      commission: "10%",
      description: "For top-performing mentors",
      features: [
        "Everything in Pro",
        "Top mentor badge",
        "Exclusive networking events",
        "Content creation opportunities",
        "Dedicated account manager",
        "Revenue guarantees",
        "Partnership opportunities"
      ],
      buttonText: "Apply for Elite",
      variant: "success" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Perfect Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a student seeking guidance or a mentor sharing expertise, 
              we have flexible plans that grow with your needs
            </p>
          </div>

          {/* Student Plans */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">For Students</h2>
              <p className="text-muted-foreground">
                Accelerate your career with expert guidance and exclusive resources
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative hover:shadow-medium transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-primary transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period !== "Free Forever" && (
                        <span className="text-muted-foreground">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant={plan.variant} className="w-full">
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mentor Plans */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">For Mentors</h2>
              <p className="text-muted-foreground">
                Share your expertise and earn money with our mentor-friendly platform
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mentorPlans.map((plan, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-primary">{plan.commission}</span>
                      <span className="text-muted-foreground"> platform fee</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant={plan.variant} className="w-full">
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Comparison */}
          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">How Sessions Work</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Pay Per Minute</h4>
                <p className="text-sm text-muted-foreground">
                  Only pay for the actual time you spend with your mentor. No fixed session fees.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Secure Payments</h4>
                <p className="text-sm text-muted-foreground">
                  All payments are processed securely. Money is held safely until session completion.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Instant Connect</h4>
                <p className="text-sm text-muted-foreground">
                  Book and start sessions instantly. No waiting, no delays, just immediate guidance.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">How does per-minute billing work?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  You're charged based on the actual duration of your session. If you book for 30 minutes but finish in 20, you only pay for 20 minutes.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Can I cancel my subscription anytime?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Yes, you can cancel your subscription at any time. You'll continue to have access to premium features until the end of your billing period.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">What if I'm not satisfied with a session?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We offer a satisfaction guarantee. If you're not happy with your session, contact support within 24 hours for a refund.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">How do mentors set their rates?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Mentors set their own per-minute rates based on their experience and expertise. Rates typically range from ₹50 to ₹500 per minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;