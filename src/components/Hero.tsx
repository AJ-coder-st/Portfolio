import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-hero">Bharath Waj M</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full-Stack Developer & Software Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Crafting innovative solutions with modern technologies. 
            Passionate about creating seamless user experiences and robust backend systems.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="lg" className="group">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            View Resume
          </Button>
          <Button variant="glass" size="lg" className="group">
            <Mail className="w-5 h-5 group-hover:animate-pulse" />
            Contact Me
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="mailto:bharathwaj2912005@gmail.com"
            className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-2"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/thebharathwaj"
            className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-2"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="#"
            className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-2"
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-primary rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;