import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        
        {/* Main Value Proposition - Large Bold Text */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Reduced AI costs by{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              60%
            </span>
            {" "}while achieving{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              99.5% accuracy
            </span>
            {" "}for Singapore's largest bank
          </h1>
        </div>

        {/* Name & Title */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
            Ruchira Madhushan Rajapaksha
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-medium">
            Enterprise AI Transformation Leader
          </p>
        </div>

        {/* Single Strong CTA */}
        <div className="pt-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Schedule Your AI ROI Assessment
          </Button>
        </div>

        {/* Minimal Supporting Info */}
        <div className="flex flex-wrap justify-center gap-8 pt-12 text-gray-400">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-lg">6+ Years Enterprise AI</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="w-5 h-5 text-emerald-400" />
            <span className="text-lg">AWS Certified Solutions Architect</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-purple-400" />
            <span className="text-lg">Singapore-based</span>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="pt-16">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto flex justify-center opacity-60">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}