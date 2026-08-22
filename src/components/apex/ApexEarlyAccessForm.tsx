import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";

import ApexSuccessModal from "./ApexSuccessModal";

const AUDIENCES = [
  "Gadget Owner",
  "Gadget Repairer",
  "Technology Professional",
  "Business / Organization",
  "Developer",
  "Other",
] as const;

const INTERESTS = [
  "Device Intelligence",
  "Gadget Value",
  "Repairs & Maintenance",
  "Technology Products",
  "Early Product Access",
  "APEX Updates",
] as const;

const generateReference = () => {
  const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();

  return `APX-${suffix}`;
};

const ApexEarlyAccessForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [audience, setAudience] = useState<string>("");
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const toggleInterest = (interest: string) => {
    setInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest],
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName || !email || !audience) {
      return;
    }

    setIsSubmitting(true);

    /*
     * TEMPORARY FRONTEND MOCK
     *
     * Later this becomes:
     *
     * await fetch("/api/early-access", {
     *   method: "POST",
     *   headers: {
     *     "Content-Type": "application/json",
     *   },
     *   body: JSON.stringify({
     *     fullName,
     *     email,
     *     phone,
     *     audience,
     *     interests,
     *   }),
     * });
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
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0B5CFF]">
            Join Project APEX
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#071A3A]">
            Tell us a little about yourself.
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            This helps us understand the people joining the early APEX
            community.
          </p>
        </div>

        <div className="mt-8">
          <label className="text-sm font-bold text-[#071A3A]">I am a...</label>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {AUDIENCES.map((item) => {
              const isSelected = audience === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setAudience(item)}
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

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="apex-full-name"
              className="text-sm font-bold text-[#071A3A]"
            >
              Full name
            </label>

            <input
              id="apex-full-name"
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
              htmlFor="apex-email"
              className="text-sm font-bold text-[#071A3A]"
            >
              Email address
            </label>

            <input
              id="apex-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-[#071A3A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0B5CFF] focus:ring-4 focus:ring-blue-500/10"
            />
          </div>
        </div>

        <div className="mt-5">
          <label
            htmlFor="apex-phone"
            className="text-sm font-bold text-[#071A3A]"
          >
            Phone number
            <span className="ml-2 text-xs font-medium text-slate-400">
              Optional
            </span>
          </label>

          <input
            id="apex-phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+234..."
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-[#071A3A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0B5CFF] focus:ring-4 focus:ring-blue-500/10"
          />
        </div>

        <div className="mt-7">
          <label className="text-sm font-bold text-[#071A3A]">
            I'm interested in...
          </label>

          <div className="mt-3 flex flex-wrap gap-2">
            {INTERESTS.map((interest) => {
              const isSelected = interests.includes(interest);

              return (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`
                    rounded-full
                    border
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      isSelected
                        ? "border-[#0B5CFF] bg-blue-50 text-[#0B5CFF]"
                        : "border-slate-200 bg-white/60 text-slate-500 hover:border-blue-200 hover:bg-white"
                    }
                  `}
                >
                  {interest}
                </button>
              );
            })}
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileTap={{ scale: 0.985 }}
          className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#0B5CFF] px-6 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(11,92,255,0.2)] transition-all duration-300 hover:bg-[#0A2D82] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>{isSubmitting ? "Joining APEX..." : "Join APEX"}</span>

          {!isSubmitting && (
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          )}
        </motion.button>
      </form>

      <ApexSuccessModal
        isOpen={isModalOpen}
        title="You're officially in."
        message="Welcome to the early APEX community. We'll keep you close to the journey as Project APEX moves forward."
        referenceId={referenceId}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ApexEarlyAccessForm;
