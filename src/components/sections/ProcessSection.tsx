import { Search, Target, Palette, Code, TestTube, Rocket } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    { icon: Search, title: "Discovery", description: "Understanding your vision and requirements" },
    { icon: Target, title: "Strategy & Planning", description: "Roadmap and architecture design" },
    { icon: Palette, title: "Design & Prototype", description: "User-centric interface design" },
    { icon: Code, title: "Development", description: "Building with cutting-edge technology" },
    { icon: TestTube, title: "Testing & QA", description: "Rigorous quality assurance" },
    { icon: Rocket, title: "Deployment & Support", description: "Launch and ongoing maintenance" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground">Structured. Transparent. Reliable.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative glass-panel p-8 rounded-2xl hover-glow group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-muted/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{step.description}</p>

                {/* Connection Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
