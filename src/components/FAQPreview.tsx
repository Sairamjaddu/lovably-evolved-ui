import { useState } from 'react';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQPreview = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "What makes Skills.do different from other digital marketing courses?",
      answer: "Skills.do focuses on practical, hands-on learning with live projects and AI tool integration. Our instructors are active industry practitioners, not just teachers. We offer flexible scheduling, small batch sizes (max 20 students), and continued career support even after course completion."
    },
    {
      question: "Do I need any prior experience in marketing to join?",
      answer: "No prior experience is required! Our courses are designed for complete beginners as well as professionals looking to upskill. We start with fundamentals and gradually progress to advanced concepts. Our instructors ensure every student is comfortable with the pace."
    },
    {
      question: "What kind of job support do you provide?",
      answer: "We provide comprehensive job support including resume building, interview preparation, portfolio development, direct referrals to partner companies, and access to our alumni network. 85% of our students get placed within 6 months of course completion."
    },
    {
      question: "Are the classes recorded? Can I access them later?",
      answer: "Yes, all live classes are recorded and available for lifetime access. You can revisit any topic, catch up on missed sessions, or refresh your knowledge anytime. The recordings include interactive Q&A sessions and practical demonstrations."
    },
    {
      question: "What is the difference between the 6-week and 8-week courses?",
      answer: "The 6-week course covers core digital marketing fundamentals including SEO, SEM, social media marketing, and analytics. The 8-week course includes everything from the 6-week course plus advanced AI tools, marketing automation, advanced analytics, and performance optimization techniques."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about our courses and career opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-12 animate-scale-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-12 animate-slide-up">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="bento-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between p-0 focus:outline-none group"
                >
                  <h3 className="text-lg font-semibold pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96 mt-4' : 'max-h-0'
                }`}>
                  <div className="pb-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No questions found matching "{searchQuery}". Try a different search term.
                </p>
              </div>
            )}
          </div>

          {/* More Questions CTA */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="bento-card bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Our course advisors are here to help with personalized guidance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-hero">
                    Talk to Course Advisor
                  </Button>
                  <Button className="btn-secondary group">
                    View All FAQs
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bento-card text-center hover-lift">
                <div className="text-2xl mb-2">💬</div>
                <h4 className="font-semibold mb-1">Live Chat</h4>
                <p className="text-sm text-muted-foreground">Instant responses Mon-Fri 9-6 PM</p>
              </div>
              <div className="bento-card text-center hover-lift">
                <div className="text-2xl mb-2">📞</div>
                <h4 className="font-semibold mb-1">Phone Support</h4>
                <p className="text-sm text-muted-foreground">Call us at +91-9876543210</p>
              </div>
              <div className="bento-card text-center hover-lift">
                <div className="text-2xl mb-2">📧</div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-sm text-muted-foreground">hello@skills.do</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;