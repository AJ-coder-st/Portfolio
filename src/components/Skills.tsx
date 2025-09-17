import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  GitBranch,
  Server,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    gradient: "bg-gradient-primary",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Backend Development",
    icon: Server,
    gradient: "bg-gradient-secondary",
    skills: ["Node.js", "Django", "Express.js", "FastAPI", "Python", "Java", "REST APIs", "GraphQL"]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    gradient: "bg-gradient-accent",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS", "Azure", "Docker", "Redis"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    gradient: "bg-gradient-hero",
    skills: ["React Native", "Flutter", "Android", "iOS", "Expo", "Mobile UI/UX"]
  },
  {
    title: "Design & Tools",
    icon: Palette,
    gradient: "bg-gradient-primary",
    skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Responsive Design", "Wireframing"]
  },
  {
    title: "DevOps & Version Control",
    icon: GitBranch,
    gradient: "bg-gradient-secondary",
    skills: ["Git", "GitHub", "GitLab", "CI/CD", "Jenkins", "Linux", "Nginx", "Apache"]
  }
];

// Certifications are now handled by the separate Certifications component

const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Conversational" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-hero">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across modern development stack and emerging technologies
          </p>
        </div>
        
        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border/50 hover-lift transition-smooth group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${category.gradient} glow-primary`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gradient-primary">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Languages */}
        <div className="flex justify-center">
          <Card className="p-8 bg-gradient-card border-border/50 hover-lift transition-smooth max-w-md w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-secondary glow-secondary">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gradient-secondary">
                Languages
              </h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{lang.name}</span>
                  <Badge 
                    variant="secondary"
                    className="bg-secondary/20 text-secondary border-secondary/30"
                  >
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;