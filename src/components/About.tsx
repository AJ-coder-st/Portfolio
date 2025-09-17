import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with expertise in full-stack development and modern technologies
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
                className="relative w-80 h-80 object-cover rounded-2xl shadow-card hover-lift transition-smooth"
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
                A passionate Full-Stack Developer and Software Engineer with a strong foundation in 
                computer science and engineering. I specialize in creating innovative solutions 
                that bridge the gap between cutting-edge technology and real-world applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With experience spanning multiple domains including web development, mobile applications, 
                and enterprise systems, I bring a comprehensive approach to software development. 
                My journey has taken me through exciting roles at Soul AI, DLK Technologies, and Accenture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning, clean code, and building solutions that make a 
                meaningful impact. When I'm not coding, you'll find me exploring new technologies 
                or contributing to open-source projects.
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