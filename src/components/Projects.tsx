import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, ShoppingCart, Heart, Palette, Leaf } from "lucide-react";

const projects = [
  {
    title: "🌾 Agri-Field Monitoring with Drone Images",
    description: "Drone-based agricultural field monitoring system that analyzes aerial images to detect red-marked boundaries, extract crop field area, identify navigable paths, and generate overlays and statistical reports for better farm management.",
    icon: Leaf,
    technologies: [
      "Python",
      "Google Colab",
      "OpenCV",
      "scikit-image",
      "Pillow",
      "Matplotlib",
      "HSV",
      "LAB",
      "Image Processing"
    ],
    features: [
      "Drone image upload",
      "Red boundary detection",
      "Field segmentation (green)",
      "Path detection (blue)",
      "Interactive sensitivity tuning",
      "Export overlays & reports"
    ],
    gradient: "bg-gradient-accent"
  },
  {
    title: "Asset Management System with GPS",
    description: "Comprehensive asset tracking system with real-time GPS monitoring, inventory management, and automated reporting features.",
    icon: Database,
    technologies: ["React", "Node.js", "MongoDB", "GPS API", "Express", "OpenAI API", "Embedding Models"],
    features: ["Real-time tracking", "Inventory management", "Automated reports", "GPS integration"],
    gradient: "bg-gradient-primary"
  },
  {
    title: "Nuts Fantasy - E-commerce Platform",
    description: "Modern e-commerce platform for nuts and dry fruits with seamless shopping experience and payment integration.",
    icon: ShoppingCart,
    technologies: ["Vue.js", "Django", "PostgreSQL", "Stripe", "Redis", "Product Recommendations", "Prompt Tuning"],
    features: ["Product catalog", "Payment gateway", "Order tracking", "Admin dashboard"],
    gradient: "bg-gradient-secondary"
  },
  {
    title: "Blood Bank Management System",
    description: "Life-saving application connecting blood donors with recipients, featuring donor management and emergency alerts.",
    icon: Heart,
    technologies: ["React", "Firebase", "Node.js", "Express", "SMS API", "LLM Guardrails", "Prompt Evaluation"],
    features: ["Donor registration", "Blood type matching", "Emergency alerts", "Inventory tracking"],
    gradient: "bg-gradient-accent"
  },
  {
    title: "Dress Customization App",
    description: "Interactive fashion application allowing users to customize and visualize clothing designs in real-time.",
    icon: Palette,
    technologies: ["React Native", "Three.js", "Node.js", "MongoDB", "Image AI", "CLIP Guidance", "Stable Diffusion"],
    features: ["3D visualization", "Custom designs", "Color variations", "Size recommendations"],
    gradient: "bg-gradient-hero"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-gradient-accent">Featured Projects</span>
          </h2>
          <p className="section-subtitle">
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