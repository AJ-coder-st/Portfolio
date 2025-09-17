import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Soul AI",
    position: "Prompt Engineer (Freelance)",
    duration: "Jan 2025 – Present",
    location: "Remote",
    description: "Designed and optimized AI prompts for diverse applications, improving model alignment and efficiency with GPT-4 and Claude APIs. Applied token management and LLMOps techniques to enhance performance and reduce overhead; integrated OpenAI APIs with robust debugging using stack traces and test repos.",
    skills: [
      "Prompt Engineering",
      "GPT-4",
      "Claude APIs",
      "Token Management",
      "LLMOps",
      "OpenAI API",
      "Debugging",
      "Testing"
    ]
  },
  {
    company: "DLK Technologies",
    position: "Data Science Intern",
    duration: "Jun 2024",
    location: "Chennai, Tamil Nadu",
    description: "Processed datasets with Python for cleaning and pattern identification to support accurate, structured prompts. Automated Power BI reporting workflows, improving real-time analysis efficiency by 40%.",
    skills: [
      "Python",
      "Data Cleaning",
      "Pattern Identification",
      "Power BI",
      "Automation",
      "Reporting"
    ]
  },
  {
    company: "Accenture North America (via Forage)",
    position: "Virtual Data Analyst Intern",
    duration: "May 2024",
    location: "Remote",
    description: "Conducted multi-dataset analysis to uncover optimization strategies for simulated clients. Delivered professional reports with data visualization and predictive modeling, aligning insights to AI-driven decision-making.",
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Predictive Modeling",
      "Presentation",
      "Insights"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-gradient-secondary text-glow-soft">Experience</span>
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