import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  FileText,
  BookOpen
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:maduz.ruchira@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
  };

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
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* Section Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Badge className="mb-6 px-6 py-3 text-sm font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30">
            <MessageCircle className="w-4 h-4 mr-2" />
            Let's Connect
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Feel free to reach out for collaboration, job opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          {/* Contact Information */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-slate-300 mb-8">Here's how you can reach me</p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform border border-blue-500/30">
                    <Mail className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-slate-300">maduz.ruchira@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group/item">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform border border-emerald-500/30">
                    <Phone className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-slate-300">+65 828 585 90</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group/item">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform border border-purple-500/30">
                    <MapPin className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-slate-300">Singapore</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/LordMaduz"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-slate-400/20 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-slate-400/30"
                  >
                    <Github className="w-6 h-6 text-slate-300 group-hover:text-slate-100" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ruchirarajapaksha/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-blue-500/20 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-blue-500/30"
                  >
                    <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-blue-400" />
                  </a>
                  <a 
                    href="https://x.com/maduz_ruchira"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-sky-500/20 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-sky-500/30"
                  >
                    <Twitter className="w-6 h-6 text-slate-300 group-hover:text-sky-400" />
                  </a>
                  <a 
                    href="https://medium.com/@maduz.ruchira"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-green-500/20 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-green-500/30"
                  >
                    <FileText className="w-6 h-6 text-slate-300 group-hover:text-green-400" />
                  </a>
                  <a 
                    href="https://www.baeldung.com/author/ruchiramadhushanrajapaksha"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-orange-500/20 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-orange-500/30"
                  >
                    <BookOpen className="w-6 h-6 text-slate-300 group-hover:text-orange-400" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                Send Me a Message
              </h3>
              <p className="text-slate-300 mb-8">I'll get back to you as soon as possible</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Name <span className="text-indigo-400">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-indigo-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email <span className="text-indigo-400">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-indigo-400"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <Input
                    type="text"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-indigo-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <Textarea
                    placeholder="Your message here..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-indigo-400 resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}