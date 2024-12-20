const timelineData = [
  {
    year: "2023",
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    description: "Led development of enterprise applications using MERN stack"
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "StartUp Inc",
    description: "Developed and maintained multiple web applications"
  },
  {
    year: "2021",
    title: "Frontend Developer",
    company: "Web Solutions",
    description: "Specialized in React.js development and UI/UX implementation"
  },
  {
    year: "2020",
    title: "Junior Developer",
    company: "Digital Agency",
    description: "Started career with web development fundamentals"
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20">
      <div className="container px-4">
        <h2 className="section-heading">Professional Journey</h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-primary/20" />
          
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row md:justify-between md:items-center mb-8 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Content */}
              <div className={`glass-card p-6 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-primary font-bold">{item.year}</span>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{item.company}</p>
                <p className="text-sm">{item.description}</p>
              </div>
              
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;