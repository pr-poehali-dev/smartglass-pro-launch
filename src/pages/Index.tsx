import HeroSection from '@/components/HeroSection';
import BenefitsAndTech from '@/components/BenefitsAndTech';
import CasesSection from '@/components/CasesSection';
import FAQAndCTA from '@/components/FAQAndCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
      
      <div className="relative z-10">
        <HeroSection />
        <BenefitsAndTech />
        <CasesSection />
        <FAQAndCTA />
      </div>
    </div>
  );
};

export default Index;
