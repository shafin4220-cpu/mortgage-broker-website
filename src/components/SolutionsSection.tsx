import { useState } from 'react';
import {
  Home,
  RefreshCw,
  Layers,
  GraduationCap,
  Building2,
  FileCheck,
  ArrowRight,
} from 'lucide-react';
import { MORTGAGE_SOLUTIONS } from '../data/mortgageData';
import { MortgageSolution } from '../types';
import SolutionModal from './SolutionModal';

interface SolutionsSectionProps {
  onPreApprovalClick: (solutionGoal?: string) => void;
}

export default function SolutionsSection({ onPreApprovalClick }: SolutionsSectionProps) {
  const [selectedSolution, setSelectedSolution] = useState<MortgageSolution | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return Home;
      case 'RefreshCw':
        return RefreshCw;
      case 'Layers':
        return Layers;
      case 'GraduationCap':
        return GraduationCap;
      case 'Building2':
        return Building2;
      case 'FileCheck':
        return FileCheck;
      default:
        return Home;
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold tracking-wider uppercase">
            COMPREHENSIVE MORTGAGE LOANS
          </div>
          <h2
            id="solutions-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
          >
            Mortgage Solutions Built Around Your Goals
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            From your very first purchase to refinancing and investment portfolios, we structure loans designed for your unique financial landscape.
          </p>
        </div>

        {/* 6 Clean Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MORTGAGE_SOLUTIONS.map((sol, index) => {
            const Icon = getIcon(sol.icon);
            return (
              <div
                key={sol.id}
                id={`solution-card-${index + 1}`}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group"
              >
                <div className="space-y-5">
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                      Option 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-900 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {sol.shortDescription}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="pt-2 space-y-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Highlights:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {sol.keyFeatures.slice(0, 2).map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    id={`learn-more-${sol.id}`}
                    onClick={() => setSelectedSolution(sol)}
                    className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onPreApprovalClick(sol.title)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-2xs transition-colors cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Not sure which mortgage loan structure fits your needs?
            </h4>
            <p className="text-sm text-slate-300">
              Our specialists review your scenario and present transparent, side-by-side options.
            </p>
          </div>
          <button
            onClick={() => onPreApprovalClick()}
            className="shrink-0 px-6 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Request Mortgage Review
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onApplyForSolution={(title) => {
          setSelectedSolution(null);
          onPreApprovalClick(title);
        }}
      />
    </section>
  );
}
