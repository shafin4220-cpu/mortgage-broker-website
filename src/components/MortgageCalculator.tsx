import { useState, useId } from 'react';
import { Calculator, DollarSign, Percent, Calendar, Info, ArrowRight, ShieldAlert } from 'lucide-react';

interface MortgageCalculatorProps {
  onApplyWithEstimates: (homePrice: number, downPayment: number) => void;
}

export default function MortgageCalculator({ onApplyWithEstimates }: MortgageCalculatorProps) {
  const [homePrice, setHomePrice] = useState<number>(450000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(30);
  const [includeEscrows, setIncludeEscrows] = useState<boolean>(true);

  const homePriceId = useId();
  const downPaymentId = useId();
  const interestRateId = useId();

  // Calculated values
  const downPaymentAmount = Math.round((homePrice * downPaymentPercent) / 100);
  const principalAmount = Math.max(0, homePrice - downPaymentAmount);

  const calculateMonthlyPrincipalAndInterest = (): number => {
    if (principalAmount <= 0) return 0;
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTermYears * 12;

    if (monthlyRate === 0) return principalAmount / totalPayments;

    const monthlyPayment =
      (principalAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    return isNaN(monthlyPayment) || !isFinite(monthlyPayment) ? 0 : Math.round(monthlyPayment);
  };

  const monthlyPrincipalAndInterest = calculateMonthlyPrincipalAndInterest();

  // Standard educational escrow estimates (illustrative only)
  const estimatedMonthlyPropertyTax = Math.round((homePrice * 0.012) / 12);
  const estimatedMonthlyInsurance = Math.round((homePrice * 0.004) / 12);
  const estimatedPmi =
    downPaymentPercent < 20 ? Math.round((principalAmount * 0.007) / 12) : 0;

  const totalEstimatedMonthly =
    monthlyPrincipalAndInterest +
    (includeEscrows ? estimatedMonthlyPropertyTax + estimatedMonthlyInsurance + estimatedPmi : 0);

  const handleDownPaymentAmountChange = (amt: number) => {
    const clamped = Math.max(0, Math.min(amt, homePrice));
    const pct = homePrice > 0 ? (clamped / homePrice) * 100 : 0;
    setDownPaymentPercent(Number(pct.toFixed(1)));
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            ESTIMATOR & SCENARIOS
          </div>
          <h2
            id="calculator-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900"
          >
            Mortgage Payment Estimator
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Experiment with different home prices, down payment amounts, and terms to estimate your monthly commitment.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-[#f8fafc] rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            {/* Home Price Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor={homePriceId} className="text-sm font-bold text-slate-900">
                  Home Price
                </label>
                <span className="text-base font-bold text-blue-950">
                  ${homePrice.toLocaleString()}
                </span>
              </div>
              <div className="relative">
                <DollarSign className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id={homePriceId}
                  type="number"
                  min="50000"
                  max="3000000"
                  step="5000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base"
                />
              </div>
              <input
                type="range"
                min="50000"
                max="1500000"
                step="5000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer mt-1"
                aria-label="Home price slider"
              />
            </div>

            {/* Down Payment Controls */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor={downPaymentId} className="text-sm font-bold text-slate-900">
                  Down Payment
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 bg-slate-200 text-slate-800 rounded">
                    {downPaymentPercent}%
                  </span>
                  <span className="text-base font-bold text-blue-950">
                    ${downPaymentAmount.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id={downPaymentId}
                    type="number"
                    min="0"
                    max={homePrice}
                    step="1000"
                    value={downPaymentAmount}
                    onChange={(e) => handleDownPaymentAmountChange(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div className="flex gap-1.5">
                  {[3.5, 5, 10, 20].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setDownPaymentPercent(pct)}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                        downPaymentPercent === pct
                          ? 'bg-slate-900 text-white'
                          : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Interest Rate & Term Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Interest Rate */}
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <label htmlFor={interestRateId} className="text-sm font-bold text-slate-900">
                    Interest Rate
                  </label>
                  <span className="text-xs text-slate-500">Illustrative</span>
                </div>
                <div className="relative">
                  <Percent className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id={interestRateId}
                    type="number"
                    min="1"
                    max="15"
                    step="0.125"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Loan Term */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-900 flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  Loan Term
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[15, 20, 30].map((years) => (
                    <button
                      key={years}
                      type="button"
                      onClick={() => setLoanTermYears(years)}
                      className={`py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                        loanTermYears === years
                          ? 'bg-slate-900 text-white'
                          : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {years} Yrs
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Escrow Estimate Toggle */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-200">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-700 font-medium">
                  Include Estimated Taxes & Insurance (PITI)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIncludeEscrows(!includeEscrows)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  includeEscrows ? 'bg-slate-900' : 'bg-slate-300'
                }`}
                role="switch"
                aria-checked={includeEscrows}
                aria-label="Include estimated taxes and insurance"
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    includeEscrows ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-7 sm:p-8 space-y-6 shadow-xl border border-slate-800">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Estimated Monthly Payment
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  ${totalEstimatedMonthly.toLocaleString()}
                </span>
                <span className="text-sm font-medium text-slate-400">/ month</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Based on ${principalAmount.toLocaleString()} loan balance over {loanTermYears} years
              </p>
            </div>

            {/* Breakdown Bars */}
            <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
              <div className="flex justify-between items-center text-slate-200">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-amber-400" />
                  Principal & Interest
                </span>
                <span className="font-bold text-white">
                  ${monthlyPrincipalAndInterest.toLocaleString()}
                </span>
              </div>

              {includeEscrows && (
                <>
                  <div className="flex justify-between items-center text-slate-200">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-blue-400" />
                      Est. Property Taxes
                    </span>
                    <span className="font-bold text-white">
                      ${estimatedMonthlyPropertyTax.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-slate-200">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-teal-400" />
                      Est. Homeowners Insurance
                    </span>
                    <span className="font-bold text-white">
                      ${estimatedMonthlyInsurance.toLocaleString()}
                    </span>
                  </div>

                  {estimatedPmi > 0 && (
                    <div className="flex justify-between items-center text-slate-200">
                      <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-purple-400" />
                        Est. PMI (Down payment &lt; 20%)
                      </span>
                      <span className="font-bold text-white">
                        ${estimatedPmi.toLocaleString()}
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Educational Disclaimer */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-[11px] text-slate-300 space-y-1 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                <span>Estimate Disclaimer</span>
              </div>
              <p>
                Calculations are estimates for educational and illustrative purposes only. Exact terms, rates, insurance, and taxes will depend on lender review and approved application.
              </p>
            </div>

            {/* Action Button */}
            <button
              id="calculator-apply-btn"
              onClick={() => onApplyWithEstimates(homePrice, downPaymentAmount)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md shadow-amber-400/20 transition-all cursor-pointer"
            >
              <span>Get Pre-Approved for This Amount</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
