import { UserCheck, Scale, Compass, MessageSquare, ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      title: 'Personalized Guidance',
      desc: 'Advice aligned with your life milestones',
      icon: UserCheck,
    },
    {
      title: 'Competitive Loan Options',
      desc: 'Access to multiple lending programs',
      icon: Scale,
    },
    {
      title: 'Clear Process',
      desc: 'Transparent steps with zero surprises',
      icon: Compass,
    },
    {
      title: 'Fast Communication',
      desc: 'Prompt answers to all your questions',
      icon: MessageSquare,
    },
    {
      title: 'Dedicated Support',
      desc: 'From initial call to closing day',
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="trust-strip"
      className="bg-slate-900 border-y border-slate-800 py-6 sm:py-8 relative z-10"
      aria-label="Core Values & Value Strip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                id={`trust-item-${idx + 1}`}
                className="flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-amber-400 shrink-0 group-hover:border-amber-400/50 group-hover:bg-slate-800/80 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
