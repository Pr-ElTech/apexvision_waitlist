import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";

import ApexSuccessModal from "./ApexSuccessModal";

const OPPORTUNITY_TYPES = [
  "Strategic Collaboration",
  "Technology Partnership",
  "Distribution Partnership",
  "Sponsorship",
  "Investment",
  "Other",
] as const;

const generateReference = () => {
  const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();

  return `APX-P-${suffix}`;
};

const ApexPartnerForm = () => {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [opportunityType, setOpportunityType] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !fullName ||
      !workEmail ||
      !company ||
      !role ||
      !country ||
      !opportunityType ||
      !message
    ) {
      return;
    }

    setIsSubmitting(true);

    /*
     * TEMPORARY FRONTEND MOCK
     *
     * Later:
     *
     * POST /api/partnership-inquiries
     *
     * {
     *   fullName,
     *   workEmail,
     *   company,
     *   role,
     *   country,
     *   website,
     *   opportunityType,
     *   message
     * }
     */

    window.setTimeout(() => {
      const newReferenceId = generateReference();

      setReferenceId(newReferenceId);
      setIsSubmitting(false);
      setIsModalOpen(true);
    }, 700);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="rounded-[30px] border border-white/80 bg-white/70 p-6 shadow-[0_24px_80px_rgba(11,92,255,0.08)] backdrop-blur-2xl sm:p-8"
      >
        {/* Header */}
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0B5CFF]">
            Build With APEX
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#071A3A] sm:text-3xl">
            Start a conversation.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
            Tell us about your organization, capability, or opportunity and how
            you think you could contribute to the APEX journey.
          </p>
        </div>

        {/* Basic details */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="partner-name"
              className="text-sm font-bold text-[#071A3A]"
            >
              Full name
            </label>

            <input
              id="partner-name"
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your full name"
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-[#071A3A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0B5CFF] focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div>
            <label
              htmlFor="partner-email"
              className="text-sm font-bold text-[#071A3A]"
            >
              Work email
            </label>

            <input
              id="partner-email"
              type="email"
              value={workEmail}
              onChange={(event) => setWorkEmail(event.target.value)}
              placeholder="you@company.com"
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-[#071A3A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0B5CFF] focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div>
            <label
              htmlFor="partner-company"
              className="text-sm font-bold text-[#071A3A]"
            >
              Company / organization
            </label>

            <input
              id="partner-company"
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder="Organization name"
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-[#071A3A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0B5CFF] focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div>
            <label
              htmlFor="partner-role"
              className="text-sm font-bold text-[#071A3A]"
            >
              Your role
            </label>

            <input
              id="partner-role"
              type="text"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              placeholder="Founder, Director, Product Lead..."
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-[#071A3A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0B5CFF] focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div>
            <label
              htmlFor="partner-country"
              className="text-sm font-bold text-[#071A3A]"
            >
              Country
            </label>

            <input
              id="partner-country"
              type="text"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              placeholder="Nigeria"
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-[#071A3A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0B5CFF] focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div>
            <label
              htmlFor="partner-website"
              className="text-sm font-bold text-[#071A3A]"
            >
              Website / LinkedIn
              <span className="ml-2 text-xs font-medium text-slate-400">
                Optional
              </span>
            </label>

            <input
              id="partner-website"
              type="url"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              placeholder="https://..."
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-[#071A3A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0B5CFF] focus:ring-4 focus:ring-blue-500/10"
            />
          </div>
        </div>

        {/* Opportunity type */}
        <div className="mt-7">
          <label className="text-sm font-bold text-[#071A3A]">
            I want to...
          </label>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {OPPORTUNITY_TYPES.map((item) => {
              const isSelected = opportunityType === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setOpportunityType(item)}
                  className={`
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isSelected
                        ? "border-[#0B5CFF] bg-blue-50 text-[#0B5CFF] shadow-sm"
                        : "border-slate-200 bg-white/60 text-slate-600 hover:border-blue-200 hover:bg-white"
                    }
                  `}
                >
                  <span className="flex items-center justify-between gap-3">
                    {item}

                    {isSelected && (
                      <Check
                        size={16}
                        className="shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div className="mt-7">
          <label
            htmlFor="partner-message"
            className="text-sm font-bold text-[#071A3A]"
          >
            Tell us about the opportunity
          </label>

          <textarea
            id="partner-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell us what you have in mind, what you can contribute, or what you'd like to explore with PR-EL TECH."
            required
            rows={6}
            className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm leading-7 text-[#071A3A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0B5CFF] focus:ring-4 focus:ring-blue-500/10"
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileTap={{ scale: 0.985 }}
          className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#0B5CFF] px-6 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(11,92,255,0.2)] transition-all duration-300 hover:bg-[#0A2D82] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>
            {isSubmitting ? "Sending inquiry..." : "Start the conversation"}
          </span>

          {!isSubmitting && (
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          )}
        </motion.button>

        <p className="mt-4 text-center text-xs leading-6 text-slate-400">
          Your information will only be used to respond to this partnership
          inquiry.
        </p>
      </form>

      <ApexSuccessModal
        isOpen={isModalOpen}
        title="Your inquiry has been received."
        message="Thank you for reaching out to build with APEX. We'll review your information and contact you through the email address you provided."
        referenceId={referenceId}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ApexPartnerForm;
