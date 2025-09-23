import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  TrendingUp, 
  Users, 
  Code, 
  Database, 
  Cloud, 
  Shield,
  Zap,
  Target,
  Award,
  Building2,
  Calendar
} from "lucide-react";

export default function ProjectShowcase() {
  const technologies = [
    { name: "MetaGPT", category: "AI Framework" },
    { name: "CrewAI", category: "Multi-Agent" },
    { name: "Java 21", category: "Backend" },
    { name: "Spring Boot", category: "Framework" },
    { name: "AWS", category: "Cloud" },
    { name: "Kubernetes", category: "Container" },
    { name: "MongoDB", category: "Database" },
    { name: "Apache Kafka", category: "Streaming" }
  ];

  const challenges = [
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
  ];

  return (
    <section id="hawk-project" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Project Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
            <Building2 className="w-4 h-4 mr-2" />
            DBS Bank Singapore
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            HAWK AI: Hedge Accounting Transformation
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-6">
            Leading Singapore's largest bank through their first multi-agent financial AI system, 
            revolutionizing hedge accounting with explainable AI that learns and adapts
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              June 2024 - Present
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Technical Lead & AI Solutions Architect
            </div>
          </div>
        </div>

        {/* Project Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Brain className="w-5 h-5" />
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Complex hedge accounting across Fair Value, Cash Flow, and Net Investment hedges 
                with manual calculations prone to errors and "black box" legacy systems
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-600">
                <Zap className="w-5 h-5" />
                The Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Industry-first Multi-Agent AI Architecture using MetaGPT and CrewAI frameworks 
                with explainable AI providing detailed reasoning for every calculation
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600">
                <Target className="w-5 h-5" />
                The Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                99.5% accuracy achievement with 60% cost reduction, processing 1000+ daily 
                transactions while providing complete transparency and audit trails
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Project Information */}
        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="impact">Business Impact</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="technology">Tech Stack</TabsTrigger>
          </TabsList>

          <TabsContent value="architecture" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Multi-Agent AI Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">System Flow</h4>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                      <div className="bg-blue-100 px-3 py-2 rounded">User Request</div>
                      <span>→</span>
                      <div className="bg-green-100 px-3 py-2 rounded">Proxy Agent</div>
                      <span>→</span>
                      <div className="bg-purple-100 px-3 py-2 rounded">Orchestrator Agent</div>
                      <span>→</span>
                      <div className="bg-orange-100 px-3 py-2 rounded">Specialized Agents</div>
                      <span>→</span>
                      <div className="bg-red-100 px-3 py-2 rounded">System Integration</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Agent Responsibilities</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• <strong>Proxy Agent:</strong> User interface and security guardrails</li>
                        <li>• <strong>Orchestrator:</strong> Workflow coordination and decisions</li>
                        <li>• <strong>Allocation Agent:</strong> Resource allocation optimization</li>
                        <li>• <strong>Booking Agent:</strong> Transaction processing</li>
                        <li>• <strong>Posting Agent:</strong> System integration and reporting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Innovations</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Self-learning algorithms that improve with each execution</li>
                        <li>• Explainable AI with detailed reasoning for compliance</li>
                        <li>• Real-time processing of 1000+ concurrent transactions</li>
                        <li>• No-code/low-code approach for team efficiency</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="impact" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                    Before vs After Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                      <span className="font-medium">Accuracy Rate</span>
                      <div className="text-right">
                        <div className="text-red-600">60% → <span className="text-emerald-600 font-bold">99.5%</span></div>
                        <div className="text-xs text-slate-500">+65% improvement</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                      <span className="font-medium">Operational Costs</span>
                      <div className="text-right">
                        <div className="text-emerald-600 font-bold">60% reduction</div>
                        <div className="text-xs text-slate-500">Through automation</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                      <span className="font-medium">Processing Speed</span>
                      <div className="text-right">
                        <div className="text-emerald-600 font-bold">50% faster</div>
                        <div className="text-xs text-slate-500">Execution cycles</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Stakeholder Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-600">Finance Teams</h4>
                      <p className="text-sm text-slate-600">100% transparency in hedge calculations with detailed explanations</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-600">Business Analysts</h4>
                      <p className="text-sm text-slate-600">Real-time optimization suggestions and automated reporting</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-600">Compliance Teams</h4>
                      <p className="text-sm text-slate-600">Detailed audit trails meeting banking regulatory requirements</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-600">Technical Teams</h4>
                      <p className="text-sm text-slate-600">Self-improving system requiring minimal maintenance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      {item.icon}
                      {item.challenge}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{item.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technology" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Technology Stack & Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {technologies.map((tech, index) => (
                    <div key={index} className="text-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="font-semibold text-slate-900">{tech.name}</div>
                      <div className="text-xs text-slate-600">{tech.category}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-blue-900">Integration Systems</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="bg-white p-3 rounded text-center">Murex</div>
                    <div className="bg-white p-3 rounded text-center">OFP</div>
                    <div className="bg-white p-3 rounded text-center">FRDV</div>
                    <div className="bg-white p-3 rounded text-center">GLGEN</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your AI Transformation Project
          </Button>
        </div>
      </div>
    </section>
  );
}