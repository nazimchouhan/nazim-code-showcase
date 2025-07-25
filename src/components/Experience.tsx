import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Trophy } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Textr AI",
      duration: "May'24 - Current",
      location: "Remote",
      type: "Internship",
      description: [
        "Built and maintained responsive frontend features using React.js, Tailwind CSS, and Material UI for a production web app",
        "Developed REST API with FastAPI and BeautifulSoup to scrape Google search data for SEO competitor analysis",
        "Designed a payment microservice using Golang, GoFiber, and integrated Razorpay for secure transaction handling"
      ],
      skills: ["React.js", "Tailwind CSS", "Material UI", "FastAPI", "Golang", "GoFiber", "Razorpay"]
    }
  ];

  const positions = [
    {
      title: "Tech Member",
      organization: "Kashiyatra IIT (BHU) Varanasi",
      duration: "2023 - Present",
      description: [
        "Solely developed an Android app for Kashiyatra 2025, streamlining management of Events, Hospitality, and Security",
        "Enabled real-time coordination among 100+ team members, improving efficiency across departments during the fest",
        "Designed a unified interface to centralize participant data, access control, and updates—crucial for smooth event execution"
      ],
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      title: "Under Secretary general for Public Outreach",
      organization: "MUN Fest, IIT (BHU) Varanasi",
      duration: "2022 - 2023",
      description: [
        "Served on the Public Outreach Team for MUN 2022-2023, leading initiatives to promote the event nationwide",
        "Collaborated with student bodies from multiple colleges across India to drive awareness and engagement",
        "Successfully increased external participation, contributing to the event's broader reach and impact"
      ],
      icon: <Trophy className="h-5 w-5" />
    }
  ];

  const achievements = [
    "🏆 Winner - FinArva AI Hackathon 2025 (GroMo AgentOS Co-Pilot)",
    "🥉 4th Place - Agentic Ethereum Hackathon India 2025",
    "🥉 3rd Place - Commercio E-Summit'23",
    "🎓 Bachelor of Technology in Metallurgical Engineering - IIT-BHU Varanasi (2021-2026)"
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and positions of responsibility that have shaped my skills and expertise.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Work Experience</h3>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="mb-6 border-primary/20 hover:glow-primary transition-smooth">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="secondary">{exp.type}</Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-primary/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Positions of Responsibility */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Positions of Responsibility</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <Card key={index} className="border-primary/20 hover:glow-primary transition-smooth">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">{position.icon}</div>
                    <div>
                      <CardTitle className="text-lg mb-2">{position.title}</CardTitle>
                      <div className="text-primary font-semibold mb-2">{position.organization}</div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {position.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {position.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Honours / Achievements</h3>
          <Card className="max-w-4xl mx-auto border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;