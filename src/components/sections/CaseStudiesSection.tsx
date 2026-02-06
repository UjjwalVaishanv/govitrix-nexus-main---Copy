import { GlowingButton } from "@/components/ui/glowing-button";
import { ArrowRight, TrendingUp } from "lucide-react";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Project Nova",
      subtitle: "AI-Powered Analytics Platform",
      description: "Revolutionary analytics solution that increased retail insights accuracy by 85% using advanced machine learning algorithms.",
      metrics: ["85% Accuracy", "Real-time Processing", "15+ Retailers"],
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "MedFlow",
      subtitle: "Healthcare Patient Portal",
      description: "Comprehensive healthcare app that improved patient access by 60% and reduced administrative overhead by 40%.",
      metrics: ["60% ↑ Access", "10K+ Users", "24/7 Available"],
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "E-Com360",
      subtitle: "Scalable eCommerce Platform",
      description: "Next-generation eCommerce solution scaled to handle 1M+ concurrent users with 99.9% uptime.",
      metrics: ["1M+ Users", "99.9% Uptime", "3x Growth"],
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforming ideas into impactful digital experiences
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="glass-panel p-8 md:p-10 rounded-2xl hover-glow group"
            >
              <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                <div className="flex-1">
                  <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${study.gradient} text-white text-xs font-semibold mb-4`}>
                    Case Study
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                  <p className="text-primary mb-4">{study.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-lg border border-border/50"
                      >
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <GlowingButton variant="ghost" className="group/btn">
                    Read Full Case Study
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </GlowingButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
