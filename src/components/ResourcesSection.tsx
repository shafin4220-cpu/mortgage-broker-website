import { useState } from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { RESOURCE_GUIDES } from '../data/mortgageData';
import { ResourceGuide } from '../types';
import GuideModal from './GuideModal';

interface ResourcesSectionProps {
  onPreApprovalClick: () => void;
}

export default function ResourcesSection({ onPreApprovalClick }: ResourcesSectionProps) {
  const [activeGuide, setActiveGuide] = useState<ResourceGuide | null>(null);

  return (
    <section id="resources" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            EDUCATIONAL GUIDES
          </div>
          <h2
            id="resources-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
          >
            Mortgage Resources &amp; Guides
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Essential knowledge to help you understand mortgage terms, prepare documents, and make confident financing decisions.
          </p>
        </div>

        {/* 5 Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {RESOURCE_GUIDES.map((guide, idx) => (
            <div
              key={guide.id}
              id={`resource-card-${idx + 1}`}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                    {guide.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{guide.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-900 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {guide.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  id={`read-guide-${guide.id}`}
                  onClick={() => setActiveGuide(guide)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer py-1"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guide Reading Modal */}
      <GuideModal
        guide={activeGuide}
        onClose={() => setActiveGuide(null)}
        onPreApprovalClick={onPreApprovalClick}
      />
    </section>
  );
}
