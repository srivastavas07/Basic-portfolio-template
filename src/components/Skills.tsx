import { Database, Server, Code, Globe } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: Server,
    technologies: ["Node.js", "Express.js", "REST APIs", "GraphQL"]
  },
  {
    category: "Database",
    icon: Database,
    technologies: ["MongoDB", "Mongoose", "SQL", "Redis"]
  },
  {
    category: "Tools & Others",
    icon: Code,
    technologies: ["Git", "Docker", "AWS", "TypeScript", "Jest"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <h2 className="section-heading">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="glass-card p-6 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="text-muted-foreground">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;