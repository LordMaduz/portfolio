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
    <footer className="bg-black text-white border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">

        {/* Top Row: Social Icons (Left) + Navigation Links (Right) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">

          {/* Social Icons - Left */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 rounded-full border border-gray-800 hover:border-lime-400 flex items-center justify-center transition-colors group"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 text-gray-500 group-hover:text-lime-400 transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Navigation Links - Right */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-lime-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>

        {/* Copyright Text - Centered */}
        <div className="text-center text-sm text-gray-600">
          Copyright © {currentYear} Ruchira Rajapaksha. All Rights Reserved
        </div>

      </div>
    </footer>
  );
}