import { useState } from "react";
import { Download, ExternalLink, ArrowRight } from "lucide-react";

const RESUME_DRIVE_FILE_ID = import.meta.env.VITE_RESUME_DRIVE_FILE_ID;
const DIGITAL_RESUME_URL = import.meta.env.VITE_DIGITAL_RESUME_URL;

export default function ResumeSection() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      const pdfResume = `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_FILE_ID}`;
      window.open(pdfResume, '_blank', 'noopener,noreferrer');
      // analytics.track('resume_downloaded');
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleInteractiveResume = () => {
    const digitalResume = DIGITAL_RESUME_URL;
    window.open(digitalResume, "_blank", "noopener,noreferrer");
    // analytics.track('interactive_resume_viewed');
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 sm:py-32 relative overflow-hidden">

      {/* Subtle diagonal pattern background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.03) 10px,
            rgba(255,255,255,0.03) 11px
          )`
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Label */}
        <div className="mb-12 sm:mb-20">
          <span className="text-[10px] sm:text-xs lg:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 uppercase font-light">
            05. Resume
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-lime-400 mt-2"></div>
        </div>

        {/* Large Section Title */}
        <div className="mb-12 sm:mb-20">

        </div>

        {/* Resume Options - Clean minimal cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-20 sm:mb-32">

          {/* Interactive Portfolio Option */}
          <div className="group border border-gray-700 transition-colors">
            <div className="p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">

              {/* Title */}
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 transition-colors">
                  Interactive Portfolio
                </h3>
                <p className="text-xs sm:text-sm text-lime-400 uppercase tracking-wider">
                  Digital Experience
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Interactive digital resume on hello.cv with visual project showcases and live demonstrations.
              </p>

              {/* CTA */}
              <div className="pt-4 sm:pt-6">
                <button
                  onClick={handleInteractiveResume}
                  className="w-full border-2 border-lime-400 hover:bg-lime-400 text-white hover:text-black py-3 sm:py-4 px-5 sm:px-6 text-sm sm:text-base font-semibold transition-colors flex items-center justify-between group disabled:opacity-50">
                  <span>View on hello.cv</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* PDF Download Option */}
          <div className="group border border-gray-700 transition-colors">
            <div className="p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">

              {/* Title */}
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2">
                  PDF Resume
                </h3>
                <p className="text-xs sm:text-sm text-lime-400 uppercase tracking-wider">
                   Traditional Format
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Traditional PDF format optimized for recruiters and applicant tracking systems.
              </p>

              {/* CTA */}
              <div className="pt-4 sm:pt-6">
                <button
                  onClick={handlePDFDownload}
                  disabled={isDownloading}
                  className="w-full border-2 border-lime-400 hover:bg-lime-400 text-white hover:text-black py-3 sm:py-4 px-5 sm:px-6 text-sm sm:text-base font-semibold transition-colors flex items-center justify-between group disabled:opacity-50"
                >
                  <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
                  <Download className={`w-4 h-4 sm:w-5 sm:h-5 ${isDownloading ? 'animate-bounce' : 'group-hover:-translate-y-1 transition-transform'}`} />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}