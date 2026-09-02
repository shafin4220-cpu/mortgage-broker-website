import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mortgageData';

interface HowItWorksProps {
  onPreApprovalClick: () => void;
}

export default function HowItWorks({ onPreApprovalClick }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold tracking-wider uppercase">
            CLEAR & REASSURING PROCESS
          </div>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
          >
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Navigating a mortgage should be straightforward. Here is our simple four-step process to get you from initial planning to closing day.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`process-step-${idx + 1}`}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-shadow relative group"
            >
              <div className="space-y-4">
                {/* Number Badge */}
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 font-bold text-lg flex items-center justify-center shadow-xs">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-md">
                    Phase 0{idx + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step reassurance tip */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{step.tip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="text-center pt-4">
          <button
            onClick={onPreApprovalClick}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md shadow-amber-400/20 transition-all cursor-pointer"
          >
            <span>Start Step 1: Tell Us Your Goals</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
