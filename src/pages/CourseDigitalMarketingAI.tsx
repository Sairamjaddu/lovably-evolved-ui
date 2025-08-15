import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Star, CheckCircle, Award, Play, Download, Calendar, Brain, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseDigitalMarketingAI = () => {
  const navigate = useNavigate();

  const courseModules = [
    {
      module: 1,
      title: "Advanced Marketing Strategy",
      topics: ["Data-Driven Strategy", "Customer Journey Mapping", "Advanced Analytics", "Growth Hacking"],
      duration: "Week 1"
    },
    {
      module: 2,
      title: "AI-Powered Content Creation",
      topics: ["ChatGPT for Marketing", "AI Writing Tools", "Visual Content AI", "Content Automation"],
      duration: "Week 2"
    },
    {
      module: 3,
      title: "Advanced Advertising & Automation",
      topics: ["Programmatic Advertising", "Smart Bidding", "Cross-Platform Campaigns", "Performance Optimization"],
      duration: "Week 3-4"
    },
    {
      module: 4,
      title: "Marketing Automation & CRM",
      topics: ["Lead Scoring", "Email Automation", "Customer Segmentation", "Lifecycle Marketing"],
      duration: "Week 5"
    },
    {
      module: 5,
      title: "AI Analytics & Insights",
      topics: ["Predictive Analytics", "Machine Learning Models", "Attribution Modeling", "Future Forecasting"],
      duration: "Week 6"
    },
    {
      module: 6,
      title: "Advanced Strategy & Leadership",
      topics: ["Team Management", "Budget Optimization", "Stakeholder Reporting", "Industry Trends"],
      duration: "Week 7-8"
    }
  ];

  const keyFeatures = [
    "AI-Powered Marketing Tools",
    "Advanced Analytics Training",
    "Marketing Automation Setup",
    "Leadership & Strategy Focus",
    "Industry Mentorship",
    "Portfolio Development"
  ];

  const aiTools = [
    "ChatGPT/Claude", "Jasper.ai", "Midjourney", "Zapier", 
    "HubSpot", "Marketo", "Tableau", "Python for Marketing"
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
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="text-sm font-medium text-secondary-foreground">ADVANCED COURSE</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Digital Marketing + <span className="gradient-text">AI Mastery</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Advanced course integrating AI tools and automation for next-generation marketing strategies. Perfect for experienced marketers and ambitious beginners.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>8 Weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Max 15 Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>

              <div className="space-y-3">
                {keyFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-secondary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero text-lg px-8 py-4">
                  Enroll for ₹24,000 + GST
                </Button>
                <Button className="btn-secondary text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Watch AI Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bento-card-large bg-gradient-to-br from-secondary/10 to-accent/10">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-secondary" />
                    <h3 className="text-2xl font-bold">Advanced Features</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">200+</div>
                      <div className="text-sm text-muted-foreground">AI Tools Mastery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">95%</div>
                      <div className="text-sm text-muted-foreground">Job Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">25+</div>
                      <div className="text-sm text-muted-foreground">AI Platforms</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">5</div>
                      <div className="text-sm text-muted-foreground">Industry Certs</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Next Batch Starts</span>
                      <span className="text-secondary">Jan 6, 2025</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Premium Seats</span>
                      <span className="text-accent">5 left</span>
                    </div>
                    <div className="bg-gradient-to-r from-secondary/20 to-accent/20 p-3 rounded-lg">
                      <div className="text-sm font-medium">🎯 Limited Batch</div>
                      <div className="text-xs text-muted-foreground">Small cohort for personalized attention</div>
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
              Advanced <span className="gradient-text">AI-Powered Curriculum</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              8 weeks of intensive training with cutting-edge AI tools, automation, and advanced marketing strategies
            </p>
          </div>

          <div className="grid gap-6">
            {courseModules.map((module, index) => (
              <div key={index} className="bento-card hover-lift border-l-4 border-l-secondary">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{module.title}</h3>
                      <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                        {module.duration}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="text-sm bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">
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

      {/* AI Tools & Advanced Certifications */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6 text-secondary" />
                AI Tools Mastery
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {aiTools.map((tool, index) => (
                  <div key={index} className="bento-card text-center bg-gradient-to-br from-secondary/5 to-accent/5">
                    <div className="font-medium">{tool}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Advanced Certifications
              </h3>
              <div className="space-y-4">
                {[
                  "AI Marketing Specialist Certificate",
                  "Marketing Automation Expert",
                  "Advanced Google Analytics",
                  "Facebook Marketing API",
                  "Skills.do AI Marketing Master"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Enrollment CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bento-card-large text-center bg-gradient-to-br from-secondary/10 to-accent/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold">
                Master the <span className="gradient-text">Future of Marketing</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the elite cohort learning AI-powered marketing strategies that industry leaders are using today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button className="btn-hero text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Secure Premium Spot - ₹24,000
              </Button>
              <Button className="btn-secondary text-lg px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download AI Curriculum
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Brain className="w-4 h-4 text-secondary" />
                <span>AI-First Approach</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-accent-foreground" />
                <span>Automation Mastery</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Industry Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDigitalMarketingAI;