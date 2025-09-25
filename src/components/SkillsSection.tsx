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
  Zap,
  Blocks,
  TrendingUp
} from "lucide-react";

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  technologies: string[];
  highlight?: string;
}

export default function SkillsSection() {
  const techCategories: TechCategory[] = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-purple-500 to-pink-500",
      technologies: ["Dify", "MetaGPT", "CrewAI", "Multi-Agent Systems", "Hugging Face", "Prompt Engineering", "LLM Integration"],
      highlight: "Enterprise AI Pioneer"
    },
    {
      title: "Blockchain & Web3",
      icon: <Blocks className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-amber-500 to-orange-500",
      technologies: ["Ethereum", "Solidity", "ZK-Rollups", "Smart Contracts", "Zero-Knowledge Proofs", "Layer 2 Solutions", "IPFS"],
      highlight: "96% Performance Improvement"
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-blue-500 to-indigo-500",
      technologies: ["AWS Solutions Architecture", "Red Hat OpenShift", "Kubernetes", "Docker", "Microservices", "Event-Driven Architecture"],
      highlight: "AWS Certified"
    },
    {
      title: "Backend Development",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-emerald-500 to-teal-500",
      technologies: ["Java 21", "Spring Boot", "Go with Gin", "Project Reactor", "Apache Camel", "Python", "Node.js"],
      highlight: "6+ Years Enterprise"
    },
    {
      title: "Financial Technology",
      icon: <Network className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-teal-500 to-cyan-500",
      technologies: ["Murex Integration", "OFP Systems", "FRDV", "Cross-Border Payments", "Hedge Accounting", "Risk Management"],
      highlight: "70% Cost Reduction"
    },
    {
      title: "Data & Integration",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-orange-500 to-red-500",
      technologies: ["MongoDB", "MariaDB", "Elasticsearch", "Apache Kafka", "CloudEvents", "Real-time Processing"],
      highlight: "10,000+ TPS"
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-red-500 to-pink-500",
      technologies: ["Zero-Trust Architecture", "Banking Compliance", "Cryptographic Protocols", "Regulatory Reporting", "AML/KYC"],
      highlight: "15+ Jurisdictions"
    },
    {
      title: "Observability & Performance",
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-indigo-500 to-purple-500",
      technologies: ["Grafana", "OpenTelemetry", "Performance Optimization", "System Monitoring", "Distributed Tracing", "99.9% Uptime"],
      highlight: "Sub-second Response"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.05),transparent_50%)]" />

      {/* Floating Elements - Mobile Optimized */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse delay-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 text-sm bg-blue-500/20 text-blue-300 border-blue-500/30">
             Technical Expertise
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-white">Skills &</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <div className="h-0.5 sm:h-1 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade technical stack spanning AI systems, blockchain infrastructure,
            and cloud architecture with proven results across global markets
          </p>
        </div>

        {/* Technology Grid with Enhanced Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {techCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/30 relative">
              <CardContent className="p-4 sm:p-5 lg:p-6 xl:p-8">
                {/* Mobile-First Header Layout */}
                <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`p-2.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br ${category.gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      {category.icon}
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight">{category.title}</h3>
                  </div>
                  {category.highlight && (
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-400/30 text-xs px-2 py-1 flex-shrink-0 self-start">
                      {category.highlight}
                    </Badge>
                  )}
                </div>

                {/* Mobile-Optimized Technology Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-slate-700/60 text-slate-200 hover:bg-slate-600/60 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200 text-xs sm:text-sm py-1 px-2 sm:px-3 rounded-md sm:rounded-lg font-medium hover:scale-105 leading-relaxed"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Experience Highlight with Real Metrics */}
        <Card className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white border-0 relative overflow-hidden shadow-2xl shadow-slate-500/20 mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.3),transparent_50%)]" />

          <CardContent className="p-6 sm:p-8 lg:p-12 relative z-10">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Technical Leadership Impact</h3>
              <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
                Quantifiable results from implementing cutting-edge technologies in enterprise environments
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2">96%</div>
                <div className="text-sm sm:text-base lg:text-lg text-slate-300 mb-1">Performance Boost</div>
                <div className="text-xs sm:text-sm text-blue-300">Blockchain Payment Systems</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2">70%</div>
                <div className="text-sm sm:text-base lg:text-lg text-slate-300 mb-1">Cost Reduction</div>
                <div className="text-xs sm:text-sm text-emerald-300">Enterprise Operations</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">15+</div>
                <div className="text-sm sm:text-base lg:text-lg text-slate-300 mb-1">Global Markets</div>
                <div className="text-xs sm:text-sm text-purple-300">Cross-Border Solutions</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1 sm:mb-2">1st</div>
                <div className="text-sm sm:text-base lg:text-lg text-slate-300 mb-1">MetaGPT Enterprise</div>
                <div className="text-xs sm:text-sm text-orange-300">Banking Implementation</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Competencies Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <CardContent className="p-5 sm:p-6 lg:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Enterprise Architecture</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                6+ years designing scalable systems processing 10,000+ concurrent transactions with 99.9% uptime
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
            <CardContent className="p-5 sm:p-6 lg:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Brain className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">AI Innovation</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Leading enterprise AI transformation with multi-agent systems achieving 40% operational efficiency gains
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300">
            <CardContent className="p-5 sm:p-6 lg:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Blocks className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Blockchain Infrastructure</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Built enterprise blockchain platform reducing transaction times from 5 days to 2.3 seconds globally
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}