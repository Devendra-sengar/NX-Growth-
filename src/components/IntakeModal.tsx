import React, { useState } from 'react';
import { IntakeFormData, IntakeSubmissionResult } from '../types';
import { X, CheckCircle2, ArrowRight, Loader2, Mail, ExternalLink, Building2, User, Phone, Briefcase } from 'lucide-react';
import { NxLogo } from './NxLogo';

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  ctaSource?: string;
}

const STRATEGIC_NEEDS_OPTIONS = [
  'Pipeline Acquisition',
  'Flagship Platform Build',
  'Attribution Telemetry',
  'Enterprise Re-Brand',
  'Multivariate CRO',
  'Full Commercial Ecosystem',
];

const INDUSTRY_OPTIONS = [
  'Technology & B2B SaaS',
  'Travel & Tourism',
  'Hospitality & Luxury',
  'Education & EdTech',
  'Healthcare & MedTech',
  'Fitness & Wellness',
  'Retail & Local Commerce',
  'Professional Services',
  'Other Enterprise Sector',
];

export const IntakeModal: React.FC<IntakeModalProps> = ({
  isOpen,
  onClose,
  ctaSource = 'CTA Button',
}) => {
  const [formData, setFormData] = useState<IntakeFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: 'Technology & B2B SaaS',
    needs: ['Pipeline Acquisition', 'Flagship Platform Build'],
    message: '',
    source: ctaSource,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<IntakeSubmissionResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleNeedToggle = (need: string) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(need);
      return {
        ...prev,
        needs: exists
          ? prev.needs.filter((item) => item !== need)
          : [...prev.needs, need],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/send-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: ctaSource,
        }),
      });

      const data: IntakeSubmissionResult = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to dispatch email via Nodemailer.');
      }

      setResult(data);
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMsg(error.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setErrorMsg(null);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      industry: 'Technology & B2B SaaS',
      needs: ['Pipeline Acquisition', 'Flagship Platform Build'],
      message: '',
      source: ctaSource,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-primary/70 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-2xl bg-[#ffffff] rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-primary text-on-primary border-b border-primary-container">
          <div className="flex items-center gap-2.5">
            <NxLogo className="w-8 h-8 shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-white font-['Plus_Jakarta_Sans']">
                  Build Growth Strategy
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-secondary/30 text-secondary-fixed border border-secondary/40">
                  Nodemailer Engine
                </span>
              </div>
              <p className="text-[11px] text-primary-fixed-dim leading-none mt-0.5">
                Direct Executive Consultation Intake
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-primary-fixed-dim hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {result ? (
            /* SUCCESS STATE */
            <div className="space-y-4 py-2">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold text-primary font-['Plus_Jakarta_Sans']">
                  Consultation Intake Dispatched!
                </h3>
                <p className="text-xs text-on-surface-variant max-w-md mx-auto">
                  Your strategy requirements have been formatted and emailed directly via Nodemailer to{' '}
                  <strong className="text-secondary font-semibold">contact@nexisparkx.com</strong>.
                </p>
              </div>

              {/* Data Summary Box */}
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 text-xs space-y-2">
                <div className="font-bold text-primary text-[11px] uppercase tracking-wider border-b border-outline-variant/20 pb-1.5 flex items-center justify-between">
                  <span>Dispatched Lead Details</span>
                  <span className="text-emerald-700 font-mono font-bold">Status: Delivered 200</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] pt-1">
                  <div>
                    <span className="text-on-surface-variant block text-[10px]">Candidate Name</span>
                    <span className="font-semibold text-primary">{result.data?.fullName}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block text-[10px]">Company / Organization</span>
                    <span className="font-semibold text-primary">{result.data?.companyName}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block text-[10px]">Corporate Email</span>
                    <span className="font-semibold text-primary">{result.data?.email}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block text-[10px]">Industry</span>
                    <span className="font-semibold text-primary">{result.data?.industry}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-on-surface-variant block text-[10px]">Strategic Focus</span>
                    <span className="font-semibold text-secondary">{result.data?.needs}</span>
                  </div>
                </div>
              </div>

              {result.previewUrl && (
                <div className="p-3 bg-secondary-fixed/30 border border-secondary/20 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Mail className="w-4 h-4 text-secondary shrink-0" />
                    <span>Nodemailer Ethereal Email Preview Generated</span>
                  </div>
                  <a
                    href={result.previewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-secondary font-bold hover:underline"
                  >
                    <span>View Email</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-outline-variant/40 hover:bg-surface-container text-primary font-semibold text-xs transition-colors"
                >
                  Submit Another Lead
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-container text-white font-bold text-xs transition-colors shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-surface-container-low/60 p-3 rounded-xl border border-outline-variant/30 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">info</span>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Fill out your corporate details below. Submitting will immediately trigger our server-side <strong className="text-primary font-semibold">Nodemailer service</strong> to deliver your full briefing directly to our managing partner inbox.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Row 1: Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-primary mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-outline absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="w-full h-10 pl-9 pr-3 bg-surface-container-low text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-primary mb-1">
                    Company / Organization <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-outline absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Global Corp"
                      className="w-full h-10 pl-9 pr-3 bg-surface-container-low text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-primary mb-1">
                    Corporate Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-outline absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="marcus@apexcorp.com"
                      className="w-full h-10 pl-9 pr-3 bg-surface-container-low text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-primary mb-1">
                    Direct Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-outline absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full h-10 pl-9 pr-3 bg-surface-container-low text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Industry Sector */}
              <div>
                <label className="block text-[11px] font-bold text-primary mb-1">
                  Primary Industry Sector
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-outline absolute left-3 top-3 pointer-events-none" />
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full h-10 pl-9 pr-8 bg-surface-container-low text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all appearance-none cursor-pointer"
                  >
                    {INDUSTRY_OPTIONS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined text-[18px] text-outline absolute right-3 top-2.5 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Strategic Objectives (Multiselect Chips) */}
              <div>
                <label className="block text-[11px] font-bold text-primary mb-1.5">
                  Primary Strategic Objective (Select Multiple)
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {STRATEGIC_NEEDS_OPTIONS.map((option) => {
                    const isSelected = formData.needs.includes(option);
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => handleNeedToggle(option)}
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all border ${
                          isSelected
                            ? 'bg-secondary text-white border-secondary shadow-xs'
                            : 'bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-secondary/40'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Scale Target Overview */}
              <div>
                <label className="block text-[11px] font-bold text-primary mb-1">
                  Brief Overview of Scale Target &amp; Revenue Goals
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current bottlenecks, target ARR benchmarks, or planned Q1/Q4 expansion..."
                  className="w-full p-3 bg-surface-container-low text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-primary hover:bg-primary-container text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Dispatching via Nodemailer...</span>
                  </>
                ) : (
                  <>
                    <span>Send Strategy Intake</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center">
                <span className="text-[10px] text-outline font-medium">
                  Direct recipient: <span className="text-primary font-semibold">contact@nexisparkx.com</span> • Encrypted &amp; Confidential
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
