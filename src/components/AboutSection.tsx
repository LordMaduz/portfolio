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
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
            Professional Journey
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Bridging business vision and AI reality through strategic leadership 
            and technical expertise in enterprise environments
          </p>
        </div>

        {/* Experience Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <Card className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border-0 bg-slate-800/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">6+ Years</h3>
              <p className="text-slate-400 mb-4">Enterprise Experience</p>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">Total Professional Experience</Badge>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border-0 bg-slate-800/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">1 Year</h3>
              <p className="text-slate-400 mb-4">AI Specialization</p>
              <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">Focused AI Leadership</Badge>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border-0 bg-slate-800/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Singapore</h3>
              <p className="text-slate-400 mb-4">Global Perspective</p>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">International Experience</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Core Expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Core Expertise</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Server className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Scalable Architecture & Distributed Systems</h4>
                  <p className="text-slate-400 leading-relaxed">Expert in microservices, event-driven architectures, and API design. Building fault-tolerant, high-availability systems with real-time processing capabilities.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Cloud className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Cloud & DevOps Excellence</h4>
                  <p className="text-slate-400 leading-relaxed">Architecting cloud-native solutions on AWS, Kubernetes, and OpenShift. Implementing CI/CD pipelines, IaC, and cost-effective containerized workloads.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Activity className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">High-Performance Systems Engineering</h4>
                  <p className="text-slate-400 leading-relaxed">Designing reactive, low-latency applications with non-blocking paradigms. Specializing in real-time data streaming and optimized concurrency.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Professional Journey</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Technology Leadership</h4>
                  <p className="text-slate-400 leading-relaxed">Leading cross-cultural teams through complex implementations. Mentoring engineers and driving architecture excellence across organizations.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Lock className="w-7 h-7 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Security & Observability</h4>
                  <p className="text-slate-400 leading-relaxed">Implementing Zero-Trust principles, distributed tracing, and real-time monitoring. Ensuring system reliability and minimizing downtime.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="w-14 h-14 bg-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-7 h-7 text-violet-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Innovation Pioneer</h4>
                  <p className="text-slate-400 leading-relaxed">Early adopter of emerging technologies. Building customer-centric solutions that deliver measurable business value through proven architectural patterns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Enhanced Innovation */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">AI-Enhanced Innovation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4 group">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Enterprise AI Leadership</h4>
                <p className="text-slate-400 leading-relaxed">Leading AI transformation initiatives in banking and fintech sectors, specializing in multi-agent systems and intelligent automation.</p>
              </div>
            </div>
            
            <div className="flex gap-4 group">
              <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-pink-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Strategic AI Adoption</h4>
                <p className="text-slate-400 leading-relaxed">Translating AI capabilities into measurable business outcomes while ensuring regulatory compliance and seamless system integration.</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Approach - Visual Design */}
        <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-xl border-slate-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
          
          <CardContent className="p-12 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Brain className="w-10 h-10 text-blue-400" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">My Approach</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-blue-300">Strategic Vision</h4>
                  <p className="text-slate-400 text-sm">Aligning AI capabilities with business objectives</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-purple-300">Human-Centric</h4>
                  <p className="text-slate-400 text-sm">Building systems that augment human capabilities</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-emerald-300">Measurable Impact</h4>
                  <p className="text-slate-400 text-sm">Delivering quantifiable business value</p>
                </div>
              </div>
              
              <blockquote className="text-xl md:text-2xl leading-relaxed text-slate-300 italic">
                "AI transformation isn't just about technology—it's about people, processes, and strategic vision. 
                Every project is an opportunity to push boundaries while maintaining reliability and compliance."
              </blockquote>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}