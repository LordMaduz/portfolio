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
       id: "hedge-accounting",
       title: "Corporate Banking Hedge Accounting Platform",
       company: "DBS Bank Singapore",
       role: "Technical Lead",
       timeline: "June 2024 - Present",
       teamSize: "Cross-functional team across 5+ departments",
       description: "Built enterprise scale hedge accounting platform processing 1M+ daily transactions with reactive microservices, supporting fair value, cash flow, and net investment hedges for corporate banking clients.",
       icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
       gradient: "from-blue-500 to-indigo-600",
       metrics: [
         { label: "Daily Transactions", value: "1M+", change: "12K req/sec" },
         { label: "Response Time", value: "20ms", change: "Low latency" },
         { label: "System Uptime", value: "99.9%", change: "High availability" }
       ],
       technologies: ["Java 21", "Spring Boot", "Kafka", "CloudEvents", "Project Reactor", "Redis", "PostgreSQL", "Kubernetes"],
       featured: true,
       impact: "Processed 1M+ daily hedge accounting transactions (12K requests per second) with 20ms latency and 99.9% uptime, enabling real-time hedge effectiveness testing and valuation for corporate banking clients.",
       fullDetails: {
         overview: "Architected and implemented large-scale hedge accounting platform for corporate banking, enabling real-time processing of fair value hedges (interest rate risk), cash flow hedges (FX risk), and net investment hedges (foreign subsidiaries) with event-driven reactive microservices architecture.",
         challenge: "Legacy batch-processing systems couldn't handle real-time hedge accounting requirements for corporate clients, causing delays in hedge effectiveness testing and valuation. System needed to process 1M+ daily transactions with sub-20ms latency while maintaining data consistency across multiple hedge types and accounting standards (IFRS 9, FAS 133).",
         solution: "Built event-driven hedge accounting platform using Kafka and CloudEvents for real-time financial event streaming. Implemented reactive microservices with Project Reactor for non-blocking transaction handling. Designed distributed Redis caching for high-speed hedge valuation calculations and query performance across multiple hedge relationships.",
         keyResults: [
           { metric: "Transaction Volume", improvement: "1M+ daily transactions at 12K requests/second" },
           { metric: "Processing Speed", improvement: "Sub-20ms latency for hedge valuations" },
           { metric: "System Reliability", improvement: "99.9% uptime for critical banking operations" },
           { metric: "Operational Efficiency", improvement: "Real-time hedge effectiveness testing vs daily batch" }
         ],
         stakeholders: [
           "Corporate Clients: Real-time hedge accounting for interest rate, FX, and equity risks",
           "Treasury Teams: Immediate hedge effectiveness testing and rebalancing decisions",
           "Risk & Compliance: Reduced codebase issues by 30% through comprehensive testing standards"
         ],
         recognition: "Led technical architecture sessions elevating engineering standards across 15+ microservices"
       }
     },
     {
       id: "notification-platform",
       title: "Dynamic Multi-Channel Notification Orchestration Platform",
       company: "DBS Bank Singapore",
       role: "Technical Lead",
       timeline: "June 2024 - Present",
       teamSize: "Platform engineering team",
       description: "Designed enterprise notification orchestration platform with dynamic channel integration (Email, Teams, Mobile, Webhooks), reducing cross-department coordination time from 48 hours to 4 hours (92%).",
       icon: <Network className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
       gradient: "from-purple-500 to-pink-600",
       metrics: [
         { label: "Coordination Time", value: "92%", change: "Reduced" },
         { label: "Channels", value: "Multi", change: "Email/Teams/App" },
         { label: "Response Time", value: "50%", change: "Improved" }
       ],
       technologies: ["Java 21", "Spring Boot", "Apache Camel", "Kafka", "CloudEvents", "REST APIs", "Webhooks", "Kubernetes"],
       featured: true,
       impact: "Reduced cross-department coordination time by 92% (48 hours to 4 hours) and improved operational responsiveness by 50% through dynamic multi-channel notification platform supporting Email, Teams, Mobile, and custom Webhooks.",
       fullDetails: {
         overview: "Built standalone enterprise notification orchestration platform enabling dynamic channel integration and configurable workflow-based alerts, supporting Email, Microsoft Teams, mobile app notifications, and custom webhooks for real-time business process automation.",
         challenge: "Disparate notification systems across departments created communication silos and coordination delays. Each team built custom notification implementations, making it difficult to implement timely workflow updates, approval alerts, and cross-functional collaboration. Manual coordination took 48 hours for critical business processes.",
         solution: "Designed centralized notification orchestration platform with dynamic channel plugins supporting Email, Teams, mobile push, and custom webhooks. Built configurable workflow triggers enabling business users to define notification rules without code changes. Implemented event-driven architecture using Kafka and CloudEvents for reliable message delivery across channels.",
         keyResults: [
           { metric: "Coordination Efficiency", improvement: "48 hours → 4 hours (92% reduction)" },
           { metric: "Channel Integration", improvement: "Multi-channel support (Email, Teams, App, Webhooks)" },
           { metric: "Operational Response", improvement: "50% faster response to workflow updates" },
           { metric: "Configuration", improvement: "Self-service workflow trigger configuration" }
         ],
         stakeholders: [
           "Platform Teams: Centralized notification infrastructure reducing maintenance overhead",
           "Business Users: Self-service configuration for workflow-based notifications",
           "Operations: 92% faster cross-department coordination through real-time alerts"
         ],
         recognition: "Standalone platform enabling real-time workflow automation across business units"
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
       id: "derivative-trading",
       title: "Derivative Trading File Processing & Settlement System",
       company: "DBS Bank Singapore",
       role: "Senior Application Developer",
       timeline: "September 2022 - April 2024",
       teamSize: "Trade operations team",
       description: "Engineered reactive file processing system handling 50,000+ monthly trade files from Bloomberg and market data sources, achieving 60% faster processing and 20% cost reduction for derivative trading operations.",
       icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
       gradient: "from-cyan-500 to-blue-600",
       metrics: [
         { label: "Monthly Files", value: "50K+", change: "Processed" },
         { label: "Processing Speed", value: "60%", change: "Faster" },
         { label: "Cost Reduction", value: "20%", change: "Infrastructure" }
       ],
       technologies: ["Java 17", "Spring WebFlux", "AWS SDK v2", "AWS S3", "Project Reactor", "OpenShift", "Docker"],
       featured: true,
       impact: "Achieved 60% faster trade file processing and 20% infrastructure cost reduction while handling 50,000+ monthly files for 1,000+ daily trading users, supporting derivative trading operations and market data integration.",
       fullDetails: {
         overview: "Developed high-performance file processing system for derivative trading operations, enabling efficient ingestion of trade data and market data from Bloomberg and external sources for trade settlement, risk management, and compliance reporting.",
         challenge: "Traditional blocking I/O for trade file processing caused bottlenecks during market volatility periods when file volumes spike. Legacy systems struggled with large trade confirmation files (100MB+) from Bloomberg and market data feeds, causing delays in settlement and risk reporting for trading desk operations.",
         solution: "Migrated to reactive AWS SDK v2 with Spring WebFlux for non-blocking file operations. Implemented asynchronous parallel uploads/downloads using AWS Transfer Manager. Built efficient streaming for large trade files with minimal memory footprint, enabling real-time processing of Bloomberg feeds and trade confirmations.",
         keyResults: [
           { metric: "Processing Speed", improvement: "60% faster file uploads/downloads for trade data" },
           { metric: "User Base", improvement: "1,000+ daily trading users supported" },
           { metric: "File Volume", improvement: "50,000+ trade files processed monthly" },
           { metric: "Cost Efficiency", improvement: "20% reduction in infrastructure costs" }
         ],
         stakeholders: [
           "Trade Teams: 60% faster processing of Bloomberg feeds and trade confirmations",
           "Risk Management: Real-time trade data for position monitoring and risk calculations",
           "IT Infrastructure: 20% cost savings through optimized resource utilization"
         ],
         recognition: "Production system deployed supporting critical derivative trading operations"
       }
     },
     {
       id: "food-ordering",
       title: "High-Volume Food Order Management & Inventory System",
       company: "GrubTech Sri Lanka",
       role: "Senior Software Engineer",
       timeline: "April 2022 - September 2022",
       teamSize: "Platform engineering team",
       description: "Built scalable multi-brand food order processing system handling 500,000+ daily orders with real-time inventory management, reducing database load by 40% and API response times by 35%.",
       icon: <Code className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
       gradient: "from-orange-500 to-red-600",
       metrics: [
         { label: "Daily Orders", value: "500K+", change: "Processed" },
         { label: "Database Load", value: "40%", change: "Reduced" },
         { label: "Response Time", value: "35%", change: "Faster" }
       ],
       technologies: ["Java 11", "Spring Boot", "Redis", "Redisson", "MongoDB", "Confluent Kafka", "AWS", "Docker"],
       featured: true,
       impact: "Processed 500,000+ daily food orders with 40% reduced database load and 35% faster API response times, enabling instant order confirmation and real-time inventory synchronization across multiple restaurant brands.",
       fullDetails: {
         overview: "Engineered high-performance order processing system for multi-brand food delivery platform, handling real-time order placement, inventory management, and order tracking for multiple restaurant brands simultaneously with write-behind caching architecture.",
         challenge: "High-volume order placement during peak hours (lunch/dinner) overwhelmed database systems, causing slow order confirmations and inventory sync delays. Platform needed to handle 500K+ daily orders across multiple restaurant brands with instant response times while maintaining accurate real-time inventory to prevent overselling.",
         solution: "Implemented write-behind caching architecture using Redis with Redisson for instant order confirmation with delayed database persistence. Built reactive processing pipeline for non-blocking order handling. Designed automatic inventory synchronization with conflict resolution for multi-brand operations across thousands of menu items.",
         keyResults: [
           { metric: "Order Volume", improvement: "500,000+ daily orders processed seamlessly" },
           { metric: "Database Efficiency", improvement: "40% reduction in database write load" },
           { metric: "API Performance", improvement: "35% faster order confirmation response" },
           { metric: "Inventory Accuracy", improvement: "Real-time sync preventing overselling across brands" }
         ],
         stakeholders: [
           "Customers: Instant order confirmation improving user experience during peak hours",
           "Restaurant Partners: Real-time inventory management preventing overselling and order cancellations",
           "Platform Operations: 40% lower database costs through efficient caching strategy"
         ],
         recognition: "Production system processing millions of orders monthly across multiple restaurant brands"
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
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">1M+</div>
              <div className="text-slate-300 text-xs sm:text-base">Transactions Processed Daily</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1 sm:mb-2">500K+</div>
              <div className="text-slate-300 text-xs sm:text-base">Orders Handled Daily</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">92%</div>
              <div className="text-slate-300 text-xs sm:text-base">Faster Coordination</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">5</div>
              <div className="text-slate-300 text-xs sm:text-base">Enterprise Systems Built</div>
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