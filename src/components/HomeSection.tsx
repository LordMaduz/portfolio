import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import image from "../assets/IMG_3.png";

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
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

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-28">

        {/* Mobile Only: Name & Role at Top */}
        <div className="lg:hidden text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight">
            <span className="text-white">RUCHIRA</span>
            <br />
            <span className="text-gray-700">RAJAPAKSHA</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mt-3 font-medium">
            Senior Software Engineer
          </p>
        </div>

        {/* Balanced Grid Layout */}
        <div className="grid lg:grid-cols-[50%_50%] gap-12 lg:gap-16 items-center">

          {/* Left Column - Text Story (Hidden on Mobile, Shows on Desktop) */}
          <div className="hidden lg:block space-y-14 text-center lg:text-left">
            {/* Heading - Desktop Only */}
            <div>
              <h1 className="text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="text-white">RUCHIRA</span>
                <br />
                <span className="text-gray-700">RAJAPAKSHA</span>
              </h1>
              <p className="text-2xl text-gray-500 mt-4 font-medium">
                Senior Software Engineer
              </p>
            </div>

            {/* Narrative Story */}
            <div className="space-y-8 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p className="text-gray-300">
                A Sri Lankan soul surviving and thriving in Singapore. When I'm not
                deep in code or designing systems, you'll find me lost in anime
                or writing on Baeldung and Medium, because great
                engineering deserves great storytelling.
              </p>

              <p className="text-gray-300">
                I'm a simple-minded individual who stumbled upon programming and
                found it fascinating. That fascination evolved into a deep
                tech enthusiasm where I
                thrive on learning, sharing, and lifting others along the way.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0 pt-6">
              <div
                className="space-y-2 border-l-2 border-lime-400 pl-4 cursor-pointer group"
                onClick={() => setActiveSection("about")}
              >
                <div className="text-4xl font-bold text-white group-hover:text-lime-400 transition-colors">
                  6+
                </div>
                <div className="text-sm text-gray-400 leading-tight">
                  Years
                  <br />
                  <span className="text-gray-400">Experience</span>
                </div>
              </div>

              <div
                className="space-y-2 border-l-2 border-gray-800 pl-4 cursor-pointer group"
                onClick={() => setActiveSection("certifications")}
              >
                <div className="text-4xl font-bold text-white group-hover:text-lime-400 transition-colors">
                  AWS
                </div>
                <div className="text-sm text-gray-400 leading-tight">
                  Certified
                  <br />
                  <span className="text-gray-400">Architect</span>
                </div>
              </div>

              <div
                className="space-y-2 border-l-2 border-gray-800 pl-4 cursor-pointer group"
                onClick={() => setActiveSection("contact")}
              >
                <div className="text-3xl font-bold text-white group-hover:text-lime-400 transition-colors">
                  SG
                </div>
                <div className="text-sm text-gray-400 leading-tight">
                  Singapore
                  <br />
                  <span className="text-gray-400">Based</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <Button
                size="lg"
                className="bg-lime-400 hover:bg-lime-500 text-black px-8 py-6 text-lg font-semibold rounded-none transition-all duration-300 group shadow-none hover:shadow-none w-full sm:w-auto"
                onClick={() => setActiveSection("projects")}
              >
                <span className="flex items-center justify-center gap-3">
                  Explore My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <button
                onClick={() => setActiveSection("contact")}
                className="text-gray-400 hover:text-lime-400 transition-colors text-base font-medium"
              >
                Get in touch →
              </button>
            </div>
          </div>

          {/* Right Column - Image + Quote */}
          <div className="relative flex flex-col items-center justify-center space-y-6 lg:space-y-10 lg:pl-10">
            {/* Image Container - Mobile Optimized */}
            <div className="relative group w-64 h-80 sm:w-80 sm:h-[28rem] lg:w-[22rem] lg:h-[30rem] xl:w-96 xl:h-[32rem]">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <img
                  src={image}
                  alt="Ruchira Rajapaksha"
                  className="w-full h-full object-cover transition-all duration-700"
                  loading="lazy"
                  style={{ objectPosition: "50% 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all duration-500 -m-2"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 border-b-2 border-r-2 border-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Highlighted Quote Box - Mobile Optimized */}
            <div className="relative bg-gray-900/40 border border-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-8 max-w-md mx-auto shadow-lg backdrop-blur-sm hover:border-lime-400 transition-colors duration-500">
              <div className="absolute -top-3 left-3 sm:-top-4 sm:left-4 text-lime-400 text-4xl sm:text-5xl font-serif leading-none">"</div>
              <p className="text-white font-medium italic text-sm sm:text-base lg:text-lg leading-relaxed text-center">
                I bring genuine collaboration, curiosity, and a
                human-first approach to everything I build. Because at the end
                of the day, we're not just writing code, we're creating
                experiences that matter.
              </p>
              <div className="absolute -bottom-3 right-3 sm:-bottom-4 sm:right-4 text-lime-400 text-4xl sm:text-5xl font-serif leading-none">"</div>
            </div>
          </div>

        </div>

        {/* Mobile Only: Description, Stats, CTA Below Image & Quote */}
        <div className="lg:hidden mt-10 space-y-10 text-center">
          {/* Narrative Story - Mobile */}
          <div className="space-y-6 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            <p className="text-gray-300">
              A Sri Lankan soul
              surviving and thriving in Singapore. When I'm not
              deep in code or designing systems, you'll find me lost in anime
              or writing on Baeldung and Medium, because great
              engineering deserves great storytelling.
            </p>

            <p className="text-gray-300">
              I'm a simple-minded individual who stumbled upon programming and
              found it fascinating. That fascination evolved into a deep tech enthusiasm where I
              thrive on learning, sharing, and lifting others along the way.
            </p>
          </div>

          {/* Stats Grid - Mobile */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto pt-4">
            <div
              className="space-y-2 border-l-2 border-lime-400 pl-3 sm:pl-4 cursor-pointer group"
              onClick={() => setActiveSection("about")}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-lime-400 transition-colors">
                6+
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                Years
                <br />
                <span className="text-gray-400">Experience</span>
              </div>
            </div>

            <div
              className="space-y-2 border-l-2 border-gray-800 pl-3 sm:pl-4 cursor-pointer group"
              onClick={() => setActiveSection("certifications")}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-lime-400 transition-colors">
                AWS
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                Certified
                <br />
                <span className="text-gray-600">Architect</span>
              </div>
            </div>

            <div
              className="space-y-2 border-l-2 border-gray-800 pl-3 sm:pl-4 cursor-pointer group"
              onClick={() => setActiveSection("contact")}
            >
              <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">
                SG
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                Singapore
                <br />
                <span className="text-gray-600">Based</span>
              </div>
            </div>
          </div>

          {/* CTA Section - Mobile */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold rounded-none transition-all duration-300 group shadow-none hover:shadow-none w-full sm:w-auto"
              onClick={() => setActiveSection("projects")}
            >
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                Explore My Work
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <button
              onClick={() => setActiveSection("contact")}
              className="text-gray-500 hover:text-lime-400 transition-colors text-xs sm:text-sm font-medium"
            >
              Get in touch →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}