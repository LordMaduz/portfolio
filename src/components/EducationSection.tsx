import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, BookOpen, Target } from "lucide-react";

export default function EducationSection() {
  return (
     <section className="min-h-screen py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.05),transparent_50%)]" />

       {/* Floating Elements */}
       <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
       <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />
       <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse delay-500" />

       <div className="max-w-7xl mx-auto px-6 relative z-10">
         {/* Section Header */}
         <div className="text-center mb-20">
           <div className="relative inline-block mb-6">
             <Badge className="mb-6 px-4 py-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
                 Academic Excellence
             </Badge>
             <h2 className="text-4xl md:text-6xl font-bold mb-4">
               <span className="text-white">Education &</span>{" "}
               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                 Development
               </span>
             </h2>
             <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
           </div>
           <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
             Academic foundation and continuous learning journey in advanced software engineering
             and emerging technologies
           </p>
         </div>

         {/* Academic Credentials */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
           <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm hover:border-blue-500/30">
             <CardContent className="p-8">
               <div className="flex items-start gap-4">
                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                   <GraduationCap className="w-8 h-8 text-white" />
                 </div>
                 <div className="flex-1">
                   <h3 className="text-2xl font-bold text-white mb-3">
                     Master's in Advanced Software Engineering
                   </h3>
                   <Badge className="mb-4 bg-blue-500/20 text-blue-300 border border-blue-400/30">
                     Blockchain Research Specialization
                   </Badge>
                   <p className="text-slate-300 mb-6 leading-relaxed">
                     Advanced degree focusing on cutting-edge software engineering practices
                     with specialized research in blockchain technology and decentralized systems architecture.
                   </p>
                   <div className="space-y-3">
                     <h4 className="font-semibold text-slate-200 mb-2">Research Focus Areas:</h4>
                     <div className="grid grid-cols-1 gap-2 text-sm text-slate-400">
                       <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                         <span>Distributed ledger technologies and consensus mechanisms</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                         <span>Advanced system architecture and design patterns</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                         <span>Cryptographic protocols and security frameworks</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                         <span>Decentralized network protocols and governance</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </CardContent>
           </Card>

           <Card className="group hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm hover:border-emerald-500/30">
             <CardContent className="p-8">
               <div className="flex items-start gap-4">
                 <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                   <BookOpen className="w-8 h-8 text-white" />
                 </div>
                 <div className="flex-1">
                   <h3 className="text-2xl font-bold text-white mb-3">
                     Professional Development
                   </h3>
                   <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                     Continuous Learning
                   </Badge>
                   <p className="text-slate-300 mb-6 leading-relaxed">
                     Ongoing professional development in emerging AI technologies,
                     cloud platforms, and enterprise architecture best practices.
                   </p>
                   <div className="space-y-3">
                     <h4 className="font-semibold text-slate-200 mb-2">Development Areas:</h4>
                     <div className="grid grid-cols-1 gap-2 text-sm text-slate-400">
                       <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                         <span>AI/ML frameworks and methodologies</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                         <span>Enterprise architecture patterns and practices</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                         <span>Cloud-native development and deployment</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
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
          <Card className="bg-slate-600 border border-slate-500/50 max-w-4xl mx-auto backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Continuous Learning Journey</h3>
              <p className="text-white mb-8 leading-relaxed">
                Committed to advancing expertise through ongoing education, research,
                and practical application of emerging technologies in enterprise environments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Badge variant="outline" className="py-3 px-6 text-center border-blue-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                  Advanced AI Ethics & Governance
                </Badge>
                <Badge variant="outline" className="py-3 px-6 text-center border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors">
                  Quantum Computing Applications
                </Badge>
                <Badge variant="outline" className="py-3 px-6 text-center border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors">
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