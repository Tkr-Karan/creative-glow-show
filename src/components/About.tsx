import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Smartphone,
  Sparkles,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Backend & Database",
      description: "Node.js, Express, MongoDB, MySQL",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const stats = [
    { icon: TrendingUp, label: "3+ Years", value: "Experience" },
    { icon: Target, label: "50+", value: "Projects" },
    { icon: Zap, label: "100%", value: "Dedication" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text">
            Who I Am
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate software developer with expertise in modern web
            technologies, dedicated to creating exceptional user experiences and
            innovative solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 text-center relative z-10">
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <IconComponent
                      className={`h-10 w-10 ${highlight.iconColor}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                  <div
                    className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${highlight.gradient} transition-all duration-500 rounded-full`}
                  ></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Journey Section */}
        <div className="max-w-5xl mx-auto">
          <Card className="relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">My Journey</h3>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p className="relative pl-6 border-l-2 border-primary/30">
                  With over{" "}
                  <span className="text-primary font-semibold">3 years</span> of
                  experience in software development, I've been passionate about
                  creating high-performance web applications that solve
                  real-world problems. My journey started with a fascination for
                  how technology can transform user experiences.
                </p>
                <p className="relative pl-6 border-l-2 border-primary/30">
                  I specialize in{" "}
                  <span className="text-primary font-semibold">
                    React ecosystem
                  </span>{" "}
                  with TypeScript and Tailwind CSS, building everything from
                  responsive web applications to progressive web apps. I'm
                  particularly interested in modern web technologies and have
                  experience integrating cutting-edge solutions into
                  production-ready applications.
                </p>
                <p className="relative pl-6 border-l-2 border-primary/30">
                  When I'm not coding, I enjoy exploring new technologies,
                  contributing to open-source projects, and staying up-to-date
                  with the latest trends in web development. I believe in
                  writing{" "}
                  <span className="text-primary font-semibold">
                    clean, maintainable code
                  </span>{" "}
                  and creating intuitive user interfaces that delight users.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
