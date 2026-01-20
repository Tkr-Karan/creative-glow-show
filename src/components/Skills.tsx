import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Database,
  Wrench,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "Python", level: 80 },
        { name: "Fast API", level: 50 },
      ],
    },
    {
      title: "Mobile & PWA",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      skills: [
        { name: "React Native", level: 75 },
        { name: "PWA", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Performance Optimization", level: 85 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "VS Code", level: 95 },
        { name: "Jenkins", level: 65 },
        { name: "Vite", level: 75 },
        { name: "Jest", level: 75 },
        { name: "Webpack", level: 70 },
      ],
    },
  ];

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
    "Docker",
    "Jenkins",
    "Jest",
    "Webpack",
    "React Native",
    "Next.js",
    "PWA",
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/5"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Skills & Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency
            levels across various technologies.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.bgColor} group-hover:scale-110 transition-transform duration-500`}
                    >
                      <IconComponent
                        className={`h-7 w-7 text-primary`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-5">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-2.5">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-sm">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 100 + i * 100}ms`,
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack */}
        <Card className="relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <CardHeader className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <h3 className="text-3xl font-bold gradient-text">
                Technology Stack
              </h3>
            </div>
            <p className="text-center text-muted-foreground">
              Technologies I work with on a daily basis
            </p>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="group text-sm py-2.5 px-5 border-primary/30 bg-background/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  style={{
                    animationDelay: isVisible ? `${index * 50}ms` : "0ms",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(10px)",
                    transition: `all 0.3s ease ${index * 50}ms`,
                  }}
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
