import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BentoCourses from '@/components/BentoCourses';
import ScheduleShowcase from '@/components/ScheduleShowcase';
import SocialProof from '@/components/SocialProof';
import ToolsStack from '@/components/ToolsStack';
import InstructorCredentials from '@/components/InstructorCredentials';
import FAQPreview from '@/components/FAQPreview';
import MultiCTAFooter from '@/components/MultiCTAFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Hero Section - Above the fold */}
      <HeroSection />
      
      {/* Bento Grid Course Overview */}
      <BentoCourses />
      
      {/* Interactive Schedule Showcase */}
      <ScheduleShowcase />
      
      {/* Social Proof & Success Stories */}
      <SocialProof />
      
      {/* Tools & Technology Stack */}
      <ToolsStack />
      
      {/* Instructor Credentials & Trust Building */}
      <InstructorCredentials />
      
      {/* FAQ Section Preview */}
      <FAQPreview />
      
      {/* Multi-CTA Footer Section */}
      <MultiCTAFooter />
    </div>
  );
};

export default Index;
