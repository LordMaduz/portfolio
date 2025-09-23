import { 
  Brain,
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileText,
  BookOpen,
  MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Brand & Info */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-base font-bold text-white">Ruchira Rajapaksha</h3>
                <p className="text-indigo-400 text-sm">AI Solutions Architect</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3 h-3" />
                <span>Singapore</span>
              </div>
            </div>
          </div>

          {/* Navigation & Social Links */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Portfolio Links */}
            <div className="flex items-center gap-4 text-sm">
              <a href="#home" className="text-slate-300 hover:text-indigo-400 transition-colors">Home</a>
              <a href="#about" className="text-slate-300 hover:text-indigo-400 transition-colors">About</a>
              <a href="#skills" className="text-slate-300 hover:text-indigo-400 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-300 hover:text-indigo-400 transition-colors">Projects</a>
              <a href="#certifications" className="text-slate-300 hover:text-indigo-400 transition-colors">Certifications</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a 
                href="mailto:maduz.ruchira@gmail.com"
                className="w-8 h-8 bg-white/10 hover:bg-indigo-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-indigo-500/30"
              >
                <Mail className="w-4 h-4 text-slate-300 group-hover:text-indigo-400" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/ruchirarajapaksha/"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-blue-500/30"
              >
                <Linkedin className="w-4 h-4 text-slate-300 group-hover:text-blue-400" />
              </a>
              
              <a 
                href="https://github.com/LordMaduz"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-slate-400/20 rounded-lg flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-slate-400/30"
              >
                <Github className="w-4 h-4 text-slate-300 group-hover:text-slate-100" />
              </a>
              
              <a 
                href="https://x.com/maduz_ruchira"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-sky-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-sky-500/30"
              >
                <Twitter className="w-4 h-4 text-slate-300 group-hover:text-sky-400" />
              </a>
              
              <a 
                href="https://medium.com/@maduz.ruchira"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-green-500/30"
              >
                <FileText className="w-4 h-4 text-slate-300 group-hover:text-green-400" />
              </a>
              
              <a 
                href="https://www.baeldung.com/author/ruchiramadhushanrajapaksha"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-orange-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-orange-500/30"
              >
                <BookOpen className="w-4 h-4 text-slate-300 group-hover:text-orange-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-4 pt-4 text-center">
          <div className="text-slate-400 text-sm">
            © {currentYear} Ruchira Rajapaksha. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}