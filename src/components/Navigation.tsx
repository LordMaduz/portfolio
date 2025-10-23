import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo/Brand - Minimalistic */}
          <button
            onClick={() => setActiveSection('home')}
            className="flex items-center gap-3 group"
          >
            {/* Simple initial instead of icon */}
            <div className="w-10 h-10 border-2 border-lime-400 flex items-center justify-center transition-colors group-hover:bg-lime-400">
              <span className="text-lime-400 font-bold text-lg group-hover:text-black transition-colors">R</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-base text-white tracking-tight">
                RUCHIRA RAJAPAKSHA
              </div>
            </div>
          </button>

          {/* Desktop Navigation - Clean text links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors relative group ${
                  activeSection === item.id
                    ? 'text-lime-400'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {item.label}
                {/* Active indicator - thin line */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-lime-400"></div>
                )}
                {/* Hover indicator */}
                {activeSection !== item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Minimalistic */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-lime-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-black/98 backdrop-blur-xl border-t border-gray-900">
            <div className="h-full overflow-y-auto">
              <div className="max-w-md mx-auto px-6 py-12">

                {/* Mobile menu header */}
                <div className="mb-12">
                  <span className="text-xs tracking-[0.3em] text-gray-600 uppercase">
                    Navigation
                  </span>
                  <div className="w-12 h-[1px] bg-lime-400 mt-2"></div>
                </div>

                {/* Mobile nav items - Large, clean */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`group w-full text-left py-4 border-b border-gray-900 transition-colors ${
                        activeSection === item.id
                          ? 'text-lime-400'
                          : 'text-gray-500 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {/* Number prefix */}
                          <span className="text-xs text-gray-700 font-light w-6">
                            {String(index + 1).padStart(2, '0')}.
                          </span>
                          {/* Label */}
                          <span className="text-2xl font-semibold">
                            {item.label}
                          </span>
                        </div>
                        {/* Arrow indicator */}
                        <span className={`text-xl transition-transform ${
                          activeSection === item.id ? 'text-lime-400' : 'text-gray-700 group-hover:translate-x-1'
                        }`}>
                          →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Mobile menu footer */}
                <div className="mt-12 pt-8 border-t border-gray-900">
                  <div className="text-xs text-gray-600 uppercase tracking-wider mb-4">
                    Get in Touch
                  </div>
                  <button
                    onClick={() => {
                      setActiveSection('contact');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-lime-400 hover:bg-lime-500 text-black px-6 py-4 text-base font-semibold transition-colors"
                  >
                    Contact Me
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}