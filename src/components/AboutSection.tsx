import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Globe,
  Brain,
  Target,
  Lightbulb,
  Zap,
  Shield,
  Server,
  Cloud,
  Activity,
  Lock,
  Eye,
  Briefcase,
  TrendingUp
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
            Bridging business vision and AI reality through strategic leadership
            and technical expertise in enterprise environments
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
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Enterprise Architecture</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Designed microservices architectures processing 10,000+ concurrent transactions. Expert in event-driven systems, API gateways, and distributed computing patterns.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Cloud className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Cloud-Native Solutions</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">AWS Solutions Architect delivering containerized workloads with Kubernetes. Implemented CI/CD pipelines reducing deployment times by 80%.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">High-Performance Engineering</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Optimized system performance achieving milli second response times. Specialized in real-time data streaming, reactive programming and high-throughput data processing.</p>
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
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Technology Leadership</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Led cross-cultural across 15+ countries delivering enterprise solutions. Mentored 20+ engineers while driving architectural excellence.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-teal-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Security & Compliance</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Implemented Zero-Trust architecture and real-time monitoring systems. Achieved 99.9% uptime across critical financial systems.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-violet-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-violet-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Global Enterprise Solutions</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Delivered scalable solutions for banking and fintech sectors. Reduced operational costs by 70% through strategic automation and optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Innovation & Blockchain Development */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">AI Systems Architecture</h3>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-indigo-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Enterprise AI Implementation</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Architected multi-agent AI systems for banking automation. Led AI transformation initiatives delivering 40% efficiency gains in financial operations.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-pink-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Intelligent Automation</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Designed AI-powered compliance systems reducing manual processing by 85%. Integrated machine learning models with existing enterprise workflows.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">Blockchain Infrastructure</h3>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-amber-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Cross-Border Payment Systems</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Built enterprise blockchain platform reducing international transfer times from 5 days to 2.3 seconds. Achieved 100x scalability through Layer 2 solutions.</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-cyan-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">Cryptographic Protocol Innovation</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Design and Develop Zero-Knowledge Proof implementation with ZoKrates for privacy-preserving compliance, pioneering integration of cryptographic verification with automated smart contract execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Approach - Visual Design */}
        <Card className="bg-gradient-to-br from-slate-800/90 to-slate-700/80 backdrop-blur-xl border-slate-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />

          <CardContent className="p-6 sm:p-8 lg:p-12 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">My Approach</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-blue-300">Results-Driven</h4>
                  <p className="text-slate-200 text-sm sm:text-sm">Every solution delivers measurable business value with quantifiable ROI and performance metrics</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-purple-300">People-First</h4>
                  <p className="text-slate-200 text-sm sm:text-sm">Technology that enhances human potential while maintaining ethical standards and user trust</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-emerald-300">Innovation Focus</h4>
                  <p className="text-slate-200 text-sm sm:text-sm">Combining cutting-edge research with proven enterprise patterns for sustainable growth</p>
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-300 italic">
                "AI transformation isn't just about technology it's about people, processes, and strategic vision.
                My role is to make that future accessible, secure, and profitable for organizations ready to lead"
              </blockquote>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}