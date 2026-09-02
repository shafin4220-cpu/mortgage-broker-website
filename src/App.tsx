import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import SolutionsSection from './components/SolutionsSection';
import AboutSection from './components/AboutSection';
import HowItWorks from './components/HowItWorks';
import MortgageCalculator from './components/MortgageCalculator';
import ResourcesSection from './components/ResourcesSection';
import ImageShowcase from './components/ImageShowcase';
import PreApprovalForm from './components/PreApprovalForm';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  const [preApprovalGoal, setPreApprovalGoal] = useState<string | undefined>(undefined);
  const [calcPropertyVal, setCalcPropertyVal] = useState<number | undefined>(undefined);
  const [calcDownPay, setCalcDownPay] = useState<number | undefined>(undefined);

  const scrollToPreApproval = (goal?: string) => {
    if (goal) {
      setPreApprovalGoal(goal);
    }
    const el = document.querySelector('#pre-approval');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutions = () => {
    const el = document.querySelector('#solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyWithCalculatorEstimates = (homePrice: number, downPayment: number) => {
    setCalcPropertyVal(homePrice);
    setCalcDownPay(downPayment);
    scrollToPreApproval('Home Purchase');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-800 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Header */}
      <Header onPreApprovalClick={() => scrollToPreApproval()} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onPreApprovalClick={() => scrollToPreApproval()}
          onExploreSolutionsClick={scrollToSolutions}
        />

        {/* 3. Trust / Value Strip */}
        <TrustStrip />

        {/* 4. Mortgage Solutions */}
        <SolutionsSection
          onPreApprovalClick={(goal) => scrollToPreApproval(goal)}
        />

        {/* 5. About Mortgage Builder */}
        <AboutSection onPreApprovalClick={() => scrollToPreApproval()} />

        {/* 6. How It Works */}
        <HowItWorks onPreApprovalClick={() => scrollToPreApproval()} />

        {/* 7. Mortgage Options / Calculator */}
        <MortgageCalculator
          onApplyWithEstimates={handleApplyWithCalculatorEstimates}
        />

        {/* 8. Educational Resources */}
        <ResourcesSection onPreApprovalClick={() => scrollToPreApproval()} />

        {/* 9. Image Showcase */}
        <ImageShowcase />

        {/* 10. Pre-Approval Inquiry Form */}
        <PreApprovalForm
          initialGoal={preApprovalGoal}
          initialValue={calcPropertyVal}
          initialDownPayment={calcDownPay}
        />

        {/* 11. FAQ */}
        <FaqSection />

        {/* 12. Final CTA */}
        <FinalCta
          onPreApprovalClick={() => scrollToPreApproval()}
          onContactClick={scrollToContact}
        />
      </main>

      {/* 13. Footer */}
      <Footer onPreApprovalClick={() => scrollToPreApproval()} />
    </div>
  );
}
