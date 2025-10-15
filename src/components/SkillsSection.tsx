import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server,
  Cloud,
  Database,
  Code,
  Zap,
  Network,
  Shield,
  GitBranch,
  Activity,
  Terminal
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
      title: "Backend Development",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-blue-500 to-indigo-500",
      technologies: ["Java (JDK 17, 21)", "Spring Framework (Boot, Cloud, Data)", "Go", "Node.js", "Akka Framework"],
      highlight: "6+ Years Enterprise"
    },
    {
      title: "Distributed Systems Architecture",
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-purple-500 to-pink-500",
      technologies: ["Microservices", "Event-Driven Architecture", "CQRS", "Serverless Architecture", "Cloud-Native Design", "Low-Latency Systems"],
      highlight: "1M+ Daily Transactions"
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-emerald-500 to-teal-500",
      technologies: ["AWS (EC2, S3, Lambda, ECS, EKS, Kinesis, SQS, Route53)", "Kubernetes", "Docker", "Red Hat OpenShift", "Terraform"],
      highlight: "AWS Certified"
    },
    {
      title: "Event Streaming & Messaging",
      icon: <GitBranch className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-orange-500 to-red-500",
      technologies: ["Apache Kafka", "Kafka Streams", "Confluent Kafka", "CloudEvents", "Amazon Kinesis", "Amazon SQS", "Reactor Kafka"],
      highlight: "12K Requests/Second"
    },
    {
      title: "Databases & Caching",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-cyan-500 to-blue-500",
      technologies: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "MySQL", "DynamoDB", "MariaDB", "Oracle", "Hibernate", "JDBC"],
      highlight: "40% Performance Gain"
    },
    {
      title: "API Design & Integration",
      icon: <Network className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-violet-500 to-purple-500",
      technologies: ["RESTful APIs", "GraphQL", "gRPC", "OpenAPI3 (SpringDoc)", "Apache Camel", "Protocol Buffers", "WebSockets"],
      highlight: "Sub-20ms Latency"
    },
    {
      title: "Reactive Programming",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-yellow-500 to-orange-500",
      technologies: ["Project Reactor", "Spring WebFlux", "Reactive Kafka", "Akka Framework", "Non-blocking I/O", "Backpressure Handling"],
      highlight: "Real-time Processing"
    },
    {
      title: "Security & Access Control",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-red-500 to-pink-500",
      technologies: ["Zero-Trust Architecture", "ABAC (Cedar, OPA)", "OAuth 2.0", "RBAC", "APISIX Gateway", "Security Best Practices"],
      highlight: "30+ Services Secured"
    },
    {
      title: "Observability & Monitoring",
      icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-indigo-500 to-blue-500",
      technologies: ["OpenTelemetry", "Grafana", "Prometheus", "Distributed Tracing", "System Monitoring", "Performance Optimization"],
      highlight: "80% Faster MTTD"
    },
    {
      title: "DevOps & CI/CD",
      icon: <Terminal className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
      gradient: "from-teal-500 to-emerald-500",
      technologies: ["Jenkins", "CircleCI", "GitLab", "GitHub", "Spring Cloud Config", "Spring Cloud Bus", "Docker", "Agile Methodologies"],
      highlight: "Real-time Config Updates"
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
            Proven expertise in building high-performance distributed systems, event-driven microservices,
            and scalable cloud-native solutions for enterprise platforms
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

        {/* Enhanced Experience Highlight with REAL Metrics from Resume */}
        <Card className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white border-0 relative overflow-hidden shadow-2xl shadow-slate-500/20 mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.3),transparent_50%)]" />

          <CardContent className="p-6 sm:p-8 lg:p-12 relative z-10">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Proven Performance Impact</h3>
              <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
                Real metrics from building and optimizing enterprise-scale distributed systems
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2">1M+</div>
                <div className="text-sm sm:text-base lg:text-lg text-slate-300 mb-1">Daily Transactions</div>
                <div className="text-xs sm:text-sm text-blue-300">12K requests/second</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2">92%</div>
                <div className="text-sm sm:text-base lg:text-lg text-slate-300 mb-1">Faster Coordination</div>
                <div className="text-xs sm:text-sm text-emerald-300">48 hours to 4 hours</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">99.9%</div>
                <div className="text-sm sm:text-base lg:text-lg text-slate-300 mb-1">System Uptime</div>
                <div className="text-xs sm:text-sm text-purple-300">High availability systems</div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1 sm:mb-2">20ms</div>
                <div className="text-sm sm:text-base lg:text-lg text-slate-300 mb-1">Response Time</div>
                <div className="text-xs sm:text-sm text-orange-300">Low-latency architecture</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Competencies Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <CardContent className="p-5 sm:p-6 lg:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Server className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Event-Driven Architecture</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Built large-scale data streaming systems processing 1M+ daily transactions with Kafka and CloudEvents, supporting multi-domain financial workflows
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
            <CardContent className="p-5 sm:p-6 lg:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Reactive Systems</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Engineered reactive microservices with Project Reactor achieving 60% faster processing and handling thousands of concurrent operations
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
            <CardContent className="p-5 sm:p-6 lg:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Cloud className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Cloud-Native Solutions</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                AWS Certified Solutions Architect delivering containerized workloads with Kubernetes achieving 99% uptime and 20% cost reduction
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}