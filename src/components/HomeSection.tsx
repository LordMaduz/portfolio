import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Award, MapPin } from "lucide-react";
import image from '../assets/image.jpg';

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden pt-safe-top">

      {/* Enhanced Mobile-First Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(147,51,234,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(99,102,241,0.08),transparent_50%)]" />
        {/* Mobile-specific subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent md:hidden" />
      </div>

      {/* Floating Elements - Optimized for mobile */}
      <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="hidden md:block absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse delay-500" />

      {/* Mobile-only subtle floating elements */}
      <div className="sm:hidden absolute top-16 right-8 w-12 h-12 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-lg animate-pulse" />
      <div className="sm:hidden absolute bottom-32 left-6 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-lg animate-pulse delay-1000" />

      {/* Main Content - Mobile-first approach with header spacing */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-16 pb-6 sm:pb-12 md:pb-16 text-center">

        {/* Mobile-optimized content container */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">

          {/* Greeting - Mobile-first typography */}
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-slate-200 leading-tight px-2">
              Hey, I'm Ruchira Rajapaksha 👋
            </h3>
          </div>

          {/* Photo - Dramatically improved mobile sizing */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            <div className="relative mx-auto w-36 h-44 xs:w-40 xs:h-48 sm:w-48 sm:h-56 md:w-60 md:h-72 lg:w-72 lg:h-80 xl:w-80 xl:h-96">

              {/* Main photo container with enhanced mobile styling */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl border-2 sm:border-3 md:border-4 border-white/15 shadow-xl sm:shadow-2xl flex items-center justify-center backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                <img
                  src={image}
                  alt="Ruchira Rajapaksha"
                  className="w-full h-full object-cover object-top rounded-2xl sm:rounded-3xl"
                  loading="lazy"
                  style={{
                    objectPosition: '50% 20%'  // Adjust this to control crop position
                  }}
                />
              </div>

              {/* Enhanced mobile-friendly decorative rings */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-2xl sm:rounded-3xl blur-md sm:blur-lg md:blur-xl animate-pulse -z-10" />
              <div className="absolute -inset-3 sm:-inset-5 md:-inset-8 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl md:blur-2xl animate-pulse delay-1000 -z-20" />

              {/* Mobile-specific glow effect */}
              <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Main Identity - Enhanced mobile typography */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 px-2">

            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-200 tracking-tight">
                Senior Software Engineer & Cloud Solutions Architect
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light">
                Specializing in distributed systems, event-driven architecture, and high-performance engineering
              </p>
            </div>
          </div>

          {/* CTA Button - Mobile-optimized */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 px-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white
                       px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl lg:px-12 lg:py-6 lg:text-xl
                       font-semibold rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl
                       hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105
                       active:scale-95 touch-manipulation group
                       min-h-[48px] sm:min-h-[52px] md:min-h-[56px]"
              onClick={() => setActiveSection('projects')}
            >
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                Explore My Work
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Credentials - Mobile-first responsive design */}
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600 px-2">

            {/* Mobile: Vertical cards with better spacing */}
            <div className="flex flex-col sm:hidden space-y-4 max-w-xs mx-auto">

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 cursor-pointer hover:bg-slate-700/30 transition-all duration-300 active:scale-95"
                   onClick={() => setActiveSection('about')}>
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-white text-sm">6+ Years</div>
                  <div className="text-xs text-slate-400">Enterprise Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 cursor-pointer hover:bg-slate-700/30 transition-all duration-300 active:scale-95"
                   onClick={() => setActiveSection('certifications')}>
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Badge className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-white text-sm">AWS Certified</div>
                  <div className="text-xs text-slate-400">Solutions Architect</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 cursor-pointer hover:bg-slate-700/30 transition-all duration-300 active:scale-95"
                   onClick={() => setActiveSection('contact')}>
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-white text-sm">Singapore</div>
                  <div className="text-xs text-slate-400">Based</div>
                </div>
              </div>
            </div>

            {/* Tablet and Desktop: Horizontal layout */}
            <div className="hidden sm:flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-slate-400">

              <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all duration-300"
                   onClick={() => setActiveSection('about')}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white text-sm md:text-base">6+ Years</div>
                  <div className="text-xs md:text-sm text-slate-400">Enterprise Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all duration-300"
                   onClick={() => setActiveSection('certifications')}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/20 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Badge className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white text-sm md:text-base">AWS Certified</div>
                  <div className="text-xs md:text-sm text-slate-400">Solutions Architect</div>
                </div>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all duration-300"
                   onClick={() => setActiveSection('contact')}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white text-sm md:text-base">Singapore</div>
                  <div className="text-xs md:text-sm text-slate-400">Based</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}