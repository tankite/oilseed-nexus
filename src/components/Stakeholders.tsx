import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2, Factory, Store, ArrowRight } from "lucide-react";

const stakeholders = [
  {
    title: "Farmers",
    icon: Users,
    description: "AI-powered advisories for crop planning, weather alerts, and pest management",
    features: [
      "Real-time market prices",
      "Crop planning assistance",
      "Direct market access",
      "Weather & pest alerts"
    ],
    color: "primary",
    bgGradient: "from-primary/10 to-primary/5"
  },
  {
    title: "FPOs",
    icon: Building2,
    description: "Collective bargaining power and streamlined procurement management",
    features: [
      "Member management",
      "Bulk procurement tools",
      "Quality certification",
      "Logistics coordination"
    ],
    color: "secondary",
    bgGradient: "from-secondary/10 to-secondary/5"
  },
  {
    title: "Processors",
    icon: Factory,
    description: "Real-time visibility into supply chain and processing infrastructure",
    features: [
      "Raw material sourcing",
      "Capacity management",
      "Quality tracking",
      "Blockchain traceability"
    ],
    color: "accent",
    bgGradient: "from-accent/10 to-accent/5"
  },
  {
    title: "Retailers",
    icon: Store,
    description: "Demand forecasting and direct farmer-to-market linkages",
    features: [
      "Inventory management",
      "Demand forecasting",
      "Supply chain visibility",
      "Quality assurance"
    ],
    color: "success",
    bgGradient: "from-success/10 to-success/5"
  }
];

const Stakeholders = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Empowering All <span className="text-primary">Stakeholders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamless coordination and value creation across the entire oilseed ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;
            return (
              <Card
                key={index}
                className={`p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${stakeholder.bgGradient} border-2 hover:border-${stakeholder.color}`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-${stakeholder.color}/10 mb-6`}>
                  <Icon className={`w-8 h-8 text-${stakeholder.color}`} />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {stakeholder.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {stakeholder.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {stakeholder.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${stakeholder.color}`} />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className={`w-full border-${stakeholder.color} text-${stakeholder.color} hover:bg-${stakeholder.color}/10`}
                >
                  Access Portal
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
