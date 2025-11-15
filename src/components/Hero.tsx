import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Globe,
  Code,
  Database,
  Smartphone,
  Sparkles,
} from "lucide-react";
import TypewriterEffect from "@/components/TypewriterEffect";

const Hero = () => {
  const typewriterTexts = [
    "Software Developer Engineer",
    "Frontend Developer",
    "React Specialist",
    "Passionate Learner",
    "Tech Enthusiast",
  ];

  const techStack = [
    {
      name: "React",
      icon: <Code className="h-4 w-4" />,
      color: "text-blue-400",
    },
    {
      name: "TypeScript",
      icon: <Code className="h-4 w-4" />,
      color: "text-blue-500",
    },
    {
      name: "Node.js",
      icon: <Database className="h-4 w-4" />,
      color: "text-green-400",
    },
    {
      name: "Tailwind",
      icon: <Smartphone className="h-4 w-4" />,
      color: "text-cyan-400",
    },
    {
      name: "MongoDB",
      icon: <Database className="h-4 w-4" />,
      color: "text-green-500",
    },
    {
      name: "Next.js",
      icon: <Globe className="h-4 w-4" />,
      color: "text-white",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-section">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Floating Tech Stack Badges */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techStack.map((tech, index) => (
          <Badge
            key={tech.name}
            className={`tech-badge absolute cursor-default pointer-events-auto flex items-center gap-2 px-4 py-2.5 backdrop-blur-md border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300 ${tech.color}`}
            style={{
              top: `${15 + index * 14}%`,
              left: `${10 + (index % 2) * 75}%`,
              animationDelay: `${index * 0.8}s`,
            }}
          >
            {tech.icon}
            <span className="font-medium">{tech.name}</span>
          </Badge>
        ))}
      </div>

      {/* Floating particles with sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10 relative mt-[5rem]">
        <div className="mb-12 space-y-6">
          {/* Greeting badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Welcome to my Portfolio</span>
          </div> */}

          <h1 className="text-7xl md:text-9xl font-black mb-6 hero-title tracking-tight leading-none">
            <span className="block gradient-text hero-name">Karan Kumar</span>
            {/* <span className="block gradient-text-secondary hero-name">
              Kumar
            </span> */}
          </h1>

          <div className="mb-8 h-10 flex items-center justify-center">
            <TypewriterEffect texts={typewriterTexts} />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            React Developer with{" "}
            <span className="text-primary font-semibold">3+ years</span> of
            experience building high-performance UIs using TypeScript and
            Tailwind CSS. Proficient in Micro-Frontend architecture, CI/CD
            automation, and security compliance, focused on delivering optimized
            and seamless user experiences.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group backdrop-blur-sm bg-background/50 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("experience")}
          >
            View My Work
            <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {[
            {
              icon: Mail,
              href: "mailto:kumarkaran427@outlook.com",
              label: "Email",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/karankumar07/",
              label: "LinkedIn",
            },
            {
              icon: Github,
              href: "https://github.com/Tkr-Karan",
              label: "GitHub",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="group relative p-4 rounded-full backdrop-blur-md bg-primary/10 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:bg-primary/20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-medium">Scroll</span>
            <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
