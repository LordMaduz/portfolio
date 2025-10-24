import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import image from "../assets/IMG_3.png";
import baeldung from "../assets/baeldung.jpg";

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Height of fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setActiveSection(sectionId);
  }
};
export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
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

        {/* Mobile Only: Name at Top */}
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

          {/* Left Column - Intriguing Glimpse (Hidden on Mobile) */}
          <div className="hidden lg:block space-y-14 text-center lg:text-left">

            {/* Name - Desktop Only */}
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

            {/* One Intriguing Line - Hook */}
            <div className="space-y-6 text-xl lg:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p className="text-gray-300">
                A Sri Lankan in Singapore who codes by day, writes by night, and believes the best
                engineering happens when curiosity meets collaboration.
              </p>
            </div>

            {/* Minimal Identity Hints */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0 pt-8">
              <div className="space-y-2 border-l-2 border-lime-400 pl-4">
                <div className="text-3xl font-bold text-white">🇱🇰</div>
                <div className="text-sm text-gray-400 leading-tight">
                  Born
                  <br />
                  <span className="text-gray-400">Sri Lanka</span>
                </div>
              </div>

              <div className="space-y-2 border-l-2 border-lime-400 pl-4">
                <div className="text-3xl font-bold text-white">🇸🇬</div>
                <div className="text-sm text-gray-400 leading-tight">
                  Based
                  <br />
                  <span className="text-gray-400">Singapore</span>
                </div>
              </div>

              <div className="space-y-2 border-l-2 border-lime-400 pl-4">
                <div className="h-8 flex items-center ">
                  <img
                    src={baeldung}
                    alt="Baeldung"
                    className="h-7 w-auto"
                  />
                </div>
                <div className="text-sm text-gray-400 leading-tight">
                  Baeldung
                  <br />
                  <span className="text-gray-400">Writer</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
              <Button
                size="lg"
                className="bg-lime-400 hover:bg-lime-500 text-black px-8 py-6 text-lg font-semibold rounded-none transition-all duration-300 group shadow-none hover:shadow-none w-full sm:w-auto"
                onClick={() => scrollToSection("about")}
              >
                <span className="flex items-center justify-center gap-3">
                  Discover My Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-400 hover:text-lime-400 transition-colors text-base font-medium"
              >
                See my work →
              </button>
            </div>
          </div>

          {/* Right Column - Image + Intriguing Quote */}
          <div className="relative flex flex-col items-center justify-center space-y-6 lg:space-y-10 lg:pl-10">

            {/* Image Container */}
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
            </div>

            {/* Mysterious Quote - Makes Them Curious */}
            <div className="relative bg-gray-900/40 border border-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-8 max-w-md mx-auto shadow-lg backdrop-blur-sm hover:border-lime-400 transition-colors duration-500">
              <div className="absolute -top-3 left-3 sm:-top-4 sm:left-4 text-lime-400 text-4xl sm:text-5xl font-serif leading-none">"</div>
              <p className="text-white font-medium italic text-sm sm:text-base lg:text-lg leading-relaxed text-center">
                I'm not here to be the smartest person in the room. I'm here to make the room smarter.
              </p>
              <div className="absolute -bottom-3 right-3 sm:-bottom-4 sm:right-4 text-lime-400 text-4xl sm:text-5xl font-serif leading-none">"</div>
            </div>
          </div>

        </div>

        {/* Mobile Only: Content Below Image & Quote */}
        <div className="lg:hidden mt-10 space-y-10 text-center">

          {/* Hook - Mobile */}
          <div className="space-y-5 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            <p className="text-gray-300">
              A Sri Lankan in Singapore who codes by day, writes by night, and believes the best
              engineering happens when curiosity meets collaboration.
            </p>
          </div>

          {/* Identity Hints - Mobile */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto pt-4">
            <div className="space-y-2 border-l-2 border-lime-400 pl-3 sm:pl-4">
              <div className="text-2xl sm:text-3xl font-bold text-white">🇱🇰</div>
              <div className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                Born
                <br />
                <span className="text-gray-400">Sri Lanka</span>
              </div>
            </div>

            <div className="space-y-2 border-l-2 border-lime-400 pl-3 sm:pl-4">
              <div className="text-2xl sm:text-3xl font-bold text-white">🇸🇬</div>
              <div className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                Based
                <br />
                <span className="text-gray-400">Singapore</span>
              </div>
            </div>

            <div className="space-y-2 border-l-2 border-lime-400 pl-3 sm:pl-4">
              <div className="h-6 sm:h-8 flex items-center justify-center">
                <img
                  src={baeldung}
                  alt="Baeldung"
                  className="h-5 sm:h-6 w-auto"
                />
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                Baeldung
                <br />
                <span className="text-gray-400">Writer</span>
              </div>
            </div>
          </div>

          {/* CTA Section - Mobile */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
            <Button
              size="lg"
              className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold rounded-none transition-all duration-300 group shadow-none hover:shadow-none w-full sm:w-auto"
              onClick={() => scrollToSection("about")}
            >
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                Discover My Story
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-400 hover:text-lime-400 transition-colors text-s sm:text-sm font-medium"
            >
              See my work →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}