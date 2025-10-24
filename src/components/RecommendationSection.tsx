import { Linkedin, ExternalLink } from "lucide-react";
import y from "../assets/yuxiang.png";
import s from "../assets/santhosh.png";
import w from "../assets/wisely.png";

export default function RecommendationsSection() {
  const recommendations = [
    {
      id: "santhosh",
      name: "SanthoshKumar Nagulanchi",
      role: "FinTech Architect | AWS Certified Solutions Architect – Professional",
      date: "December 30, 2023",
      image: s,
      linkedinUrl: "https://www.linkedin.com/in/ruchirarajapaksha/details/recommendations/",
      preview: `During my career, I've rarely come across real professionals like Ruchira. I had the pleasure of working alongside him for one and a half years at DBS Bank, where he significantly increased productivity and maintained the highest quality in his work.`,
    },
    {
      id: "wisely",
      name: "Wisely Kwek Zhi Yong",
      role: "DBS Programme Hires | SMU Information Systems Major",
      date: "October 15, 2025",
      image: w,
      linkedinUrl: "https://www.linkedin.com/in/ruchirarajapaksha/details/recommendations/",
      preview: `During our collaboration in DBS, Ruchira demonstrated exceptional technical expertise across multiple domains, including functional programming, reactive systems, and systems design. He played a key role in designing scalable, robust core systems.`,
    },
    {
      id: "yu-xiang",
      name: "Yu Xiang See",
      role: "DBS Associate | Student at Nanyang Technological University",
      date: "October 1, 2025",
      image: y,
      linkedinUrl: "https://www.linkedin.com/in/ruchirarajapaksha/details/recommendations/",
      preview: `I had the privilege of working with Ruchira for around 1.5 years, where he consistently demonstrated exceptional technical expertise in backend development with Spring Boot. He played a key role in handling core functionalities of our project.`,
    },
  ];

  return (
    <section
      id="recommendations"
      className="bg-black text-white py-10 sm:py-12 relative overflow-hidden"
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

           {/* Large Section Title */}
           <div className="mb-16 sm:mb-20">
             <div className="flex items-center gap-4 mb-6 sm:mb-8">
               <div className="w-12 sm:w-16 h-[3px] bg-lime-400"></div>
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
                 <span className="text-white">WHAT MY COLLEAGUES SAY</span>
               </h2>
             </div>
           </div>

        {/* Recommendation Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="border border-gray-800 bg-gradient-to-b from-zinc-900/40 to-black p-5 sm:p-7 rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-[0_0_25px_-8px_rgba(163,255,88,0.5)]"
            >
              {/* Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-gray-700"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {rec.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-tight">
                    {rec.role}
                  </p>
                </div>
              </div>

              {/* Preview Text */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {rec.preview}
              </p>

              {/* Footer */}
              <div className="mt-5 sm:mt-6 flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs text-gray-500">{rec.date}</span>
                <a
                  href={rec.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-lime-400 text-white hover:bg-lime-400 hover:text-black transition-colors text-xs sm:text-sm font-medium"
                >
                  <span>Read on LinkedIn</span>
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
