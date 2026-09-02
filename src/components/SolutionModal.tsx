import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { MortgageSolution } from '../types';

interface SolutionModalProps {
  solution: MortgageSolution | null;
  onClose: () => void;
  onApplyForSolution: (solutionTitle: string) => void;
}

export default function SolutionModal({
  solution,
  onClose,
  onApplyForSolution,
}: SolutionModalProps) {
  if (!solution) return null;

  return (
    <div
      id="solution-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-solution-title"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-solution-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Mortgage Solution
          </div>
          <h3 id="modal-solution-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {solution.title}
          </h3>
        </div>

        {/* Full Overview */}
        <div className="mt-5 space-y-6 text-sm text-slate-600 leading-relaxed">
          <p className="text-base text-slate-700 font-normal leading-relaxed">
            {solution.fullDescription}
          </p>

          {/* Key Program Features */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Key Program Features
            </h4>
            <div className="space-y-2.5">
              {solution.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best For */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Ideal Candidate
            </h4>
            <p className="text-sm text-slate-700">{solution.bestFor}</p>
          </div>

          {/* Typical Requirements */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Typical Documentation & Requirements
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-600 text-xs sm:text-sm pl-1">
              {solution.typicalRequirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            Back to All Solutions
          </button>

          <button
            id="modal-apply-btn"
            onClick={() => {
              onClose();
              onApplyForSolution(solution.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md shadow-amber-400/20 transition-all cursor-pointer"
          >
            <span>Get Pre-Approved for This Program</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
