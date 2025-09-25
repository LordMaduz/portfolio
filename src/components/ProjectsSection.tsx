import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  TrendingUp, 
  Users, 
  Code, 
  Database, 
  Shield,
  Zap,
  Target,
  Building2,
  Calendar,
  ExternalLink,
  ArrowRight,
  Globe,
  BarChart3,
  Cpu,
  Network
} from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "hawk",
      title: "HAWK: AI-Powered Hedge Accounting Platform",
      company: "DBS Bank Singapore",
      role: "Technical Lead & AI Solutions Architect",
      timeline: "June 2024 - March 2025",
      teamSize: "6-person cross-functional team",
      description: "Led Singapore's largest bank through their first multi-agent financial AI system, achieving 99.5% accuracy and 60% cost reduction across hedge accounting operations.",
      icon: <Brain className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      gradient: "from-blue-500 to-indigo-600",
      metrics: [
        { label: "Accuracy Improvement", value: "99.5%", change: "From 60%" },
        { label: "Cost Reduction", value: "60%", change: "Operational" },
        { label: "Faster Execution", value: "60%", change: "Faster cycles" }
      ],
      technologies: ["Dify", "Multi-Agent Systems", "MetaGPT", "Python", "AWS", "Docker", "Kubernetes"],
      featured: true,
      impact: "Reduced operational costs by 60% while improving accuracy from 60% to 99.5%, generating measurable ROI through automated hedge accounting.",
      fullDetails: {
        overview: "Architected enterprise-grade multi-agent AI platform revolutionizing hedge accounting operations with intelligent automation and explainable AI capabilities.",
        challenge: "Manual hedge accounting processes across Fair Value, Cash Flow, and Net Investment hedges suffered from 40% error rates and 'black box' legacy systems limiting transparency and scalability.",
        solution: "Industry-first Multi-Agent AI Architecture using Dify framework with explainable AI, providing detailed reasoning for every calculation while integrating seamlessly with legacy banking systems (Murex, OFP, FRDV).",
        keyResults: [
          { metric: "Accuracy Rate", improvement: "60% → 99.5% (+65%)" },
          { metric: "Operational Costs", improvement: "60% reduction through automation" },
          { metric: "Execution Cycles", improvement: "6,200 TPS → 10,000+ TPS (+60%)" },
          { metric: "User Adoption", improvement: "72% → 94% (+22%) team acceptance rate" }
        ],
        stakeholders: [
          "Finance Teams (3 departments): 100% transparency in calculations",
          "Compliance Teams: Automated audit trails for regulatory requirements",
          "IT Operations: 90% reduced maintenance overhead"
        ],
        recognition: "Featured as DBS innovation showcase for enterprise AI adoption"
      }
    },
    {
      id: "globe",
      title: "GloBE: Tax Compliance Engine for Global MNEs",
      company: "DBS Bank Singapore",
      role: "Lead Solutions Architect",
      timeline: "June 2024 - June 2025",
      teamSize: "8-person technical team + 15 stakeholders across jurisdictions",
      description: "Architected externalized tax calculation engine achieving 96% processing time reduction while ensuring 100% OECD BEPS 2.0 compliance across 15+ jurisdictions.",
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      gradient: "from-emerald-500 to-teal-600",
      metrics: [
        { label: "Processing Reduction", value: "96%", change: "Reduction" },
        { label: "Compliance Rate", value: "100%", change: "OECD Standards" },
        { label: "Jurisdictions", value: "15+", change: "Coverage" }
      ],
      technologies: ["MVEL", "Java", "Spring Boot", "HFM", "MongoDB", "Docker"],
      featured: true,
      impact: "Cut processing time from 5 days to 2 hours per jurisdiction (96% reduction) while achieving 100% OECD compliance 3 months ahead of mandatory deadline.",
      fullDetails: {
        overview: "Designed and implemented externalized tax calculation engine enabling rapid adaptation to evolving OECD regulations while reducing technical dependencies for tax professionals.",
        challenge: "OECD BEPS 2.0 Pillar Two regulations mandating 15% global minimum tax by FY2025, with complex jurisdiction-specific formulas requiring quarterly provisioning and legacy system limitations.",
        solution: "Built externalized MVEL-based calculation engine with semantic versioning, enabling tax professionals to modify business logic independently while maintaining integration with core financial systems (HFM, CbCR, UAMS).",
        keyResults: [
          { metric: "Processing Time", improvement: "5 days → 2 hours per jurisdiction (96%)" },
          { metric: "Technical Dependency", improvement: "60% reduction in IT involvement" },
          { metric: "Compliance Readiness", improvement: "3 months ahead of FY2025 deadline" },
          { metric: "User Autonomy", improvement: "Self-service template modifications" }
        ],
        stakeholders: [
          "Tax Teams (15+ jurisdictions): Self-service logic modifications",
          "Finance & Treasury: 70% faster quarterly cycles",
          "External Consultants (IRAS, KPMG): Audit-ready historical calculations"
        ],
        recognition: "Recognized by IRAS as compliance best practice for multinational tax reporting"
      }
    },
    {
      id: "blockchain",
      title: "Cross-Border Blockchain Payment Research",
      company: "Masters Research Project",
      role: "Principal Researcher",
      timeline: "September 2023 - March 2024",
      teamSize: "Individual research with 2 academic supervisors",
      description: "Masters research project developing blockchain payment prototype achieving theoretical 96% transaction time improvement and 70% cost reduction through Layer 2 scaling innovations.",
      icon: <Network className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      gradient: "from-amber-500 to-orange-600",
      metrics: [
        { label: "Theoretical Speed", value: "96%", change: "Improvement" },
        { label: "Cost Model", value: "70%", change: "Reduction" },
        { label: "Research Scope", value: "15+", change: "Jurisdictions" }
      ],
      technologies: ["Ethereum", "Layer Zero", "Solidity", "ZoKrates", "React.js", "Node.js", "IPFS"],
      featured: true,
      impact: "Demonstrated 96% transaction speed improvement with 70% cost reduction potential, earning Masters distinction for breakthrough cross-border payment research.",
      fullDetails: {
        overview: "Academic research project investigating blockchain solutions for cross-border payment inefficiencies, developing prototype system with Layer 2 scaling and Zero-Knowledge Proof compliance mechanisms.",
        challenge: "Research question: How can blockchain technology address traditional cross-border payment limitations of 2-5 day settlement times, 6.3% average fees, and limited transparency while meeting regulatory compliance requirements?",
        solution: "Developed research prototype combining Ethereum blockchain with Layer 2 scaling (ZK-Rollups, State Channels), integrated ZoKrates for privacy-preserving KYC/AML compliance, and created user interface for testing and validation.",
        keyResults: [
          { metric: "Prototype Performance", improvement: "2.3 second transaction simulation" },
          { metric: "Cost Modeling", improvement: "70% theoretical fee reduction vs SWIFT" },
          { metric: "Compliance Framework", improvement: "ZKP-based privacy-preserving verification" },
          { metric: "Academic Contribution", improvement: "Research published and peer-reviewed" }
        ],
        stakeholders: [
          "Academic Community: Contributing to blockchain payment system research",
          "Financial Industry: Prototype demonstrating feasibility of enterprise blockchain adoption",
          "Regulatory Bodies: Privacy-preserving compliance framework development"
        ],
        recognition: "Research accepted for Masters thesis with distinction grade recommendation"
      }
    }
  ];

  const ProjectModal = ({ project }: { project: typeof projects[0] }) => (
    <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-slate-900 text-white border-slate-700">
      <DialogHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${project.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
            {project.icon}
          </div>
          <div className="min-w-0">
            <DialogTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">{project.title}</DialogTitle>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-300 mt-2">
              <div className="flex items-center gap-1">
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">{project.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">{project.timeline}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">{project.teamSize}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogHeader>

      {project.fullDetails && (
        <div className="space-y-4 sm:space-y-6">
          {/* Quick Impact Summary */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 sm:p-6 rounded-xl border border-blue-500/20">
            <h4 className="text-base sm:text-lg font-bold text-blue-300 mb-2">Key Impact</h4>
            <p className="text-slate-200 font-medium text-sm sm:text-base">{project.impact}</p>
          </div>

          {/* Simplified Tabs - Only 3 tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
              <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">Overview</TabsTrigger>
              <TabsTrigger value="results" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">Results</TabsTrigger>
              <TabsTrigger value="impact" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">Impact</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4 sm:mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-l-4 border-l-red-500 bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                      <h4 className="font-semibold text-red-400 text-sm sm:text-base">Challenge</h4>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {project.fullDetails.challenge}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-emerald-500 bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                      <h4 className="font-semibold text-emerald-400 text-sm sm:text-base">Solution</h4>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {project.fullDetails.solution}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-4 sm:mt-6">
                <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Technology Stack</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} className="bg-slate-700/50 text-slate-200 border-slate-600 hover:bg-slate-600/50 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="results" className="mt-4 sm:mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {project.fullDetails.keyResults.map((result, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-3 sm:p-4">
                      <h5 className="font-bold text-white mb-2 text-sm sm:text-base">{result.metric}</h5>
                      <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-xs">
                        {result.improvement}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {project.fullDetails.recognition && (
                <div className="bg-amber-500/10 p-3 sm:p-4 rounded-lg border border-amber-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                    <h4 className="font-semibold text-amber-400 text-sm sm:text-base">Recognition</h4>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm">{project.fullDetails.recognition}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="impact" className="mt-4 sm:mt-6">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-bold text-white">Stakeholder Benefits</h4>
                {project.fullDetails.stakeholders.map((stakeholder, index) => (
                  <div key={index} className="border-l-4 border-l-blue-500 pl-3 sm:pl-4 bg-slate-800/30 p-3 sm:p-4 rounded-r-lg">
                    <p className="text-slate-300 text-xs sm:text-sm font-medium">{stakeholder}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Clear Call to Action */}
          <div className="bg-slate-800/50 p-4 sm:p-6 rounded-xl text-center border border-slate-700">
            <h4 className="text-base sm:text-lg font-bold text-white mb-2">Interested in Similar Solutions?</h4>
            <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">Let's discuss how these approaches can benefit your organization</p>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base"
              onClick={() => setSelectedProject(null)}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </DialogContent>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 text-sm bg-blue-500/20 text-blue-300 border-blue-500/30">
            Portfolio Showcase
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-white">Featured</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="h-0.5 sm:h-1 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Enterprise solutions delivering quantifiable business impact through AI innovation,
            regulatory compliance automation, and blockchain research
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/30 h-full"
              onClick={() => setSelectedProject(project.id)}
            >
              <CardContent className="p-4 sm:p-5 lg:p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14 bg-gradient-to-br ${project.gradient} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {project.icon}
                  </div>
                  <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-400/30 text-xs">
                    Featured
                  </Badge>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                  {project.title}
                </h3>

                <div className="space-y-1 mb-3 text-xs sm:text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{project.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{project.timeline}</span>
                  </div>
                </div>

                <p className="text-slate-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm flex-grow">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="text-center p-2 bg-slate-700/30 rounded-lg">
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-blue-400">{metric.value}</div>
                      <div className="text-xs text-slate-400 leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all text-xs sm:text-sm">
                  View Details
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Summary */}
        <div className="mt-12 sm:mt-16 text-center bg-slate-800/30 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-700/50">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Portfolio Impact Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">99.5%</div>
              <div className="text-slate-300 text-xs sm:text-base">Peak Accuracy Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1 sm:mb-2">96%</div>
              <div className="text-slate-300 text-xs sm:text-base">Processing Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">15+</div>
              <div className="text-slate-300 text-xs sm:text-base">Jurisdictions Covered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">3</div>
              <div className="text-slate-300 text-xs sm:text-base">Industry Innovations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <ProjectModal project={projects.find(p => p.id === selectedProject)!} />
        )}
      </Dialog>
    </section>
  );
}