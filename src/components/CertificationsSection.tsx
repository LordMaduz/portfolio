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

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <Badge className="mb-6 px-4 py-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
                Licenses & certifications
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Certifications &</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Credentials
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Professional certifications and academic credentials that validate expertise
            in cloud architecture, AI systems, and advanced software engineering.
          </p>
        </div>

        {/* AWS Certification - Featured */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white border border-slate-600/50 max-w-4xl mx-auto shadow-2xl shadow-slate-500/20 hover:shadow-slate-500/30 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-blue-400/30">
                    <Award className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AWS Solutions Architect Associate</h3>
                    <p className="text-slate-300">Amazon Web Services</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-400/30 mb-2 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Active Certification
                  </Badge>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span>Issued: Jan 2025</span>
                  </div>
                </div>
              </div>
             <div className="mt-6 pt-6 border-t border-slate-500/30 flex flex-col items-start">
                <p className="text-slate-300 leading-relaxed">
                  Certified in designing distributed systems on AWS, including scalable, 
                  highly available, and fault-tolerant systems. Expertise in AWS services 
                  for compute, storage, database, and networking.
                </p>
                {/* Add vertical spacing */}
                <div className="mt-4">
                    {/* Show Credentials button */}
                    <ShowCredentials url="https://www.credly.com/badges/4c0cce51-2177-4c55-8781-e31bec65ff8c/public_url" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          {/* New Certification - Hugging Face AI Agents */}
            <Card className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white border border-slate-600/50 max-w-4xl mx-auto shadow-2xl shadow-slate-500/20 hover:shadow-slate-500/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-purple-400/30">
                      <Award className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">AI Agents Fundamentals</h3>
                      <p className="text-slate-300">Hugging Face</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-400/30 mb-2 backdrop-blur-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Active Certification
                    </Badge>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span>Issued: Sep 2025</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-500/30 flex flex-col items-start">
                  <p className="text-slate-300 leading-relaxed">
                    Completed Hugging Face's AI Agents Fundamentals, gaining hands-on experience designing, implementing, and deploying intelligent AI agents with transformers and multi-agent systems.
                    <br />
                  </p>

                  {/* Add vertical spacing */}
                  <div className="mt-4">
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