import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ShowCredentials from "@/components/ui/show-credentials";
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section className="min-h-screen py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.05),transparent_50%)]" />

      {/* Floating Elements - Mobile Optimized */}
      <div className="absolute top-10 sm:top-20 right-4 sm:right-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block mb-4 sm:mb-6">
            <Badge className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 text-sm bg-blue-500/20 text-blue-300 border-blue-500/30">
                Licenses & certifications
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-white">Certifications &</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Credentials
              </span>
            </h2>
            <div className="h-0.5 sm:h-1 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto">
            Professional certifications and academic credentials that validate expertise
            in cloud architecture, AI systems, and advanced software engineering.
          </p>
        </div>

        {/* Certifications Grid - 2 per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          <Card className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white border border-slate-600/50 max-w-4xl mx-auto shadow-2xl shadow-slate-500/20 hover:shadow-slate-500/30 transition-all duration-300">
            <CardContent className="p-5 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-blue-400/30">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">AWS Solutions Architect Associate</h3>
                    <p className="text-slate-300 text-sm sm:text-base">Amazon Web Services</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-400/30 mb-2 backdrop-blur-sm text-xs sm:text-sm">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Active Certification
                  </Badge>
                  <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Issued: Jan 2025</span>
                  </div>
                </div>
              </div>
             <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-500/30 flex flex-col items-start">
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Certified in designing distributed systems on AWS, including scalable,
                  highly available, and fault-tolerant systems. Expertise in AWS services
                  for compute, storage, database, and networking.
                </p>
                {/* Add vertical spacing */}
                <div className="mt-3 sm:mt-4">
                    {/* Show Credentials button */}
                    <ShowCredentials url="https://www.credly.com/badges/4c0cce51-2177-4c55-8781-e31bec65ff8c/public_url" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* New Certification - Hugging Face AI Agents */}
            <Card className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white border border-slate-600/50 max-w-4xl mx-auto shadow-2xl shadow-slate-500/20 hover:shadow-slate-500/30 transition-all duration-300">
              <CardContent className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-purple-400/30">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">AI Agents Fundamentals Hugging Face</h3>
                      <p className="text-slate-300 text-sm sm:text-base">Hugging Face</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-400/30 mb-2 backdrop-blur-sm text-xs sm:text-sm">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      Active Certification
                    </Badge>
                    <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Issued: Sep 2025</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-500/30 flex flex-col items-start">
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Completed Hugging Face's AI Agents Fundamentals, gaining hands-on experience designing, implementing, and deploying intelligent AI agents with transformers and multi-agent systems.
                    <br />
                  </p>

                  {/* Add vertical spacing */}
                  <div className="mt-3 sm:mt-4">
                    {/* Show Credentials button */}
                    <ShowCredentials url="https://drive.google.com/file/d/1pfgtBV7Sq4xn1s6r-7i2uSBH1EANpFLE/view?usp=sharing" />
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}