import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText, Globe, Calendar, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
        <div className="absolute top-10 sm:top-20 right-4 sm:right-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000" />

        <div className="relative z-10">
          {/* Hero Section */}
          <div className="pb-8 sm:pb-12 text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              {/* Badge */}
               <Badge className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-sm bg-blue-500/20 text-blue-300 border-blue-500/30">
                   Professional Resume
               </Badge>

              {/* Main Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
                Download{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Resume
                </span>
              </h2>

              {/* Underline */}
              <div className="w-16 sm:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 sm:mb-6 rounded-full" />

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive documentation of my professional journey, showcasing expertise in
                software engineering, cloud architecture, and innovative technology solutions.
              </p>
            </div>
          </div>

          {/* Resume Options */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Interactive Resume Option */}
              <div className="group relative bg-slate-900/60 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Interactive Portfolio</h3>
                      <p className="text-blue-400 text-xs sm:text-sm">Digital Experience</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                    Immersive digital experience featuring interactive project case studies,
                    and live demonstrations of technical capabilities.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full flex-shrink-0" />
                      <span className="text-slate-400 text-xs sm:text-sm">Interactive Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full flex-shrink-0" />
                      <span className="text-slate-400 text-xs sm:text-sm">Technical Deep-Dives</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full flex-shrink-0" />
                      <span className="text-slate-400 text-xs sm:text-sm">Architecture Diagrams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="text-slate-400 text-xs sm:text-sm">Impact Metrics</span>
                    </div>
                  </div>

                  <button
                    onClick={handleInteractiveResume}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 min-h-[48px] touch-manipulation"
                    >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="truncate">Explore Interactive Resume</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  </button>
                </div>
              </div>

              {/* PDF Download Option */}
              <div className="group relative bg-slate-900/60 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">PDF Resume</h3>
                      <p className="text-emerald-400 text-xs sm:text-sm">Traditional Format</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                   Comprehensive resume optimized for applicant tracking systems, featuring quantified achievements and technical competencies.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                      <span className="text-slate-400 text-xs sm:text-sm">ATS Optimized</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400 rounded-full flex-shrink-0" />
                      <span className="text-slate-400 text-xs sm:text-sm">Print Friendly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full flex-shrink-0" />
                      <span className="text-slate-400 text-xs sm:text-sm">Quantified Results</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full flex-shrink-0" />
                      <span className="text-slate-400 text-xs sm:text-sm">Professional Format</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePDFDownload}
                    disabled={isDownloading}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 min-h-[48px] touch-manipulation"
                    >
                    <Download className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${isDownloading ? 'animate-bounce' : ''}`} />
                    <span className="truncate">{isDownloading ? 'Downloading...' : 'Download PDF Resume'}</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4 text-xs sm:text-sm text-slate-400">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>Last updated: September 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Highlights */}
            <div className="bg-slate-900/40 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-700/50">
              <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Career Highlights</h3>
                <div className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center group">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                      96%
                    </div>
                  </div>
                  <div className="text-slate-300 font-medium text-sm sm:text-base lg:text-lg">Transaction Speed Improvement</div>
                  <div className="text-slate-400 text-xs sm:text-sm mt-1">Blockchain Payment Systems</div>
                </div>

                <div className="text-center group">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                      70+
                    </div>
                  </div>
                  <div className="text-slate-300 font-medium text-sm sm:text-base lg:text-lg">Cost Reduction Achieved</div>
                  <div className="text-slate-400 text-xs sm:text-sm mt-1">Enterprise Operations</div>
                </div>

                <div className="text-center group">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                      15+
                    </div>
                  </div>
                  <div className="text-slate-300 font-medium text-sm sm:text-base lg:text-lg">Countries Served</div>
                  <div className="text-slate-400 text-xs sm:text-sm mt-1">Global Enterprise Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }