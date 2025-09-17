import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Intro">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-accent rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-hero rounded-full opacity-15 animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="inline-block rounded-2xl bg-black/40 backdrop-blur-sm px-6 py-5 shadow-card">
            <h1 className="text-5xl md:text-7xl font-bold mb-3 section-title">
              <span className="text-gradient-hero">Bharath Waj M</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-2">
              Prompt Engineer | AIML & Data Science Enthusiast
            </p>
            <p className="text-base md:text-lg text-foreground/90 max-w-2xl mx-auto">
              Crafting intelligent solutions with AI/ML-driven workflows and modern data practices. Passionate about aligning models, optimizing prompts, and delivering impactful insights.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="lg" className="group" aria-label="View Resume">
            <Download className="w-5 h-5 group-hover:animate-pulse" />
            View Resume
          </Button>
          <Button variant="glass" size="lg" className="group" aria-label="Contact Me">
            <Mail className="w-5 h-5 group-hover:animate-pulse" />
            Contact Me
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="mailto:bharathwaj2912005@gmail.com"
            className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/thebharathwaj"
            className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="#"
            className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
        
        {/* Contact Info */}
        <div className="mt-12 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <p>📍 Thakkolam, Tamil Nadu | 📞 +91-6382405793</p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-1 h-16 bg-gradient-primary rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;