import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Loader2, Sparkles, Phone, ExternalLink } from 'lucide-react';
import { IntakeSubmissionResult } from '../types';

interface ConsultationSectionProps {
  onOpenModal: (source?: string) => void;
}

const STRATEGIC_NEEDS = [
  'Pipeline Acquisition',
  'Flagship Platform Build',
  'Attribution Telemetry',
  'Enterprise Re-Brand',
  'Multivariate CRO',
];

const SECTORS = [
  { value: 'travel', label: 'Travel & Tourism' },
  { value: 'hospitality', label: 'Hospitality & Luxury' },
  { value: 'education', label: 'Education & EdTech' },
  { value: 'healthcare', label: 'Healthcare & MedTech' },
  { value: 'fitness', label: 'Fitness & Wellness' },
  { value: 'retail', label: 'Retail & Direct-to-Consumer' },
  { value: 'services', label: 'Professional Services' },
  { value: 'tech', label: 'Technology & B2B SaaS' },
];

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({ onOpenModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: 'Technology & B2B SaaS',
    needs: ['Pipeline Acquisition', 'Flagship Platform Build'],
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<IntakeSubmissionResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleNeed = (need: string) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(need);
      return {
        ...prev,
        needs: exists ? prev.needs.filter((n) => n !== need) : [...prev.needs, need],
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
          source: 'Consultation Intake Section Form',
        }),
      });

      const data: IntakeSubmissionResult = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to dispatch email.');
      }

      setResult(data);
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMsg(error.message || 'Error submitting strategy intake.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#f8f9ff] relative overflow-hidden py-12 lg:py-16" id="consultation">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-outline-variant/30 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Left Column: Context & Flow */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="font-['Inter'] text-[11px] uppercase tracking-widest text-secondary font-bold">
                  Executive Consultation Intake
                </span>
                <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight mt-2">
                  Ready to Build Your Growth Engine?
                </h2>
                <p className="font-['Inter'] text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                  Initiate an institutional consultation with NX Growth partners. Receive a tailored TAM diagnostic and customized pipeline acceleration blueprint.
                </p>

                {/* Scaled Inbound Trajectory Visual */}
                <div className="mt-6 bg-surface-container-low/70 p-4 rounded-2xl border border-outline-variant/30">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-primary font-bold uppercase tracking-wider block mb-3">
                    The Scaled Inbound Trajectory
                  </span>
                  <div className="flex items-center justify-between gap-1 text-center">
                    <div className="flex-1 bg-white py-2 px-1 rounded-xl border border-outline-variant/20 shadow-2xs">
                      <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-primary block">
                        Audience
                      </span>
                      <span className="font-mono text-[9px] text-on-surface-variant">Qualified TAM</span>
                    </div>

                    <ArrowRight className="w-3.5 h-3.5 text-outline-variant shrink-0" />

                    <div className="flex-1 bg-white py-2 px-1 rounded-xl border border-outline-variant/20 shadow-2xs">
                      <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-primary block">
                        Leads
                      </span>
                      <span className="font-mono text-[9px] text-on-surface-variant">High-Intent</span>
                    </div>

                    <ArrowRight className="w-3.5 h-3.5 text-outline-variant shrink-0" />

                    <div className="flex-1 bg-white py-2 px-1 rounded-xl border border-outline-variant/20 shadow-2xs">
                      <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-primary block">
                        Customers
                      </span>
                      <span className="font-mono text-[9px] text-on-surface-variant">Higher LTV</span>
                    </div>

                    <ArrowRight className="w-3.5 h-3.5 text-outline-variant shrink-0" />

                    <div className="flex-1 bg-secondary text-white py-2 px-1 rounded-xl shadow-2xs">
                      <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold block">
                        Growth
                      </span>
                      <span className="font-mono text-[9px] text-secondary-fixed">Compound</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Partner Email Card */}
              <div className="pt-4 border-t border-surface-container space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary shrink-0 border border-outline-variant/20">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
                      Confidential Partner Inquiry
                    </div>
                    <a
                      href="mailto:contact@nexisparkx.com"
                      className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-secondary font-bold hover:underline"
                    >
                      contact@nexisparkx.com
                    </a>
                  </div>
                </div>

                {/* Quick trigger popup CTA */}
                <button
                  type="button"
                  onClick={() => onOpenModal('Bottom Section Fast Track Popup')}
                  className="w-full py-2 px-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-primary font-bold text-xs flex items-center justify-center gap-2 border border-outline-variant/30 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-secondary" />
                  <span>Prefer Modal Popup Intake? Click Here</span>
                </button>
              </div>
            </div>

            {/* Right Column: Intake Form Connected to Nodemailer */}
            <div className="lg:col-span-7 bg-surface-container-low/40 p-5 sm:p-8 rounded-2xl border border-outline-variant/30">
              {result ? (
                /* Success banner inside form */
                <div className="p-6 bg-white rounded-2xl border border-emerald-200 shadow-sm text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary font-['Plus_Jakarta_Sans']">
                    Strategic Request Dispatched!
                  </h3>
                  <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
                    Your briefing was mailed directly to <strong className="text-secondary font-semibold">contact@nexisparkx.com</strong> via Nodemailer. An NX Growth operating partner will reach out within 4 business hours.
                  </p>

                  {result.previewUrl && (
                    <div className="p-2.5 bg-secondary-fixed/30 rounded-xl text-xs flex items-center justify-center gap-2 border border-secondary/20">
                      <span className="text-primary font-medium">Nodemailer Preview:</span>
                      <a
                        href={result.previewUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-secondary font-bold inline-flex items-center gap-1 hover:underline"
                      >
                        <span>View Email</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setResult(null)}
                    className="py-2 px-5 bg-primary text-white rounded-xl text-xs font-bold mt-2 hover:bg-primary-container transition-colors shadow-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Row 1: Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-primary mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full h-10 px-3 bg-white text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none shadow-2xs transition-all placeholder:text-outline"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-primary mb-1">
                        Company / Organization <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Apex Global Corp"
                        className="w-full h-10 px-3 bg-white text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none shadow-2xs transition-all placeholder:text-outline"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-primary mb-1">
                        Corporate Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@apexcorp.com"
                        className="w-full h-10 px-3 bg-white text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none shadow-2xs transition-all placeholder:text-outline"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-primary mb-1">
                        Direct Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full h-10 px-3 bg-white text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none shadow-2xs transition-all placeholder:text-outline"
                      />
                    </div>
                  </div>

                  {/* Row 3: Industry Sector */}
                  <div>
                    <label className="block text-[11px] font-bold text-primary mb-1">
                      Industry Sector
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full h-10 px-3 bg-white text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none shadow-2xs transition-all"
                    >
                      {SECTORS.map((sec) => (
                        <option key={sec.value} value={sec.label}>
                          {sec.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Strategic Needs Chips */}
                  <div>
                    <label className="block text-[11px] font-bold text-primary mb-1.5">
                      Primary Strategic Objective (Select Multiple)
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {STRATEGIC_NEEDS.map((need) => {
                        const isSelected = formData.needs.includes(need);
                        return (
                          <button
                            type="button"
                            key={need}
                            onClick={() => toggleNeed(need)}
                            className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all border ${
                              isSelected
                                ? 'bg-secondary text-white border-secondary shadow-xs'
                                : 'bg-white text-on-surface-variant border-outline-variant/30 hover:border-secondary/40'
                            }`}
                          >
                            {need}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 5: Scale Target Note */}
                  <div>
                    <label className="block text-[11px] font-bold text-primary mb-1">
                      Brief Overview of Scale Target
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current bottleneck, revenue benchmarks, or planned strategic roadmap..."
                      className="w-full p-3 bg-white text-primary text-xs rounded-xl border border-outline-variant/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none shadow-2xs transition-all placeholder:text-outline resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 bg-primary hover:bg-primary-container text-white font-['Plus_Jakarta_Sans'] font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] disabled:opacity-75"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending via Nodemailer...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Strategy Intake</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-on-surface-variant">
                    Nodemailer will route this directly to <span className="text-primary font-semibold">contact@nexisparkx.com</span> with zero third-party tracking.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
