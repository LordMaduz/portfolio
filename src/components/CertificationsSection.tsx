import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional certifications and academic credentials that validate expertise 
            in cloud architecture, AI systems, and advanced software engineering.
          </p>
        </div>

        {/* AWS Certification - Featured */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">AWS Solutions Architect Associate</h3>
                    <p className="text-orange-100">Amazon Web Services</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Active Certification
                  </Badge>
                  <div className="flex items-center gap-2 text-orange-100">
                    <Calendar className="w-4 h-4" />
                    <span>Valid: 2025 - 2028</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-orange-100">
                  Certified in designing distributed systems on AWS, including scalable, 
                  highly available, and fault-tolerant systems. Expertise in AWS services 
                  for compute, storage, database, and networking.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}