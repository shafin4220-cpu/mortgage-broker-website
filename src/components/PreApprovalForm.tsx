import React, { useState, useId, useEffect } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { PreApprovalFormData } from '../types';

interface PreApprovalFormProps {
  initialGoal?: string;
  initialValue?: number;
  initialDownPayment?: number;
}

export default function PreApprovalForm({
  initialGoal,
  initialValue,
  initialDownPayment,
}: PreApprovalFormProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form IDs for accessibility
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const locationId = useId();
  const propertyValId = useId();
  const downPayId = useId();
  const incomeId = useId();
  const notesId = useId();

  const [formData, setFormData] = useState<PreApprovalFormData>({
    fullName: '',
    email: '',
    phone: '',
    mortgageGoal: (initialGoal?.toLowerCase().includes('refinance')
      ? 'refinance'
      : initialGoal?.toLowerCase().includes('equity')
      ? 'equity'
      : initialGoal?.toLowerCase().includes('renewal')
      ? 'renewal'
      : 'purchase') as PreApprovalFormData['mortgageGoal'],
    propertyType: 'single-family',
    estimatedValue: initialValue || 450000,
    downPayment: initialDownPayment || 90000,
    location: '',
    employmentStatus: 'employed',
    approximateIncome: 110000,
    timeline: '1-3-months',
    additionalNotes: '',
  });

  useEffect(() => {
    if (initialGoal) {
      const g = initialGoal.toLowerCase().includes('refinance')
        ? 'refinance'
        : initialGoal.toLowerCase().includes('equity')
        ? 'equity'
        : initialGoal.toLowerCase().includes('renewal')
        ? 'renewal'
        : 'purchase';
      setFormData((prev) => ({ ...prev, mortgageGoal: g as PreApprovalFormData['mortgageGoal'] }));
    }
    if (initialValue) {
      setFormData((prev) => ({ ...prev, estimatedValue: initialValue }));
    }
    if (initialDownPayment) {
      setFormData((prev) => ({ ...prev, downPayment: initialDownPayment }));
    }
  }, [initialGoal, initialValue, initialDownPayment]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.estimatedValue || formData.estimatedValue <= 0) {
      errs.estimatedValue = 'Please enter a valid estimated property value';
    }
    if (formData.downPayment < 0) {
      errs.downPayment = 'Please enter a valid down payment amount';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please enter your preferred location or zip code';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.approximateIncome || formData.approximateIncome <= 0) {
      errs.approximateIncome = 'Please enter your approximate annual household income';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'A valid email address is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'A valid phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep3()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      mortgageGoal: 'purchase',
      propertyType: 'single-family',
      estimatedValue: 450000,
      downPayment: 90000,
      location: '',
      employmentStatus: 'employed',
      approximateIncome: 110000,
      timeline: '1-3-months',
      additionalNotes: '',
    });
    setErrors({});
  };

  return (
    <section id="pre-approval" className="py-20 lg:py-28 bg-[#0a192f] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            NO IMPACT ON CREDIT TO INQUIRE
          </div>
          <h2
            id="pre-approval-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
          >
            Get Pre-Approved
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Complete this brief inquiry to connect with a mortgage specialist who will review your options and outline your tailored path forward.
          </p>
        </div>

        {/* Multi-Step Card */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {!isSubmitted ? (
            <div>
              {/* Progress Steps Header */}
              <div className="mb-8 pb-6 border-b border-slate-800">
                <div className="flex items-center justify-between max-w-xl mx-auto">
                  {[
                    { num: 1, label: 'Loan & Property' },
                    { num: 2, label: 'Financial Snapshot' },
                    { num: 3, label: 'Contact Details' },
                  ].map((step, idx) => (
                    <div key={step.num} className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                          currentStep === step.num
                            ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                            : currentStep > step.num
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {currentStep > step.num ? '✓' : step.num}
                      </div>
                      <span
                        className={`hidden sm:inline text-xs font-semibold ${
                          currentStep === step.num ? 'text-white' : 'text-slate-400'
                        }`}
                      >
                        {step.label}
                      </span>
                      {idx < 2 && (
                        <div className="hidden sm:block w-8 lg:w-16 h-0.5 bg-slate-800 mx-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* STEP 1: Loan & Property */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-200">
                        What is your primary mortgage goal?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { id: 'purchase', label: 'Home Purchase' },
                          { id: 'refinance', label: 'Refinance' },
                          { id: 'equity', label: 'Home Equity' },
                          { id: 'renewal', label: 'Term Renewal' },
                        ].map((goal) => (
                          <button
                            key={goal.id}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                mortgageGoal: goal.id as PreApprovalFormData['mortgageGoal'],
                              })
                            }
                            className={`p-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                              formData.mortgageGoal === goal.id
                                ? 'bg-amber-400/15 border-amber-400 text-amber-300'
                                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                            }`}
                          >
                            {goal.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-amber-400" />
                        Property Type
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { id: 'single-family', label: 'Single Family' },
                          { id: 'condo', label: 'Condominium' },
                          { id: 'townhouse', label: 'Townhouse' },
                          { id: 'multi-family', label: 'Multi-Family (2-4)' },
                        ].map((prop) => (
                          <button
                            key={prop.id}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                propertyType: prop.id as PreApprovalFormData['propertyType'],
                              })
                            }
                            className={`p-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                              formData.propertyType === prop.id
                                ? 'bg-amber-400/15 border-amber-400 text-amber-300'
                                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                            }`}
                          >
                            {prop.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor={propertyValId} className="text-sm font-bold text-slate-200">
                          Estimated Property Value ($)
                        </label>
                        <div className="relative">
                          <DollarSign className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            id={propertyValId}
                            type="number"
                            min="50000"
                            step="5000"
                            value={formData.estimatedValue}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                estimatedValue: Number(e.target.value),
                              })
                            }
                            className="w-full pl-9 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                        </div>
                        {errors.estimatedValue && (
                          <p className="text-xs text-amber-400 font-medium">{errors.estimatedValue}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor={downPayId} className="text-sm font-bold text-slate-200">
                          Available Down Payment ($)
                        </label>
                        <div className="relative">
                          <DollarSign className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            id={downPayId}
                            type="number"
                            min="0"
                            step="1000"
                            value={formData.downPayment}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                downPayment: Number(e.target.value),
                              })
                            }
                            className="w-full pl-9 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                        </div>
                        {errors.downPayment && (
                          <p className="text-xs text-amber-400 font-medium">{errors.downPayment}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor={locationId} className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-amber-400" />
                        Target Property Location (City, State, or Zip Code)
                      </label>
                      <input
                        id={locationId}
                        type="text"
                        placeholder="e.g. Austin, TX or 78701"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-500"
                      />
                      {errors.location && (
                        <p className="text-xs text-amber-400 font-medium">{errors.location}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 2: Financial Snapshot */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-200">
                        Primary Employment Status
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { id: 'employed', label: 'W-2 Employed' },
                          { id: 'self-employed', label: 'Self-Employed / 1099' },
                          { id: 'retired', label: 'Retired' },
                          { id: 'other', label: 'Other Income' },
                        ].map((status) => (
                          <button
                            key={status.id}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                employmentStatus: status.id as PreApprovalFormData['employmentStatus'],
                              })
                            }
                            className={`p-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                              formData.employmentStatus === status.id
                                ? 'bg-amber-400/15 border-amber-400 text-amber-300'
                                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                            }`}
                          >
                            {status.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor={incomeId} className="text-sm font-bold text-slate-200">
                        Approximate Annual Household Income ($)
                      </label>
                      <div className="relative">
                        <DollarSign className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          id={incomeId}
                          type="number"
                          min="10000"
                          step="5000"
                          value={formData.approximateIncome}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              approximateIncome: Number(e.target.value),
                            })
                          }
                          className="w-full pl-9 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                      {errors.approximateIncome && (
                        <p className="text-xs text-amber-400 font-medium">{errors.approximateIncome}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-200">
                        Preferred Timeline to Close / Purchase
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { id: 'immediate', label: 'Immediate (0-30 days)' },
                          { id: '1-3-months', label: '1 - 3 Months' },
                          { id: '3-6-months', label: '3 - 6 Months' },
                          { id: 'exploring', label: 'Just Planning Ahead' },
                        ].map((time) => (
                          <button
                            key={time.id}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                timeline: time.id as PreApprovalFormData['timeline'],
                              })
                            }
                            className={`p-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                              formData.timeline === time.id
                                ? 'bg-amber-400/15 border-amber-400 text-amber-300'
                                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                            }`}
                          >
                            {time.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact Details & Notes */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor={nameId} className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                          <User className="w-4 h-4 text-amber-400" />
                          Full Name
                        </label>
                        <input
                          id={nameId}
                          type="text"
                          placeholder="Jane Doe"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-500"
                        />
                        {errors.fullName && (
                          <p className="text-xs text-amber-400 font-medium">{errors.fullName}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor={emailId} className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                          <Mail className="w-4 h-4 text-amber-400" />
                          Email Address
                        </label>
                        <input
                          id={emailId}
                          type="email"
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-500"
                        />
                        {errors.email && (
                          <p className="text-xs text-amber-400 font-medium">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor={phoneId} className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-amber-400" />
                        Phone Number
                      </label>
                      <input
                        id={phoneId}
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-500"
                      />
                      {errors.phone && (
                        <p className="text-xs text-amber-400 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor={notesId} className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-amber-400" />
                        Additional Questions or Specific Goals (Optional)
                      </label>
                      <textarea
                        id={notesId}
                        rows={3}
                        placeholder="Tell us about any specific loan program, property notes, or questions you have..."
                        value={formData.additionalNotes}
                        onChange={(e) =>
                          setFormData({ ...formData, additionalNotes: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-500 resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md shadow-amber-400/20 transition-all cursor-pointer"
                    >
                      <span>Continue to Step {currentStep + 1}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      id="submit-pre-approval-btn"
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-400/30 transition-all cursor-pointer"
                    >
                      <span>Submit Pre-Approval Request</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            /* Submission Confirmation Screen */
            <div
              id="submission-success-view"
              className="text-center py-10 px-4 space-y-6 animate-fade-in max-w-lg mx-auto"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-400/20 text-amber-400 border border-amber-400/40 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Request Received
                </h3>
                <p className="text-base text-slate-300 font-normal leading-relaxed">
                  A mortgage specialist can review your information and guide you through the next step.
                </p>
              </div>

              {/* Inquiry Summary Box */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-left text-xs space-y-2 text-slate-300">
                <p className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Submitted Details:
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-700">
                  <div>
                    <span className="text-slate-400">Name:</span> {formData.fullName}
                  </div>
                  <div>
                    <span className="text-slate-400">Goal:</span> {formData.mortgageGoal}
                  </div>
                  <div>
                    <span className="text-slate-400">Property Val:</span> ${formData.estimatedValue.toLocaleString()}
                  </div>
                  <div>
                    <span className="text-slate-400">Timeline:</span> {formData.timeline}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
