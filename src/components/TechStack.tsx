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
  color: string;
  technologies: string[];
}

export default function TechStack() {
  const techCategories: TechCategory[] = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-500",
      technologies: ["MetaGPT", "CrewAI", "Multi-Agent Systems", "Prompt Engineering", "Explainable AI", "Self-Learning Algorithms"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-blue-500", 
      technologies: ["AWS Solutions Architecture", "Red Hat OpenShift", "Kubernetes", "Docker", "Microservices", "Event-Driven Architecture"]
    },
    {
      title: "Backend Development",
      icon: <Code className="w-6 h-6" />,
      color: "bg-emerald-500",
      technologies: ["Java 21", "Spring Boot", "Go with Gin", "Project Reactor", "Apache Camel", "MVEL Engine"]
    },
    {
      title: "Data & Integration",
      icon: <Database className="w-6 h-6" />,
      color: "bg-orange-500",
      technologies: ["MongoDB", "MariaDB", "Elasticsearch", "Apache Kafka", "CloudEvents", "Real-time Processing"]
    },
    {
      title: "Observability & Monitoring",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-indigo-500",
      technologies: ["Grafana", "OpenTelemetry", "Performance Tracking", "System Monitoring", "Alert Management", "Metrics Collection"]
    },
    {
      title: "Financial Systems",
      icon: <Network className="w-6 h-6" />,
      color: "bg-teal-500",
      technologies: ["Murex Integration", "OFP Systems", "FRDV", "GLGEN", "Hedge Accounting", "Risk Management"]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-500",
      technologies: ["Banking Compliance", "Audit Trails", "Security Guardrails", "Regulatory Reporting", "Risk Assessment", "Data Protection"]
    },
    {
      title: "Innovation & Research",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-yellow-500",
      technologies: ["Blockchain Research", "Decentralized Systems", "Advanced Software Engineering", "Early AI Adoption", "Technology Innovation", "Research Publications"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technology Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technical stack spanning AI frameworks, cloud architecture, 
            and enterprise integration systems for scalable AI transformation
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Education */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Professional Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">AWS Solutions Architect Associate</span>
                  <Badge className="bg-white/20 text-white border-white/30">Valid 2025-2028</Badge>
                </div>
                <p className="text-blue-100">
                  Certified in designing distributed systems and cloud architecture solutions on AWS platform
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Academic Background</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Master's in Advanced Software Engineering</span>
                  <Badge className="bg-white/20 text-white border-white/30">Blockchain Research</Badge>
                </div>
                <p className="text-emerald-100">
                  Specialized research in blockchain technology and decentralized systems architecture
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Industry Recognition */}
        <div className="mt-12 text-center">
          <Card className="bg-slate-900 text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-400">First</div>
                  <div className="text-sm text-slate-300">Enterprise MetaGPT Implementation in Banking</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">6+</div>
                  <div className="text-sm text-slate-300">Years Leading AI Transformation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">5+</div>
                  <div className="text-sm text-slate-300">Cross-Department Teams Led</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}