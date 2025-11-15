import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Building,
  Briefcase,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Engineer - I",
      company: "Probus Smart Things Pvt. Ltd.",
      location: "Mar 2025 - Present",
      type: "Full-time",
      duration: "1+ years",
      description: [
        "Developed high-performance UIs using React.js, TypeScript, and Tailwind CSS",
        "Implemented responsive web applications with focus on user experience",
        "Collaborated with cross-functional teams to deliver seamless solutions",
        "Optimized application performance and loading times",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "MUI",
        "Vite",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Associate Software Developer",
      company: "Entropik Tech Pvt. Ltd.",
      location: "Oct 2023 - Feb 2025",
      type: "Full-time",
      duration: "1.5 years",
      description: [
        "Architected and implemented highly accessible and standards-compliant HTML5, CSS3, and JavaScript solutions",
        "Enhanced user experience through intuitive design and seamless functionality, resulting in a 15% increase in user engagement",
        "Resolved critical properties/panel rendering design issues across multiple features",
        "Led code migration and refactoring initiative to modernize the codebase",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Trainee Software Developer",
      company: "Omniee Solutions Pvt. Ltd.",
      location: "Aug 2021 - Dec 2022",
      type: "Full-time",
      duration: "1.5 years",
      description: [
        "Developed and maintained web applications using modern JavaScript frameworks",
        "Collaborated with senior developers to implement best practices",
        "Participated in code reviews and contributed to team knowledge sharing",
        "Gained expertise in full-stack development and database management",
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Professional Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey building innovative web solutions and
            contributing to impactful projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0
                    ? "md:pr-1/2 md:pl-0"
                    : "md:pl-1/2 md:pr-0 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50 transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content Card */}
                <Card
                  className={`ml-16 md:ml-0 group relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="p-6 md:p-8 relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-br ${exp.color} bg-opacity-20`}
                          >
                            <Building className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-105 transition-transform inline-block">
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {exp.type}
                          </Badge>
                          <span className="text-xs">• {exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/20">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
