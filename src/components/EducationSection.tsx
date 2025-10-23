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
            05. Education
          </span>
          <div className="w-12 h-[1px] bg-lime-400 mt-2"></div>
        </div>

        {/* Large Section Title */}
        <div className="mb-20">
           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="text-white">ACADEMIC</span>
            <br />
            <span className="text-gray-700">FOUNDATION</span>
          </h2>
        </div>

        {/* Education Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="border border-gray-900 hover:border-gray-800 transition-colors p-8"
            >
              <div className="space-y-6">
                {/* Number */}
                <div className="text-5xl font-bold text-gray-900">{edu.number}</div>

                {/* Degree */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-lime-400 uppercase tracking-wider mb-4">
                    {edu.specialization}
                  </p>
                </div>

                {/* Institution & Details */}
                <div className="space-y-2 text-sm text-gray-500">
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