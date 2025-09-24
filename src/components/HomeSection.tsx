import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Award, MapPin } from "lucide-react";
import image from '../assets/image.jpg';

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse delay-500" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Greeting */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-2 duration-1000">
           <h3 className="text-2xl md:text-3xl font-medium text-slate-300">
                  Hey, I'm Ruchira Rajapaksha 👋
           </h3>
         </div>

        {/* Ghibli Photo Placeholder */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          <div className="relative mx-auto w-64 h-[26rem] md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
            {/* Placeholder for Ghibli Photo - Replace this div with your generated image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl border-4 border-white/10 shadow-2xl flex items-center justify-center backdrop-blur-sm">
              <img
                src={image}
                alt="Ruchira Rajapaksha"
                className="w-full h-full object-cover rounded-3xl border-4 border-white/10 shadow-2xl"
              />
            </div>

            {/* Optional: Decorative rings around photo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse -z-10" />
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-1000 -z-20" />
          </div>
        </div>

        {/* Main Identity */}
        <div className="space-y-8 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">
              AI Solutions Architect
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Transforming enterprise operations through intelligent systems and strategic AI implementation
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group"
            onClick={() => setActiveSection('projects')}
          >
            Explore My Work
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Minimal Credentials */}
        <div className="flex flex-wrap justify-center gap-8 text-slate-400 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveSection('about')}>
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">6+ Years</div>
              <div className="text-sm text-slate-400">Enterprise Experience</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveSection('certifications')}>
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Badge className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">AWS Certified</div>
              <div className="text-sm text-slate-400">Solutions Architect</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveSection('contact')}>
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Singapore</div>
              <div className="text-sm text-slate-400">Based</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center opacity-60">
            <div className="w-1 h-3 bg-slate-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}