import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { FC } from "react";

import GlassBubble from "./GlassBubble";

const APEX_VIDEO = "https://www.pexels.com/download/video/6754816/";

type ApexEarlyAccessProps = {
  onOpenWaitlist: () => void;
};

const ApexEarlyAccess: FC<ApexEarlyAccessProps> = ({ onOpenWaitlist }) => {
  const benefits = [
    "First access to launch updates",
    "Behind-the-scenes product progress",
    "Early announcements from PR-EL TECH",
  ];

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
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[18%] top-[8%] h-[380px] w-[380px] rounded-full bg-[#38BDF8]/8 blur-[120px]" />

        <div className="absolute bottom-[-12%] right-[4%] h-[440px] w-[440px] rounded-full bg-[#0B5CFF]/8 blur-[140px]" />

        <div className="absolute bottom-[10%] left-[38%] h-[260px] w-[260px] rounded-full bg-white/80 blur-[100px]" />
      </div>

      {/* Floating atmosphere */}
      <GlassBubble size={130} top="12%" right="7%" opacity={0.12} delay={0} />

      <GlassBubble size={85} bottom="15%" left="5%" opacity={0.1} delay={2} />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          {/* =====================================================
              LEFT — MESSAGE
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
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-xl"
          >
            {/* Section label */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_12px_rgba(183,216,63,0.45)]"
              />

              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0B5CFF]">
                Early Access
              </span>
            </div>

            {/* Heading */}
            <h2
              id="apex-early-access-title"
              className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#071A3A] sm:text-5xl lg:text-6xl"
            >
              Be there when{" "}
              <span className="apex-gradient-text">APEX opens.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-500 sm:text-lg">
              We&apos;re building around the technology people already live with
              — phones, devices, digital experiences, and the value hidden
              inside them.
            </p>

            {/* =================================================
                BENEFITS
            ================================================== */}

            <div className="mt-8 space-y-3">
              {benefits.map((item) => (
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
                CTA
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10"
            >
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0B5CFF] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(11,92,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A2D82] hover:shadow-[0_22px_55px_rgba(11,92,255,0.28)]"
              >
                <span>Join the APEX Waitlist</span>

                <ArrowRight
                  size={18}
                  strokeWidth={2.2}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="mt-3 text-xs text-slate-400">
                Be among the first to experience what we&apos;re building.
              </p>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT — TECHNOLOGY VIDEO
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
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-2xl"
          >
            {/* Outer glow */}
            <div
              aria-hidden="true"
              className="absolute inset-[-6%] rounded-[42px] bg-gradient-to-br from-[#38BDF8]/15 via-[#0B5CFF]/10 to-transparent blur-3xl"
            />

            {/* Video frame */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-[#071A3A] shadow-[0_30px_80px_rgba(7,26,58,0.16)]">
              <div className="relative aspect-[4/3] overflow-hidden">
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
                  className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/80 via-[#071A3A]/5 to-[#071A3A]/10"
                />

                {/* Top label */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                  }}
                  className="absolute left-5 top-5"
                >
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-xl">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_10px_rgba(183,216,63,0.7)]"
                    />
                    APEX / Technology
                  </div>
                </motion.div>

                {/* Bottom message */}
                <div className="absolute bottom-5 left-5 right-5">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="max-w-lg"
                  >
                    <p className="text-lg font-bold leading-tight text-white sm:text-xl">
                      Built around the technology you already carry.
                    </p>

                    <p className="mt-2 max-w-md text-sm leading-6 text-blue-100/70">
                      APEX explores what your devices can become when technology
                      is designed with more intelligence and purpose.
                    </p>
                  </motion.div>
                </div>

                {/* Scan line */}
                <motion.div
                  aria-hidden="true"
                  initial={{
                    top: "20%",
                    opacity: 0,
                  }}
                  animate={{
                    top: ["20%", "80%", "20%"],
                    opacity: [0, 0.35, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="pointer-events-none absolute left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent shadow-[0_0_18px_rgba(56,189,248,0.25)]"
                />
              </div>
            </div>

            {/* Floating intelligence signal */}
            <motion.div
              aria-hidden="true"
              animate={{
                y: [0, -8, 0],
                opacity: [0.65, 1, 0.65],
                scale: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-[18%] hidden h-3 w-3 rounded-full bg-[#B7D83F] shadow-[0_0_20px_rgba(183,216,63,0.6)] sm:block"
            />

            {/* Small APEX signal */}
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="absolute -bottom-5 left-6 hidden sm:block"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-2 shadow-[0_12px_35px_rgba(7,26,58,0.08)] backdrop-blur-xl">
                <Sparkles
                  size={13}
                  className="text-[#0B5CFF]"
                  aria-hidden="true"
                />

                <span className="text-[9px] font-black uppercase tracking-[0.14em] text-[#0A2D82]">
                  Intelligence in development
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApexEarlyAccess;
