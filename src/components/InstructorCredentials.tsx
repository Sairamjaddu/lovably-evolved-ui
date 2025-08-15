import { Award, Users, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstructorCredentials = () => {
  const instructors = [
    {
      name: "Amit Sharma",
      role: "Senior Digital Marketing Strategist",
      image: "👨‍🏫",
      experience: "10+ Years",
      specialization: "Performance Marketing & AI Integration",
      certifications: ["Google Ads Expert", "Facebook Blueprint Certified", "HubSpot Partner"],
      achievements: [
        "Managed ₹50Cr+ in ad spend",
        "Trained 200+ professionals",
        "TEDx Speaker on AI Marketing"
      ],
      companies: ["Google", "Meta", "Startup Unicorn"],
      linkedin: "#"
    },
    {
      name: "Priyanka Jain",
      role: "SEO & Content Marketing Expert",
      image: "👩‍🏫",
      experience: "8+ Years",
      specialization: "SEO Strategy & Content Automation",
      certifications: ["SEMrush Certified", "Google Analytics Expert", "Content Marketing Institute"],
      achievements: [
        "Scaled organic traffic by 500%",
        "Published SEO research papers",
        "Industry conference speaker"
      ],
      companies: ["Adobe", "Shopify", "E-commerce Leader"],
      linkedin: "#"
    },
    {
      name: "Rohit Kumar",
      role: "Marketing Automation Specialist",
      image: "👨‍💼",
      experience: "7+ Years",
      specialization: "CRM & Marketing Automation",
      certifications: ["Salesforce Certified", "Marketo Expert", "Zapier Automation"],
      achievements: [
        "Built automation for 100+ brands",
        "Reduced manual work by 80%",
        "Created industry frameworks"
      ],
      companies: ["Salesforce", "Microsoft", "Tech Giants"],
      linkedin: "#"
    }
  ];

  const industryStats = [
    { metric: "25+", label: "Years Combined Experience" },
    { metric: "500+", label: "Professionals Trained" },
    { metric: "50+", label: "Industry Certifications" },
    { metric: "₹100Cr+", label: "Ad Spend Managed" }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learn from <span className="gradient-text">Industry Veterans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our instructors aren't just teachers—they're active practitioners leading digital transformation at top companies
          </p>
        </div>

        {/* Industry Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-scale-in">
          {industryStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bento-card hover-lift">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructor Profiles */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 animate-slide-up">
          {instructors.map((instructor, index) => (
            <div key={index} className="bento-card hover-lift h-full">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{instructor.image}</div>
                  <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                  <p className="text-primary font-medium mb-2">{instructor.role}</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {instructor.experience}
                    </div>
                    <a href={instructor.linkedin} className="flex items-center gap-1 hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Specialization
                  </h4>
                  <p className="text-sm text-muted-foreground">{instructor.specialization}</p>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.certifications.map((cert, certIndex) => (
                      <span key={certIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {instructor.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Companies */}
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary" />
                    Experience At
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.companies.map((company, compIndex) => (
                      <span key={compIndex} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <div className="bento-card animate-fade-in">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              Our <span className="gradient-text">Teaching Philosophy</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold">Practical Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Real campaigns, actual tools, live problem-solving. No theoretical fluff.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold">Industry Connection</h4>
                <p className="text-sm text-muted-foreground">
                  Direct access to industry networks and job opportunities.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="font-semibold">Continuous Support</h4>
                <p className="text-sm text-muted-foreground">
                  Mentorship extends beyond course completion for career growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <h3 className="text-xl font-semibold mb-4">
            Want to Meet Your Instructors?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our free webinar to interact with our instructors and understand our teaching methodology
          </p>
          <Button className="btn-hero">
            Attend Free Webinar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstructorCredentials;