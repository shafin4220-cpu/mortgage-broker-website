import { X, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { ResourceGuide } from '../types';

interface GuideModalProps {
  guide: ResourceGuide | null;
  onClose: () => void;
  onPreApprovalClick: () => void;
}

export default function GuideModal({ guide, onClose, onPreApprovalClick }: GuideModalProps) {
  if (!guide) return null;

  return (
    <div
      id="resource-guide-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-guide-title"
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-200 relative my-8 text-slate-900 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
          aria-label="Close guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10 border-b border-slate-100 pb-5">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
              {guide.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {guide.readTime}
            </span>
          </div>
          <h3 id="modal-guide-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {guide.title}
          </h3>
        </div>

        {/* Modal Content Body */}
        <div className="mt-6 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-700 font-normal leading-relaxed text-base italic border-l-4 border-amber-400 pl-4 py-1">
            {guide.content.intro}
          </p>

          <div className="space-y-6 pt-2">
            {guide.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-2.5">
                <h4 className="text-lg font-bold text-slate-900">
                  {section.heading}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {section.body}
                </p>
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-2 pt-1 pl-1">
                    {section.bulletPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Takeaway Box */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 mt-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Key Takeaway</span>
            </div>
            <p className="text-sm text-slate-700">
              {guide.content.takeaway}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            Close Guide
          </button>

          <button
            onClick={() => {
              onClose();
              onPreApprovalClick();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>Speak with a Mortgage Advisor</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
