import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-gradient-primary">About Me</span>
          </h2>
          <p className="section-subtitle">
            Prompt engineer and AI/ML enthusiast focused on model alignment, data-driven workflows, and precise prompt design.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-smooth animate-glow"></div>
              <img 
                src={profilePhoto}
                alt="Bharath Waj M"
                className="relative w-80 h-80 object-contain rounded-2xl shadow-card hover-lift transition-smooth bg-black/20 p-1"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="p-8 bg-gradient-card border-border/50 hover-lift transition-smooth">
              <h3 className="text-2xl font-semibold mb-4 text-gradient-primary">
                Hello, I'm Bharath Waj M
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I specialize in designing effective prompts and AI workflows to deliver reliable, insightful outcomes. My focus areas include model alignment, token optimization, and LLMOps practices that improve efficiency and reduce overhead.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I work across the AI/ML stack—from data preparation and analysis to prompt iteration and evaluation—integrating APIs like OpenAI and leveraging tools for robust testing and debuggability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I value clarity, reproducibility, and measurable impact. I’ve also built and delivered websites as a freelance developer, partnering with clients to ship performant, maintainable solutions.
              </p>
            </Card>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-card border-border/50 text-center hover-scale transition-smooth">
                <div className="text-3xl font-bold text-gradient-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 bg-gradient-card border-border/50 text-center hover-scale transition-smooth">
                <div className="text-3xl font-bold text-gradient-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;