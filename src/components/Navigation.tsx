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
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'resume', label: 'Resume' },
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
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-lime-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Optimized for Mobile Screens */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-black border-t border-gray-900 shadow-xl">
          <div className="px-4 py-4">

            {/* Mobile menu header - Compact */}
            <div className="mb-4">
              <span className="text-[10px] tracking-[0.2em] text-gray-600 uppercase font-medium">
                Menu
              </span>
              <div className="w-8 h-[1px] bg-lime-400 mt-1"></div>
            </div>

            {/* Mobile nav items - Compact and touchable */}
            <div className="space-y-0">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`group w-full text-left py-3 border-b border-gray-900 transition-colors ${
                    activeSection === item.id
                      ? 'text-lime-400'
                      : 'text-gray-400 hover:text-white active:text-lime-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Label - mobile optimized size */}
                      <span className="text-base font-semibold">
                        {item.label}
                      </span>
                    </div>
                    {/* Arrow indicator - smaller */}
                    <span className={`text-sm transition-transform ${
                      activeSection === item.id ? 'text-lime-400' : 'text-gray-700'
                    }`}>
                      →
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile menu footer - Compact */}
            <div className="mt-4 pt-4 border-t border-gray-900">
              <button
                onClick={() => {
                  setActiveSection('contact');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-lime-400 hover:bg-lime-500 active:bg-lime-600 text-black px-4 py-3 text-sm font-semibold transition-colors"
              >
                Contact Me
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}