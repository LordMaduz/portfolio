import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Cloud, 
  Database, 
  Code, 
  Cpu, 
  Network,
  Shield,
  Zap
} from "lucide-react";

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  technologies: string[];
}

export default function SkillsSection() {
  const techCategories: TechCategory[] = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-7 h-7" />,
      gradient: "from-purple-500 to-pink-500",
      technologies: ["Dify", "MetaGPT", "CrewAI", "Multi-Agent Systems", "Prompt Engineering", "Explainable AI", "Self-Learning Algorithms"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-7 h-7" />,
      gradient: "from-blue-500 to-indigo-500", 
      technologies: ["AWS Solutions Architecture", "Red Hat OpenShift", "Kubernetes", "Docker", "Microservices", "Event-Driven Architecture"]
    },
    {
      title: "Backend Development",
      icon: <Code className="w-7 h-7" />,
      gradient: "from-emerald-500 to-teal-500",
      technologies: ["Java 21", "Spring Boot", "Go with Gin", "Project Reactor", "Apache Camel", "MVEL Engine"]
    },
    {
      title: "Data & Integration",
      icon: <Database className="w-7 h-7" />,
      gradient: "from-orange-500 to-red-500",
      technologies: ["MongoDB", "MariaDB", "Elasticsearch", "Apache Kafka", "CloudEvents", "Real-time Processing"]
    },
    {
      title: "Observability & Monitoring",
      icon: <Cpu className="w-7 h-7" />,
      gradient: "from-indigo-500 to-purple-500",
      technologies: ["Grafana", "OpenTelemetry", "Performance Tracking", "System Monitoring", "Alert Management", "Metrics Collection"]
    },
    {
      title: "Financial Systems",
      icon: <Network className="w-7 h-7" />,
      gradient: "from-teal-500 to-cyan-500",
      technologies: ["Murex Integration", "OFP Systems", "FRDV", "GLGEN", "Hedge Accounting", "Risk Management"]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-7 h-7" />,
      gradient: "from-red-500 to-pink-500",
      technologies: ["Banking Compliance", "Audit Trails", "Security Guardrails", "Regulatory Reporting", "Risk Assessment", "Data Protection"]
    },
    {
      title: "Innovation & Research",
      icon: <Zap className="w-7 h-7" />,
      gradient: "from-yellow-500 to-orange-500",
      technologies: ["Blockchain Research", "Decentralized Systems", "Advanced Software Engineering", "Early AI Adoption", "Technology Innovation"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-0">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical stack spanning AI frameworks, cloud architecture, 
            and enterprise integration systems for scalable transformation
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-sm py-1 px-3 rounded-lg font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Highlight */}
        <Card className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
          
          <CardContent className="p-12 relative z-10">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">Technical Leadership Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">1 Year</div>
                  <div className="text-lg text-indigo-100">AI Transformation Leadership</div>
                  <div className="text-sm text-indigo-200 mt-2">Specialized AI systems and multi-agent frameworks</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-lg text-purple-100">Cross-Department Teams Led</div>
                  <div className="text-sm text-purple-200 mt-2">Complex AI implementation projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">First</div>
                  <div className="text-lg text-pink-100">Enterprise MetaGPT Implementation</div>
                  <div className="text-sm text-pink-200 mt-2">Banking sector innovation pioneer</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}