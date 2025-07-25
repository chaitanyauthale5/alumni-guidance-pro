import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, TrendingUp, Heart, Zap } from "lucide-react";
import Header from "@/components/Header";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Students Guided", icon: Users },
    { number: "500+", label: "Expert Mentors", icon: Award },
    { number: "50,000+", label: "Sessions Completed", icon: TrendingUp },
    { number: "95%", label: "Success Rate", icon: Target }
  ];

  const values = [
    {
      icon: Heart,
      title: "Student-First Approach",
      description: "Every decision we make prioritizes student success and career growth"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards for mentor verification and session quality"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving our platform with cutting-edge technology"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating lasting connections between students and industry professionals"
    }
  ];

  const team = [
    {
      name: "Arjun Mehta",
      role: "Founder & CEO",
      background: "Ex-Google, Stanford MBA",
      description: "Passionate about democratizing career guidance and making expert mentorship accessible to every student.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Priya Nair",
      role: "CTO",
      background: "Ex-Microsoft, IIT Delhi",
      description: "Building scalable technology to connect millions of students with the right mentors at the right time.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Ravi Sharma",
      role: "Head of Mentor Success",
      background: "Ex-Amazon, 15+ years experience",
      description: "Ensuring our mentors have everything they need to provide exceptional guidance to students.",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              About AptTechConnect
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bridging the Gap Between 
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Students & Success
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize career guidance by connecting ambitious students 
              with experienced professionals who've walked the path to success.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                AptTechConnect was born from a simple observation: talented students often struggle to navigate 
                their career paths not because they lack ability, but because they lack access to the right guidance 
                at the right time.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our founders experienced this firsthand during their own career journeys. Despite having the skills 
                and determination, they found themselves making avoidable mistakes and missing opportunities simply 
                because they didn't have access to mentors who could share their hard-earned wisdom.
              </p>
              <p className="text-lg leading-relaxed">
                Today, AptTechConnect has evolved into India's leading platform for career mentorship, but our core 
                mission remains unchanged: to ensure that every student has access to the guidance they need to 
                achieve their career aspirations.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to career guidance by creating a platform where students can 
                  connect with industry experts, receive personalized advice, and accelerate their 
                  professional growth through meaningful mentorship relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become the global standard for career mentorship, where every student, regardless 
                  of their background or location, can access world-class guidance and build the career 
                  of their dreams with confidence and clarity.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.background}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join thousands of students who are already transforming their careers with expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Find a Mentor
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Become a Mentor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;