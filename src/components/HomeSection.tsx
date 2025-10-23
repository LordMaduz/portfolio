import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import image from '../assets/IMG_3.png';

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

      {/* Subtle diagonal pattern background - Jony style */}
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

      {/* Main Content - FIXED SPACING */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-24">

        {/* FIXED GRID: Better column proportions and reduced gap */}
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">

          {/* Left Column - Photo - FIXED ALIGNMENT */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative group w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-[22rem] lg:h-[30rem] xl:w-96 xl:h-[32rem]">

              {/* Photo container with minimal styling */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={image}
                  alt="Ruchira Rajapaksha"
                  className="w-full h-full object-cover transition-all duration-700"
                  loading="lazy"
                  style={{
                    objectPosition: '50% 20%'
                  }}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Thin accent border - appears on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 transition-all duration-500 -m-2"></div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right Column - Content - FIXED PADDING */}
          <div className="order-1 lg:order-2 space-y-12 text-center lg:text-left lg:pr-8 xl:pr-12">

            {/* Large Role Title - Like Jony's "WEB DEVELOPER" */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight max-w-xl">
                <span className="text-white">SENIOR</span>
                <br />
                <span className="text-white">SOFTWARE</span>
                <br />
                <span className="text-gray-700">ENGINEER</span>
              </h1>
            </div>

            {/* Name & Description - Like Jony's "Hi, i am jony" section */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">
                Hi, I'm Ruchira Rajapaksha 👋
              </h2>

              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Hey there! I'm Ruchira, a passionate engineer building scalable distributed systems and event-driven microservices for enterprise platforms serving millions of users.
              </p>
            </div>

            {/* Stats Grid - Clean boxes with borders */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto lg:mx-0 py-8">

              <div
                className="space-y-2 border-l-2 border-lime-400 pl-4 cursor-pointer group"
                onClick={() => setActiveSection('about')}
              >
                <div className="text-3xl sm:text-4xl font-bold text-white group-hover:text-lime-400 transition-colors">6+</div>
                <div className="text-xs sm:text-sm text-gray-500 leading-tight">
                  Years
                  <br />
                  <span className="text-gray-600">Experience</span>
                </div>
              </div>

              <div
                className="space-y-2 border-l-2 border-gray-800 pl-4 cursor-pointer group"
                onClick={() => setActiveSection('certifications')}
              >
                <div className="text-3xl sm:text-4xl font-bold text-white group-hover:text-lime-400 transition-colors">AWS</div>
                <div className="text-xs sm:text-sm text-gray-500 leading-tight">
                  Certified
                  <br />
                  <span className="text-gray-600">Architect</span>
                </div>
              </div>

              <div
                className="space-y-2 border-l-2 border-gray-800 pl-4 cursor-pointer group"
                onClick={() => setActiveSection('contact')}
              >
                <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-lime-400 transition-colors">SG</div>
                <div className="text-xs sm:text-sm text-gray-500 leading-tight">
                  Singapore
                  <br />
                  <span className="text-gray-600">Based</span>
                </div>
              </div>
            </div>

            {/* CTA Button - Sharp rectangle with lime background */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Button
                size="lg"
                className="bg-lime-400 hover:bg-lime-500 text-black px-8 py-6 text-base sm:text-lg font-semibold rounded-none transition-all duration-300 group shadow-none hover:shadow-none w-full sm:w-auto"
                onClick={() => setActiveSection('projects')}
              >
                <span className="flex items-center justify-center gap-3">
                  Explore My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              {/* Secondary link */}
              <button
                onClick={() => setActiveSection('contact')}
                className="text-gray-500 hover:text-lime-400 transition-colors text-sm sm:text-base font-medium"
              >
                Get in touch →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}