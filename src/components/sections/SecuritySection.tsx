import { Shield, Lock, Cloud, Database } from "lucide-react";

export const SecuritySection = () => {
  const features = [
    {
      icon: Shield,
      title: "NDA-Backed Confidentiality",
      description: "Your intellectual property is protected with legally binding agreements",
    },
    {
      icon: Lock,
      title: "Secure Cloud Architecture",
      description: "Enterprise-grade security protocols and encrypted data transmission",
    },
    {
      icon: Cloud,
      title: "GDPR-Ready Workflow",
      description: "Compliant with international data protection regulations",
    },
    {
      icon: Database,
      title: "Regular Backups & Version Control",
      description: "Automated backups and comprehensive version history",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Security & <span className="gradient-text">Trust</span>
            </h2>
          </div>
          <p className="text-2xl text-muted-foreground font-semibold">
            Your Data. Our Priority.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-2xl hover-glow group flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
