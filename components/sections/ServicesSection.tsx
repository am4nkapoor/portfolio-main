import { Code2, Database, Globe, Laptop, Smartphone, Shield } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description: "Build tailored software solutions that perfectly align with your business needs and goals.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description: "Create powerful mobile applications for iOS and Android platforms.",
    icon: Smartphone,
  },
  {
    title: "Web Development",
    description: "Develop responsive and modern web applications using cutting-edge technologies.",
    icon: Globe,
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to help you make informed decisions for your business.",
    icon: Laptop,
  },
  {
    title: "Database Solutions",
    description: "Design and implement robust database solutions for efficient data management.",
    icon: Database,
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with advanced cybersecurity solutions and best practices.",
    icon: Shield,
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of IT services to help your business grow and succeed in the digital world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 