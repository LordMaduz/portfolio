import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, BookOpen, Target } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-0">
            Academic Excellence
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Education & Development
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Academic foundation and continuous learning journey in advanced software engineering 
            and emerging technologies
          </p>
        </div>

        {/* Academic Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Master's in Advanced Software Engineering
                  </h3>
                  <Badge className="mb-4 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-0">
                    Blockchain Research Specialization
                  </Badge>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Advanced degree focusing on cutting-edge software engineering practices 
                    with specialized research in blockchain technology and decentralized systems architecture.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-800 mb-2">Research Focus Areas:</h4>
                    <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span>Distributed ledger technologies and consensus mechanisms</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Advanced system architecture and design patterns</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Cryptographic protocols and security frameworks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span>Decentralized network protocols and governance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Professional Development
                  </h3>
                  <Badge className="mb-4 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-0">
                    Continuous Learning
                  </Badge>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Ongoing professional development in emerging AI technologies, 
                    cloud platforms, and enterprise architecture best practices.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-800 mb-2">Development Areas:</h4>
                    <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>AI/ML frameworks and methodologies</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span>Enterprise architecture patterns and practices</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span>Cloud-native development and deployment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Leadership and cross-cultural team management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Validated Technical Expertise */}
        <Card className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.3),transparent_50%)]" />
          
          <CardContent className="p-12 relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Validated Technical Expertise</h3>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Academic foundation combined with practical implementation experience 
                in enterprise environments and cutting-edge research
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-blue-200">Research Excellence</h4>
                <p className="text-slate-300 leading-relaxed">
                  Advanced research in blockchain and decentralized systems, 
                  contributing to academic understanding of emerging technologies
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-emerald-200">Practical Application</h4>
                <p className="text-slate-300 leading-relaxed">
                  Translating academic research into real-world enterprise solutions, 
                  bridging theory and practical implementation
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-purple-200">Continuous Innovation</h4>
                <p className="text-slate-300 leading-relaxed">
                  Commitment to lifelong learning and staying at the forefront 
                  of technological advancement in AI and software engineering
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Learning Goals */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Continuous Learning Journey</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Committed to advancing expertise through ongoing education, research, 
                and practical application of emerging technologies in enterprise environments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Badge variant="outline" className="py-3 px-6 text-center border-indigo-200 text-indigo-700">
                  Advanced AI Ethics & Governance
                </Badge>
                <Badge variant="outline" className="py-3 px-6 text-center border-purple-200 text-purple-700">
                  Quantum Computing Applications
                </Badge>
                <Badge variant="outline" className="py-3 px-6 text-center border-emerald-200 text-emerald-700">
                  Sustainable AI Architecture
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}