import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import heroAdvisorImg from '../assets/media/pexels-rdne-8292847.jpg';

interface HeroProps {
  onPreApprovalClick: () => void;
  onExploreSolutionsClick: () => void;
}

export default function Hero({ onPreApprovalClick, onExploreSolutionsClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#0a192f] via-[#0d1f3d] to-[#0f172a] text-white pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
    >
      {/* Background Subtle Highlights */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              MORTGAGE SOLUTIONS
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
            >
              Smart Mortgage Solutions for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Better Tomorrow
              </span>
            </h1>

            {/* Description */}
            <p
              id="hero-description"
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Explore mortgage options for buying a home, refinancing, accessing home equity, and more with clear guidance tailored to your goals.
            </p>

            {/* CTA Buttons */}
            <div
              id="hero-cta-group"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                id="hero-primary-cta"
                onClick={onPreApprovalClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
              >
                <span>Get Pre-Approved</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onExploreSolutionsClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer"
              >
                <span>Explore Mortgage Solutions</span>
              </button>
            </div>

            {/* Key Value Points */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-semibold text-slate-100">Tailored Guidance</h2>
                  <p className="text-xs text-slate-400">Programs matching your unique goals</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-semibold text-slate-100">Transparent Process</h2>
                  <p className="text-xs text-slate-400">Clear breakdown of rates & costs</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <TrendingUp className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-semibold text-slate-100">Multiple Lenders</h2>
                  <p className="text-xs text-slate-400">Unbiased loan comparison</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Local Advisor Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative border/glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-amber-500/30 to-blue-500/20 blur-sm -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
                <img
                  src={heroAdvisorImg}
                  alt="Professional mortgage advisor consulting with a client"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#0a192f]/90 backdrop-blur-md border border-slate-700/80 shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Dedicated Advisory
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Personalized Mortgage Strategies
                      </p>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                      Client-First
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Small Trust Card */}
              <div className="hidden sm:flex absolute -top-4 -left-6 items-center gap-3 p-3.5 rounded-xl bg-slate-900/95 border border-slate-700 shadow-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Independent Broker</p>
                  <p className="text-[11px] text-slate-400">Unbiased lender comparisons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
