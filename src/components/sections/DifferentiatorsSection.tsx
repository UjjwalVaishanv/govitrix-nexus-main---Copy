import { Sparkles, Layers, MessageSquare, Zap, Globe2 } from "lucide-react";

export const DifferentiatorsSection = () => {
  const differentiators = [
    {
      icon: Sparkles,
      title: "Innovation-First Mindset",
      description: "We don't just follow trends — we create them. Every solution is crafted with forward-thinking innovation.",
    },
    {
      icon: Layers,
      title: "Full-Cycle Expertise",
      description: "From ideation to deployment and beyond, we handle every aspect of your digital transformation journey.",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description: "Clear, honest, and consistent updates throughout the entire development process.",
    },
    {
      icon: Globe2,
      title: "Global Standards, Local Understanding",
      description: "World-class quality combined with deep understanding of local markets and cultures.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-2xl hover-glow group flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
