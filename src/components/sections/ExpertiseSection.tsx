import { Code2, Smartphone, Brain, Lightbulb, Palette, Cloud } from "lucide-react";

export const ExpertiseSection = () => {
  const expertise = [
    {
      icon: Code2,
      title: "Web Application Development",
      description: "Scalable, responsive, and performant web applications built with modern frameworks and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence & Data Analytics",
      description: "Intelligent systems powered by machine learning, deep learning, and advanced analytics.",
    },
    {
      icon: Lightbulb,
      title: "Product Strategy & Consulting",
      description: "Strategic guidance to transform your ideas into market-ready digital products.",
    },
    {
      icon: Palette,
      title: "UI/UX & Branding",
      description: "Beautiful, intuitive designs that create memorable brand experiences.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Robust cloud infrastructure and CI/CD pipelines for seamless deployment and scaling.",
    },
  ];

  return (
    <section id="expertise" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions across the entire digital spectrum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-2xl hover-glow group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
