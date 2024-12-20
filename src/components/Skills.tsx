import { Database, Server, Code, Globe, Braces, Terminal, Git, Cloud } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: Globe,
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend Development",
    icon: Server,
    technologies: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSocket"]
  },
  {
    category: "Database Management",
    icon: Database,
    technologies: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "Firebase"]
  },
  {
    category: "Development Tools",
    icon: Terminal,
    technologies: ["Git", "Docker", "AWS", "CI/CD", "Jest"]
  },
  {
    category: "Programming",
    icon: Braces,
    technologies: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
  },
  {
    category: "Version Control",
    icon: Git,
    technologies: ["Git", "GitHub", "GitLab", "Bitbucket"]
  },
  {
    category: "Cloud Services",
    icon: Cloud,
    technologies: ["AWS", "Google Cloud", "Heroku", "Vercel", "Netlify"]
  },
  {
    category: "Other Skills",
    icon: Code,
    technologies: ["UI/UX Design", "Agile", "Problem Solving", "Team Leadership"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <h2 className="section-heading">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="w-6 h-6 skill-icon" />
                <h3 className="text-lg font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="text-muted-foreground text-sm">
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