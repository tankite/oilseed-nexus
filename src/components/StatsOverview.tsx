import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Package, DollarSign, Sprout, TrendingDown } from "lucide-react";

const stats = [
  {
    title: "Current Production",
    value: "42.61M",
    unit: "Tonnes",
    trend: "+54.9%",
    icon: Sprout,
    color: "success",
    description: "Since 2014-15"
  },
  {
    title: "Active Farmers",
    value: "2.4M+",
    unit: "Registered",
    trend: "+12.3%",
    icon: Users,
    color: "primary",
    description: "On platform"
  },
  {
    title: "Processing Units",
    value: "8,450",
    unit: "Active",
    trend: "+8.7%",
    icon: Package,
    color: "accent",
    description: "Nationwide"
  },
  {
    title: "Import Dependency",
    value: "55%",
    unit: "Current",
    trend: "-5.2%",
    icon: TrendingDown,
    color: "warning",
    description: "Target: 30% by 2030"
  },
  {
    title: "Market Value",
    value: "₹27.8M",
    unit: "Tonnes",
    trend: "+9.1%",
    icon: DollarSign,
    color: "secondary",
    description: "Domestic demand"
  },
  {
    title: "Efficiency Gain",
    value: "23%",
    unit: "Improved",
    trend: "+15.4%",
    icon: TrendingUp,
    color: "success",
    description: "Post-harvest losses reduced"
  },
];

const StatsOverview = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real-Time Value Chain <span className="text-primary">Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Live data and insights powering informed decisions across the oilseed ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${stat.color}/10`}>
                    <Icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    stat.trend.startsWith('+') ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                  }`}>
                    {stat.trend}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    {stat.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.unit}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;
