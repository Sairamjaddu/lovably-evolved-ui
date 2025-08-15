import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, Download, Calendar, ArrowRight, MapPin, Clock } from 'lucide-react';

const MultiCTAFooter = () => {
  const quickActions = [
    {
      title: "Enroll in Next Batch",
      description: "Secure your seat in our upcoming weekend batch",
      icon: Calendar,
      primary: true,
      urgent: "Only 3 seats left!",
      action: "Enroll Now"
    },
    {
      title: "Download Course Syllabus",
      description: "Detailed curriculum and learning outcomes",
      icon: Download,
      action: "Download PDF"
    },
    {
      title: "Book 1-on-1 Counseling",
      description: "Free career guidance session with our experts",
      icon: MessageCircle,
      action: "Book Session"
    },
    {
      title: "Chat with Course Advisor",
      description: "Get instant answers to your questions",
      icon: Phone,
      action: "Start Chat"
    }
  ];

  const contactMethods = [
    {
      type: "Phone",
      value: "+91-9876543210",
      description: "Mon-Fri 9 AM - 6 PM",
      icon: Phone,
      href: "tel:+919876543210"
    },
    {
      type: "WhatsApp",
      value: "+91-9876543210",
      description: "24/7 Quick Support",
      icon: MessageCircle,
      href: "https://wa.me/919876543210"
    },
    {
      type: "Email",
      value: "hello@skills.do",
      description: "Response within 2 hours",
      icon: Mail,
      href: "mailto:hello@skills.do"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Twitter", href: "#" }
  ];

  return (
    <footer className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-custom">
        {/* Main CTA Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to <span className="gradient-text">Transform Your Career</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join hundreds of successful professionals who started their digital marketing journey with Skills.do
          </p>
          
          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full mb-8">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Next batch starts in 5 days - Limited seats available</span>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <div key={index} className={`bento-card hover-lift text-center ${
                action.primary ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20' : ''
              }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  action.primary ? 'bg-gradient-primary' : 'bg-muted'
                }`}>
                  <IconComponent className={`w-8 h-8 ${
                    action.primary ? 'text-primary-foreground' : 'text-muted-foreground'
                  }`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                
                {action.urgent && (
                  <div className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded-full mb-4 inline-block">
                    {action.urgent}
                  </div>
                )}
                
                <Button className={action.primary ? 'btn-hero w-full' : 'btn-secondary w-full'}>
                  {action.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 animate-fade-in">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="bento-card hover-lift block transition-all duration-300 hover:shadow-primary"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{contact.type}</h4>
                        <p className="text-sm font-medium text-primary mb-1">{contact.value}</p>
                        <p className="text-xs text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Visit Our Center</h3>
            <div className="bento-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Skills.do Training Center</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    123 Tech Hub, Koramangala<br />
                    Bangalore, Karnataka 560034
                  </p>
                  <Button size="sm" className="btn-secondary">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold gradient-text">Skills.do</h1>
              <p className="text-sm text-muted-foreground">
                Transforming careers through digital marketing education
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Skills.do. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MultiCTAFooter;