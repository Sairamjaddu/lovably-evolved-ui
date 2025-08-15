import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Star, CheckCircle, Award, Play, Download, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseDigitalMarketing = () => {
  const navigate = useNavigate();

  const courseModules = [
    {
      module: 1,
      title: "Digital Marketing Fundamentals",
      topics: ["Marketing Strategy", "Consumer Psychology", "Digital Ecosystem", "KPI Setting"],
      duration: "Week 1"
    },
    {
      module: 2,
      title: "Search Engine Optimization (SEO)",
      topics: ["On-page SEO", "Off-page SEO", "Technical SEO", "Local SEO"],
      duration: "Week 2"
    },
    {
      module: 3,
      title: "Pay-Per-Click Advertising",
      topics: ["Google Ads", "Keyword Research", "Ad Copy Writing", "Campaign Optimization"],
      duration: "Week 3"
    },
    {
      module: 4,
      title: "Social Media Marketing",
      topics: ["Facebook/Instagram Ads", "LinkedIn Marketing", "Social Strategy", "Content Creation"],
      duration: "Week 4"
    },
    {
      module: 5,
      title: "Content Marketing & Email",
      topics: ["Content Strategy", "Email Campaigns", "Lead Nurturing", "Marketing Automation"],
      duration: "Week 5"
    },
    {
      module: 6,
      title: "Analytics & Optimization",
      topics: ["Google Analytics", "Conversion Tracking", "A/B Testing", "ROI Analysis"],
      duration: "Week 6"
    }
  ];

  const keyFeatures = [
    "Live Interactive Sessions",
    "Real Campaign Projects",
    "Industry Certifications",
    "Job Placement Support",
    "1-on-1 Mentoring",
    "Lifetime Access to Resources"
  ];

  const tools = [
    "Google Analytics", "Google Ads", "Facebook Business Manager", "SEMrush", 
    "Mailchimp", "Canva", "Hootsuite", "WordPress"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            <h1 className="text-xl font-bold gradient-text">Skills.do</h1>
            <Button className="btn-hero">
              Enroll Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Course Hero */}
      <section className="pt-20 section-padding bg-gradient-to-br from-background to-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="text-sm font-medium text-accent-foreground">FOUNDATION COURSE</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Digital Marketing <span className="gradient-text">Mastery</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Complete foundation course covering all aspects of digital marketing from SEO to social media advertising. Perfect for beginners and career switchers.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>6 Weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Max 20 Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>

              <div className="space-y-3">
                {keyFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero text-lg px-8 py-4">
                  Enroll for ₹18,000 + GST
                </Button>
                <Button className="btn-secondary text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bento-card-large bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Course Highlights</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">500+</div>
                      <div className="text-sm text-muted-foreground">Students Trained</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">85%</div>
                      <div className="text-sm text-muted-foreground">Placement Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">15+</div>
                      <div className="text-sm text-muted-foreground">Tools Covered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">3</div>
                      <div className="text-sm text-muted-foreground">Certifications</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Next Batch Starts</span>
                      <span className="text-primary">Dec 23, 2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Seats Available</span>
                      <span className="text-accent">8 left</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <span className="gradient-text">Course Curriculum</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              6 weeks of comprehensive training with hands-on projects and real-world case studies
            </p>
          </div>

          <div className="grid gap-6">
            {courseModules.map((module, index) => (
              <div key={index} className="bento-card hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">{module.module}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{module.title}</h3>
                      <span className="text-sm bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">
                        {module.duration}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Certifications */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Tools You'll Master</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="bento-card text-center">
                    <div className="font-medium">{tool}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Certifications Included</h3>
              <div className="space-y-4">
                {[
                  "Google Ads Certification",
                  "Facebook Blueprint Certification", 
                  "Skills.do Digital Marketing Certificate"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bento-card-large text-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Digital Marketing Journey</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our next batch and transform your career with comprehensive digital marketing skills
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button className="btn-hero text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Enroll Now - ₹18,000
              </Button>
              <Button className="btn-secondary text-lg px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              💡 Early bird discount available | 🎯 100% Job support | 🏆 Industry recognized certification
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDigitalMarketing;