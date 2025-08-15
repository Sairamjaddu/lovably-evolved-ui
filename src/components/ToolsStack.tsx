import { Brain, Zap, BarChart, Megaphone } from 'lucide-react';
import toolsImage from '@/assets/tools-grid.jpg';

const ToolsStack = () => {
  const coreTools = [
    {
      category: "Analytics & Tracking",
      icon: BarChart,
      tools: ["Google Analytics 4", "Google Tag Manager", "Google Search Console", "Hotjar"]
    },
    {
      category: "Advertising Platforms",
      icon: Megaphone,
      tools: ["Google Ads", "Facebook Ads Manager", "LinkedIn Ads", "YouTube Ads"]
    },
    {
      category: "SEO & Content",
      icon: Zap,
      tools: ["SEMrush", "Ahrefs", "Screaming Frog", "Yoast SEO"]
    },
    {
      category: "Email & Automation",
      icon: Brain,
      tools: ["Mailchimp", "HubSpot", "Klaviyo", "ConvertKit"]
    }
  ];

  const aiTools = [
    {
      category: "AI Content Creation",
      icon: Brain,
      tools: ["ChatGPT", "Jasper.ai", "Copy.ai", "Writesonic"]
    },
    {
      category: "Design & Visual AI",
      icon: Zap,
      tools: ["Canva AI", "Midjourney", "DALL-E", "Figma AI"]
    },
    {
      category: "Marketing Automation",
      icon: BarChart,
      tools: ["Zapier", "Make.com", "ActiveCampaign", "Marketo"]
    },
    {
      category: "AI Analytics",
      icon: Megaphone,
      tools: ["Tableau AI", "Power BI", "Brandwatch", "Sprout Social"]
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Master Industry-Leading <span className="gradient-text">Tools & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn with the same tools used by top marketing professionals worldwide
          </p>
        </div>

        {/* Visual Header */}
        <div className="bento-card mb-16 animate-scale-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Complete <span className="gradient-text">Technology Stack</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                From traditional digital marketing tools to cutting-edge AI platforms, 
                we cover the entire spectrum of modern marketing technology.
              </p>
              <div className="space-y-3">
                {["Hands-on practice with real campaigns", "Industry certifications included", "Latest AI tool integrations", "Expert-led training sessions"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={toolsImage} 
                alt="Digital marketing and AI tools in modern grid layout"
                className="rounded-xl shadow-soft hover-glow max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Digital Marketing Tools */}
          <div className="animate-slide-up">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Core Digital Marketing Tools</h3>
              <p className="text-muted-foreground">Essential platforms for modern marketing success</p>
            </div>

            <div className="space-y-6">
              {coreTools.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bento-card hover-lift">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-3">{category.category}</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {category.tools.map((tool, toolIndex) => (
                            <div key={toolIndex} className="text-sm bg-muted/50 rounded-md px-3 py-2 hover:bg-primary/10 transition-colors">
                              {tool}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI & Automation Tools */}
          <div className="animate-slide-up">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">AI & Automation Tools</h3>
              <p className="text-muted-foreground">Next-generation AI-powered marketing platforms</p>
            </div>

            <div className="space-y-6">
              {aiTools.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bento-card hover-lift bg-gradient-to-br from-secondary/5 to-accent/5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-3">{category.category}</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {category.tools.map((tool, toolIndex) => (
                            <div key={toolIndex} className="text-sm bg-background/50 rounded-md px-3 py-2 hover:bg-secondary/10 transition-colors">
                              {tool}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-xl font-semibold mb-8">
            Get <span className="gradient-text">Industry Certifications</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {["Google Ads Certified", "Facebook Blueprint", "HubSpot Certified", "Google Analytics", "SEMrush Certified"].map((cert, index) => (
              <div key={index} className="trust-badge hover-lift">
                <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsStack;