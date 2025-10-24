import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface ExpertiseCategory {
  id: string;
  number: string;
  title: string;
  technologies: string[];
  story: string;
  impact: string;
}

export default function SkillsSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [selectedMobileItem, setSelectedMobileItem] = useState<string | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedMobileItem) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      // Scroll modal to top when opened
      window.scrollTo(0, 0);
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMobileItem]);

  const toggleItem = (id: string) => {
    if (id === 'all') {
      setOpenItem(openItem === 'all' ? null : 'all');
    } else {
      setOpenItem(openItem === id ? null : id);
    }
  };

  const expertiseCategories: ExpertiseCategory[] = [
    {
      id: "backend",
      number: "01",
      title: "Backend Engineering & Microservices",
      technologies: ["Java 21", "Spring Boot", "Spring Framework", "Go", "Node.js"],
      story: "I build backend systems that handle millions of requests. My approach is simple where I design APIs that feel intuitive to developers while being robust enough for enterprise scale. Every endpoint I create is crafted thinking about the developer experience first, clear contracts, predictable behavior, and responses that make sense. Because when backend systems just work, everyone's day gets better.",
      impact: "Users get instant responses. Developers get APIs they actually enjoy working with. Operations teams sleep peacefully at night."
    },
    {
      id: "distributed",
      number: "02",
      title: "Distributed Systems & Event-Driven Architecture",
      technologies: ["Microservices", "Event-Driven Design", "CQRS", "Domain-Driven Design"],
      story: "I architect systems where services communicate like a well-orchestrated conversation, not shouting at each other, but listening, responding, and staying in sync. When one service processes data, others react in real-time without polling or waiting. This isn't just about technical elegance; it's about building systems that scale naturally and degrade gracefully when things go wrong.",
      impact: "Real-time experiences without the complexity. Systems that grow with your business, not against it."
    },
    {
      id: "kafka",
      number: "03",
      title: "Event Streaming & Real-Time Data",
      technologies: ["Apache Kafka", "Kafka Streams", "CloudEvents", "AWS Kinesis", "Reactor Kafka"],
      story: "I design event streams that ensure users never wait for something that can happen in the background. When a customer places an order, they get instant confirmation, not because of magic, but because of well-architected event pipelines that prioritize user experience over system complexity. Every event tells a story, and I make sure that story reaches the right audience at the right time.",
      impact: "Instant user feedback. Zero data loss. Systems that feel responsive even under heavy load."
    },
    {
      id: "reactive",
      number: "04",
      title: "Reactive Programming & High-Performance Systems",
      technologies: ["Project Reactor", "Spring WebFlux", "Non-blocking I/O", "Backpressure Handling"],
      story: "I write code that doesn't waste time waiting. While traditional systems sit idle waiting for databases or external APIs, reactive systems I build keep working, handling thousands of concurrent users without spinning up thousands of threads. It's about respecting server resources while delivering blazing-fast responses to users. Every millisecond saved is a better user experience delivered.",
      impact: "Sub-20ms response times. Servers that handle 10x more load with the same resources. Smooth experiences even during traffic spikes."
    },
    {
      id: "cloud",
      number: "05",
      title: "Cloud-Native Architecture & Infrastructure",
      technologies: ["AWS (EC2, S3, Lambda, ECS, EKS)", "Kubernetes", "Docker", "OpenShift", "Terraform"],
      story: "I build applications that were born for the cloud not retrofitted into it. Auto-scaling when traffic surges, self-healing when things fail, and costing pennies when idle. My infrastructure code is as important as application code, because reliability and cost-efficiency shouldn't be afterthoughts. I design systems that operations teams can deploy with confidence and finance teams can approve without hesitation.",
      impact: "20% lower infrastructure costs. Zero-downtime deployments. Systems that scale automatically when you need them."
    },
    {
      id: "database",
      number: "06",
      title: "Data Architecture & Caching Strategies",
      technologies: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "DynamoDB"],
      story: "I choose databases like a chef choosing ingredients, each one serving a specific purpose. PostgreSQL for transactional integrity, Redis for lightning-fast caching, MongoDB for flexible schemas, Elasticsearch for powerful search. But it's not just about picking the right database; it's about designing data flows where users get instant results while maintaining consistency behind the scenes. Smart caching means users see their changes immediately, even if the full save happens later.",
      impact: "35% faster API responses. 40% reduced database load. Users see instant updates without compromise on data integrity."
    },
    {
      id: "api",
      number: "07",
      title: "API Design & Integration",
      technologies: ["RESTful APIs", "GraphQL", "gRPC", "OpenAPI 3.0", "Apache Camel", "WebSockets"],
      story: "I design APIs that feel like conversations, not contracts. Whether it's REST for simplicity, GraphQL for flexibility, or gRPC for performance, I choose the right protocol for the right job. Every endpoint is documented, every error message is helpful, and every response is structured in a way that makes frontend developers smile. Integration shouldn't be painful, it should be predictable and pleasant.",
      impact: "Developers integrate in hours, not days. Clear documentation means fewer support tickets. APIs that evolve without breaking existing clients."
    },
    {
      id: "security",
      number: "08",
      title: "Security & Access Control",
      technologies: ["Zero-Trust Architecture", "ABAC (Cedar, OPA)", "OAuth 2.0", "RBAC", "APISIX Gateway"],
      story: "I build security into systems from day one, not as an afterthought. Zero-trust means never assuming anyone or anything is safe by default. Attribute-based access control means users can do exactly what they need, nothing more, nothing less. And when something goes wrong, audit trails tell us exactly what happened. Security doesn't have to be a user experience nightmare; it should be invisible to legitimate users and impenetrable to bad actors.",
      impact: "99.9% uptime with zero security breaches. Users stay secure without friction. Compliance teams get audit trails that actually make sense."
    },
    {
      id: "observability",
      number: "09",
      title: "Observability & Performance Monitoring",
      technologies: ["OpenTelemetry", "Grafana", "Prometheus", "Distributed Tracing", "APM Tools"],
      story: "I build systems that tell me when something's wrong before users notice. Distributed tracing means I can follow a single request across dozens of services and pinpoint exactly where the slowdown happened. Metrics and dashboards aren't just pretty graphs, they're early warning systems that help teams fix issues in minutes instead of hours. When production incidents happen, my monitoring setup tells us exactly what, where, and why.",
      impact: "80% faster incident detection. 75% faster resolution times. Problems fixed before customers complain."
    }
  ];

  const selectedCategory = expertiseCategories.find(cat => cat.id === selectedMobileItem);

  return (
    <section id="skills" className="bg-black text-white py-10 sm:py-12 relative overflow-hidden">

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">



        {/* Large Section Title */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-[3px] bg-lime-400"></div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">WHAT I CAN DO</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0">
            <div className="flex-1">
              <blockquote className="text-sm sm:text-base lg:text-xl font-light text-gray-400 leading-relaxed">
                Technology is just a tool. What matters is how you wield it, not to show off technical prowess, but to solve real problems and make people's lives better.
              </blockquote>
            </div>

            {/* Expand/Collapse All Button - Desktop Only */}
            <button
              onClick={() => toggleItem('all')}
              className="hidden lg:flex border border-gray-800 hover:border-lime-400 px-6 py-3 text-sm font-semibold transition-colors group flex-shrink-0"
            >
              <span className="text-gray-400 group-hover:text-lime-400">
                {openItem === 'all' ? 'Collapse All' : 'Expand All'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Only: Condensed Summary Cards */}
        <div className="lg:hidden mb-5">
          <div className="space-y-3">
            {expertiseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedMobileItem(category.id)}
                className="w-full text-left bg-gray-950/30 border border-gray-900  p-4 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white group-hover:text-lime-400 transition-colors mb-2">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {category.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 border border-gray-800 text-gray-400 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {category.technologies.length > 3 && (
                        <span className="px-2 py-0.5 text-gray-600 text-xs">
                          +{category.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                  </div>
                  <div className="flex-shrink-0 w-8 h-8 border border-gray-800 group-hover:border-lime-400 flex items-center justify-center">
                    <span className="text-gray-500 group-hover:text-lime-400 text-lg">→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Modal for Details */}
        {selectedMobileItem && selectedCategory && (
          <div className="lg:hidden fixed inset-0 bg-black/95 z-50 overflow-y-auto pt-safe">
            <div className="min-h-screen p-4 pt-10 pb-8 sm:pt-8">
              <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex items-start justify-between mb-6 pt-2">
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {selectedCategory.number}
                    </span>
                    <h2 className="text-xl font-bold text-white mt-2">
                      {selectedCategory.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedMobileItem(null)}
                    className="w-10 h-10 border border-gray-800 hover:border-lime-400 flex items-center justify-center flex-shrink-0 ml-4"
                  >
                    <span className="text-gray-400 hover:text-lime-400 text-2xl leading-none">×</span>
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategory.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 border border-gray-800 text-gray-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Story */}
                  <div>
                    <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">
                      How I Use It
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {selectedCategory.story}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="border-l-2 border-lime-400 pl-4 py-3 bg-gray-900/30">
                    <h3 className="text-xs text-lime-400 uppercase tracking-wider mb-2 font-semibold">
                      Real Impact
                    </h3>
                    <p className="text-sm text-gray-300">
                      {selectedCategory.impact}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedMobileItem(null)}
                  className="w-full mt-8 bg-lime-400 hover:bg-lime-500 text-black px-6 py-4 text-sm font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop: Full Accordion View (Always Visible) */}
        <div className="hidden lg:block mb-30">
          <div className="space-y-0">
            {expertiseCategories.map((category) => (
              <div
                key={category.id}
                className="border-t border-gray-900 group"
              >
                <button
                  onClick={() => toggleItem(category.id)}
                  className="w-full py-8 flex items-start justify-between text-left hover:bg-gray-950/50 transition-colors px-4 -mx-4"
                >
                  <div className="flex items-start gap-6 flex-1">
                    <span className="text-lg text-gray-400 font-medium min-w-[2.5rem] pt-1">
                      {category.number}.
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-lime-400 transition-colors mb-2">
                        {category.title}
                      </h3>
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {category.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 border border-gray-800 text-gray-300 text-sm hover:border-lime-400 hover:text-lime-400 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          openItem === category.id || openItem === 'all'
                            ? 'max-h-[800px] opacity-100 mt-6'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="space-y-6 pr-8">
                          <div>
                            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3 font-semibold">How I Use It</h4>
                            <p className="text-base text-gray-300 leading-relaxed">
                              {category.story}
                            </p>
                          </div>
                          <div className="border-l-2 border-lime-400 pl-4 py-2 bg-gray-900/30">
                            <h4 className="text-xs text-lime-400 uppercase tracking-wider mb-2">Real Impact</h4>
                            <p className="text-sm text-gray-300">
                              {category.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`w-10 h-10 border flex items-center justify-center flex-shrink-0 transition-all ${
                    openItem === category.id || openItem === 'all'
                      ? 'border-lime-400 bg-lime-400'
                      : 'border-gray-800 hover:border-lime-400'
                  }`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-all ${
                        openItem === category.id || openItem === 'all'
                          ? 'rotate-180 text-black'
                          : 'text-gray-500 group-hover:text-lime-400'
                      }`}
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-900 mt-0"></div>
        </div>

      </div>
    </section>
  );
}