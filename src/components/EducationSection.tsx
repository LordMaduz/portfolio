export default function EducationSection() {
  const education = [
    {
      id: "masters",
      number: "01",
      degree: "Master of Science in Computer Software Engineering",
      specialization: "Blockchain Research",
      institution: "University of Westminster",
      duration: "May 2021 - June 2025",
      location: "United Kingdom"
    },
    {
      id: "bachelors",
      number: "02",
      degree: "Bachelor of Science in Statistics & Operational Research",
      specialization: "Mathematics",
      institution: "University of Peradeniya",
      duration: "January 2015 - May 2019",
      location: "Sri Lanka"
    }
  ];

  return (
    <section id="education" className="bg-black text-white py-10 sm:py-10 relative overflow-hidden">

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
              <span className="text-white">MY LEARNING JOURNEY</span>
            </h2>
          </div>
        </div>

        {/* Education Grid - 2 columns on desktop, 1 column on mobile */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="border border-gray-600 transition-colors p-5 sm:p-6 lg:p-8"
            >
              <div className="space-y-4 sm:space-y-6">

                {/* Degree */}
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-lime-400 uppercase tracking-wider mb-3 sm:mb-4">
                    {edu.specialization}
                  </p>
                </div>

                {/* Institution & Details */}
                <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                  <div>{edu.institution}</div>
                  <div>{edu.duration}</div>
                  <div>{edu.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}