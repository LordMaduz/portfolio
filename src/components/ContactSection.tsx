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
    <section className="bg-black text-white py-20 sm:py-32 relative overflow-hidden flex flex-col items-center min-h-[calc(100vh-10rem)] sm:min-h-0">

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">

        {/* Section Label */}
        <div className="mb-12 sm:mb-20">
          <span className="text-[10px] sm:text-xs lg:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 uppercase font-light">
            07. Contact
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-lime-400 mt-2"></div>
        </div>

        {/* Large Section Title */}
        <div className="mb-12 sm:mb-20">

        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="space-y-5 sm:space-y-6">

            {/* Name */}
            <div>
              <label className="block text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-2 sm:mb-3">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-950 border border-gray-800 focus:border-lime-400 outline-none text-white py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base transition-colors placeholder:text-gray-600"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-2 sm:mb-3">
                Email
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-950 border border-gray-800 focus:border-lime-400 outline-none text-white py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base transition-colors placeholder:text-gray-600"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-2 sm:mb-3">
                Message
              </label>
              <textarea
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full bg-gray-950 border border-gray-800 focus:border-lime-400 outline-none text-white py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base transition-colors resize-none placeholder:text-gray-600"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-3 sm:pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-lime-400 text-white hover:bg-lime-400 hover:text-black transition-colors text-xs sm:text-sm font-medium"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}