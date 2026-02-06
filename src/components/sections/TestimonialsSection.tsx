import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Founder, TechVenture Inc.",
      location: "San Francisco, USA",
      quote: "Govitrix turned our idea into a flawless digital product. Their attention to detail and innovative approach exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Dr. Klaus Weber",
      role: "CTO, HealthTech Solutions",
      location: "Berlin, Germany",
      quote: "Reliable, futuristic, and professional — exactly what a tech partner should be. The team's expertise in AI and healthcare was invaluable.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Director, E-Commerce Platform",
      location: "Mumbai, India",
      quote: "From conception to deployment, Govitrix delivered beyond our requirements. Their full-cycle expertise made our project a massive success.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by innovative companies worldwide
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-2xl hover-glow group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="absolute -top-2 -right-2 w-20 h-20 text-primary/10 group-hover:text-primary/20 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
