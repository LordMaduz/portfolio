import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:maduz.ruchira@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section className="min-h-screen bg-black text-white py-32 relative overflow-hidden flex items-center">

      {/* Subtle diagonal pattern background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.03) 10px,
            rgba(255,255,255,0.03) 11px
          )`
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">

        {/* Section Label */}
        <div className="mb-20">
          <span className="text-xs sm:text-sm tracking-[0.3em] text-gray-500 uppercase font-light">
            06. Contact
          </span>
          <div className="w-12 h-[1px] bg-lime-400 mt-2"></div>
        </div>

        {/* Large Section Title */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="text-white">SEND ME</span>
            <br />
            <span className="text-gray-700">A MESSAGE</span>
          </h2>
        </div>

 {/* Message Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-3">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-950 border border-gray-800 focus:border-lime-400 outline-none text-white py-3 px-4 text-base transition-colors placeholder:text-gray-600"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-3">
                Email
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-950 border border-gray-800 focus:border-lime-400 outline-none text-white py-3 px-4 text-base transition-colors placeholder:text-gray-600"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-3">
                Message
              </label>
              <textarea
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full bg-gray-950 border border-gray-800 focus:border-lime-400 outline-none text-white py-3 px-4 text-base transition-colors resize-none placeholder:text-gray-600"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-lime-400 text-white hover:bg-lime-400 hover:text-black transition-colors text-sm font-medium"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>
        </form>

      </div>
    </section>
  );
}