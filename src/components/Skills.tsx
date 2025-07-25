import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technical Skills",
      skills: [
        "Java", "Kotlin", "Jetpack Compose", "XML", "Firebase", 
        "SQL", "Git", "GitHub", "React.js", "Tailwind CSS", "Material UI"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Technologies",
      skills: [
        "Android Studio", "Visual Studio", "ChatGPT", "Cursor", 
        "GoFiber", "Razorpay", "FastAPI", "BeautifulSoup"
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend & Databases",
      skills: [
        "REST APIs", "Golang", "SQLite", "Firebase", "JWT", 
        "Payment Processing", "Microservices"
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile & AI",
      skills: [
        "Android Development", "Jetpack Compose", "Whisper STT", 
        "GPT-4o WebSocket", "Neural APIs", "AgentOS"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I am proficient in a wide array of technologies that enable me to build 
            scalable and efficient applications. My key stack includes the following technologies:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:border-primary/50 transition-smooth hover:glow-primary animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-primary group-hover:scale-110 transition-smooth">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
              <p className="text-muted-foreground">
                I am always seeking new opportunities to expand my knowledge and stay up-to-date 
                with the latest technologies and best practices in software development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;