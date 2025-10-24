import { Linkedin, ExternalLink, Quote, Star, Sparkles } from "lucide-react";
import y from "../assets/yuxiang.png";
import s from "../assets/santhosh.png";
import w from "../assets/wisely.png";

export default function RecommendationsSection() {
  const recommendations = [
    {
      id: "santhosh",
      name: "SanthoshKumar Nagulanchi",
      role: "FinTech Architect",
      company: "DBS Bank",
      credentials: "AWS Certified Solutions Architect Professional",
      date: "December 30, 2023",
      duration: "1.5 years together",
      image: s,
      linkedinUrl: "https://www.linkedin.com/in/ruchirarajapaksha/details/recommendations/",
      preview: `During my career, I've rarely come across real professionals like Ruchira. I had the pleasure of working alongside him for one and a half years at DBS Bank, where he significantly increased productivity and maintained the highest quality in his work.`,
      tags: ["Productivity", "Quality", "Professional"],
    },
    {
      id: "wisely",
      name: "Wisely Kwek Zhi Yong",
      role: "DBS Programme Hire",
      company: "DBS Bank",
      credentials: "SMU Information Systems Major",
      date: "October 15, 2025",
      duration: "Collaborated at DBS",
      image: w,
      linkedinUrl: "https://www.linkedin.com/in/ruchirarajapaksha/details/recommendations/",
      preview: `During our collaboration in DBS, Ruchira demonstrated exceptional technical expertise across multiple domains, including functional programming, reactive systems, and systems design. He played a key role in designing scalable, robust core systems.`,
      tags: ["Systems Design", "Reactive", "Scalable"],
    },
    {
      id: "yu-xiang",
      name: "Yu Xiang See",
      role: "DBS Associate",
      company: "DBS Bank",
      credentials: "Student at Nanyang Technological University",
      date: "October 1, 2025",
      duration: "1.5 years together",
      image: y,
      linkedinUrl: "https://www.linkedin.com/in/ruchirarajapaksha/details/recommendations/",
      preview: `I had the privilege of working with Ruchira for around 1.5 years, where he consistently demonstrated exceptional technical expertise in backend development with Spring Boot. He played a key role in handling core functionalities of our project.`,
      tags: ["Spring Boot", "Backend", "Core Systems"],
    },
  ];

  return (
    <section
      id="recommendations"
      className="bg-black text-white py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Subtle diagonal pattern background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.03) 10px,
              rgba(255,255,255,0.03) 11px
            )`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-[3px] bg-lime-400"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">WHAT COLLEAGUES SAY</span>
            </h2>
          </div>
        </div>

        {/* Recommendation Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {recommendations.map((rec, index) => (
            <div
              key={rec.id}
              className="group relative border-2 border-gray-800 bg-gradient-to-br from-gray-900/60 to-black/80 p-6 sm:p-8 rounded-xl transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.3)] hover:-translate-y-1"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

              {/* Quote Icon - Now always visible */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center transition-all duration-500">
                <Quote className="w-5 h-5 text-black" fill="currentColor" />
              </div>

              {/* Header with Profile */}
              <div className="flex items-start gap-4 mb-5">
                <div className="relative flex-shrink-0">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-700 transition-colors duration-500"
                  />
                  {/* LinkedIn badge - Now always visible */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center transition-opacity duration-500">
                    <Linkedin className="w-3.5 h-3.5 text-black" fill="currentColor" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 transition-colors">
                    {rec.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-tight mb-1">
                    {rec.role} • {rec.company}
                  </p>
                  <p className="text-sm text-gray-400 leading-tight">
                    {rec.credentials}
                  </p>
                </div>
              </div>

              {/* Full Text */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5 line-clamp-4">
                {rec.preview}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {rec.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800/80 border border-gray-700 text-gray-400 text-xs font-medium rounded-full transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-800 flex-wrap gap-3">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400">{rec.date}</span>
                  <span className="text-xs text-gray-400">{rec.duration}</span>
                </div>

                <a
                  href={rec.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-lime-400 text-white hover:bg-lime-400 hover:text-black transition-colors text-xs sm:text-sm font-medium"
                >
                  <span>Read Full</span>
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