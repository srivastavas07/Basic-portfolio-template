import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "https://placehold.co/600x400",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with authentication",
    image: "https://placehold.co/600x400",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    demo: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    image: "https://placehold.co/600x400",
    tags: ["React", "D3.js", "Node.js"],
    github: "#",
    demo: "#"
  },
  {
    title: "Blog Platform",
    description: "Full-featured blog platform with CMS",
    image: "https://placehold.co/600x400",
    tags: ["React", "MongoDB", "Express", "Node.js"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;