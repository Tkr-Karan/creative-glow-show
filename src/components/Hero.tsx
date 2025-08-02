import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import TypewriterEffect from "@/components/TypewriterEffect";

const Hero = () => {
  const typewriterTexts = [
    "Software Developer Engineer",
    "Frontend Developer", 
    "React Specialist",
    "Passionate Learner",
    "Tech Enthusiast"
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative animated-bg overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60"></div>
        <div className="floating absolute top-40 right-20 w-6 h-6 bg-accent rounded-full opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="floating absolute bottom-32 left-1/4 w-3 h-3 bg-electric-blue rounded-full opacity-50" style={{animationDelay: '4s'}}></div>
        <div className="floating absolute top-1/3 right-1/3 w-5 h-5 bg-cyber-purple rounded-full opacity-30" style={{animationDelay: '1s'}}></div>
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
            React Developer with 3+ years of experience building high-performance UIs with TypeScript, Tailwind CSS, and modern frameworks. Passionate about web3 integration and seamless user experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant="default" 
            className="neon-glow pulse-glow"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          <Button 
            variant="outline" 
            className="card-hover"
            onClick={() => scrollToSection('experience')}
          >
            View Experience
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="mailto:karanpreet6154@gmail.com" 
            className="p-3 rounded-full card-hover transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/karan-kumar" 
            className="p-3 rounded-full card-hover transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/karanpreet" 
            className="p-3 rounded-full card-hover transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="tel:+919316455703" 
            className="p-3 rounded-full card-hover transition-all duration-300 hover:scale-110"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="h-8 w-8 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;