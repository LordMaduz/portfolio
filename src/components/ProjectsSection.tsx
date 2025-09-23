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
  Plus,
  ExternalLink,
  ArrowRight,
  Globe,
  Settings,
  FileText,
  CheckCircle,
  BarChart3
} from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "hawk",
      title: "HAWK AI: Hedge Accounting Transformation",
      company: "DBS Bank Singapore",
      role: "Technical Lead & AI Solutions Architect",
      timeline: "June 2024 - Present",
      description: "Leading Singapore's largest bank through their first multi-agent financial AI system",
      image: "🏦",
      gradient: "from-blue-500 to-indigo-600",
      metrics: [
        { label: "Accuracy", value: "99.5%", change: "From 60%" },
        { label: "Cost Reduction", value: "60%", change: "Operational" },
        { label: "Daily Transactions", value: "1000+", change: "Concurrent" }
      ],
      technologies: ["Dify", "Multi-Agent Systems", "LangChain", "Python", "AWS", "Docker", "Kubernetes", "MongoDB"],
      featured: true,
      fullDetails: {
        overview: "Architected enterprise-grade multi-agent AI platform revolutionizing hedge accounting operations across banking sector with intelligent automation and predictive analytics capabilities.",
        challenge: "Complex hedge accounting across Fair Value, Cash Flow, and Net Investment hedges with manual calculations prone to errors and 'black box' legacy systems experiencing 40% inefficiency rates.",
        solution: "Industry-first Multi-Agent AI Architecture using Dify and LangChain frameworks with explainable AI providing detailed reasoning for every calculation and seamless integration with legacy banking systems.",
        results: [
          { metric: "Accuracy Rate", before: "60%", after: "99.5%", improvement: "+65% improvement" },
          { metric: "Operational Costs", before: "Baseline", after: "60% reduction", improvement: "Through automation" },
          { metric: "Processing Speed", before: "Manual", after: "50% faster", improvement: "Execution cycles" },
          { metric: "Daily Transactions", before: "Limited", after: "1000+", improvement: "Concurrent processing" },
          { metric: "System Uptime", before: "97.2%", after: "99.8%", improvement: "+2.6% improvement" },
          { metric: "User Satisfaction", before: "72%", after: "94%", improvement: "+22% increase" }
        ],
        architecture: {
          systemFlow: [
            "User Request",
            "Proxy Agent", 
            "Orchestrator Agent",
            "Specialized Agents",
            "System Integration"
          ],
          agentResponsibilities: [
            { agent: "Proxy Agent", role: "User interface and security guardrails" },
            { agent: "Orchestrator", role: "Workflow coordination and decisions" },
            { agent: "Allocation Agent", role: "Resource allocation optimization" },
            { agent: "Booking Agent", role: "Transaction processing" },
            { agent: "Posting Agent", role: "System integration and reporting" }
          ],
          keyInnovations: [
            "Self-learning algorithms that improve with each execution",
            "Explainable AI with detailed reasoning for compliance",
            "Real-time processing of 1000+ concurrent transactions",
            "No-code/low-code approach for team efficiency"
          ]
        },
        challenges: [
          {
            challenge: "Stakeholder Resistance",
            solution: "Conducted technical sessions demonstrating explainable AI capabilities",
            icon: <Users className="w-5 h-5" />
          },
          {
            challenge: "Integration Complexity", 
            solution: "Connected AI agents with legacy banking systems (Murex, OFP)",
            icon: <Database className="w-5 h-5" />
          },
          {
            challenge: "Regulatory Concerns",
            solution: "Built detailed audit trails and reasoning explanations for compliance",
            icon: <Shield className="w-5 h-5" />
          },
          {
            challenge: "Technical Learning Curve",
            solution: "Focused on prompt engineering training rather than complex programming",
            icon: <Code className="w-5 h-5" />
          }
        ],
        stakeholderBenefits: [
          { stakeholder: "Finance Teams", benefit: "100% transparency in hedge calculations with detailed explanations" },
          { stakeholder: "Business Analysts", benefit: "Real-time optimization suggestions and automated reporting" },
          { stakeholder: "Compliance Teams", benefit: "Detailed audit trails meeting banking regulatory requirements" },
          { stakeholder: "Technical Teams", benefit: "Self-improving system requiring minimal maintenance" }
        ]
      }
    },
    {
      id: "globe",
      title: "GloBE/DTT: Global Tax Compliance Platform",
      company: "Enterprise Banking",
      role: "Lead Solutions Architect & Technical Lead",
      timeline: "Q3 2023 - Q4 2024",
      description: "Architected externalized tax calculation engine enabling 96% processing time reduction while ensuring 100% regulatory compliance across €750M+ revenue threshold MNEs",
      image: "🏛️",
      gradient: "from-emerald-500 to-teal-600",
      metrics: [
        { label: "Processing Reduction", value: "96%", change: "Time savings" },
        { label: "Compliance Rate", value: "100%", change: "Regulatory" },
        { label: "Jurisdictions", value: "15+", change: "Coverage" }
      ],
      technologies: ["MVEL", "Reactive Architecture", "Functional Programming", "HFM", "CbCR", "UAMS"],
      featured: true,
      fullDetails: {
        overview: "Architected externalized tax calculation engine enabling 96% processing time reduction while ensuring 100% regulatory compliance across €750M+ revenue threshold MNEs for OECD BEPS 2.0 Pillar Two implementation.",
        challenge: "New OECD regulations mandating 15% global minimum tax by FY2025 with complex, jurisdiction-specific formulas requiring quarterly provisioning from Q1 2025. Legacy systems inadequate for evolving regulatory requirements with need for historical recalculation capabilities for audit compliance.",
        solution: "Designed externalized calculation engine using MVEL scripting framework with semantic versioning, reactive architecture, and custom UI for tax professional template modification enabling business logic independence from system changes.",
        results: [
          { metric: "Processing Time", before: "5 days per jurisdiction", after: "2 hours per jurisdiction", improvement: "96% reduction" },
          { metric: "Accuracy Rate", before: "88% (12% error rate)", after: "99%+ (<1% error rate)", improvement: "+11% accuracy improvement" },
          { metric: "Stakeholder Alignment", before: "6 weeks consensus time", after: "2 weeks consensus time", improvement: "67% faster alignment" },
          { metric: "Quarterly Cycle", before: "3 weeks provisioning", after: "1 week provisioning", improvement: "70% cycle acceleration" },
          { metric: "User Adoption", before: "67% acceptance (Phase 1)", after: "94% acceptance (Phase 2)", improvement: "+40% adoption increase" },
          { metric: "IT Dependency", before: "100% IT-dependent changes", after: "40% IT-dependent changes", improvement: "60% autonomy increase" }
        ],
        architecture: {
          systemFlow: [
            "Tax Logic Input (Excel)",
            "MVEL Template Generation",
            "Versioned Calculation Engine",
            "System Integration (HFM/CbCR/UAMS)",
            "Regulatory Reporting & Compliance"
          ],
          agentResponsibilities: [
            { agent: "MVEL Engine", role: "Externalized calculation logic with semantic versioning" },
            { agent: "Template Manager", role: "Version-controlled tax calculation templates" },
            { agent: "Integration Layer", role: "API-first connectivity with HFM, CbCR, UAMS" },
            { agent: "UI Builder", role: "Custom interface for tax professional modifications" },
            { agent: "Compliance Monitor", role: "Regulatory adherence and audit trails" }
          ],
          keyInnovations: [
            "First enterprise implementation of externalized tax calculation engine in banking sector",
            "Self-service regulatory compliance platform reducing technical dependency",
            "Real-time ETR and top-up tax computation with audit trail preservation",
            "Cross-jurisdictional standardization with local customization capabilities"
          ]
        },
        challenges: [
          {
            challenge: "Multi-jurisdictional Complexity",
            solution: "Coordinated tax calculation variations across 15+ countries with standardized frameworks",
            icon: <Globe className="w-5 h-5" />
          },
          {
            challenge: "Legacy System Integration", 
            solution: "Connected modern calculation engine with established financial systems (HFM, CbCR, UAMS)",
            icon: <Database className="w-5 h-5" />
          },
          {
            challenge: "Regulatory Evolution",
            solution: "Adapted to continuously changing OECD guidance with externalized MVEL architecture",
            icon: <Shield className="w-5 h-5" />
          },
          {
            challenge: "User Technical Gap",
            solution: "Bridged tax professional expertise with technical implementation through custom UI",
            icon: <Users className="w-5 h-5" />
          }
        ],
        stakeholderBenefits: [
          { stakeholder: "Tax Teams (15+ jurisdictions)", benefit: "Self-service template modification reducing IT dependency by 60%" },
          { stakeholder: "Finance & Treasury", benefit: "70% faster quarterly provisioning cycles with 100% accuracy" },
          { stakeholder: "IT Operations", benefit: "Zero-downtime logic updates enabling continuous regulatory adaptation" },
          { stakeholder: "External Consultants (IRAS, KPMG)", benefit: "Historical calculation preservation ensuring audit-ready compliance" }
        ]
      }
    }
  ];

  const ProjectModal = ({ project }: { project: typeof projects[0] }) => (
    <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto">
      <DialogHeader>
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-3xl`}>
            {project.image}
          </div>
          <div>
            <DialogTitle className="text-2xl font-bold text-slate-900">{project.title}</DialogTitle>
            <div className="flex items-center gap-4 text-sm text-slate-700 mt-2">
              <div className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                {project.company}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.timeline}
              </div>
            </div>
          </div>
        </div>
      </DialogHeader>

      {project.featured && project.fullDetails && (
        <div className="space-y-8">
          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.metrics.map((metric, index) => (
              <Card key={index} className="border-l-4 border-l-emerald-500 shadow-sm">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-emerald-600">{metric.value}</div>
                  <div className="text-slate-700 font-medium">{metric.label}</div>
                  <div className="text-sm text-slate-600">{metric.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="impact">Business Impact</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="technology">Tech Stack</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-blue-600">The Challenge</h4>
                    </div>
                    <p className="text-slate-800 text-sm leading-relaxed font-medium">
                      {project.fullDetails.challenge}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-emerald-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-emerald-600" />
                      <h4 className="font-semibold text-emerald-600">The Solution</h4>
                    </div>
                    <p className="text-slate-800 text-sm leading-relaxed font-medium">
                      {project.fullDetails.solution}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-purple-600">The Impact</h4>
                    </div>
                    <p className="text-slate-800 text-sm leading-relaxed font-medium">
                      {project.id === 'hawk' 
                        ? "99.5% accuracy achievement with 60% cost reduction, processing 1000+ daily transactions while providing complete transparency and audit trails."
                        : "96% processing time reduction with 100% regulatory compliance across €750M+ revenue threshold MNEs, achieving readiness 3 months ahead of FY2025 deadline with zero-downtime logic updates."
                      }
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="architecture" className="mt-6">
              <Card className="shadow-sm">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">
                    {project.id === 'hawk' ? 'Multi-Agent AI Architecture' : 'Externalized Tax Calculation Architecture'}
                  </h4>
                  
                  <div className="bg-slate-50 p-8 rounded-lg mb-8 border">
                    <h5 className="text-lg font-bold text-slate-900 mb-6">System Flow</h5>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                      {project.fullDetails.architecture.systemFlow.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <div className={`px-4 py-3 rounded-lg font-semibold text-slate-900 border-2 ${
                            index === 0 ? 'bg-blue-100 border-blue-300' :
                            index === 1 ? 'bg-green-100 border-green-300' :
                            index === 2 ? 'bg-purple-100 border-purple-300' :
                            index === 3 ? 'bg-orange-100 border-orange-300' : 'bg-red-100 border-red-300'
                          }`}>
                            {step}
                          </div>
                          {index < project.fullDetails.architecture.systemFlow.length - 1 && (
                            <ArrowRight className="w-5 h-5 mx-3 text-slate-700" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-lg font-bold text-slate-900 mb-4">
                        {project.id === 'hawk' ? 'Agent Responsibilities' : 'Component Responsibilities'}
                      </h5>
                      <ul className="space-y-3 text-slate-800">
                        {project.fullDetails.architecture.agentResponsibilities.map((item, index) => (
                          <li key={index} className="text-sm leading-relaxed">
                            • <strong className="text-slate-900">{item.agent}:</strong> {item.role}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-slate-900 mb-4">Key Innovations</h5>
                      <ul className="space-y-3 text-slate-800">
                        {project.fullDetails.architecture.keyInnovations.map((innovation, index) => (
                          <li key={index} className="text-sm leading-relaxed">• {innovation}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="impact" className="mt-6">
              <div className="space-y-8">
                {/* Measurable Impact Dashboard */}
                <Card className="shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp className="w-6 h-6 text-emerald-500" />
                      <h4 className="text-xl font-bold text-slate-900">Measurable Impact Dashboard</h4>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100">
                            <th className="text-left p-4 font-bold text-slate-900 border-b-2 border-slate-300">Metric</th>
                            <th className="text-left p-4 font-bold text-slate-900 border-b-2 border-slate-300">Before</th>
                            <th className="text-left p-4 font-bold text-slate-900 border-b-2 border-slate-300">After</th>
                            <th className="text-left p-4 font-bold text-slate-900 border-b-2 border-slate-300">Improvement</th>
                          </tr>
                        </thead>
                        <tbody>
                          {project.fullDetails.results.map((result, index) => (
                            <tr key={index} className="border-b border-slate-200 hover:bg-slate-50">
                              <td className="p-4 font-semibold text-slate-900 text-sm">{result.metric}</td>
                              <td className="p-4 text-slate-700 font-medium text-sm">{result.before}</td>
                              <td className="p-4 text-slate-900 font-bold text-sm">{result.after}</td>
                              <td className="p-4">
                                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 font-semibold">
                                  {result.improvement}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Stakeholder Benefits */}
                <Card className="shadow-sm">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold text-slate-900 mb-6">Stakeholder Benefits</h4>
                    <div className="space-y-6">
                      {project.fullDetails.stakeholderBenefits.map((benefit, index) => (
                        <div key={index} className="border-l-4 border-l-blue-500 pl-6">
                          <h5 className="font-bold text-blue-700 text-base">{benefit.stakeholder}</h5>
                          <p className="text-slate-800 font-medium text-sm leading-relaxed mt-2">{benefit.benefit}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.fullDetails.challenges.map((item, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {item.icon}
                        <h4 className="font-semibold text-slate-900">{item.challenge}</h4>
                      </div>
                      <p className="text-slate-800 text-sm font-medium leading-relaxed">{item.solution}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technology" className="mt-6">
              <Card className="shadow-sm">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">Technology Stack & Integration</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="text-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border">
                        <div className="font-semibold text-slate-900 text-sm">{tech}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h5 className="font-bold mb-4 text-blue-900">Integration Systems</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      {project.id === 'hawk' ? (
                        <>
                          <div className="bg-white p-3 rounded text-center font-semibold text-slate-900 border">Murex</div>
                          <div className="bg-white p-3 rounded text-center font-semibold text-slate-900 border">OFP</div>
                          <div className="bg-white p-3 rounded text-center font-semibold text-slate-900 border">FRDV</div>
                          <div className="bg-white p-3 rounded text-center font-semibold text-slate-900 border">GLGEN</div>
                        </>
                      ) : (
                        <>
                          <div className="bg-white p-3 rounded text-center font-semibold text-slate-900 border">HFM</div>
                          <div className="bg-white p-3 rounded text-center font-semibold text-slate-900 border">CbCR</div>
                          <div className="bg-white p-3 rounded text-center font-semibold text-slate-900 border">UAMS</div>
                          <div className="bg-white p-3 rounded text-center font-semibold text-slate-900 border">IRAS Portal</div>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </DialogContent>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-0">
            Portfolio Showcase
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transforming enterprise operations through intelligent systems that deliver 
            quantifiable business results and measurable impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              onClick={() => project.featured ? setSelectedProject(project.id) : null}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {project.image}
                  </div>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm">{project.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.timeline}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {project.featured && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-indigo-600">{metric.value}</div>
                        <div className="text-xs text-slate-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white group-hover:shadow-lg transition-all">
                  View Project Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
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