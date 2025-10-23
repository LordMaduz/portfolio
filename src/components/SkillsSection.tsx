import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TechCategory {
  id: string;
  number: string;
  title: string;
  technologies: string[];
}

export default function SkillsSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const techCategories: TechCategory[] = [
    {
      id: "backend",
      number: "01",
      title: "Backend Development",
      technologies: ["Java (JDK 17, 21)", "Spring Framework", "Spring Boot", "Go", "Node.js", "Akka Framework"]
    },
    {
      id: "distributed",
      number: "02",
      title: "Distributed Systems",
      technologies: ["Microservices Architecture", "Event-Driven Architecture", "CQRS", "Serverless", "Cloud-Native Design", "Low-Latency Systems"]
    },
    {
      id: "cloud",
      number: "03",
      title: "Cloud & Infrastructure",
      technologies: ["AWS (EC2, S3, Lambda, ECS, EKS)", "Kubernetes", "Docker", "Red Hat OpenShift", "Terraform"]
    },
    {
      id: "streaming",
      number: "04",
      title: "Event Streaming & Messaging",
      technologies: ["Apache Kafka", "Kafka Streams", "Confluent Kafka", "CloudEvents", "AWS Kinesis", "AWS SQS", "Reactor Kafka"]
    },
    {
      id: "database",
      number: "05",
      title: "Databases & Caching",
      technologies: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "MySQL", "DynamoDB", "MariaDB", "Oracle", "Hibernate"]
    },
    {
      id: "api",
      number: "06",
      title: "API Design & Integration",
      technologies: ["RESTful APIs", "GraphQL", "gRPC", "OpenAPI 3.0", "Apache Camel", "Protocol Buffers", "WebSockets"]
    },
    {
      id: "reactive",
      number: "07",
      title: "Reactive Programming",
      technologies: ["Project Reactor", "Spring WebFlux", "Reactive Kafka", "Akka Framework", "Non-blocking I/O", "Backpressure Handling"]
    },
    {
      id: "security",
      number: "08",
      title: "Security & Access Control",
      technologies: ["Zero-Trust Architecture", "ABAC (Cedar, OPA)", "OAuth 2.0", "RBAC", "APISIX Gateway", "Security Best Practices"]
    },
    {
      id: "observability",
      number: "09",
      title: "Observability & Monitoring",
      technologies: ["OpenTelemetry", "Grafana", "Prometheus", "Distributed Tracing", "System Monitoring", "Performance Optimization"]
    },
    {
      id: "devops",
      number: "10",
      title: "DevOps & CI/CD",
      technologies: ["Jenkins", "CircleCI", "GitLab", "GitHub", "Spring Cloud Config", "Docker", "Agile Methodologies"]
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
            03. Skills
          </span>
          <div className="w-12 h-[1px] bg-lime-400 mt-2"></div>
        </div>

        {/* Large Section Title */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="text-white">TECHNICAL</span>
            <br />
            <span className="text-gray-700">EXPERTISE</span>
          </h2>
        </div>

        {/* Technology Categories - Collapsible List with Logos */}
        <div className="mb-32">
          <div className="space-y-0">
            {techCategories.map((category) => (
              <div
                key={category.id}
                className="border-t border-gray-900 group"
              >
                <button
                  onClick={() => toggleItem(category.id)}
                  className="w-full py-8 flex items-start justify-between text-left hover:bg-gray-950/50 transition-colors px-4 -mx-4"
                >
                  <div className="flex items-start gap-6 flex-1">
                    {/* Number */}
                    <span className="text-base sm:text-lg text-gray-400 font-medium min-w-[2.5rem] pt-1">
                      {category.number}.
                    </span>

                    {/* Title & Content */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-md md:text-xl font-semibold text-white group-hover:text-lime-400 transition-colors mb-2">
                        {category.title}
                      </h3>

                      {/* Technologies - Collapsible */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          openItem === category.id
                            ? 'max-h-96 opacity-100 mt-6'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-3">
                          {category.technologies.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Icon - Inside visible box */}
                  <div className={`w-10 h-10 border flex items-center justify-center flex-shrink-0 transition-all ${
                    openItem === category.id
                      ? 'border-lime-400 bg-lime-400'
                      : 'border-gray-800 hover:border-lime-400'
                  }`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-all ${
                        openItem === category.id
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

      </div>
    </section>
  );
}