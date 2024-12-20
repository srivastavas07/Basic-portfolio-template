import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 py-16 flex flex-col items-center text-center">
        <div className="mb-8 animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
          <span className="text-primary text-lg font-semibold">👋 Welcome to my portfolio</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: '400ms' }}>
          Hi, I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Your Name
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: '600ms' }}>
          A passionate Full-Stack MERN Developer crafting beautiful and functional web experiences
        </p>
        <div className="flex gap-4 animate-fade-up opacity-0" style={{ animationDelay: '800ms' }}>
          <Button variant="outline" size="lg" className="gap-2 hover:bg-primary hover:text-white transition-colors">
            <Github className="w-5 h-5" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="gap-2 hover:bg-primary hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="gap-2 hover:bg-primary hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;