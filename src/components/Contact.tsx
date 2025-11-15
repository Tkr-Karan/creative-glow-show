import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kumarkaran427@outlook.com",
      href: "mailto:kumarkaran427@outlook.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9315455783",
      href: "tel:+919315455783",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "karankumar07",
      href: "https://linkedin.com/in/karankumar07/",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Tkr-Karan",
      href: "https://github.com/Tkr-Karan",
      color: "from-gray-600 to-gray-800",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">
                    Let's Connect
                  </h3>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Feel free to reach out through any of these channels. I'm
                  always excited to connect with fellow developers and potential
                  collaborators.
                </p>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-xl border border-primary/20 bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                      >
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} bg-opacity-20 group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-muted-foreground group-hover:text-primary transition-colors">
                            {contact.label}
                          </p>
                          <p className="text-base font-medium group-hover:text-primary transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">Location</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Based in{" "}
                  <span className="text-primary font-semibold">India</span>,
                  available for remote work worldwide and open to relocation for
                  the right opportunity.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">
                  Send a Message
                </h3>
              </div>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? Let's discuss how we can work together.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold">
                      Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      required
                      className="bg-background/50 border-primary/20 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-primary/20 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Discussion"
                    required
                    className="bg-background/50 border-primary/20 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hello!"
                    required
                    rows={6}
                    className="bg-background/50 border-primary/20 focus:ring-primary focus:border-primary resize-none transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
