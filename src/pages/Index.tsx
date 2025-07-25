import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoleSelection from "@/components/RoleSelection";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RoleSelection />
      <HowItWorks />
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with expert guidance
          </p>
          <button className="bg-background text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AT</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AptTechConnect
              </span>
            </div>
            <p className="text-muted-foreground">
              Connecting students with industry experts for personalized career guidance
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;