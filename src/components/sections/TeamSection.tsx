export const TeamSection = () => {
  const team = [
    {
      name: "Harshvardhan Rathore",
      role: "Founder & CEO",
      description: "We don’t just build apps — we engineer digital revolutions.",
      gradient: "from-blue-500 to-cyan-500",
      image: "/team/harsh.jpeg",
    },
    {
      name: "Ujjwal Vaishnav",
      role: "Co-Founder & CTO",
      description: "Innovation is not an act, it’s our culture.",
      gradient: "from-purple-500 to-pink-500",
      image: "/team/ujjwal.jpeg",
    },
    {
      name: "Core Team",
      role: "Engineers & Designers",
      description: "Passionate builders and problem solvers",
      gradient: "from-orange-500 to-amber-500",
      image: "/team/team.png",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Visionaries driving innovation forward
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-2xl hover-glow group text-center"
            >
              {/* Avatar */}
              <div className={`w-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_hsl(var(--primary)/0.4)]`}>
		<img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
