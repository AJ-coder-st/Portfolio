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
    title: "Data Analysis & Prompt Engineering",
    icon: Database,
    gradient: "bg-gradient-accent",
    skills: [
      "Data Analysis",
      "Prompt Engineering",
      "LLMOps",
      "Prompt Evaluation",
      "Token Management",
      "OpenAI API",
      "GPT-4 / Claude",
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Power BI"
    ]
  },
  {
    title: "Frontend Development",
    icon: Code2,
    gradient: "bg-gradient-primary",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3", "JavaScript", "Component Accessibility"]
  },
  {
    title: "Backend Development",
    icon: Server,
    gradient: "bg-gradient-secondary",
    skills: ["Node.js", "Django", "Express.js", "FastAPI", "Python", "Java", "REST APIs", "GraphQL", "API Orchestration"]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    gradient: "bg-gradient-accent",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS", "Azure", "Docker", "Redis", "Vector Stores", "Data Analysis"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    gradient: "bg-gradient-hero",
    skills: ["React Native", "Flutter", "Android", "iOS", "Expo", "Mobile UI/UX", "On-device AI"]
  },
  {
    title: "Design & Tools",
    icon: Palette,
    gradient: "bg-gradient-primary",
    skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Responsive Design", "Wireframing", "Prompt Prototyping", "Prompt Engineering"]
  },
  {
    title: "DevOps & Version Control",
    icon: GitBranch,
    gradient: "bg-gradient-secondary",
    skills: ["Git", "GitHub", "GitLab", "CI/CD", "Jenkins", "Linux", "Nginx", "Apache", "LLMOps", "Prompt Evaluation"]
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
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-gradient-hero">Skills & Expertise</span>
          </h2>
          <p className="section-subtitle">
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