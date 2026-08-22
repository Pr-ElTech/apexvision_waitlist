import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";
import GlassBubble from "./GlassBubble";
import GlassCard from "./GlassCard";

const APEX_VIDEO = "https://www.pexels.com/download/video/6754816/";

const ApexEarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      aria-labelledby="apex-early-access-title"
      className="relative overflow-hidden py-28 sm:py-32 lg:py-40"
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-[20%] top-[10%] h-[380px] w-[380px] rounded-full bg-[#38BDF8]/7 blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[5%] h-[420px] w-[420px] rounded-full bg-[#0B5CFF]/8 blur-[130px]" />
      </div>

      <GlassBubble size={130} top="12%" right="7%" opacity={0.16} delay={0} />

      <GlassBubble size={85} bottom="15%" left="5%" opacity={0.18} delay={2} />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          {/* =====================================================
              LEFT — MESSAGE + WAITLIST
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_12px_rgba(183,216,63,0.45)]"
              />

              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0B5CFF]">
                Early Access
              </span>
            </div>

            <h2
              id="apex-early-access-title"
              className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#071A3A] sm:text-5xl lg:text-6xl"
            >
              Be there when{" "}
              <span className="apex-gradient-text">APEX opens.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-500 sm:text-lg">
              We're building around the technology people already live with —
              phones, devices, digital experiences, and the value hidden inside
              them.
            </p>

            {/* Early access benefits */}
            <div className="mt-8 space-y-3">
              {[
                "First access to launch updates",
                "Behind-the-scenes product progress",
                "Early announcements from PR-EL TECH",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-slate-600"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#0B5CFF]"
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* =================================================
                WAITLIST FORM
            ================================================== */}

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-10 max-w-xl">
                <div className="flex flex-col gap-3 rounded-[22px] border border-white/80 bg-white/65 p-2 shadow-[0_18px_55px_rgba(11,92,255,0.07)] backdrop-blur-xl sm:flex-row">
                  <label htmlFor="apex-email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="apex-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm font-medium text-[#071A3A] outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-[16px] bg-[#0B5CFF] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2D82]"
                  >
                    Join Early Access
                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                <p className="mt-3 text-xs text-slate-400">
                  No spam. Only meaningful APEX updates.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-10 flex max-w-xl items-center gap-3 rounded-[18px] border border-[#DCE9AD] bg-[#F4F9E5] px-5 py-4 text-sm font-semibold text-[#0A2D82]"
              >
                <Sparkles size={18} aria-hidden="true" />
                You're on the APEX early access list.
              </motion.div>
            )}
          </motion.div>

          {/* =====================================================
              RIGHT — GADGET VIDEO
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 24,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.18,
            }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-2xl"
          >
            {/* Outer glow */}
            <div
              aria-hidden="true"
              className="absolute inset-[-6%] rounded-[42px] bg-gradient-to-br from-[#38BDF8]/15 via-[#0B5CFF]/10 to-transparent blur-3xl"
            />

            <GlassCard className="relative p-3" hover={false}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#071A3A]">
                <video
                  src={APEX_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />

                {/* Cinematic overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/75 via-transparent to-[#071A3A]/10"
                />

                {/* Video glass label */}
                <div className="absolute left-5 top-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-xl">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_10px_rgba(183,216,63,0.7)]"
                    />
                    APEX / Technology
                  </div>
                </div>

                {/* Bottom message */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-[22px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                    <p className="text-lg font-bold text-white sm:text-xl">
                      Built around the technology you already carry.
                    </p>

                    <p className="mt-2 text-sm leading-6 text-blue-100/70">
                      APEX explores what your devices can become when technology
                      is designed with more intelligence and purpose.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Floating lime accent */}
            <motion.div
              aria-hidden="true"
              animate={{
                y: [0, -8, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-[18%] hidden h-3 w-3 rounded-full bg-[#B7D83F] shadow-[0_0_20px_rgba(183,216,63,0.6)] sm:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApexEarlyAccess;
