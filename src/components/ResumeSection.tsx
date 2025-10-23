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
    <section className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

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

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Label */}
        <div className="mb-20">
          <span className="text-xs sm:text-sm tracking-[0.3em] text-gray-500 uppercase font-light">
            02. Resume
          </span>
          <div className="w-12 h-[1px] bg-lime-400 mt-2"></div>
        </div>

        {/* Large Section Title */}
        <div className="mb-20">
           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="text-white">DOWNLOAD</span>
            <br />
            <span className="text-gray-700">MY RESUME</span>
          </h2>
        </div>

        {/* Resume Options - Clean minimal cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">

          {/* Interactive Portfolio Option */}
          <div className="group border border-gray-900 hover:border-lime-400 transition-all duration-300">
            <div className="p-8 space-y-6">

              {/* Number */}
              <div className="text-5xl font-bold text-gray-900">01</div>

              {/* Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                  Interactive Portfolio
                </h3>
                <p className="text-sm text-gray-600 uppercase tracking-wider">
                  Digital Experience
                </p>
              </div>

              {/* Description */}
              <p className="text-base text-gray-500 leading-relaxed">
                Interactive digital resume on hello.cv with visual project showcases and live demonstrations.
              </p>

              {/* CTA */}
              <div className="pt-6">
                <button
                  onClick={handleInteractiveResume}
                  className="w-full border-2 border-lime-400 hover:bg-lime-400 text-white hover:text-black py-4 px-6 font-semibold transition-colors flex items-center justify-between group disabled:opacity-50">
                  <span>View on hello.cv</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* PDF Download Option */}
          <div className="group border border-gray-900 hover:border-lime-400 transition-all duration-300">
            <div className="p-8 space-y-6">

              {/* Number */}
              <div className="text-5xl font-bold text-gray-900">02</div>

              {/* Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                  PDF Resume
                </h3>
                <p className="text-sm text-gray-600 uppercase tracking-wider">
                   Traditional Format
                </p>
              </div>

              {/* Description */}
              <p className="text-base text-gray-500 leading-relaxed">
                Traditional PDF format optimized for recruiters and applicant tracking systems.
              </p>

              {/* CTA */}
              <div className="pt-6">
                <button
                  onClick={handlePDFDownload}
                  disabled={isDownloading}
                  className="w-full border-2 border-lime-400 hover:bg-lime-400 text-white hover:text-black py-4 px-6 font-semibold transition-colors flex items-center justify-between group disabled:opacity-50"
                >
                  <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
                  <Download className={`w-5 h-5 ${isDownloading ? 'animate-bounce' : 'group-hover:-translate-y-1 transition-transform'}`} />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}