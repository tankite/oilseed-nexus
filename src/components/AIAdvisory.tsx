import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cloud, Bug, TrendingUp, Satellite, LineChart } from "lucide-react";

const advisoryCards = [
  {
    title: "Crop Planning Advisory",
    icon: Brain,
    status: "Active",
    statusColor: "success",
    insights: [
      "Optimal sowing window: 15-30 Sept",
      "Recommended: Mustard variety RH-749",
      "Expected yield: 18-22 quintals/hectare"
    ],
    confidence: 94
  },
  {
    title: "Weather Predictions",
    icon: Cloud,
    status: "Alert",
    statusColor: "warning",
    insights: [
      "Moderate rainfall expected next week",
      "Temperature: 28-32°C (Optimal)",
      "Humidity levels favorable for growth"
    ],
    confidence: 87
  },
  {
    title: "Pest Management",
    icon: Bug,
    status: "Warning",
    statusColor: "destructive",
    insights: [
      "Aphid infestation risk: High",
      "Recommended: Spray Imidacloprid",
      "Monitor next 3-5 days closely"
    ],
    confidence: 91
  },
  {
    title: "Price Forecasting",
    icon: TrendingUp,
    status: "Active",
    statusColor: "accent",
    insights: [
      "Expected price: ₹5,800-6,200/quintal",
      "Market demand: Strong",
      "Best selling window: Nov-Dec"
    ],
    confidence: 89
  },
  {
    title: "Satellite Monitoring",
    icon: Satellite,
    status: "Active",
    statusColor: "success",
    insights: [
      "Crop health index: 8.2/10",
      "NDVI reading: Healthy growth",
      "Water stress: Minimal"
    ],
    confidence: 96
  },
  {
    title: "Yield Prediction",
    icon: LineChart,
    status: "Active",
    statusColor: "success",
    insights: [
      "Projected yield: 20.5 quintals/ha",
      "Quality grade: Premium (A1)",
      "Harvest readiness: 45 days"
    ],
    confidence: 92
  }
];

const AIAdvisory = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">AI-Powered Intelligence</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real-Time Agricultural <span className="text-primary">Advisories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ML models analyzing satellite data, weather patterns, and market trends to provide
            actionable insights for farmers and stakeholders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisoryCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 bg-card border-2 hover:border-primary/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{card.title}</h3>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-${card.statusColor} border-${card.statusColor}`}
                  >
                    {card.status}
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  {card.insights.map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{insight}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Confidence</span>
                    <span className="font-semibold text-success">{card.confidence}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div
                      className="bg-success h-2 rounded-full transition-all duration-300"
                      style={{ width: `${card.confidence}%` }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIAdvisory;
