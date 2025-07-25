import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AT</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AptTechConnect
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#mentors" className="text-muted-foreground hover:text-foreground transition-colors">
              Find Mentors
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-foreground transition-all"></span>
              <span className="w-full h-0.5 bg-foreground transition-all"></span>
              <span className="w-full h-0.5 bg-foreground transition-all"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How it works
              </a>
              <a href="#mentors" className="text-muted-foreground hover:text-foreground transition-colors">
                Find Mentors
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <div className="pt-4 flex flex-col space-y-2">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button variant="hero" className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;