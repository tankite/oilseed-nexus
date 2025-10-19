import Hero from "@/components/Hero";
import StatsOverview from "@/components/StatsOverview";
import Stakeholders from "@/components/Stakeholders";
import AIAdvisory from "@/components/AIAdvisory";
import ValueChainMap from "@/components/ValueChainMap";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <StatsOverview />
      <Stakeholders />
      <AIAdvisory />
      <ValueChainMap />
      <Features />
      <Footer />
    </main>
  );
};

export default Index;
