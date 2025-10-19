import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  Brain,
  Cloud,
  Droplets,
  ThermometerSun,
  Wind,
  Download,
} from "lucide-react";

const Insights = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pb-20 md:pb-8 pt-20 md:pl-20">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">AI Insights</h2>
              <p className="text-muted-foreground">Data-driven recommendations for your farm</p>
            </div>
            <Button variant="outline" size="sm" className="shadow-card">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* AI Summary Card */}
        <Card className="mb-6 p-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20 shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-foreground">Weekly AI Summary</h3>
                <Badge className="bg-success/10 text-success border-success/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Optimal
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                Your farm performance is 23% above regional average. AI analysis shows optimal
                growth conditions for the next 7 days. Continue current irrigation schedule.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Updated 2 hours ago</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Weather & Crop Health */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card className="p-5 shadow-card">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Cloud className="w-5 h-5 text-info" />
              7-Day Weather Forecast
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <ThermometerSun className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium text-foreground">Temperature</p>
                    <p className="text-sm text-muted-foreground">Range</p>
                  </div>
                </div>
                <span className="font-bold text-foreground">28-32°C</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-info" />
                  <div>
                    <p className="font-medium text-foreground">Rainfall</p>
                    <p className="text-sm text-muted-foreground">Expected</p>
                  </div>
                </div>
                <span className="font-bold text-foreground">35-45mm</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Wind className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Wind Speed</p>
                    <p className="text-sm text-muted-foreground">Average</p>
                  </div>
                </div>
                <span className="font-bold text-foreground">12-18 km/h</span>
              </div>
            </div>
          </Card>

          <Card className="p-5 shadow-card">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              Crop Health Index
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Overall Health</span>
                  <span className="font-bold text-success">8.2/10</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-success to-success/70 h-3 rounded-full transition-all" style={{ width: "82%" }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Growth Rate</span>
                  <span className="font-bold text-success">+23%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all" style={{ width: "73%" }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Water Efficiency</span>
                  <span className="font-bold text-info">89%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-info to-info/70 h-3 rounded-full transition-all" style={{ width: "89%" }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Pest Risk</span>
                  <span className="font-bold text-warning">Medium</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-warning to-warning/70 h-3 rounded-full transition-all" style={{ width: "45%" }} />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Market Trends */}
        <Card className="p-5 shadow-card mb-6">
          <h3 className="font-bold text-foreground mb-4">Market Price Trends</h3>
          <div className="space-y-3">
            {[
              { crop: "Mustard Seeds", price: "6,200", change: "+8.3%", trend: "up" },
              { crop: "Groundnut", price: "5,800", change: "+5.1%", trend: "up" },
              { crop: "Sunflower Seeds", price: "7,100", change: "-2.4%", trend: "down" },
              { crop: "Sesame Seeds", price: "12,500", change: "+12.7%", trend: "up" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">{item.crop}</p>
                  <p className="text-sm text-muted-foreground">Per quintal</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-foreground">₹{item.price}</p>
                  <div
                    className={`flex items-center gap-1 text-sm font-semibold ${
                      item.trend === "up" ? "text-success" : "text-destructive"
                    }`}
                  >
                    {item.trend === "up" ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{item.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recommendations */}
        <Card className="p-5 shadow-card">
          <h3 className="font-bold text-foreground mb-4">AI Recommendations</h3>
          <div className="space-y-3">
            <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-success" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Harvest Window Optimal</p>
                  <p className="text-sm text-muted-foreground">
                    Weather conditions perfect for next 3 days. Recommended harvest time: Early morning.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-warning/5 border border-warning/20 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-4 h-4 text-warning" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Irrigation Adjustment Needed</p>
                  <p className="text-sm text-muted-foreground">
                    Reduce irrigation by 20% due to expected rainfall. Save water and costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Price Alert: Sell Opportunity</p>
                  <p className="text-sm text-muted-foreground">
                    Mustard prices at seasonal high. Good time to sell at ₹6,200/quintal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Insights;
