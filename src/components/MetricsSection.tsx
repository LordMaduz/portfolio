import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, DollarSign, Users, Clock, Shield } from "lucide-react";
import { useEffect, useState } from "react";

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  color: string;
  animatedValue?: number;
}

function MetricCard({ icon, title, value, subtitle, color, animatedValue }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animatedValue) {
      const duration = 2000;
      const steps = 60;
      const increment = animatedValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= animatedValue) {
          setDisplayValue(animatedValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [animatedValue]);

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg ${color}`}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-700 text-sm">{title}</h3>
            <p className="text-2xl font-bold text-slate-900">
              {animatedValue ? `${displayValue}%` : value}
            </p>
            <p className="text-sm text-slate-600">{subtitle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function MetricsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Measurable AI Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transforming enterprise operations through intelligent systems that deliver 
            quantifiable business results at Singapore's largest financial institution
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <MetricCard
            icon={<Target className="w-6 h-6 text-white" />}
            title="Accuracy Improvement"
            value="99.5%"
            subtitle="From 60% to 99.5% in 90 days"
            color="bg-emerald-500"
            animatedValue={99.5}
          />
          
          <MetricCard
            icon={<DollarSign className="w-6 h-6 text-white" />}
            title="Cost Reduction"
            value="60%"
            subtitle="Operational cost savings"
            color="bg-blue-500"
            animatedValue={60}
          />
          
          <MetricCard
            icon={<TrendingUp className="w-6 h-6 text-white" />}
            title="Processing Speed"
            value="50%"
            subtitle="Faster execution cycles"
            color="bg-indigo-500"
            animatedValue={50}
          />
          
          <MetricCard
            icon={<Users className="w-6 h-6 text-white" />}
            title="Team Productivity"
            value="70%"
            subtitle="Automation of manual processes"
            color="bg-purple-500"
            animatedValue={70}
          />
          
          <MetricCard
            icon={<Clock className="w-6 h-6 text-white" />}
            title="Daily Transactions"
            value="1000+"
            subtitle="Concurrent processing capacity"
            color="bg-orange-500"
          />
          
          <MetricCard
            icon={<Shield className="w-6 h-6 text-white" />}
            title="System Reliability"
            value="90%"
            subtitle="Microservices uptime"
            color="bg-teal-500"
            animatedValue={90}
          />
        </div>

        {/* Key Achievement Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Leading DBS Bank's First Multi-Agent Financial AI System
          </h3>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Revolutionized hedge accounting through AI agents that learn, adapt, and optimize financial calculations - 
            the first enterprise implementation of MetaGPT in the banking sector
          </p>
        </div>
      </div>
    </section>
  );
}