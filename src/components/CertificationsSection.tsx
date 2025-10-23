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
            04. Certifications
          </span>
          <div className="w-12 h-[1px] bg-lime-400 mt-2"></div>
        </div>

        {/* Large Section Title */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="text-white">CERTIFICATIONS &</span>
            <br />
            <span className="text-gray-700">CREDENTIALS</span>
          </h2>
        </div>

        {/* Certifications Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-gray-900 hover:border-gray-800 transition-colors p-8"
            >
              <div className="space-y-6">
                {/* Number */}
                <div className="text-5xl font-bold text-gray-900">{cert.number}</div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.issued}</span>
                    <span>•</span>
                    <span className="text-lime-400">{cert.status}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  {cert.description}
                </p>

                {/* View Credential Button */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-lime-400 text-white hover:bg-lime-400 hover:text-black transition-colors text-sm font-medium"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}