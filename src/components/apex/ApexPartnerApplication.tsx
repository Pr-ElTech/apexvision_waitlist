import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Store,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

type ApplicationStep = 1 | 2 | 3 | 4;

type OrganizationType =
  | "merchant"
  | "repairer"
  | "retailer"
  | "distributor"
  | "technology_company"
  | "developer"
  | "organization"
  | "investor"
  | "other";

type PartnershipType =
  | "service_partner"
  | "device_marketplace"
  | "repair_network"
  | "technology_integration"
  | "distribution"
  | "strategic_partnership"
  | "sponsorship"
  | "investment"
  | "other";

type BusinessStage =
  | "idea"
  | "early_stage"
  | "growing"
  | "established"
  | "enterprise";

type ContactMethod = "email" | "phone" | "whatsapp";

type PartnerFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  organizationName: string;
  organizationType: OrganizationType | "";
  role: string;

  city: string;
  stateRegion: string;
  country: string;

  website: string;
  socialLink: string;

  partnershipType: PartnershipType | "";
  businessCategory: string;
  servicesOffered: string;
  deviceCategories: string[];

  whatYouWantToBuild: string;
  whatYouCanOffer: string;
  currentCustomerBase: string;
  businessStage: BusinessStage | "";

  preferredContactMethod: ContactMethod | "";

  marketingConsent: boolean;
  termsAccepted: boolean;
};

const initialFormData: PartnerFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",

  organizationName: "",
  organizationType: "",
  role: "",

  city: "",
  stateRegion: "",
  country: "Nigeria",

  website: "",
  socialLink: "",

  partnershipType: "",
  businessCategory: "",
  servicesOffered: "",
  deviceCategories: [],

  whatYouWantToBuild: "",
  whatYouCanOffer: "",
  currentCustomerBase: "",
  businessStage: "",

  preferredContactMethod: "",

  marketingConsent: false,
  termsAccepted: false,
};

const organizationOptions = [
  { value: "merchant", label: "Merchant" },
  { value: "repairer", label: "Repairer" },
  { value: "retailer", label: "Retailer" },
  { value: "distributor", label: "Distributor" },
  { value: "technology_company", label: "Technology company" },
  { value: "developer", label: "Developer" },
  { value: "organization", label: "Organization" },
  { value: "investor", label: "Investor" },
  { value: "other", label: "Other" },
] as const;

const partnershipOptions = [
  { value: "service_partner", label: "Service partnership" },
  { value: "device_marketplace", label: "Device marketplace" },
  { value: "repair_network", label: "Repair network" },
  { value: "technology_integration", label: "Technology integration" },
  { value: "distribution", label: "Distribution" },
  { value: "strategic_partnership", label: "Strategic partnership" },
  { value: "sponsorship", label: "Sponsorship" },
  { value: "investment", label: "Investment" },
  { value: "other", label: "Other" },
] as const;

const businessStageOptions = [
  { value: "idea", label: "Idea / pre-launch" },
  { value: "early_stage", label: "Early stage" },
  { value: "growing", label: "Growing" },
  { value: "established", label: "Established" },
  { value: "enterprise", label: "Enterprise" },
] as const;

const contactMethodOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

const deviceCategoryOptions = [
  "Phones",
  "Laptops",
  "Tablets",
  "Wearables",
  "Accessories",
  "Other devices",
] as const;

const inputClassName =
  "w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3.5 text-sm text-[#071A3A] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#0B5CFF]/40 focus:ring-4 focus:ring-[#0B5CFF]/8";

const textareaClassName =
  "w-full resize-none rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3.5 text-sm leading-7 text-[#071A3A] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#0B5CFF]/40 focus:ring-4 focus:ring-[#0B5CFF]/8";

const labelClassName =
  "mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#071A3A]";

const revealEase = [0.16, 1, 0.3, 1] as const;

const optionClassName = (active: boolean) =>
  [
    "w-full cursor-pointer rounded-2xl border px-4 py-3 text-left text-sm transition-all duration-200",
    active
      ? "border-[#0B5CFF]/40 bg-blue-50 text-[#0B5CFF] shadow-[0_8px_25px_rgba(11,92,255,0.07)]"
      : "border-slate-200/80 bg-white/70 text-slate-600 hover:border-blue-200 hover:bg-white",
  ].join(" ");

type FieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
};

const Field = ({ label, htmlFor, children, optional = false }: FieldProps) => (
  <div>
    <label htmlFor={htmlFor} className={labelClassName}>
      {label}

      {optional && (
        <span className="ml-1 font-medium normal-case tracking-normal text-slate-400">
          (optional)
        </span>
      )}
    </label>

    {children}
  </div>
);

type StepHeaderProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const StepHeader = ({ icon, title, description }: StepHeaderProps) => (
  <div className="mb-8">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7C8] text-[#0A2D82]">
      {icon}
    </div>

    <h2 className="mt-5 text-2xl font-black tracking-[-0.03em] text-[#071A3A]">
      {title}
    </h2>

    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
      {description}
    </p>
  </div>
);

const ApexPartnerApplication = () => {
  const [step, setStep] = useState<ApplicationStep>(1);
  const [formData, setFormData] = useState<PartnerFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");

  const updateField = <K extends keyof PartnerFormData>(
    field: K,
    value: PartnerFormData[K],
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const toggleDeviceCategory = (category: string) => {
    setFormData((current) => {
      const exists = current.deviceCategories.includes(category);

      return {
        ...current,
        deviceCategories: exists
          ? current.deviceCategories.filter((item) => item !== category)
          : [...current.deviceCategories, category],
      };
    });
  };

  const stepOneValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.phoneNumber.trim();

  const stepTwoValid =
    formData.organizationName.trim() &&
    formData.organizationType &&
    formData.role.trim() &&
    formData.city.trim();

  const stepThreeValid =
    formData.partnershipType &&
    formData.businessCategory.trim() &&
    formData.servicesOffered.trim() &&
    formData.whatYouWantToBuild.trim() &&
    formData.whatYouCanOffer.trim() &&
    formData.businessStage;

  const canSubmit =
    formData.preferredContactMethod &&
    formData.termsAccepted &&
    formData.marketingConsent;

  const nextStep = () => {
    if (step === 1 && stepOneValid) {
      setStep(2);
      return;
    }

    if (step === 2 && stepTwoValid) {
      setStep(3);
      return;
    }

    if (step === 3 && stepThreeValid) {
      setStep(4);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((current) => (current - 1) as ApplicationStep);
    }
  };

  const handleSubmit = async () => {
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);

    try {
      /*
       * FRONTEND-ONLY MODE
       *
       * Later replace this simulated request with:
       *
       * POST /api/partner-applications
       *
       * body: {
       *   ...formData,
       *   source: "build-with-apex",
       * }
       */

      await new Promise((resolve) => setTimeout(resolve, 900));

      const reference = `APX-P-${Math.random()
        .toString(36)
        .slice(2, 8)
        .toUpperCase()}`;

      setReferenceCode(reference);
      setIsSubmitted(true);
    } catch (error) {
      console.error("APEX partner application submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =============================================================
     SUCCESS STATE
  ============================================================= */

  if (isSubmitted) {
    return (
      <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-[20%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#38BDF8]/8 blur-[130px]" />

          <div className="absolute bottom-[-10%] right-[8%] h-[420px] w-[420px] rounded-full bg-[#0B5CFF]/7 blur-[130px]" />
        </div>

        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: revealEase,
            }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#EAF7C8] text-[#0A2D82]"
          >
            <Check size={34} strokeWidth={2.4} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: revealEase,
            }}
          >
            <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-[#0B5CFF]">
              Application received
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#071A3A] sm:text-5xl lg:text-6xl">
              Let&apos;s build what&apos;s next.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Thanks for your interest in building with APEX. Our team will
              review your application and reach out using your preferred contact
              method.
            </p>

            <div className="mx-auto mt-8 max-w-sm rounded-[22px] border border-slate-200/70 bg-white/75 px-6 py-5 shadow-[0_18px_55px_rgba(7,26,58,0.06)] backdrop-blur-xl">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                Application reference
              </p>

              <p className="mt-2 text-lg font-black tracking-[0.05em] text-[#0B5CFF]">
                {referenceCode}
              </p>
            </div>

            <Link
              to="/"
              className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-[#0B5CFF] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(11,92,255,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2D82]"
            >
              Back to APEX
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="apex-partner-application-title"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[15%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#38BDF8]/8 blur-[130px]" />

        <div className="absolute right-[-8%] top-[25%] h-[500px] w-[500px] rounded-full bg-[#0B5CFF]/7 blur-[150px]" />

        <div className="absolute bottom-[-15%] left-[35%] h-[350px] w-[350px] rounded-full bg-white blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* =======================================================
            PAGE INTRO
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: revealEase,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_10px_rgba(183,216,63,0.55)]"
            />

            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0B5CFF]">
              Build With APEX
            </span>

            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_10px_rgba(183,216,63,0.55)]"
            />
          </div>

          <h1
            id="apex-partner-application-title"
            className="mt-5 text-4xl font-black leading-[1.04] tracking-[-0.045em] text-[#071A3A] sm:text-5xl lg:text-6xl"
          >
            Let&apos;s build{" "}
            <span className="apex-gradient-text">APEX together.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            Tell us who you are, what you bring, and how you see yourself
            contributing to the APEX ecosystem.
          </p>
        </motion.div>

        {/* =======================================================
            PROGRESS
        ======================================================== */}

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
              <motion.div
                animate={{
                  width: `${(step / 4) * 100}%`,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="h-full rounded-full bg-gradient-to-r from-[#0A2D82] via-[#0B5CFF] to-[#38BDF8]"
              />
            </div>

            <span className="shrink-0 text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">
              Step {step} of 4
            </span>
          </div>
        </div>

        {/* =======================================================
            FORM CARD
        ======================================================== */}

        <div className="mx-auto mt-8 max-w-3xl rounded-[30px] border border-white/80 bg-white/75 p-5 shadow-[0_28px_90px_rgba(7,26,58,0.08)] backdrop-blur-2xl sm:p-8 lg:p-10">
          <AnimatePresence mode="wait">
            {/* ===================================================
                STEP 1
            ==================================================== */}

            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 14 }}
                transition={{ duration: 0.25 }}
              >
                <StepHeader
                  icon={<Users size={21} />}
                  title="Tell us about yourself."
                  description="We'll use this information to know who we're speaking with."
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="First name" htmlFor="partner-first-name">
                    <input
                      id="partner-first-name"
                      type="text"
                      value={formData.firstName}
                      onChange={(event) =>
                        updateField("firstName", event.target.value)
                      }
                      placeholder="First name"
                      className={inputClassName}
                    />
                  </Field>

                  <Field label="Last name" htmlFor="partner-last-name">
                    <input
                      id="partner-last-name"
                      type="text"
                      value={formData.lastName}
                      onChange={(event) =>
                        updateField("lastName", event.target.value)
                      }
                      placeholder="Last name"
                      className={inputClassName}
                    />
                  </Field>

                  <Field label="Email address" htmlFor="partner-email">
                    <div className="relative">
                      <Mail
                        size={16}
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="partner-email"
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        placeholder="you@company.com"
                        className={`${inputClassName} pl-11`}
                      />
                    </div>
                  </Field>

                  <Field label="Phone number" htmlFor="partner-phone">
                    <div className="relative">
                      <Phone
                        size={16}
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="partner-phone"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(event) =>
                          updateField("phoneNumber", event.target.value)
                        }
                        placeholder="+234 801 234 5678"
                        className={`${inputClassName} pl-11`}
                      />
                    </div>
                  </Field>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!stepOneValid}
                    className="group inline-flex cursor-pointer items-center gap-3 rounded-2xl bg-[#0B5CFF] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(11,92,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2D82] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                  >
                    Continue
                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ===================================================
                STEP 2
            ==================================================== */}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.25 }}
              >
                <StepHeader
                  icon={<Building2 size={21} />}
                  title="Tell us about your organization."
                  description="Help us understand the business, team, or ecosystem you represent."
                />

                <div className="space-y-7">
                  <Field label="Organization name" htmlFor="partner-org-name">
                    <input
                      id="partner-org-name"
                      type="text"
                      value={formData.organizationName}
                      onChange={(event) =>
                        updateField("organizationName", event.target.value)
                      }
                      placeholder="Company or organization name"
                      className={inputClassName}
                    />
                  </Field>

                  <div>
                    <p className={labelClassName}>
                      What best describes your organization?
                    </p>

                    <div className="grid gap-2 sm:grid-cols-3">
                      {organizationOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            updateField("organizationType", option.value)
                          }
                          className={optionClassName(
                            formData.organizationType === option.value,
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your role" htmlFor="partner-role">
                      <input
                        id="partner-role"
                        type="text"
                        value={formData.role}
                        onChange={(event) =>
                          updateField("role", event.target.value)
                        }
                        placeholder="Founder, Director, Engineer..."
                        className={inputClassName}
                      />
                    </Field>

                    <Field
                      label="Business category"
                      htmlFor="partner-business-category"
                    >
                      <input
                        id="partner-business-category"
                        type="text"
                        value={formData.businessCategory}
                        onChange={(event) =>
                          updateField("businessCategory", event.target.value)
                        }
                        placeholder="Consumer electronics"
                        className={inputClassName}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <Field label="City" htmlFor="partner-city">
                      <div className="relative">
                        <MapPin
                          size={16}
                          aria-hidden="true"
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          id="partner-city"
                          type="text"
                          value={formData.city}
                          onChange={(event) =>
                            updateField("city", event.target.value)
                          }
                          placeholder="Lagos"
                          className={`${inputClassName} pl-11`}
                        />
                      </div>
                    </Field>

                    <Field label="State / region" htmlFor="partner-state">
                      <input
                        id="partner-state"
                        type="text"
                        value={formData.stateRegion}
                        onChange={(event) =>
                          updateField("stateRegion", event.target.value)
                        }
                        placeholder="Lagos"
                        className={inputClassName}
                      />
                    </Field>

                    <Field label="Country" htmlFor="partner-country">
                      <input
                        id="partner-country"
                        type="text"
                        value={formData.country}
                        onChange={(event) =>
                          updateField("country", event.target.value)
                        }
                        placeholder="Nigeria"
                        className={inputClassName}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Website" htmlFor="partner-website" optional>
                      <div className="relative">
                        <Globe2
                          size={16}
                          aria-hidden="true"
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          id="partner-website"
                          type="url"
                          value={formData.website}
                          onChange={(event) =>
                            updateField("website", event.target.value)
                          }
                          placeholder="https://example.com"
                          className={`${inputClassName} pl-11`}
                        />
                      </div>
                    </Field>

                    <Field
                      label="Social link"
                      htmlFor="partner-social"
                      optional
                    >
                      <input
                        id="partner-social"
                        type="url"
                        value={formData.socialLink}
                        onChange={(event) =>
                          updateField("socialLink", event.target.value)
                        }
                        placeholder="LinkedIn / Instagram"
                        className={inputClassName}
                      />
                    </Field>
                  </div>
                </div>

                <NavigationButtons
                  onBack={previousStep}
                  onNext={nextStep}
                  nextDisabled={!stepTwoValid}
                />
              </motion.div>
            )}

            {/* ===================================================
                STEP 3
            ==================================================== */}

            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.25 }}
              >
                <StepHeader
                  icon={<Handshake size={21} />}
                  title="How do you want to build with APEX?"
                  description="This helps our team understand where there may be a meaningful fit."
                />

                <div className="space-y-7">
                  <div>
                    <p className={labelClassName}>Partnership type</p>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {partnershipOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            updateField("partnershipType", option.value)
                          }
                          className={optionClassName(
                            formData.partnershipType === option.value,
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="partner-services"
                      className={labelClassName}
                    >
                      What services or capabilities do you offer?
                    </label>

                    <textarea
                      id="partner-services"
                      rows={4}
                      value={formData.servicesOffered}
                      onChange={(event) =>
                        updateField("servicesOffered", event.target.value)
                      }
                      placeholder="Tell us what your organization does and what you can contribute..."
                      className={textareaClassName}
                    />
                  </div>

                  <div>
                    <p className={labelClassName}>
                      Which device categories are relevant?
                    </p>

                    <div className="grid gap-2 sm:grid-cols-3">
                      {deviceCategoryOptions.map((category) => {
                        const selected =
                          formData.deviceCategories.includes(category);

                        return (
                          <button
                            key={category}
                            type="button"
                            onClick={() => toggleDeviceCategory(category)}
                            className={optionClassName(selected)}
                          >
                            {category}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className={labelClassName}>Business stage</p>

                      <div className="grid gap-2">
                        {businessStageOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                              updateField("businessStage", option.value)
                            }
                            className={optionClassName(
                              formData.businessStage === option.value,
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Field
                      label="Current customer base"
                      htmlFor="partner-customer-base"
                      optional
                    >
                      <input
                        id="partner-customer-base"
                        type="text"
                        value={formData.currentCustomerBase}
                        onChange={(event) =>
                          updateField("currentCustomerBase", event.target.value)
                        }
                        placeholder="e.g. 500+ active customers"
                        className={inputClassName}
                      />
                    </Field>
                  </div>

                  <div>
                    <label htmlFor="partner-build" className={labelClassName}>
                      What would you like to build with APEX?
                    </label>

                    <textarea
                      id="partner-build"
                      rows={4}
                      value={formData.whatYouWantToBuild}
                      onChange={(event) =>
                        updateField("whatYouWantToBuild", event.target.value)
                      }
                      placeholder="Describe the opportunity, integration, service, or collaboration..."
                      className={textareaClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="partner-offer" className={labelClassName}>
                      What could you bring to APEX?
                    </label>

                    <textarea
                      id="partner-offer"
                      rows={4}
                      value={formData.whatYouCanOffer}
                      onChange={(event) =>
                        updateField("whatYouCanOffer", event.target.value)
                      }
                      placeholder="Tell us about your network, technology, distribution, services, expertise, or other capabilities..."
                      className={textareaClassName}
                    />
                  </div>
                </div>

                <NavigationButtons
                  onBack={previousStep}
                  onNext={nextStep}
                  nextDisabled={!stepThreeValid}
                />
              </motion.div>
            )}

            {/* ===================================================
                STEP 4
            ==================================================== */}

            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.25 }}
              >
                <StepHeader
                  icon={<Mail size={21} />}
                  title="Let's keep the conversation going."
                  description="Tell us how you'd prefer to hear from the APEX team."
                />

                <div>
                  <p className={labelClassName}>Preferred contact method</p>

                  <div className="grid gap-2 sm:grid-cols-3">
                    {contactMethodOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          updateField("preferredContactMethod", option.value)
                        }
                        className={optionClassName(
                          formData.preferredContactMethod === option.value,
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-[22px] border border-blue-100 bg-blue-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <Store
                      size={19}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#0B5CFF]"
                    />

                    <div>
                      <p className="text-sm font-bold text-[#071A3A]">
                        What happens next?
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Your application will be reviewed by the APEX team.
                        Qualified opportunities can move into a deeper
                        onboarding conversation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <ConsentItem
                    checked={formData.marketingConsent}
                    onChange={(checked) =>
                      updateField("marketingConsent", checked)
                    }
                  >
                    I'd like to receive APEX partnership, onboarding, and
                    product updates by email or other selected channels.
                  </ConsentItem>

                  <ConsentItem
                    checked={formData.termsAccepted}
                    onChange={(checked) =>
                      updateField("termsAccepted", checked)
                    }
                  >
                    I agree to the applicable APEX terms and privacy notice.
                  </ConsentItem>
                </div>

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={previousStep}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-5 py-3.5 text-sm font-bold text-slate-600 transition-all duration-200 hover:border-blue-200 hover:text-[#0B5CFF]"
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canSubmit || isSubmitting}
                    className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-[#0B5CFF] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(11,92,255,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2D82] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit application
                        <ArrowRight
                          size={17}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

type NavigationButtonsProps = {
  onBack: () => void;
  onNext: () => void;
  nextDisabled: boolean;
};

const NavigationButtons = ({
  onBack,
  onNext,
  nextDisabled,
}: NavigationButtonsProps) => {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-5 py-3.5 text-sm font-bold text-slate-600 transition-all duration-200 hover:border-blue-200 hover:text-[#0B5CFF]"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-[#0B5CFF] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(11,92,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2D82] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
      >
        Continue
        <ArrowRight
          size={17}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
};

type ConsentItemProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
};

const ConsentItem = ({ checked, onChange, children }: ConsentItemProps) => {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0B5CFF] focus:ring-[#0B5CFF]"
      />

      <span className="text-xs leading-5 text-slate-500">{children}</span>
    </label>
  );
};

export default ApexPartnerApplication;
