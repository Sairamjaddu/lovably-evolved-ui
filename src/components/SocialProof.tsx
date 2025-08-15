import { Star, Quote, TrendingUp, Building } from 'lucide-react';
import successStats from '@/assets/success-stats.jpg';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Digital Marketing Specialist",
      company: "Tech Solutions Inc",
      image: "👩‍💼",
      rating: 5,
      salaryIncrease: "45%",
      testimonial: "The AI integration training was game-changing. I went from a junior executive to leading our digital strategy team in just 6 months.",
      beforeRole: "Marketing Executive",
      afterRole: "Digital Strategy Lead"
    },
    {
      name: "Rahul Mehta",
      role: "Performance Marketing Manager",
      company: "E-commerce Giant",
      image: "👨‍💻",
      rating: 5,
      salaryIncrease: "60%",
      testimonial: "Skills.do's practical approach and live projects prepared me for real-world challenges. The weekend batches were perfect for my schedule.",
      beforeRole: "Sales Associate",
      afterRole: "Performance Marketing Manager"
    },
    {
      name: "Sneha Patel",
      role: "Freelance Marketing Consultant",
      company: "Independent",
      image: "👩‍🎓",
      rating: 5,
      salaryIncrease: "200%",
      testimonial: "From a complete beginner to running my own marketing consultancy. The instructors' industry experience made all the difference.",
      beforeRole: "Fresh Graduate",
      afterRole: "Marketing Consultant"
    }
  ];

  const companyLogos = [
    "Google", "Meta", "Amazon", "Microsoft", "Adobe", "HubSpot", "Salesforce", "Shopify"
  ];

  const stats = [
    { number: "500+", label: "Students Trained", icon: TrendingUp },
    { number: "85%", label: "Placement Rate", icon: Building },
    { number: "40%", label: "Avg Salary Increase", icon: Star },
    { number: "4.9/5", label: "Student Rating", icon: Quote }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
      <div className="container-custom">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bento-card hover-lift">
                  <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Stories Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Success Stories</span> That Inspire
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations from our students who are now thriving in their digital marketing careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-slide-up">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bento-card hover-lift h-full">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Career Progression */}
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-3 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">
                      +{testimonial.salaryIncrease}
                    </div>
                    <div className="text-xs text-muted-foreground">Salary Increase</div>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-2">
                    <span className="text-muted-foreground">{testimonial.beforeRole}</span>
                    <TrendingUp className="w-3 h-3 text-accent" />
                    <span className="font-medium">{testimonial.afterRole}</span>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="flex-1">
                  <Quote className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Transformation Visual */}
        <div className="bento-card mb-16 animate-scale-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Average Career <span className="gradient-text">Transformation</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Salary Increase</span>
                  <span className="font-bold text-accent">+40% Average</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Role Upgrade</span>
                  <span className="font-bold text-primary">85% Students</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Career Switch</span>
                  <span className="font-bold text-secondary">60% Students</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Time to Placement</span>
                  <span className="font-bold text-accent">3-6 Months</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={successStats} 
                alt="Career success statistics and growth charts"
                className="rounded-xl shadow-soft hover-glow"
              />
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center animate-fade-in">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
            Our students work at leading companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-lg font-bold hover:opacity-100 transition-opacity">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;