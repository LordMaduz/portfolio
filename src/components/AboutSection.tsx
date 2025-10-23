import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AboutSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const expertiseAreas = [
    {
      id: "distributed-systems",
      number: "01",
      title: "Distributed Systems Architecture",
      description: "Engineered event-driven microservices processing 1M+ daily transactions (12K requests per second) with 20ms latency and 99.9% uptime. Expert in Kafka, Redis caching, and reactive programming patterns."
    },
    {
      id: "cloud-native",
      number: "02",
      title: "Cloud-Native Solutions",
      description: "AWS Solutions Architect delivering containerized workloads with Kubernetes and OpenShift. Reduced deployment cycles by 80% and infrastructure costs by 20% through cloud-native architecture and CI/CD automation."
    },
    {
      id: "performance",
      number: "03",
      title: "High-Performance Engineering",
      description: "Optimized system performance achieving sub-20ms response times for high-volume workloads. Specialized in reactive programming with Project Reactor, distributed caching, and real-time data streaming."
    },
    {
      id: "leadership",
      number: "04",
      title: "Technical Leadership & Mentoring",
      description: "Led technical architecture sessions across cross-functional teams, reducing codebase issues by 30%. Mentored engineers on distributed systems best practices, reactive programming, and comprehensive testing strategies."
    },
    {
      id: "security",
      number: "05",
      title: "Security & Compliance",
      description: "Implemented Zero-Trust architecture with ABAC policy engine securing 30+ microservices. Achieved 99% uptime and eliminated configuration-related outages through dynamic configuration management."
    },
    {
      id: "backend",
      number: "06",
      title: "Enterprise Backend Engineering",
      description: "Delivered scalable microservices for global fintech platforms. Reduced cross-department coordination time by 92% through real-time notification systems and workflow automation."
    },
    {
      id: "reactive",
      number: "07",
      title: "Reactive Programming Excellence",
      description: "Engineered reactive microservices using Project Reactor and Spring WebFlux handling thousands of concurrent operations. Implemented backpressure handling and non-blocking I/O for optimal resource utilization."
    },
    {
      id: "event-driven",
      number: "08",
      title: "Event-Driven Architecture",
      description: "Built real-time data processing pipelines using Kafka and CloudEvents, reducing data processing latency from 48 hours to 4 hours. Architected event-driven audit trail systems for cross-service workflow tracking."
    },
    {
      id: "caching",
      number: "09",
      title: "Distributed Caching Strategies",
      description: "Architected Redis write-behind caching solutions reducing database load by 40% and API response times by 35%. Implemented efficient cache invalidation strategies for data consistency across microservices."
    },
    {
      id: "observability",
      number: "10",
      title: "Observability & Monitoring",
      description: "Implemented distributed tracing with OpenTelemetry reducing Mean Time to Detect by 80% and Mean Time to Resolve by 75%. Built comprehensive monitoring solutions with Grafana and Prometheus for production systems."
    }
  ];

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
            01. About Me
          </span>
          <div className="w-12 h-[1px] bg-lime-400 mt-2"></div>
        </div>

        {/* Large Section Title */}
        <div className="mb-20">
           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="text-white">WHO I AM</span>
          </h2>

          {/* Personal Story - 2-3 sentences */}
          <div className="max-w-4xl space-y-6">
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed">
              I'm a passionate engineer who discovered the power of building scalable systems
              while working on my first microservices project. What started as curiosity about
              distributed computing evolved into a career architecting enterprise platforms that
              handle millions of transactions daily.
            </p>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
              Today, I specialize in cloud-native solutions and event-driven architectures,
              helping organizations transform their systems for performance, reliability, and scale.
            </p>
          </div>
        </div>

        {/* Expertise Areas - Jony style collapsible list */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-12">
            My Expertise
          </h3>

          <div className="space-y-0">
            {expertiseAreas.map((item) => (
              <div
                key={item.id}
                className="border-t border-gray-900 group"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-8 flex items-start justify-between text-left hover:bg-gray-950/50 transition-colors px-4 -mx-4"
                >
                  <div className="flex items-start gap-6 flex-1">
                    {/* Number - More visible */}
                    <span className="text-base sm:text-lg text-gray-400 font-medium min-w-[2.5rem] pt-1">
                      {item.number}.
                    </span>

                    {/* Title */}
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-md md:text-xl font-semibold text-white group-hover:text-lime-400 transition-colors">
                        {item.title}
                      </h4>

                      {/* Description - Collapsible */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          openItem === item.id
                            ? 'max-h-96 opacity-100 mt-6'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl pr-8">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Icon - Inside visible box */}
                  <div className={`w-10 h-10 border flex items-center justify-center flex-shrink-0 transition-all ${
                    openItem === item.id
                      ? 'border-lime-400 bg-lime-400'
                      : 'border-gray-800 hover:border-lime-400'
                  }`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-all ${
                        openItem === item.id
                          ? 'rotate-180 text-black'
                          : 'text-gray-500 group-hover:text-lime-400'
                      }`}
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Bottom border */}
          <div className="border-t border-gray-900 mt-0"></div>
        </div>

        {/* My Approach - Clean minimal cards */}
        <div className="mt-32">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12">
            My Approach
          </h3>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="space-y-4">
              <div className="text-5xl font-bold text-gray-900">01</div>
              <h4 className="text-xl font-semibold text-white">
                Performance-Driven
              </h4>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Every solution delivers measurable improvements with quantifiable
                metrics for latency, throughput, and reliability.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-5xl font-bold text-gray-900">02</div>
              <h4 className="text-xl font-semibold text-white">
                Collaborative
              </h4>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Working effectively across teams, mentoring engineers, and
                fostering knowledge sharing for collective growth.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-5xl font-bold text-gray-900">03</div>
              <h4 className="text-xl font-semibold text-white">
                Quality-Focused
              </h4>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Combining best practices with proven design patterns for
                maintainable, scalable, and reliable systems.
              </p>
            </div>

          </div>
        </div>

        {/* Quote Section - Minimal */}
        <div className="mt-32 pt-16 border-t border-gray-900">
          <blockquote className="max-w-4xl">
            <div className="w-12 h-[2px] bg-lime-400 mb-8"></div>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-400 leading-relaxed mb-8">
              Building great software isn't just about code—it's about understanding
              business needs, collaborating across teams, and delivering reliable
              systems at scale.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gray-800"></div>
              <cite className="text-sm text-gray-600 not-italic tracking-wider uppercase">
                Ruchira Rajapaksha
              </cite>
            </div>
          </blockquote>
        </div>

      </div>
    </section>
  );
}