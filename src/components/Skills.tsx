import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Wrench, Globe, Smartphone, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "GraphQL", level: 65 }
      ]
    },
    {
      title: "Mobile & Web3",
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: "React Native", level: 75 },
        { name: "Web3.js", level: 70 },
        { name: "Blockchain", level: 65 },
        { name: "PWA", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Performance Optimization", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "VS Code", level: 95 },
        { name: "Jenkins", level: 65 },
        { name: "Jest", level: 75 },
        { name: "Webpack", level: 70 }
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "MySQL",
    "Tailwind CSS", "HTML5", "CSS3", "Git", "Docker", "Jenkins", "Jest", "Webpack",
    "React Native", "Next.js", "GraphQL", "Web3.js", "Blockchain", "PWA"
  ];

  return (
    <section id="skills" className="py-20 animated-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="card-hover">
          <CardHeader>
            <h3 className="text-2xl font-bold text-center gradient-text">Technology Stack</h3>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;