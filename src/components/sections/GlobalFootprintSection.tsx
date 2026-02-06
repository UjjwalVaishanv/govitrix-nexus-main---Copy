import { Globe } from "lucide-react";

export const GlobalFootprintSection = () => {
  const locations = [
    { name: "India", position: { top: "45%", left: "68%" } },
    { name: "USA", position: { top: "35%", left: "20%" } },
    { name: "UK", position: { top: "30%", left: "48%" } },
    { name: "Canada", position: { top: "28%", left: "22%" } },
    { name: "UAE", position: { top: "48%", left: "60%" } },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Global <span className="gradient-text">Footprint</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Delivering innovation across 10+ time zones
          </p>
        </div>

        <div className="max-w-5xl mx-auto glass-panel p-12 rounded-2xl hover-glow relative">
          {/* Globe Icon Background */}
          <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-primary/5 animate-float" />

          {/* Location Markers */}
          <div className="relative h-80">
            {locations.map((location, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"
                style={location.position}
              >
                <div className="relative group cursor-pointer">
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-75" />
                  {/* Dot */}
                  <div className="relative w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full shadow-[0_0_20px_hsl(var(--primary)/0.6)]" />
                  {/* Label */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-border/50 text-sm font-medium">
                      {location.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Time Zones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
