import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 animate-fade-up">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full gap-2">
                <Send size={16} />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;