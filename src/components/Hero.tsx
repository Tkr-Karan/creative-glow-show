import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Globe,
  Code,
  Database,
  Smartphone,
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
    { name: "React", icon: <Code className="h-4 w-4" /> },
    { name: "TypeScript", icon: <Code className="h-4 w-4" /> },
    { name: "Node.js", icon: <Database className="h-4 w-4" /> },
    { name: "Tailwind", icon: <Smartphone className="h-4 w-4" /> },
    { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
    { name: "Next.js", icon: <Globe className="h-4 w-4" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative animated-bg overflow-hidden">
      {/* Tech Globe - centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Globe className="tech-globe h-64 w-64 text-electric-blue opacity-10" />
      </div>

      {/* Floating Tech Stack Buttons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techStack.map((tech, index) => (
          <Badge
            key={tech.name}
            className={`tech-button absolute cursor-default pointer-events-auto flex items-center rounded-sm  gap-2 px-4 py-2`}
            style={{
              top: `${20 + index * 12}%`,
              left: `${15 + (index % 2) * 70}%`,
              animationDelay: `${index * 1.5}s`,
            }}
          >
            {tech.icon}
            <span>{tech.name}</span>
          </Badge>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60"></div>
        <div
          className="floating absolute top-40 right-20 w-6 h-6 bg-accent rounded-full opacity-40"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="floating absolute bottom-32 left-1/4 w-3 h-3 bg-electric-blue rounded-full opacity-50"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="floating absolute top-1/3 right-1/3 w-5 h-5 bg-cyber-purple rounded-full opacity-30"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            Karan Kumar
          </h1>
          <div className="mb-6 h-8">
            <TypewriterEffect texts={typewriterTexts} />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            React Developer with 3+ years of experience building
            high-performance UIs using TypeScript and Tailwind CSS. Proficient
            in Micro-Frontend architecture, CI/CD automation, and security
            compliance, focused on delivering optimized and seamless user
            experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant="default"
            className="neon-glow pulse-glow"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          <Button
            variant="outline"
            className="card-hover"
            onClick={() => scrollToSection("experience")}
          >
            View Experience
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:kumarkaran427@outlook.com"
            className="p-3 rounded-full card-hover transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/karankumar07/"
            className="p-3 rounded-full card-hover transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/Tkr-Karan"
            className="p-3 rounded-full card-hover transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          {/* <a
            href="tel:+919316455703"
            className="p-3 rounded-full card-hover transition-all duration-300 hover:scale-110"
          >
            <Phone className="h-6 w-6" />
          </a> */}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            className="h-8 w-8 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
