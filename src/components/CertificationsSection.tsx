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
    <section id="certifications" className="bg-black text-white py-10 sm:py-12 relative overflow-hidden">

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

        {/* Large Section Title */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-[3px] bg-lime-400"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">PROOF OF MY CURIOSITY</span>
            </h2>
          </div>
        </div>


        {/* Certifications Grid - 2 columns on desktop, 1 column on mobile */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-0 sm:mb-20">
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