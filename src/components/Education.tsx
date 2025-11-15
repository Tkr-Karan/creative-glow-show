import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  BookOpen,
} from "lucide-react";

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
        "Industry best practices and methodologies",
      ],
      color: "from-blue-500 to-cyan-500",
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
        "Strong foundation in computer science fundamentals",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  const certifications = [
    { name: "React.js Advanced Development", icon: Award },
    { name: "TypeScript Professional", icon: Award },
    { name: "Node.js Backend Development", icon: Award },
    { name: "MongoDB Database Design", icon: Award },
    { name: "System Design Principles", icon: Award },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/5"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Education & Learning</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text">
            Education & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic background and continuous learning journey in technology
            and software development.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto space-y-8 mb-20">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${edu.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-primary mb-3">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 w-fit h-fit"
                      >
                        {edu.grade}
                      </Badge>
                    </div>

                    <ul className="space-y-3 pt-4 border-t border-primary/20">
                      {edu.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-br ${edu.color} mt-2 flex-shrink-0`}
                          ></div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <CardContent className="p-8 md:p-12 relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">
                Certifications & Achievements
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div
                    key={index}
                    className="group p-5 rounded-xl border border-primary/20 bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold group-hover:text-primary transition-colors">
                        {cert.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
