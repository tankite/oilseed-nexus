import { Card } from "@/components/ui/card";
import {
  Database,
  Link2,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Smartphone,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Agri-Stack Integration",
    description: "Seamless connection with national digital agriculture initiatives and farmer databases"
  },
  {
    icon: Link2,
    title: "Blockchain Traceability",
    description: "Immutable record of produce journey from farm to consumer for complete transparency"
  },
  {
    icon: Shield,
    title: "Credit & Insurance",
    description: "Performance-based financing with integrated lending and crop insurance facilitation"
  },
  {
    icon: Zap,
    title: "Real-Time Monitoring",
    description: "Live tracking of procurement, storage, and processing infrastructure utilization"
  },
  {
    icon: Globe,
    title: "Market Linkages",
    description: "Direct farmer-to-retailer connections eliminating intermediaries and maximizing returns"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "ML-powered demand forecasting and price prediction for strategic planning"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Accessible via smartphones in 12+ languages for rural farmer connectivity"
  },
  {
    icon: Lock,
    title: "Secure & Compliant",
    description: "Government-grade security with full compliance to data protection regulations"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Platform <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on cutting-edge technology to serve India's ambitious oilseed production goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 bg-card border hover:border-primary/50 group"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
