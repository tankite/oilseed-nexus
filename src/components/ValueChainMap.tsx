import { Card } from "@/components/ui/card";
import { ArrowRight, Sprout, Truck, Factory, Store, CheckCircle2 } from "lucide-react";

const chainSteps = [
  {
    icon: Sprout,
    title: "Farm Production",
    description: "AI-guided cultivation with satellite monitoring",
    metrics: ["42.61M tonnes", "2.4M farmers"],
    color: "success"
  },
  {
    icon: Truck,
    title: "Procurement & Logistics",
    description: "Real-time tracking and warehouse optimization",
    metrics: ["8,450 units", "23% loss reduction"],
    color: "warning"
  },
  {
    icon: Factory,
    title: "Processing",
    description: "Quality control and blockchain traceability",
    metrics: ["94% efficiency", "A1 grade output"],
    color: "accent"
  },
  {
    icon: Store,
    title: "Distribution",
    description: "Direct market linkage and demand forecasting",
    metrics: ["27.8M demand", "₹6,200/quintal"],
    color: "secondary"
  },
  {
    icon: CheckCircle2,
    title: "Consumer Market",
    description: "Quality assured edible oil products",
    metrics: ["45% import cut", "Self-sufficiency"],
    color: "primary"
  }
];

const ValueChainMap = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Complete <span className="text-primary">Value Chain</span> Visibility
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end traceability from seed to shelf with blockchain-powered transparency
          </p>
        </div>

        <div className="relative">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between gap-4">
              {chainSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-center flex-1">
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 w-full border-2 hover:border-primary">
                      <div className={`inline-flex p-4 rounded-xl bg-${step.color}/10 mb-4`}>
                        <Icon className={`w-8 h-8 text-${step.color}`} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        {step.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className={`text-sm font-semibold text-${step.color} bg-${step.color}/10 px-3 py-1 rounded-full inline-block mr-2`}
                          >
                            {metric}
                          </div>
                        ))}
                      </div>
                    </Card>
                    {index < chainSteps.length - 1 && (
                      <ArrowRight className="w-8 h-8 text-primary mx-4 flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-4">
            {chainSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index}>
                  <Card className="p-6 border-2">
                    <div className="flex items-start gap-4">
                      <div className={`p-4 rounded-xl bg-${step.color}/10 flex-shrink-0`}>
                        <Icon className={`w-6 h-6 text-${step.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.metrics.map((metric, idx) => (
                            <div
                              key={idx}
                              className={`text-xs font-semibold text-${step.color} bg-${step.color}/10 px-3 py-1 rounded-full`}
                            >
                              {metric}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                  {index < chainSteps.length - 1 && (
                    <div className="flex justify-center my-2">
                      <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueChainMap;
