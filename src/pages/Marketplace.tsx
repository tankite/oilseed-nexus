import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Star, MapPin, ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Premium Mustard Seeds",
    variety: "RH-749",
    price: "6,200",
    unit: "quintal",
    seller: "Krishna FPO",
    location: "Rajasthan",
    rating: 4.8,
    stock: "High",
    trending: true,
  },
  {
    name: "Organic Groundnut",
    variety: "GG-20",
    price: "5,800",
    unit: "quintal",
    seller: "Annapurna Farmers",
    location: "Gujarat",
    rating: 4.6,
    stock: "Medium",
    trending: false,
  },
  {
    name: "Sunflower Seeds",
    variety: "KBSH-44",
    price: "7,100",
    unit: "quintal",
    seller: "Green Valley Co-op",
    location: "Karnataka",
    rating: 4.9,
    stock: "High",
    trending: true,
  },
  {
    name: "Sesame Seeds (White)",
    variety: "GT-10",
    price: "12,500",
    unit: "quintal",
    seller: "Bharat Seed Co.",
    location: "Maharashtra",
    rating: 4.7,
    stock: "Low",
    trending: false,
  },
];

const categories = [
  { name: "All", active: true },
  { name: "Mustard", active: false },
  { name: "Groundnut", active: false },
  { name: "Sunflower", active: false },
  { name: "Sesame", active: false },
];

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pb-20 md:pb-8 pt-20 md:pl-20">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Marketplace</h2>
          <p className="text-muted-foreground">Buy quality oilseeds directly from farmers</p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search for seeds, varieties, farmers..."
            className="pl-10 h-12 bg-card shadow-card"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className={`whitespace-nowrap ${
                category.active
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-card shadow-card hover:bg-muted"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Price Alert Banner */}
        <Card className="mb-6 p-4 bg-gradient-to-r from-success/10 to-success/5 border-success/30 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Price Alert Active</h3>
              <p className="text-sm text-muted-foreground">
                Mustard prices increased 8% this week - Great time to sell!
              </p>
            </div>
          </div>
        </Card>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <Card
              key={index}
              className="p-5 hover:shadow-lg transition-all shadow-card"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground">{product.name}</h3>
                    {product.trending && (
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Hot
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">Variety: {product.variety}</p>
                </div>
                <div className="flex items-center gap-1 text-warning">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-semibold text-foreground">
                    {product.rating}
                  </span>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-3 mb-3">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                  <span className="text-sm text-muted-foreground">/{product.unit}</span>
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    product.stock === "High"
                      ? "border-success text-success"
                      : product.stock === "Medium"
                      ? "border-warning text-warning"
                      : "border-destructive text-destructive"
                  }`}
                >
                  {product.stock} Stock
                </Badge>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{product.seller}</p>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs">{product.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-primary hover:bg-primary/90 shadow-sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Now
                </Button>
                <Button variant="outline" size="icon" className="shadow-sm">
                  <Star className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="shadow-card">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
