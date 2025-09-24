import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText, Globe, Calendar, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import resume from '../assets/Ruchira_Resume.pdf';

const RESUME_DRIVE_FILE_ID = import.meta.env.VITE_RESUME_DRIVE_FILE_ID;
const DIGITAL_RESUME_URL = import.meta.env.VITE_DIGITAL_RESUME_URL;

export default function ResumeSection() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      // Replace with your actual PDF path
      const pdfResume = `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_FILE_ID}`;

      // Open in new tab with specific window features
      window.open(pdfResume, '_blank', 'noopener,noreferrer');

      // Optional: Track download analytics
       analytics.track('resume_downloaded');

    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleInteractiveResume = () => {
    // Replace with your actual digital resume URL
    const digitalResume = DIGITAL_RESUME_URL;
    window.open(digitalResume, "_blank", "noopener,noreferrer");

     // Optional: Track click analytics
     analytics.track('interactive_resume_viewed');
  };

  return (
       <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.05),transparent_50%)]" />

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000" />

        <div className="relative z-10">
          {/* Hero Section */}
          <div className="pb-12 text-center">
            <div className="max-w-4xl mx-auto px-6">
              {/* Badge */}
               <Badge className="mb-4 px-4 py-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
                   Professional Resume
               </Badge>

              {/* Main Title */}
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Professional{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Profile
                </span>
              </h2>

              {/* Underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />

              {/* Description */}
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive documentation of my professional journey, showcasing expertise in
                software engineering, cloud architecture, and innovative technology solutions.
              </p>
            </div>
          </div>

          {/* Resume Options */}
          <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Interactive Resume Option */}
              <div className="group relative bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Interactive Resume</h3>
                      <p className="text-blue-400 text-sm">Digital Experience</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                    Immersive digital experience featuring interactive project showcases, dynamic timelines,
                    and live demonstrations of technical capabilities.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-slate-400 text-sm">Interactive Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-slate-400 text-sm">Dynamic Timeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-slate-400 text-sm">Live Demos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-slate-400 text-sm">Responsive Design</span>
                    </div>
                  </div>

                  <button
                    onClick={handleInteractiveResume}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/30 text-lg flex items-center justify-center gap-3"
                  >
                    <Eye className="w-5 h-5" />
                    Explore Interactive Resume
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF Download Option */}
              <div className="group relative bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">PDF Resume</h3>
                      <p className="text-emerald-400 text-sm">Traditional Format</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                    Professionally formatted document optimized for applicant tracking systems,
                    recruiters, and traditional hiring processes.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <span className="text-slate-400 text-sm">ATS Optimized</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full" />
                      <span className="text-slate-400 text-sm">Print Friendly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-slate-400 text-sm">Easy Sharing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-slate-400 text-sm">Standard Format</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePDFDownload}
                    disabled={isDownloading}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-3"
                  >
                    <Download className={`w-5 h-5 ${isDownloading ? 'animate-bounce' : ''}`} />
                    {isDownloading ? 'Downloading Resume...' : 'Download PDF Resume'}
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>Last updated: September 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Highlights */}
            <div className="bg-slate-900/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Professional Highlights</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      6+
                    </div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  </div>
                  <div className="text-slate-300 font-medium text-lg">Years Experience</div>
                  <div className="text-slate-500 text-sm mt-1">Software Development</div>
                </div>

                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      20+
                    </div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300" />
                  </div>
                  <div className="text-slate-300 font-medium text-lg">Projects Delivered</div>
                  <div className="text-slate-500 text-sm mt-1">End-to-End Solutions</div>
                </div>

                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      15+
                    </div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-700" />
                  </div>
                  <div className="text-slate-300 font-medium text-lg">Technologies</div>
                  <div className="text-slate-500 text-sm mt-1">Advanced Proficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }