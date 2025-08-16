import { Button } from '@/components/ui/button';
import { Clock, Users, Star, TrendingUp, Brain, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BentoCourses = () => {
  const navigate = useNavigate();

  return (
    <section id="courses" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive courses designed for modern digital marketers
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {/* Course 1 - Large Block */}
          <div className="col-span-1 md:col-span-2 bento-card-large bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-sm font-medium text-accent-foreground">FOUNDATION</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Digital Marketing Mastery
                </h3>
                <p className="text-muted-foreground mb-6">
                  Complete foundation course covering all aspects of digital marketing from SEO to social media advertising.
                </p>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Search Engine Optimization',
                    'Google Ads & Facebook Ads',
                    'Content Marketing Strategy',
                    'Analytics & Reporting'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold gradient-text">₹18,000</span>
                  <span className="text-sm text-muted-foreground">+ GST</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    6 Weeks
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    20 Students Max
                  </div>
                </div>
                <Button 
                  className="w-full btn-hero"
                  onClick={() => navigate('/course/digital-marketing-mastery')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Course 2 - Large Block */}
          <div className="col-span-1 md:col-span-2 bento-card-large bg-gradient-to-br from-secondary/10 to-accent/10">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <span className="text-sm font-medium text-secondary-foreground">ADVANCED</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Digital Marketing + AI
                </h3>
                <p className="text-muted-foreground mb-6">
                  Advanced course integrating AI tools and automation for next-generation marketing strategies.
                </p>
                
                <div className="space-y-3 mb-6">
                  {[
                    'AI Content Generation',
                    'Marketing Automation',
                    'Advanced Analytics',
                    'Performance Optimization'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold gradient-text">₹24,000</span>
                  <span className="text-sm text-muted-foreground">+ GST</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    8 Weeks
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    15 Students Max
                  </div>
                </div>
                <Button 
                  className="w-full btn-hero"
                  onClick={() => navigate('/course/digital-marketing-ai')}
                >
                  Explore Advanced
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Block */}
          <div className="bento-card-small flex flex-col justify-center items-center text-center">
            <TrendingUp className="w-8 h-8 text-accent mb-3" />
            <div className="text-3xl font-bold gradient-text mb-1">85%</div>
            <div className="text-sm text-muted-foreground">Placement Rate</div>
            <div className="text-xs text-muted-foreground mt-2">Average salary increase of 40%</div>
          </div>

          {/* Schedule Block */}
          <div className="bento-card-small">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-semibold">Flexible Schedule</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Weekdays</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Available</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Weekends</span>
                <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded">Popular</span>
              </div>
            </div>
          </div>

          {/* Features Block */}
          <div className="bento-card-small">
            <h4 className="font-semibold mb-3">What's Included</h4>
            <div className="space-y-2">
              {['Live Classes', 'Recordings', 'Certificates', 'Job Support'].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Block */}
          <div className="bento-card-small bg-gradient-to-br from-accent/10 to-primary/10">
            <h4 className="font-semibold mb-3">Need Guidance?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Talk to our course advisors for personalized recommendations.
            </p>
            <Button className="w-full btn-secondary text-sm">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoCourses;