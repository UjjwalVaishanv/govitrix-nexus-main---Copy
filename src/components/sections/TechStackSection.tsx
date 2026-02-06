export const TechStackSection = () => {
  const techStack = {
    Frontend: ["React", "Next.js", "Flutter", "Vue.js", "TypeScript"],
    Backend: ["Node.js", "Python", "Django", "FastAPI", "Express"],
    Database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
    Cloud: ["AWS", "Google Cloud", "Azure", "Vercel", "Heroku"],
    "AI/ML": ["TensorFlow", "OpenAI", "LangChain", "PyTorch", "Hugging Face"],
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powered by modern frameworks and future-ready technology
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <div key={index} className="glass-panel p-6 rounded-xl hover-glow">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="px-4 py-2 bg-muted/30 rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default border border-border/50"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
