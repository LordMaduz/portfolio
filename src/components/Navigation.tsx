import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
const RESUME_DRIVE_FILE_ID = import.meta.env.VITE_RESUME_DRIVE_FILE_ID;

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}


export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const downloadResume = () => {
       try {
          const pdfResume = `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_FILE_ID}`;
          window.open(pdfResume, '_blank', 'noopener,noreferrer');
        } catch (error) {
          console.error('Download failed:', error);
        }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'contact', label: 'Contact' }
  ];

  // Detect scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      // Find which section is currently in viewport
      const current = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current && current.id !== activeSection) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [activeSection, setActiveSection]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: sectionId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-black/98 backdrop-blur-xl border-b border-gray-900 shadow-lg'
        : 'bg-black/95 backdrop-blur-xl border-b border-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-12 sm:h-20">

          {/* Logo/Brand - Minimalistic */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group"
          >
            {/* Simple initial instead of icon */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-lime-400 flex items-center justify-center transition-all group-hover:bg-lime-400">
              <span className="text-lime-400 font-bold text-lg group-hover:text-black transition-colors">R</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-base text-white tracking-tight">
                RUCHIRA RAJAPAKSHA
              </div>
            </div>
          </button>

          {/* Desktop Navigation - Clean text links + Resume Button */}
          <div className="hidden md:flex items-center gap-1">
            {/* Regular Nav Items */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
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

            {/* Dedicated Resume Download Button */}
            <button
              onClick={downloadResume}
              className="ml-4 px-4 py-2 bg-lime-400 hover:bg-lime-500 text-black text-sm font-semibold transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Resume</span>
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button - Minimalistic */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-lime-400 transition-colors"
              aria-label="Toggle menu"
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
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
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

            {/* Mobile menu footer - Compact with Resume Download */}
            <div className="mt-4 pt-4 border-t border-gray-900 space-y-3">
              {/* Resume Download Button - Mobile */}
              <button
                onClick={() => {
                  downloadResume();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-lime-400 hover:bg-lime-500 active:bg-lime-600 text-black px-4 py-3 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

            </div>

          </div>
        </div>
      )}
    </nav>
  );
}