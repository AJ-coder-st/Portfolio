import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, ShoppingCart, Heart, Palette } from "lucide-react";

const projects = [
  {
    title: "Asset Management System with GPS",
    description: "Comprehensive asset tracking system with real-time GPS monitoring, inventory management, and automated reporting features.",
    icon: Database,
    technologies: ["React", "Node.js", "MongoDB", "GPS API", "Express"],
    features: ["Real-time tracking", "Inventory management", "Automated reports", "GPS integration"],
    gradient: "bg-gradient-primary"
  },
  {
    title: "Nuts Fantasy - E-commerce Platform",
    description: "Modern e-commerce platform for nuts and dry fruits with seamless shopping experience and payment integration.",
    icon: ShoppingCart,
    technologies: ["Vue.js", "Django", "PostgreSQL", "Stripe", "Redis"],
    features: ["Product catalog", "Payment gateway", "Order tracking", "Admin dashboard"],
    gradient: "bg-gradient-secondary"
  },
  {
    title: "Blood Bank Management System",
    description: "Life-saving application connecting blood donors with recipients, featuring donor management and emergency alerts.",
    icon: Heart,
    technologies: ["React", "Firebase", "Node.js", "Express", "SMS API"],
    features: ["Donor registration", "Blood type matching", "Emergency alerts", "Inventory tracking"],
    gradient: "bg-gradient-accent"
  },
  {
    title: "Dress Customization App",
    description: "Interactive fashion application allowing users to customize and visualize clothing designs in real-time.",
    icon: Palette,
    technologies: ["React Native", "Three.js", "Node.js", "MongoDB", "Image AI"],
    features: ["3D visualization", "Custom designs", "Color variations", "Size recommendations"],
    gradient: "bg-gradient-hero"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-accent">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-gradient-card border-border/50 hover-lift transition-smooth"
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 left-0 w-full h-1 ${project.gradient}`}></div>
              
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${project.gradient} glow-primary`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gradient-primary">
                    {project.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="glass" size="sm" className="flex-1 group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:animate-pulse" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 group/btn">
                    <Github className="w-4 h-4 group-hover/btn:animate-bounce" />
                    Source Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;