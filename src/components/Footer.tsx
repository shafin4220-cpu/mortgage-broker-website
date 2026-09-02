import { Building2, Mail, Phone, Clock, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onPreApprovalClick: () => void;
}

export default function Footer({ onPreApprovalClick }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#07111e] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                MORTGAGE <span className="text-amber-400">BUILDER</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Mortgage Builder provides personalized guidance and tailored loan solutions to help you purchase, refinance, or access home equity with clarity and confidence.
            </p>
            <div className="pt-2 flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-semibold text-xs">Equal Housing Opportunity</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('#home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#solutions')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Mortgage Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#how-it-works')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#calculator')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Mortgage Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#resources')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Resources &amp; Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Mortgage Programs
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('#solutions')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Home Purchase Loans
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#solutions')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Refinance Loans
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#solutions')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Home Equity &amp; HELOC
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#solutions')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  First-Time Buyer Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#solutions')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Investment Property Loans
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#solutions')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Mortgage Renewal &amp; Review
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Direct Line: (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>support@mortgagebuilder.local</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Mon – Fri: 8:30 AM – 6:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Professional Mortgage Services</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onPreApprovalClick}
                  className="px-3.5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Start Pre-Approval
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimers & Disclosures */}
        <div className="pt-8 border-t border-slate-800/80 space-y-3 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">Important Disclosures:</strong> Mortgage Builder is a mortgage broker providing loan comparison and pre-approval coordination services. All loan approvals, interest rates, terms, and conditions are subject to underwriter credit review, acceptable property appraisal, and verified documentation. Mortgage calculators, rate estimates, and scenarios provided on this website are for educational and illustrative purposes only and do not constitute an official loan estimate, binding commitment, or guarantee to lend.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-500">
            <p>&copy; {new Date().getFullYear()} Mortgage Builder. All rights reserved.</p>
            <p>Smart Mortgage Solutions for a Better Tomorrow.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
