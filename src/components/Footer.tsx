import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileText,
  BookOpen
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:maduz.ruchira@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ruchirarajapaksha/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/LordMaduz", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/maduz_ruchira", label: "Twitter" },
    { icon: FileText, href: "https://medium.com/@maduz.ruchira", label: "Medium" },
    { icon: BookOpen, href: "https://www.baeldung.com/author/ruchiramadhushanrajapaksha", label: "Baeldung" }
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-black text-white border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-12">

        {/* Top Row: Social Icons (Left) + Navigation Links (Right) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">

          {/* Social Icons - Stacked on mobile, left on desktop */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center md:justify-start">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-600 flex items-center justify-center transition-colors group"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400 transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Navigation Links - Stacked on mobile, horizontal on desktop */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm text-gray-400 transition-colors hover:text-lime-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright Text - Centered */}
        <div className="text-center text-xs sm:text-sm text-gray-400">
          Copyright © {currentYear} Ruchira Rajapaksha. All Rights Reserved
        </div>

      </div>
    </footer>
  );
}