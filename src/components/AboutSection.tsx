import { UserCheck, Sliders, MessageSquareText, ShieldCheck, ArrowRight } from 'lucide-react';
import aboutAdvisorImg from '../assets/media/pexels-pavel-danilyuk-7937320.jpg';

interface AboutSectionProps {
  onPreApprovalClick: () => void;
}

export default function AboutSection({ onPreApprovalClick }: AboutSectionProps) {
  const pillars = [
    {
      title: 'Personalized mortgage guidance',
      description: 'We take the time to understand your unique homeownership vision, income structure, and budget.',
      icon: UserCheck,
    },
    {
      title: 'Customized loan solutions',
      description: 'Matching you with loan structures and programs calibrated for your short and long-term financial plans.',
      icon: Sliders,
    },
    {
      title: 'Clear communication',
      description: 'No convoluted jargon or hidden fees. We explain every term, timeline, and requirement up front.',
      icon: MessageSquareText,
    },
    {
      title: 'Support throughout the process',
      description: 'From initial pre-approval exploration all the way to final closing day, we remain your reliable guide.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Clean Framing */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background border */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-amber-400/20 via-slate-200 to-blue-500/10 -z-10" />

              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                <img
                  src={aboutAdvisorImg}
                  alt="Mortgage advisor discussing financing plans with clients"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl border border-slate-800 max-w-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Our Mission
                </p>
                <p className="text-sm text-slate-200 font-medium mt-1 leading-snug">
                  Empowering you with clear information to make confident financing decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold tracking-wider uppercase">
                ABOUT MORTGAGE BUILDER
              </div>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
              >
                Guidance for Every Step of Your Mortgage Journey
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                At Mortgage Builder, we help you understand your mortgage options and navigate the process with clear communication and personalized guidance. Finding the right mortgage shouldn’t be stressful or confusing—we provide transparent loan options so you can move forward with confidence.
              </p>
            </div>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    id={`about-pillar-${idx + 1}`}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5 hover:border-slate-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onPreApprovalClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Connect with a Mortgage Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
