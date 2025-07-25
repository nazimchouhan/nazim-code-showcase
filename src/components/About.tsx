import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileAvatar from "@/assets/profile-avatar.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <img
                src={profileAvatar}
                alt="Nazim Chouhan"
                className="w-80 h-80 object-cover rounded-2xl mx-auto glow-primary"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A passionate and dedicated <span className="text-primary font-semibold">Full Stack Developer</span> with 
              a strong focus on software development. Currently studying at 
              <span className="text-primary font-semibold">IIT-BHU Varanasi</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              During my internship at <span className="text-primary font-semibold">Textr AI</span>, I worked as a 
              Full Stack Developer, building responsive frontend features using React.js, Tailwind CSS, and Material UI. 
              I also developed REST APIs and integrated payment microservices for secure transaction handling.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Recent Achievements</h3>
              <div className="space-y-2">
                <Badge variant="secondary" className="mr-2">
                  🏆 4th Place - Agentic Ethereum Hackathon India 2025
                </Badge>
                <Badge variant="secondary" className="mr-2">
                  🥇 Winner - FinArva AI Hackathon 2025 (GroMo AgentOS Co-Pilot)
                </Badge>
                <Badge variant="secondary" className="mr-2">
                  🥉 3rd Place - Commercio E-Summit'23
                </Badge>
              </div>
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structure and Algorithms",
                    "Android Development", 
                    "Competitive Programming",
                    "OOPS",
                    "Full Stack Development",
                    "AI/ML"
                  ].map((interest) => (
                    <Badge key={interest} variant="outline" className="border-primary/50">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;