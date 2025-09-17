import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Accenture",
    position: "Software Engineer",
    duration: "2024 - Present",
    location: "India",
    description: "Working on enterprise-level applications with focus on scalable solutions and modern development practices.",
    skills: ["React", "Node.js", "Azure", "Microservices"]
  },
  {
    company: "DLK Technologies",
    position: "Full-Stack Developer",
    duration: "2023 - 2024",
    location: "Chennai, Tamil Nadu",
    description: "Developed and maintained web applications using modern frameworks, collaborated with cross-functional teams.",
    skills: ["Vue.js", "Django", "PostgreSQL", "Docker"]
  },
  {
    company: "Soul AI",
    position: "Software Developer Intern",
    duration: "2022 - 2023",
    location: "Remote",
    description: "Contributed to AI-driven applications, gained experience in machine learning integration and web development.",
    skills: ["Python", "Machine Learning", "FastAPI", "React"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-gradient-secondary">Experience</span>
          </h2>
          <p className="section-subtitle">
            Professional journey through innovative companies and challenging projects
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card border-border/50 hover-lift transition-smooth group"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Column - Company Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-gradient-primary">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="font-medium text-foreground mb-2">{exp.position}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
                
                {/* Right Column - Description & Skills */}
                <div className="lg:col-span-2">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;