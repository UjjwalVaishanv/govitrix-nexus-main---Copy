import { Target, Compass, Heart, Lightbulb, Zap } from "lucide-react";

export const VisionSection = () => {
  const values = [
    { icon: Heart, title: "Integrity", description: "Honest and transparent in everything we do" },
    { icon: Lightbulb, title: "Curiosity", description: "Always learning, always improving" },
    { icon: Target, title: "Precision", description: "Excellence in every detail" },
    { icon: Zap, title: "Innovation", description: "Pushing boundaries of what's possible" },
    { icon: Compass, title: "Impact", description: "Creating meaningful change" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass-panel p-8 rounded-2xl hover-glow">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To engineer intelligent, human-centered digital systems that power the world 
                of tomorrow. We envision a future where technology seamlessly enhances human 
                potential and creates unprecedented opportunities.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover-glow">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To bridge creativity and technology — turning imagination into innovation. 
                We empower businesses with cutting-edge digital solutions that drive growth, 
                efficiency, and competitive advantage in an ever-evolving digital landscape.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">
              Our Core <span className="gradient-text">Values</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-panel p-6 rounded-xl hover-glow text-center group relative overflow-hidden"
              >
                {/* Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <value.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-xs text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
