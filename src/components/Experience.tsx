import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Engineer - I",
      company: "Trinso - Trinso",
      location: "Mar 2025 - Present",
      type: "Full-time",
      description: [
        "Developed high-performance UIs using React.js, TypeScript, and Tailwind CSS",
        "Implemented responsive web applications with focus on user experience",
        "Collaborated with cross-functional teams to deliver seamless solutions",
        "Optimized application performance and loading times"
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Associate Software Developer",
      company: "Engage Tech Pvt. Ltd.",
      location: "Oct 2023 - Feb 2025",
      type: "Full-time",
      description: [
        "Architected and implemented highly accessible and standards-compliant HTML5, CSS3, and JavaScript solutions",
        "Enhanced user experience through intuitive design and seamless functionality, resulting in a 15% increase in user engagement",
        "Resolved critical properties/panel rendering design issues across multiple features",
        "Led code migration and refactoring initiative to modernize the codebase"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"]
    },
    {
      title: "Trainee Software Developer",
      company: "Omrise Solutions Pvt. Ltd.",
      location: "Dec 2021 - June 2023",
      type: "Full-time",
      description: [
        "Developed and maintained web applications using modern JavaScript frameworks",
        "Collaborated with senior developers to implement best practices",
        "Participated in code reviews and contributed to team knowledge sharing",
        "Gained expertise in full-stack development and database management"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"]
    }
  ];

  return (
    <section id="experience" className="py-20 animated-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey building innovative web solutions and contributing to impactful projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="card-hover group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold gradient-text group-hover:scale-105 transition-transform">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;