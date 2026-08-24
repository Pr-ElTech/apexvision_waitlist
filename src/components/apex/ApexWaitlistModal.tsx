import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { useEffect, useState } from "react";

type ApexWaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const modalEase = [0.16, 1, 0.3, 1] as const;
type AudienceType =
  | "gadget_owner"
  | "gadget_repairer"
  | "technology_professional"
  | "business_org"
  | "developer"
  | "other";

type DeviceType = "phone" | "laptop" | "tablet" | "wearable" | "multiple";

type DeviceAge = "<1_year" | "1-2_years" | "3+_years" | "not_sure";

type TopNeed =
  | "know_device_value"
  | "check_condition"
  | "verify_imei"
  | "check_blacklist"
  | "repair_sell_swap_upgrade"
  | "compare_devices";

type PainPoint =
  | "uncertain_resale_price"
  | "hidden_damage"
  | "blocked_or_stolen_device"
  | "repair_uncertainty"
  | "upgrade_timing"
  | "information_spread";

type TrustFactor =
  | "clear_explanation"
  | "independent_checks"
  | "accurate_market_data"
  | "verified_service_information"
  | "confidence_score";

type WaitlistFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  stateRegion: string;
  country: string;

  audienceType: AudienceType | "";
  primaryDeviceType: DeviceType | "";
  primaryDeviceBrandModel: string;
  deviceAge: DeviceAge | "";

  topNeed: TopNeed | "";
  biggestPainPoint: PainPoint | "";
  trustFactor: TrustFactor | "";
  previousSellSwap: boolean | null;

  discoveryNote: string;

  marketingConsent: boolean;
  termsAccepted: boolean;
};

const initialFormData: WaitlistFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  city: "",
  stateRegion: "",
  country: "Nigeria",

  audienceType: "",
  primaryDeviceType: "",
  primaryDeviceBrandModel: "",
  deviceAge: "",

  topNeed: "",
  biggestPainPoint: "",
  trustFactor: "",
  previousSellSwap: null,

  discoveryNote: "",

  marketingConsent: false,
  termsAccepted: false,
};

const audienceOptions: Array<{
  value: AudienceType;
  label: string;
}> = [
  { value: "gadget_owner", label: "Gadget owner" },
  { value: "gadget_repairer", label: "Gadget repairer" },
  { value: "technology_professional", label: "Technology professional" },
  { value: "business_org", label: "Business / organization" },
  { value: "developer", label: "Developer" },
  { value: "other", label: "Other" },
];

const deviceOptions: Array<{
  value: DeviceType;
  label: string;
}> = [
  { value: "phone", label: "Phone" },
  { value: "laptop", label: "Laptop" },
  { value: "tablet", label: "Tablet" },
  { value: "wearable", label: "Smartwatch / wearable" },
  { value: "multiple", label: "Multiple devices" },
];

const deviceAgeOptions: Array<{
  value: DeviceAge;
  label: string;
}> = [
  { value: "<1_year", label: "Less than 1 year" },
  { value: "1-2_years", label: "1–2 years" },
  { value: "3+_years", label: "3+ years" },
  { value: "not_sure", label: "Not sure" },
];

const topNeedOptions: Array<{
  value: TopNeed;
  label: string;
}> = [
  {
    value: "know_device_value",
    label: "Know the current value of my device",
  },
  {
    value: "check_condition",
    label: "Check my device condition",
  },
  {
    value: "verify_imei",
    label: "Verify device identity / IMEI",
  },
  {
    value: "check_blacklist",
    label: "Check whether a device is blacklisted or flagged",
  },
  {
    value: "repair_sell_swap_upgrade",
    label: "Know whether to repair, sell, swap, or upgrade",
  },
  {
    value: "compare_devices",
    label: "Compare devices before buying or switching",
  },
];

const painPointOptions: Array<{
  value: PainPoint;
  label: string;
}> = [
  {
    value: "uncertain_resale_price",
    label: "Not knowing a fair resale or swap price",
  },
  {
    value: "hidden_damage",
    label: "Hidden damage or poor condition",
  },
  {
    value: "blocked_or_stolen_device",
    label: "Fear of buying a blocked or stolen device",
  },
  {
    value: "repair_uncertainty",
    label: "Uncertainty about repairs",
  },
  {
    value: "upgrade_timing",
    label: "Not knowing when to upgrade",
  },
  {
    value: "information_spread",
    label: "Too much information spread across different places",
  },
];

const trustFactorOptions: Array<{
  value: TrustFactor;
  label: string;
}> = [
  {
    value: "clear_explanation",
    label: "A clear explanation of how the result was reached",
  },
  {
    value: "independent_checks",
    label: "Independent device checks",
  },
  {
    value: "accurate_market_data",
    label: "Accurate market / value data",
  },
  {
    value: "verified_service_information",
    label: "Verified repair or service information",
  },
  {
    value: "confidence_score",
    label: "A confidence score or evidence summary",
  },
];

const inputClassName =
  "w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3.5 text-sm text-[#071A3A] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#0B5CFF]/40 focus:ring-4 focus:ring-[#0B5CFF]/8";

const labelClassName =
  "mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#071A3A]";

const optionClassName = (active: boolean) =>
  [
    "w-full rounded-2xl border px-4 py-3 text-left text-sm transition-all duration-200",
    active
      ? "border-[#0B5CFF]/40 bg-blue-50 text-[#0B5CFF] shadow-[0_8px_25px_rgba(11,92,255,0.07)]"
      : "border-slate-200/80 bg-white/70 text-slate-600 hover:border-blue-200 hover:bg-white",
  ].join(" ");

const ApexWaitlistModal = ({ isOpen, onClose }: ApexWaitlistModalProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<WaitlistFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData(initialFormData);
        setIsSubmitting(false);
        setIsSuccess(false);
      }, 200);
    }
  }, [isOpen]);

  const updateField = <K extends keyof WaitlistFormData>(
    field: K,
    value: WaitlistFormData[K],
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const canContinue =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.phoneNumber.trim();

  const canSubmit =
    formData.audienceType &&
    formData.primaryDeviceType &&
    formData.topNeed &&
    formData.biggestPainPoint &&
    formData.trustFactor &&
    formData.previousSellSwap !== null &&
    formData.termsAccepted &&
    formData.marketingConsent;

  const handleNext = () => {
    if (!canContinue) return;
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);

    try {
      /*
       * Backend integration will eventually go here:
       *
       * POST /api/early-access
       *
       * const response = await fetch("/api/early-access", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify(formData),
       * });
       *
       * if (!response.ok) {
       *   throw new Error("Unable to join the waitlist.");
       * }
       */

      await new Promise((resolve) => setTimeout(resolve, 900));

      setIsSuccess(true);
    } catch (error) {
      console.error("APEX waitlist submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        {/* Backdrop */}
        <motion.button
          type="button"
          aria-label="Close waitlist modal"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 cursor-default bg-[#071A3A]/35 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="apex-waitlist-title"
          className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white/92 shadow-[0_30px_100px_rgba(7,26,58,0.20)] backdrop-blur-2xl"
        >
          {/* Top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-[#0A2D82] via-[#0B5CFF] to-[#38BDF8]" />

          {/* Header */}
          <div className="flex items-start justify-between gap-6 px-6 pb-5 pt-6 sm:px-8 sm:pt-7">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_10px_rgba(183,216,63,0.65)]" />

                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#0B5CFF]">
                  Project APEX
                </span>
              </div>

              <h2
                id="apex-waitlist-title"
                className="text-2xl font-black tracking-[-0.03em] text-[#071A3A] sm:text-3xl"
              >
                {isSuccess
                  ? "You're on the list."
                  : "Get early access to APEX."}
              </h2>

              {!isSuccess && (
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Help us understand what you need from the future of device
                  intelligence.
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-white hover:text-[#0B5CFF]"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Progress */}
          {!isSuccess && (
            <div className="px-6 pb-5 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    animate={{
                      width: step === 1 ? "50%" : "100%",
                    }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[#0A2D82] via-[#0B5CFF] to-[#38BDF8]"
                  />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  {step}/2
                </span>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="overflow-y-auto px-6 pb-6 sm:px-8 sm:pb-8">
            {isSuccess ? (
              <div className="py-10 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: modalEase,
                  }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7C8] text-[#0A2D82]"
                >
                  <Check size={28} strokeWidth={2.5} />
                </motion.div>

                <h3 className="mt-6 text-xl font-black text-[#071A3A]">
                  Thanks for joining the APEX journey.
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
                  Your responses will help shape what we build next. We&apos;ll
                  keep you updated as APEX gets closer.
                </p>

                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#0B5CFF] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(11,92,255,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2D82]"
                >
                  Continue
                </button>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step-one"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* First Name */}
                      <div>
                        <label
                          htmlFor="apex-first-name"
                          className={labelClassName}
                        >
                          First name
                        </label>

                        <input
                          id="apex-first-name"
                          type="text"
                          value={formData.firstName}
                          onChange={(event) =>
                            updateField("firstName", event.target.value)
                          }
                          placeholder="Your first name"
                          className={inputClassName}
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label
                          htmlFor="apex-last-name"
                          className={labelClassName}
                        >
                          Last name
                        </label>

                        <input
                          id="apex-last-name"
                          type="text"
                          value={formData.lastName}
                          onChange={(event) =>
                            updateField("lastName", event.target.value)
                          }
                          placeholder="Your last name"
                          className={inputClassName}
                        />
                      </div>

                      {/* Email */}
                      <div className="sm:col-span-2">
                        <label htmlFor="apex-email" className={labelClassName}>
                          Email address
                        </label>

                        <input
                          id="apex-email"
                          type="email"
                          value={formData.email}
                          onChange={(event) =>
                            updateField("email", event.target.value)
                          }
                          placeholder="you@example.com"
                          className={inputClassName}
                        />
                      </div>

                      {/* Phone */}
                      <div className="sm:col-span-2">
                        <label htmlFor="apex-phone" className={labelClassName}>
                          Phone number
                        </label>

                        <input
                          id="apex-phone"
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(event) =>
                            updateField("phoneNumber", event.target.value)
                          }
                          placeholder="+234 801 234 5678"
                          className={inputClassName}
                        />
                      </div>

                      {/* City */}
                      <div>
                        <label htmlFor="apex-city" className={labelClassName}>
                          City
                        </label>

                        <input
                          id="apex-city"
                          type="text"
                          value={formData.city}
                          onChange={(event) =>
                            updateField("city", event.target.value)
                          }
                          placeholder="Lagos"
                          className={inputClassName}
                        />
                      </div>

                      {/* State */}
                      <div>
                        <label htmlFor="apex-state" className={labelClassName}>
                          State / region
                        </label>

                        <input
                          id="apex-state"
                          type="text"
                          value={formData.stateRegion}
                          onChange={(event) =>
                            updateField("stateRegion", event.target.value)
                          }
                          placeholder="Lagos"
                          className={inputClassName}
                        />
                      </div>
                    </div>

                    {/* Continue */}
                    <div className="mt-7 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!canContinue}
                        className="group inline-flex items-center gap-3 rounded-2xl bg-[#0B5CFF] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(11,92,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2D82] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                      >
                        Continue
                        <ArrowRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step-two"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {/* Audience */}
                    <div>
                      <label className={labelClassName}>
                        Which best describes you?
                      </label>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {audienceOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                              updateField("audienceType", option.value)
                            }
                            className={optionClassName(
                              formData.audienceType === option.value,
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Device */}
                    <div className="mt-7">
                      <label className={labelClassName}>
                        What device matters most to you?
                      </label>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {deviceOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                              updateField("primaryDeviceType", option.value)
                            }
                            className={optionClassName(
                              formData.primaryDeviceType === option.value,
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Device details */}
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="apex-device-model"
                          className={labelClassName}
                        >
                          Device / model
                          <span className="ml-1 text-slate-400">
                            (optional)
                          </span>
                        </label>

                        <input
                          id="apex-device-model"
                          type="text"
                          value={formData.primaryDeviceBrandModel}
                          onChange={(event) =>
                            updateField(
                              "primaryDeviceBrandModel",
                              event.target.value,
                            )
                          }
                          placeholder="iPhone 14 Pro"
                          className={inputClassName}
                        />
                      </div>

                      <div>
                        <label className={labelClassName}>How old is it?</label>

                        <div className="grid grid-cols-2 gap-2">
                          {deviceAgeOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() =>
                                updateField("deviceAge", option.value)
                              }
                              className={optionClassName(
                                formData.deviceAge === option.value,
                              )}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Top need */}
                    <div className="mt-7">
                      <label className={labelClassName}>
                        What would you want APEX to help you do most?
                      </label>

                      <div className="grid gap-2">
                        {topNeedOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => updateField("topNeed", option.value)}
                            className={optionClassName(
                              formData.topNeed === option.value,
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Pain point */}
                    <div className="mt-7">
                      <label className={labelClassName}>
                        What is the biggest device problem you face?
                      </label>

                      <div className="grid gap-2">
                        {painPointOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                              updateField("biggestPainPoint", option.value)
                            }
                            className={optionClassName(
                              formData.biggestPainPoint === option.value,
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Trust factor */}
                    <div className="mt-7">
                      <label className={labelClassName}>
                        What would make you trust an APEX result?
                      </label>

                      <div className="grid gap-2">
                        {trustFactorOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                              updateField("trustFactor", option.value)
                            }
                            className={optionClassName(
                              formData.trustFactor === option.value,
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sell / swap */}
                    <div className="mt-7">
                      <label className={labelClassName}>
                        Have you sold, swapped, or traded a device in the last
                        12 months?
                      </label>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => updateField("previousSellSwap", true)}
                          className={optionClassName(
                            formData.previousSellSwap === true,
                          )}
                        >
                          Yes
                        </button>

                        <button
                          type="button"
                          onClick={() => updateField("previousSellSwap", false)}
                          className={optionClassName(
                            formData.previousSellSwap === false,
                          )}
                        >
                          No
                        </button>
                      </div>
                    </div>

                    {/* Discovery note */}
                    <div className="mt-7">
                      <label
                        htmlFor="apex-discovery-note"
                        className={labelClassName}
                      >
                        Anything else you want us to know?
                        <span className="ml-1 text-slate-400">(optional)</span>
                      </label>

                      <textarea
                        id="apex-discovery-note"
                        rows={4}
                        value={formData.discoveryNote}
                        onChange={(event) =>
                          updateField("discoveryNote", event.target.value)
                        }
                        placeholder="Tell us what you wish existed for your devices..."
                        className={`${inputClassName} resize-none`}
                      />
                    </div>

                    {/* Consent */}
                    <div className="mt-7 space-y-3">
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          checked={formData.marketingConsent}
                          onChange={(event) =>
                            updateField(
                              "marketingConsent",
                              event.target.checked,
                            )
                          }
                          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0B5CFF] focus:ring-[#0B5CFF]"
                        />

                        <span className="text-xs leading-5 text-slate-500">
                          I&apos;d like to receive APEX updates, product news,
                          and early-access invitations.
                        </span>
                      </label>

                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          checked={formData.termsAccepted}
                          onChange={(event) =>
                            updateField("termsAccepted", event.target.checked)
                          }
                          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0B5CFF] focus:ring-[#0B5CFF]"
                        />

                        <span className="text-xs leading-5 text-slate-500">
                          I agree to the applicable APEX terms and privacy
                          notice.
                        </span>
                      </label>
                    </div>

                    {/* Footer actions */}
                    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-5 py-3.5 text-sm font-bold text-slate-600 transition-all duration-200 hover:border-blue-200 hover:text-[#0B5CFF]"
                      >
                        <ArrowLeft size={16} />
                        Back
                      </button>

                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!canSubmit || isSubmitting}
                        className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0B5CFF] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(11,92,255,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2D82] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Joining...
                          </>
                        ) : (
                          <>
                            Join the APEX Waitlist
                            <ArrowRight
                              size={17}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ApexWaitlistModal;
