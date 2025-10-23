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
            06. Education
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-lime-400 mt-2"></div>
        </div>

        {/* Large Section Title */}
        <div className="mb-12 sm:mb-20">

        </div>

        {/* Education Grid - 2 columns on desktop, 1 column on mobile */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-20 sm:mb-32">
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