import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { initEmailJS, sendEmail as sendEmailWithEmailJS } from "@/lib/emailjs";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageCircle,
  CheckCircle,
  XCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS once on mount
  // Safe to call multiple times; underlying SDK guards it
  // Ensures PUBLIC KEY is registered before send
  useEffect(() => {
    try { initEmailJS(); } catch {}
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
      try {
        const result = await sendEmailWithEmailJS(formData);
        if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you within 24 hours!",
          action: (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ),
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        } else {
        toast({
          title: "Failed to Send Message",
          description: result.message || "Please try again or contact me directly via email.",
          action: (
            <XCircle className="w-4 h-4 text-red-500" />
          ),
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact me directly.",
        action: (
          <XCircle className="w-4 h-4 text-red-500" />
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bharathwaj2912005@gmail.com",
      href: "mailto:bharathwaj2912005@gmail.com",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-6382405793",
      href: "tel:+916382405793",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Thakkolam, Tamil Nadu",
      href: "#",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/thebharathwaj",
      href: "https://linkedin.com/in/thebharathwaj",
      gradient: "bg-gradient-hero"
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-gradient-hero">Get In Touch</span>
          </h2>
          <p className="section-subtitle">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-card border-border/50 hover-lift transition-smooth">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-primary glow-primary">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gradient-primary">
                  Let's Connect
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always open to discussing new opportunities, innovative projects, 
                or just having a chat about technology. Feel free to reach out through 
                any of the channels below.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-smooth hover-scale group focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className={`p-2 rounded-lg ${info.gradient} glow-primary`}>
                      <info.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-smooth">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
            
            {/* Social Links */}
            <Card className="p-6 bg-gradient-card border-border/50 hover-lift transition-smooth">
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/thebharathwaj"
                  className="p-3 rounded-lg bg-gradient-primary hover:glow-primary transition-smooth hover-scale"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://github.com/AJ-coder-st"
                  className="p-3 rounded-lg bg-gradient-secondary hover:glow-secondary transition-smooth hover-scale"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="mailto:bharathwaj2912005@gmail.com"
                  className="p-3 rounded-lg bg-gradient-accent hover:glow-accent transition-smooth hover-scale"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-border/50 hover-lift transition-smooth">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-hero glow-primary">
                <Send className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gradient-hero">
                Send Message
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted/20 border-border/50 focus:border-primary transition-smooth"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted/20 border-border/50 focus:border-primary transition-smooth"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-muted/20 border-border/50 focus:border-primary transition-smooth resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="gradient" 
                size="lg"
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:animate-pulse" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;