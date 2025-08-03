import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Smartphone, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js"
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "Backend & Database",
      description: "Node.js, Express, MongoDB, MySQL"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-electric-blue" />,
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps"
    },
    // {
    //   icon: <Globe className="h-8 w-8 text-cyber-purple" />,
    //   title: "Web3 Integration",
    //   description: "Blockchain, Smart Contracts, DeFi"
    // }
  ];

  return (
    <section id="about" className="py-20 animated-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate software developer with expertise in modern web technologies, 
            dedicated to creating exceptional user experiences and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="card-hover group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 3 years of experience in software development, I've been passionate about 
                  creating high-performance web applications that solve real-world problems. My journey 
                  started with a fascination for how technology can transform user experiences.
                </p>
                <p>
                  I specialize in React ecosystem with TypeScript and Tailwind CSS, building everything 
                  from responsive web applications to progressive web apps. I'm particularly interested 
                  in web3 technologies and have experience integrating blockchain solutions into modern 
                  web applications.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                  projects, and staying up-to-date with the latest trends in web development. I believe 
                  in writing clean, maintainable code and creating intuitive user interfaces.
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