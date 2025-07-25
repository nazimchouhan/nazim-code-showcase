import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FinArva AI Hackathon 2025 - AgentOS Co-Pilot",
      description: "Built AgentOS, an AI copilot for 9,000+ agents at GroMo, enabling real-time pitch coaching and trust-building. Led App building, UI development and backend connectivity. Integrated sub-second latency (850ms) AI stack using Whisper STT, GPT-4o WebSocket, and Android Neural APIs.",
      tech: ["AgentOS", "Android", "Whisper STT", "GPT-4o", "WebSocket", "Neural APIs"],
      status: "🏆 Winner",
      github: "https://github.com/nazimchouhan/gromoApp"
    },
    {
      title: "Food Ordering Android App",
      description: "Developed a comprehensive food ordering application with backend using Java and responsive frontend with XML. Integrated Firebase for user authentication and SQLite for local data storage. Implemented secure payment processing using Razorpay for reliable transaction handling.",
      tech: ["Android", "Java", "XML", "Firebase", "SQLite", "Razorpay"],
      status: "Completed",
      github: "https://github.com/nazimchouhan/FoodOrdering"
    },
    {
      title: "User Verification System - Kashiyatra",
      description: "Developed a real-time QR scanning app to verify 2,000+ user IDs in 90 minutes with minimal lag. Implemented JWT token decoding and MLKit Pikashow for high-speed scanning. Designed intuitive green/red UI for instant feedback with robust error handling.",
      tech: ["Android", "QR Scanner", "JWT", "MLKit", "SQLite"],
      status: "Live Event",
      github: "https://github.com/nazimchouhan/KYScanner"
    },
    {
      title: "Agentic Ethereum Hackathon India 2025",
      description: "Achieved 4th place in the prestigious Agentic Ethereum Hackathon India 2025, building innovative blockchain solutions with focus on agent-based systems and smart contracts.",
      tech: ["Ethereum", "Smart Contracts", "Blockchain", "Web3"],
      status: "🥉 4th Place",
      github: "https://github.com/nazimchouhan/EthereumApp"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my notable projects that demonstrate my skills and passion for creating impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:border-primary/50 transition-smooth hover:glow-primary animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/nazimchouhan" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;