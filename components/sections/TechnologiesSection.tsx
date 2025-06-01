import Image from "next/image";

const categories = [
  {
    name: "Frontend",
    technologies: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "HTML/CSS"],
  },
  {
    name: "Backend",
    technologies: ["Node.js", "Python", "Java", ".NET", "PHP", "Ruby"],
  },
  {
    name: "Mobile",
    technologies: ["React Native", "Flutter", "iOS/Swift", "Android/Kotlin", "Ionic"],
  },
  {
    name: "Database",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Oracle", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    name: "Tools & Frameworks",
    technologies: ["Git", "Jenkins", "Jira", "Selenium", "Webpack"],
  },
];

export function TechnologiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technologies We Work With</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage the latest technologies and frameworks to build robust and scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6">{category.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 