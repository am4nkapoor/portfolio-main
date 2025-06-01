const stats = [
  {
    number: "25+",
    label: "Years of Experience",
    description: "Delivering excellence in IT services",
  },
  {
    number: "400+",
    label: "Tech Experts",
    description: "Skilled professionals worldwide",
  },
  {
    number: "1500+",
    label: "Happy Clients",
    description: "Across various industries",
  },
  {
    number: "3500+",
    label: "Projects Delivered",
    description: "Successfully completed projects",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We take pride in our achievements and the trust our clients place in us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-white/10 backdrop-blur-lg"
            >
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <p className="text-blue-100">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 