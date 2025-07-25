import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/nazimchouhan",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/nazim-chouhan-03011a236/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:nazim.chouhan.cd.met21@itbhu.ac.in",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Nazim Chouhan
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full Stack Developer passionate about building innovative solutions 
              and creating meaningful impact through technology.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="hover:border-primary/50 hover:text-primary transition-smooth"
                  asChild
                >
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Varanasi, Uttar Pradesh</p>
              <p>+91 8058086031</p>
              <a 
                href="mailto:nazim.chouhan.cd.met21@itbhu.ac.in"
                className="hover:text-primary transition-smooth"
              >
                nazim.chouhan.cd.met21@itbhu.ac.in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Nazim Chouhan. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-muted-foreground text-sm">
              Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;