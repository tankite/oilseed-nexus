import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  MapPin,
  Phone,
  Mail,
  Sprout,
  Award,
  TrendingUp,
  Settings,
  ChevronRight,
  LogOut,
  Bell,
  Shield,
  HelpCircle,
  FileText,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pb-20 md:pb-8 pt-20 md:pl-20">
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Profile Header */}
        <Card className="p-6 mb-6 shadow-card">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              R
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-1">Rajesh Kumar</h2>
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  <Award className="w-3 h-3 mr-1" />
                  Verified Farmer
                </Badge>
                <Badge className="bg-success/10 text-success border-success/20">
                  Premium Member
                </Badge>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>rajesh.kumar@email.com</span>
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 shadow-sm">
            <Settings className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="p-4 text-center shadow-card">
            <Sprout className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">12</p>
            <p className="text-xs text-muted-foreground">Acres Farmed</p>
          </Card>
          <Card className="p-4 text-center shadow-card">
            <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">₹2.4L</p>
            <p className="text-xs text-muted-foreground">Total Earnings</p>
          </Card>
          <Card className="p-4 text-center shadow-card">
            <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">4.8</p>
            <p className="text-xs text-muted-foreground">Seller Rating</p>
          </Card>
        </div>

        {/* My Activity */}
        <Card className="mb-6 shadow-card">
          <div className="p-4 border-b">
            <h3 className="font-bold text-foreground">My Activity</h3>
          </div>
          <div className="divide-y">
            {[
              { icon: Sprout, label: "My Crops", value: "8 Active", color: "text-success" },
              { icon: FileText, label: "My Orders", value: "23 Completed", color: "text-info" },
              { icon: TrendingUp, label: "Sales History", value: "View All", color: "text-primary" },
              { icon: Award, label: "Achievements", value: "5 Badges", color: "text-secondary" },
            ].map((item, index) => (
              <button
                key={index}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{item.value}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Settings */}
        <Card className="mb-6 shadow-card">
          <div className="p-4 border-b">
            <h3 className="font-bold text-foreground">Settings & Support</h3>
          </div>
          <div className="divide-y">
            {[
              { icon: Bell, label: "Notifications", color: "text-warning" },
              { icon: Shield, label: "Privacy & Security", color: "text-info" },
              { icon: HelpCircle, label: "Help & Support", color: "text-primary" },
              { icon: FileText, label: "Terms & Conditions", color: "text-muted-foreground" },
            ].map((item, index) => (
              <button
                key={index}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </Card>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full text-destructive border-destructive/30 hover:bg-destructive/10 shadow-card"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>

        {/* Version */}
        <p className="text-center text-sm text-muted-foreground mt-4">Version 1.2.3</p>
      </div>
    </div>
  );
};

export default Profile;
