import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, BookOpen, Target, Calendar, TrendingUp, Users } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.05),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
            Academic Foundation
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Education &</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Academic excellence combined with continuous learning in emerging technologies
            and enterprise solution architecture
          </p>
        </div>

        {/* Academic Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Master's Degree */}
          <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm hover:border-blue-500/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Master's in Advanced Software Engineering
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      Blockchain Specialization
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border border-purple-400/30">
                      Research Focus
                    </Badge>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Advanced curriculum covering distributed systems architecture, cryptographic protocols,
                    and enterprise-scale blockchain implementations.
                  </p>

                  {/* Key Research Areas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-slate-400">Distributed Ledger Technologies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-slate-400">Smart Contract Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm text-slate-400">Cryptographic Protocols</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-sm text-slate-400">Enterprise Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bachelor's Degree */}
          <Card className="group hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm hover:border-emerald-500/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Bachelor of Science in Statistics & Operational Research
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      Mathematics Specialization
                    </Badge>
                    <Badge className="bg-teal-500/20 text-teal-300 border border-teal-400/30">
                      Research Focus
                    </Badge>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Mathematical foundation in statistical analysis, operational research methodologies,
                    and quantitative problem-solving approaches for complex systems.
                  </p>

                  {/* Key Foundation Areas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm text-slate-400">Statistical Modeling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-sm text-slate-400">Operations Optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm text-slate-400">Quantitative Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-slate-400">Systems Research</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Philosophy & Impact */}
        <Card className="bg-gradient-to-br from-slate-800/90 to-slate-700/80 backdrop-blur-xl border-slate-700/50 relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />

          <CardContent className="p-12 relative z-10">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <BookOpen className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Applied Learning Approach</h3>
              <p className="text-slate-300 max-w-3xl mx-auto text-lg">
                Translating academic research into enterprise solutions that deliver measurable business value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-blue-200">Research-to-Practice</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Bridging academic blockchain research with enterprise payment systems achieving 96% performance improvement
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-emerald-200">Continuous Innovation</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Staying current with emerging AI technologies, implementing first enterprise MetaGPT system in banking sector
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-purple-200">Knowledge Transfer</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Mentoring engineering teams and sharing best practices across global enterprise implementations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}