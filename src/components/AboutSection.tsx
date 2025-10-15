import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users,
  Target,
  Lightbulb,
  Zap,
  Shield,
  Server,
  Cloud,
  Activity,
  Database,
  GitBranch,
  Code
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
            Professional Journey
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Building high-performance distributed systems and scalable microservices
            for enterprise platforms serving millions of users
          </p>
        </div>

        {/* Technical Excellence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">Technical Excellence</h3>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Server className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Distributed Systems Architecture</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Engineered event-driven microservices processing 1M+ daily transactions (12K requests per second) with 20ms latency and 99.9% uptime. Expert in Kafka, Redis caching, and reactive programming patterns.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Cloud className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Cloud-Native Solutions</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">AWS Solutions Architect delivering containerized workloads with Kubernetes and OpenShift. Reduced deployment cycles by 80% and infrastructure costs by 20% through cloud-native architecture and CI/CD automation.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">High-Performance Engineering</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Optimized system performance achieving sub-20ms response times for high-volume workloads. Specialized in reactive programming with Project Reactor, distributed caching, and real-time data streaming.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">Leadership Impact</h3>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-orange-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Technical Leadership & Mentoring</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Led technical architecture sessions across cross-functional teams, reducing codebase issues by 30%. Mentored engineers on distributed systems best practices, reactive programming, and comprehensive testing strategies.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-teal-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Security & Compliance</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Implemented Zero-Trust architecture with ABAC policy engine securing 30+ microservices. Achieved 99% uptime and eliminated configuration-related outages through dynamic configuration management.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-violet-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-violet-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Enterprise Backend Engineering</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Delivered scalable microservices for global fintech platforms. Reduced cross-department coordination time by 92% through real-time notification systems and workflow automation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REPLACED: AI/Blockchain sections with real expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">Backend Performance Engineering</h3>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-indigo-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Reactive Programming Excellence</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Engineered reactive microservices using Project Reactor and Spring WebFlux handling thousands of concurrent operations. Implemented backpressure handling and non-blocking I/O for optimal resource utilization.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-pink-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GitBranch className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Event-Driven Architecture</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Built real-time data processing pipelines using Kafka and CloudEvents, reducing data processing latency from 48 hours to 4 hours. Architected event-driven audit trail systems for cross-service workflow tracking.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">Data & Performance Optimization</h3>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-amber-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Distributed Caching Strategies</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Architected Redis write-behind caching solutions reducing database load by 40% and API response times by 35%. Implemented efficient cache invalidation strategies for data consistency across microservices.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-cyan-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Observability & Monitoring</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Implemented distributed tracing with OpenTelemetry reducing Mean Time to Detect by 80% and Mean Time to Resolve by 75%. Built comprehensive monitoring solutions with Grafana and Prometheus for production systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-slate-800/90 to-slate-700/80 backdrop-blur-xl border-slate-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />

          <CardContent className="p-6 sm:p-8 lg:p-12 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">My Approach</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-blue-300">Performance-Driven</h4>
                  <p className="text-slate-200 text-sm sm:text-sm">Every solution delivers measurable improvements with quantifiable metrics for latency, throughput, and reliability</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-purple-300">Collaborative</h4>
                  <p className="text-slate-200 text-sm sm:text-sm">Working effectively across teams, mentoring engineers, and fostering knowledge sharing for collective growth</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-emerald-300">Quality-Focused</h4>
                  <p className="text-slate-200 text-sm sm:text-sm">Combining best practices with proven design patterns for maintainable, scalable, and reliable systems</p>
                </div>
              </div>

              {/* FIXED: Realistic quote matching IC engineer role */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-300 italic">
                "Building great software isn't just about code, it's about understanding business needs,
                collaborating across teams, and delivering reliable systems at scale. I focus on creating
                solutions that are performant, maintainable, and solve real problems."
              </blockquote>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}