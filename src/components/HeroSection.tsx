import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-training.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-20 bg-gradient-to-br from-background to-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - F-Pattern Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Your Career with 
                <span className="gradient-text block">Live Digital Marketing Training</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Master AI-Powered Marketing in 6-8 Weeks with Industry Experts
              </p>
            </div>

            {/* Value Proposition Points */}
            <div className="space-y-3">
              {[
                'Live Interactive Classes',
                'Weekend & Weekday Batches',
                'Industry Certifications Included',
                'AI & Automation Training'
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-lg">{point}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="trust-badge">
                <Users className="w-4 h-4" />
                500+ Students Trained
              </div>
              <div className="trust-badge">
                <Award className="w-4 h-4" />
                85% Placement Rate
              </div>
              <div className="trust-badge">
                <CheckCircle className="w-4 h-4" />
                Industry Certified
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero text-lg px-8 py-4">
                Start Your Journey
              </Button>
              <Button className="btn-secondary text-lg px-8 py-4">
                Book Free Demo Class
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-primary hover-glow">
              <img 
                src={heroImage} 
                alt="Digital marketing training classroom with students"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-soft animate-float">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Next Batch</p>
                  <p className="text-sm text-muted-foreground">Starts Monday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;