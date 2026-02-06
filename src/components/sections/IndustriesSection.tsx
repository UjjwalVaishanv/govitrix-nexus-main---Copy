import { DollarSign, Heart, ShoppingCart, GraduationCap, Rocket, Building2 } from "lucide-react";

export const IndustriesSection = () => {
  const industries = [
    { icon: DollarSign, title: "Fintech", color: "from-green-500 to-emerald-500" },
    { icon: Heart, title: "Healthcare", color: "from-red-500 to-pink-500" },
    { icon: ShoppingCart, title: "eCommerce", color: "from-orange-500 to-amber-500" },
    { icon: GraduationCap, title: "EdTech", color: "from-blue-500 to-indigo-500" },
    { icon: Rocket, title: "AI Startups", color: "from-purple-500 to-fuchsia-500" },
    { icon: Building2, title: "Enterprise Solutions", color: "from-cyan-500 to-teal-500" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We <span className="gradient-text">Empower</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We deliver tailored digital ecosystems across industries — merging business logic 
            with technology intelligence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl hover-glow text-center group cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-sm">{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
