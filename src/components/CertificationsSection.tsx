import { ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      id: "aws",
      number: "01",
      title: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      issued: "January 2025",
      status: "Active",
      description: "Certified in designing distributed systems on AWS, including scalable, highly available, and fault-tolerant systems.",
      credentialUrl: "https://www.credly.com/badges/4c0cce51-2177-4c55-8781-e31bec65ff8c/public_url"
    },
    {
      id: "huggingface",
      number: "02",
      title: "AI Agents Fundamentals",
      issuer: "Hugging Face",
      issued: "September 2025",
      status: "Active",
      description: "Hands-on experience designing, implementing, and deploying intelligent AI agents.",
      credentialUrl: "https://drive.google.com/file/d/1pfgtBV7Sq4xn1s6r-7i2uSBH1EANpFLE/view?usp=sharing"
    }
  ];

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
            04. Certifications
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-lime-400 mt-2"></div>
        </div>

        {/* Large Section Title */}
        <div className="mb-12 sm:mb-20">

        </div>

        {/* Certifications Grid - 2 columns on desktop, 1 column on mobile */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-20 sm:mb-32">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-gray-700 transition-colors p-5 sm:p-6 lg:p-8"
            >
              <div className="space-y-4 sm:space-y-6">

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.issued}</span>
                    <span>•</span>
                    <span className="text-lime-400">{cert.status}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* View Credential Button */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-lime-400 text-white hover:bg-lime-400 hover:text-black transition-colors text-xs sm:text-sm font-medium"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}