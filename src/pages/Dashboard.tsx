import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Sprout,
  Package,
  IndianRupee,
  ArrowRight,
  Bell,
  Cloud,
  Bug,
  Sparkles,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pb-20 md:pb-8 pt-20 md:pl-20">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Welcome Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Hello, Rajesh! 👋</h2>
              <p className="text-muted-foreground">Let's grow together today</p>
            </div>
            <Button size="icon" variant="ghost" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-card hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Sprout className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">My Crops</p>
                <p className="text-xl font-bold text-foreground">12 Acres</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 shadow-card hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Yield</p>
                <p className="text-xl font-bold text-foreground">+23%</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 shadow-card hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <IndianRupee className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Earnings</p>
                <p className="text-xl font-bold text-foreground">₹2.4L</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-info/10 to-info/5 border-info/20 shadow-card hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-info/20 flex items-center justify-center">
                <Package className="w-5 h-5 text-info" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Orders</p>
                <p className="text-xl font-bold text-foreground">8 Active</p>
              </div>
            </div>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="mb-6 p-6 bg-gradient-to-br from-primary via-secondary to-accent shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-white">AI Recommendations</h3>
                <Badge className="bg-white/20 text-white border-white/30">Live</Badge>
              </div>
              <p className="text-white/90 mb-4">
                Perfect time to harvest your mustard crop! Weather conditions are optimal for the
                next 3 days. Expected yield: 20.5 quintals/hectare.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90">
                View Details
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Today's Alerts */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">Today's Updates</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
            </Button>
          </div>

          <div className="space-y-3">
            <Card className="p-4 shadow-card hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-5 h-5 text-warning" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">Weather Alert</h4>
                    <span className="text-xs text-muted-foreground">2h ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Moderate rainfall expected tomorrow. Consider covering young seedlings.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 shadow-card hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <Bug className="w-5 h-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">Pest Warning</h4>
                    <span className="text-xs text-muted-foreground">5h ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    High aphid activity detected in your region. Preventive measures recommended.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 shadow-card hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">Price Update</h4>
                    <span className="text-xs text-muted-foreground">1d ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mustard prices up by 8%! Good time to sell at ₹6,200/quintal.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button className="h-auto py-6 flex flex-col gap-2 bg-primary hover:bg-primary/90 shadow-card">
              <Package className="w-6 h-6" />
              <span>Sell Produce</span>
            </Button>
            <Button className="h-auto py-6 flex flex-col gap-2 bg-accent hover:bg-accent/90 shadow-card">
              <IndianRupee className="w-6 h-6" />
              <span>Get Credit</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
