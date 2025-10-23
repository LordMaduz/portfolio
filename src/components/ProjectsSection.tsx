import { useState } from "react";
import {
  X,
  ArrowRight,
  Calendar,
  Building2,
  Users,
  Database,
  Network,
  Globe,
  TrendingUp,
  Code
} from "lucide-react";
import dbs from '../assets/dbs.png';
import grubtech from '../assets/grubtech.png';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");

  const projects = [
    {
      id: "hedge-accounting",
      title: "Corporate Banking Hedge Accounting Platform",
      company: "DBS Bank Singapore",
      role: "Technical Lead",
      timeline: "June 2024 - Present",
      teamSize: "Cross-functional team across 5+ departments",
      description: "Built enterprise scale hedge accounting platform processing 1M+ daily transactions with reactive microservices, supporting fair value, cash flow, and net investment hedges for corporate banking clients.",
      icon: <Database className="w-6 h-6" />,
      metrics: [
        { label: "Daily Transactions", value: "1M+", change: "12K req/sec" },
        { label: "Response Time", value: "20ms", change: "Low latency" },
        { label: "System Uptime", value: "99.9%", change: "High availability" }
      ],
      technologies: ["Java 21", "Spring Boot", "Kafka", "CloudEvents", "Project Reactor", "Redis", "PostgreSQL", "Kubernetes"],
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
      icon: <Network className="w-6 h-6" />,
      metrics: [
        { label: "Coordination Time", value: "92%", change: "Reduced" },
        { label: "Channels", value: "Multi", change: "Email/Teams/App" },
        { label: "Response Time", value: "50%", change: "Improved" }
      ],
      technologies: ["Java 21", "Spring Boot", "Apache Camel", "Kafka", "CloudEvents", "REST APIs", "Webhooks", "Kubernetes"],
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
      icon: <Globe className="w-6 h-6" />,
      metrics: [
        { label: "Processing Reduction", value: "96%", change: "Reduction" },
        { label: "Compliance Rate", value: "100%", change: "OECD Standards" },
        { label: "Jurisdictions", value: "15+", change: "Coverage" }
      ],
      technologies: ["MVEL", "Java", "Spring Boot", "HFM", "MongoDB", "Docker"],
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
      icon: <TrendingUp className="w-6 h-6" />,
      metrics: [
        { label: "Monthly Files", value: "50K+", change: "Processed" },
        { label: "Processing Speed", value: "60%", change: "Faster" },
        { label: "Cost Reduction", value: "20%", change: "Infrastructure" }
      ],
      technologies: ["Java 17", "Spring WebFlux", "AWS SDK v2", "AWS S3", "Project Reactor", "OpenShift", "Docker"],
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
      icon: <Code className="w-6 h-6" />,
      metrics: [
        { label: "Daily Orders", value: "500K+", change: "Processed" },
        { label: "Database Load", value: "40%", change: "Reduced" },
        { label: "Response Time", value: "35%", change: "Faster" }
      ],
      technologies: ["Java 11", "Spring Boot", "Redis", "Redisson", "MongoDB", "Confluent Kafka", "AWS", "Docker"],
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

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
     <section className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

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

       <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Label */}
        <div className="mb-20">
          <span className="text-xs sm:text-sm tracking-[0.3em] text-gray-500 uppercase font-light">
            03. Projects
          </span>
          <div className="w-12 h-[1px] bg-lime-400 mt-2"></div>
        </div>

        {/* Large Section Title */}
        <div className="mb-20">
           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="text-white">RECENT</span>
            <br />
            <span className="text-gray-700">WORK</span>
          </h2>
        </div>

        {/* Projects List - Jony Style */}
        <div className="space-y-0">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project.id);
                setActiveTab("overview");
              }}
              className="border-t border-gray-800 hover:border-lime-400 transition-all cursor-pointer group"
            >
              <div className="flex items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm group-hover:text-white">{project.company}</p>
                </div>
                <div className={`w-96 h-48 bg-gradient-to-br rounded-lg flex items-center justify-center`}>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800"></div>

        {/* Portfolio Impact Summary */}
        <div className="mt-24 pt-12 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-8">Portfolio Impact</h3>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-400">Transactions Daily</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">500K+</div>
              <div className="text-gray-400">Orders Daily</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">92%</div>
              <div className="text-gray-400">Faster Coordination</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">5</div>
              <div className="text-gray-400">Enterprise Systems</div>
            </div>
          </div>
        </div>
      </div>

      {/* Original Modal Structure with Minimalist Colors */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6">
          <div className="bg-black border border-gray-800 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="border-b border-gray-800 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex items-center justify-center flex-shrink-0"/>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedProjectData.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{selectedProjectData.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedProjectData.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{selectedProjectData.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 border border-gray-800 hover:border-lime-400 flex items-center justify-center transition-colors group flex-shrink-0"
                >
                  <X className="w-5 h-5 text-white group-hover:text-lime-400" />
                </button>
              </div>

              {/* Key Impact */}
              <div className="bg-gray-900 border border-gray-800 p-6 mt-4">
                <h4 className="text-sm font-bold text-lime-400 mb-2">KEY IMPACT</h4>
                <p className="text-white">{selectedProjectData.impact}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="p-6">
              <div className="border-b border-gray-800 mb-6">
                <div className="flex gap-2">
                  {['overview', 'results', 'impact'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                        activeTab === tab
                          ? 'text-lime-400 border-lime-400'
                          : 'text-gray-400 hover:text-white border-transparent'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Challenge */}
                     <div className="bg-gray-900 border border-gray-800 p-4">
                      <h4 className="font-semibold text-white mb-3">CHALLENGE</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedProjectData.fullDetails.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="bg-gray-900 border border-gray-800 p-4">
                      <h4 className="font-semibold text-white mb-3">SOLUTION</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedProjectData.fullDetails.solution}
                      </p>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 border border-gray-800 text-gray-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProjectData.fullDetails.keyResults.map((result, index) => (
                      <div key={index} className="bg-gray-900 border border-gray-800 p-4">
                        <h5 className="font-bold text-white mb-2">{result.metric}</h5>
                        <div className="text-gray-300 text-sm">
                          {result.improvement}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recognition */}
                  {selectedProjectData.fullDetails.recognition && (
                    <div className="bg-gray-900 border border-gray-800 p-6">
                      <h4 className="font-semibold text-white mb-3">RECOGNITION</h4>
                      <p className="text-gray-300">{selectedProjectData.fullDetails.recognition}</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white mb-4">Stakeholder Benefits</h4>
                  {selectedProjectData.fullDetails.stakeholders.map((stakeholder, index) => (
                    <div key={index} className="bg-gray-900 border border-gray-800 p-4">
                      <p className="text-gray-300">{stakeholder}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}