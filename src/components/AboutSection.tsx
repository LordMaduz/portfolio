import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface AboutSectionProps {
  setActiveSection: (section: string) => void;
}

export default function AboutSection({ setActiveSection }: AboutSectionProps) {
  const [expandedSections, setExpandedSections] = useState({
    beginning: false,
    evolution: false,
    approach: false,
    present: false
  });

  const [allExpanded, setAllExpanded] = useState(false);

  // Toggle individual section
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Expand/Collapse all sections
  const toggleAll = () => {
    const newState = !allExpanded;
    setExpandedSections({
      beginning: newState,
      evolution: newState,
      approach: newState,
      present: newState
    });
    setAllExpanded(newState);
  };

  return (
    <section id="about" className="bg-black text-white py-10 sm:py-20 relative overflow-hidden">

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

        {/* Section Header with Expand All Button */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between mb-6 sm:mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 sm:w-16 h-[3px] bg-lime-400"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
                <span className="text-white">STORY BEHIND THE CODE</span>
              </h2>
            </div>

            {/* Expand/Collapse All Button */}
            <button
              onClick={toggleAll}
              className="flex items-center gap-2 px-4 py-2 border border-gray-800 hover:border-lime-400 text-gray-400 hover:text-lime-400 transition-colors text-sm font-medium"
            >
              {allExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Collapse All
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Expand All
                </>
              )}
            </button>
          </div>

          {/* Chapter 1: The Beginning */}
          <div className="border-l-2 border-gray-800 hover:border-lime-400 transition-colors duration-300 pl-6 sm:pl-8 mb-8 sm:mb-12">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-6 sm:w-8 h-[2px] bg-lime-400"></div>
              <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">The Beginning</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Always visible first paragraph */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                I'm a storyteller who found his medium in code. Born in Sri Lanka, I grew up surrounded by
                vibrant culture and tropical warmth but my curiosity always pulled me toward technology and
                the endless possibilities it offered.
              </p>

              {/* Collapsible content */}
              {expandedSections.beginning && (
                <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                    I stumbled upon programming almost by accident, but what started as curiosity quickly became
                    fascination. There was something magical about turning ideas into working systems, about
                    solving puzzles that seemed impossible at first glance.
                  </p>
                </div>
              )}

              {/* Read More/Less Button */}
              <button
                onClick={() => toggleSection('beginning')}
                className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors text-sm font-medium mt-3"
              >
                {expandedSections.beginning ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Read Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Read More
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Chapter 2: The Evolution */}
          <div className="border-l-2 border-gray-800 hover:border-lime-400 transition-colors duration-300 pl-6 sm:pl-8 mb-8 sm:mb-12">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-6 sm:w-8 h-[2px] bg-lime-400"></div>
              <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">The Evolution</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Always visible first paragraph */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                I traded tropical beaches for Singapore's skyline, anime marathons for system designs,
                and quiet evenings for loud ideas. But that fascination never faded, it evolved.
              </p>

              {/* Collapsible content */}
              {expandedSections.evolution && (
                <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                    I pursued a Master's degree at the University of Westminster, specializing in Blockchain
                    Technology. I earned my AWS Solutions Architect Associate certification, not just for the credential, but to
                    master the tools that power modern cloud infrastructure.
                  </p>
                </div>
              )}

              {/* Read More/Less Button */}
              <button
                onClick={() => toggleSection('evolution')}
                className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors text-sm font-medium mt-3"
              >
                {expandedSections.evolution ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Read Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Read More
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Chapter 3: The Approach */}
          <div className="border-l-2 border-gray-800 hover:border-lime-400 transition-colors duration-300 pl-6 sm:pl-8 mb-8 sm:mb-12">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-6 sm:w-8 h-[2px] bg-lime-400"></div>
              <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">The Approach</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Always visible first paragraph */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                I believe the best solutions come from genuine curiosity, not just technical knowledge.
              </p>

              {/* Collapsible content */}
              {expandedSections.approach && (
                <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                    I'm the person who asks WHY many times, who challenges assumptions with respect.
                    I don't just write code, I craft systems that are reliable today and maintainable tomorrow.
                  </p>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                    When I'm not building systems, I'm building connections. Through writing technical articles
                    , mentoring engineers, and being that teammate who actually listens.
                    Because great work isn't just about what you build, it's about who you build it with.
                  </p>
                </div>
              )}

              {/* Read More/Less Button */}
              <button
                onClick={() => toggleSection('approach')}
                className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors text-sm font-medium mt-3"
              >
                {expandedSections.approach ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Read Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Read More
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Chapter 4: The Present */}
          <div className="border-l-2 border-gray-800 hover:border-lime-400 transition-colors duration-300 pl-6 sm:pl-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-6 sm:w-8 h-[2px] bg-lime-400"></div>
              <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">The Present</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Always visible first paragraph */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Today, I architect distributed and event-driven systems that scale effortlessly while maintaining
                seamless flow, and I lead technical initiatives that deliver measurable impact.
              </p>

              {/* Collapsible content */}
              {expandedSections.present && (
                <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                    But here's what really drives me: I'm not here to be the smartest person in the room.
                    I'm here to make the room smarter, through collaboration, curiosity, and the genuine belief
                    that the best ideas come from the most unexpected places.
                  </p>
                </div>
              )}

              {/* Read More/Less Button */}
              <button
                onClick={() => toggleSection('present')}
                className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors text-sm font-medium mt-3"
              >
                {expandedSections.present ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Read Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Read More
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* HIGHLIGHTED: Core Values - What Drives Me */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-br from-gray-900/50 to-gray-950/30 border-2 border-gray-600/50 hover:border-grey-600 transition-colors duration-500 p-8 sm:p-12 relative overflow-hidden">

          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 20px,
                rgba(163,230,53,0.1) 20px,
                rgba(163,230,53,0.1) 21px
              )`
            }} />
          </div>

          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                What Drives Me
              </h3>
            </div>

            {/* Values Cards */}
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">

              {/* Card 1 */}
              <div className="group relative bg-black/60 border-2 border-gray-800 hover:border-lime-400 transition-all duration-300 p-6 sm:p-8">
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-lime-400 flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-base">01</span>
                </div>

                {/* Hover Accent */}
                <div className="absolute inset-0 bg-lime-400/0 group-hover:bg-lime-400/5 transition-colors duration-300"></div>

                <div className="relative space-y-4">
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-lime-400 transition-colors pt-2">
                    Curiosity Over Knowledge
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    The best solutions come from asking WHY repeatedly, not from knowing all the answers upfront.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-black/60 border-2 border-gray-800 hover:border-lime-400 transition-all duration-300 p-6 sm:p-8">
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-lime-400 flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-base">02</span>
                </div>

                {/* Hover Accent */}
                <div className="absolute inset-0 bg-lime-400/0 group-hover:bg-lime-400/5 transition-colors duration-300"></div>

                <div className="relative space-y-4">
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-lime-400 transition-colors pt-2">
                    Collaboration First
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Great systems are built by great teams. I prioritize listening, mentoring, and lifting others.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-black/60 border-2 border-gray-800 hover:border-lime-400 transition-all duration-300 p-6 sm:p-8">
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-lime-400 flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-base">03</span>
                </div>

                {/* Hover Accent */}
                <div className="absolute inset-0 bg-lime-400/0 group-hover:bg-lime-400/5 transition-colors duration-300"></div>

                <div className="relative space-y-4">
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-lime-400 transition-colors pt-2">
                    Simplicity as Art
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Complex problems deserve elegant solutions. Beautiful code is simple code that others can understand.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Add CSS for fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}