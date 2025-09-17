import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-gradient-primary">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic foundation in computer science and engineering
          </p>
        </div>
        
        <Card className="p-8 bg-gradient-card border-border/50 hover-lift transition-smooth group max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Column - Icon & Degree */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-primary glow-primary mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-primary mb-2">
                Bachelor of Engineering
              </h3>
              <p className="text-lg text-foreground font-medium">
                Computer Science & Engineering
              </p>
            </div>
            
            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* College Info */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Panimalar Engineering College
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2021 - 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Chennai, Tamil Nadu</span>
                  </div>
                </div>
              </div>
              
              {/* GPA */}
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-foreground font-medium">CGPA: </span>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  7.5 / 10.0
                </Badge>
              </div>
              
              {/* Key Subjects */}
              <div>
                <h5 className="text-sm font-medium text-foreground mb-3">Key Subjects</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Database Management Systems",
                    "Software Engineering",
                    "Web Development",
                    "Mobile App Development",
                    "Machine Learning",
                    "Computer Networks",
                    "Operating Systems"
                  ].map((subject, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth text-xs"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Achievements */}
              <div>
                <h5 className="text-sm font-medium text-foreground mb-3">Academic Achievements</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Consistent academic performance throughout the program
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Active participation in coding competitions and hackathons
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    Led multiple academic projects and team collaborations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;