import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
          Hey! I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Your Name
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: '400ms' }}>
          A Full-Stack MERN Developer passionate about building beautiful and functional web applications
        </p>
        <div className="flex gap-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <Button variant="outline" size="lg" className="gap-2">
            <Github size={20} />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Linkedin size={20} />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Mail size={20} />
            Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;