import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';

interface FinalCtaProps {
  onPreApprovalClick: () => void;
  onContactClick: () => void;
}

export default function FinalCta({ onPreApprovalClick, onContactClick }: FinalCtaProps) {
  return (
    <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          YOUR HOME FINANCING ADVOCATE
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Ready to Start Your Mortgage Journey?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Connect with a dedicated mortgage specialist today for personalized loan options, competitive programs, and clear guidance every step of the way.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="final-cta-pre-approval"
            onClick={onPreApprovalClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all cursor-pointer"
          >
            <span>Get Pre-Approved</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            id="final-cta-contact"
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
}
