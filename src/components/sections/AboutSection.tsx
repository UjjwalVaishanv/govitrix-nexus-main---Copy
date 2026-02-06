import { Calendar, Globe, Users, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: "Founded", value: "2025" },
    { icon: Globe, label: "HQ", value: "India" },
    { icon: Users, label: "Global Clients", value: "50+" },
    { icon: TrendingUp, label: "Innovation", value: "100%" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Govitrix</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Govitrix is a next-generation technology company creating innovative web, mobile, AI, 
            and analytics solutions. Founded by visionary engineers with a mission to build 
            human-centered innovation, we bridge the gap between creativity and technology — 
            turning imagination into reality.
          </p>
        </div>
      </div>
    </section>
  );
};
