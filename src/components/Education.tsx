import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master's Degree",
      institution: "Woolf University",
      duration: "March 2022 - Present",
      location: "Online",
      grade: "In Progress",
      highlights: [
        "Advanced software engineering practices",
        "Modern web development frameworks",
        "System design and architecture",
        "Industry best practices and methodologies"
      ]
    },
    {
      degree: "B.Tech in Computer Science",
      institution: "KCC Institute Of Technology and Management",
      duration: "Aug 2017 - Oct 2021",
      location: "Punjab, India",
      grade: "B.S. in Computer Science",
      highlights: [
        "Graduated with excellent academic performance",
        "Active participation in coding competitions",
        "Completed various software development projects",
        "Strong foundation in computer science fundamentals"
      ]
    }
  ];

  const certifications = [
    "React.js Advanced Development",
    "TypeScript Professional",
    "Node.js Backend Development",
    "MongoDB Database Design",
    "Web3 Development Fundamentals",
    "System Design Principles"
  ];

  return (
    <section id="education" className="py-20 animated-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education & Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic background and continuous learning journey in technology and software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="card-hover group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold gradient-text">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-medium text-muted-foreground mt-1">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {edu.grade}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="card-hover">
          <CardHeader>
            <h3 className="text-2xl font-bold text-center gradient-text">
              Certifications & Achievements
            </h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg border border-border hover:border-primary transition-colors hover:bg-primary/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;