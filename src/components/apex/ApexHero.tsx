import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BatteryMedium,
  ScanLine,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import GlassBubble from "./GlassBubble";

type ApexHeroProps = {
  onOpenWaitlist: () => void;
};

const heroEase = [0.16, 1, 0.3, 1] as const;

const scanPoints = [
  {
    label: "Display",
    value: "Clear",
    icon: Smartphone,
    position: "left-[2%] top-[23%]",
    delay: 1.1,
  },
  {
    label: "IMEI",
    value: "Verified",
    icon: BadgeCheck,
    position: "right-[1%] top-[18%]",
    delay: 1.7,
  },
  {
    label: "Blacklist",
    value: "Clear",
    icon: ShieldCheck,
    position: "right-[0%] top-[57%]",
    delay: 2.3,
  },
  {
    label: "Battery",
    value: "91%",
    icon: BatteryMedium,
    position: "left-[2%] top-[63%]",
    delay: 2.9,
  },
  {
    label: "Value",
    value: "Estimating",
    icon: ScanLine,
    position: "left-[16%] bottom-[4%]",
    delay: 3.5,
  },
] as const;

const ApexHero = ({ onOpenWaitlist }: ApexHeroProps) => {
  return (
    <section
      id="top"
      aria-labelledby="apex-hero-title"
      className="relative isolate overflow-hidden"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[34%] top-[-20%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#38BDF8]/10 blur-[160px]" />

        <div className="absolute right-[-12%] top-[8%] h-[560px] w-[560px] rounded-full bg-[#0B5CFF]/10 blur-[170px]" />

        <div className="absolute bottom-[-25%] left-[-10%] h-[520px] w-[520px] rounded-full bg-[#0A2D82]/10 blur-[170px]" />

        <div className="absolute right-[7%] top-[24%] h-[400px] w-[400px] rounded-full bg-white/80 blur-[120px]" />
      </div>

      {/* =========================================================
          SUBTLE FLOATING ATMOSPHERE
      ========================================================== */}

      <GlassBubble size={150} top="14%" right="7%" opacity={0.12} delay={0} />

      <GlassBubble size={82} top="48%" left="3%" opacity={0.1} delay={1.8} />

      <GlassBubble
        size={110}
        bottom="8%"
        right="20%"
        opacity={0.08}
        delay={3}
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl items-center px-6 py-24 sm:py-28 lg:px-10 lg:py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(460px,0.98fr)] lg:gap-8 xl:gap-14">
          {/* =====================================================
              HERO COPY
          ====================================================== */}

          <div className="relative z-20 max-w-[760px]">
            {/* Brand signature */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: heroEase,
              }}
              className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.08em] text-[#0A2D82]"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_10px_rgba(183,216,63,0.65)]"
              />

              <span>PR-EL TECH</span>

              <span aria-hidden="true" className="h-px w-6 bg-slate-300" />

              <span className="text-slate-500">Project APEX</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="apex-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: heroEase,
              }}
              className="mt-7 max-w-[820px] text-[clamp(3.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-[-0.05em] text-[#071A3A]"
            >
              <span className="block">Something</span>

              <span className="block apex-gradient-text">bigger is coming</span>
            </motion.h1>

            {/* Product hook */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.16,
                ease: heroEase,
              }}
              className="mt-7 max-w-2xl text-xl font-bold leading-tight tracking-[-0.03em] text-[#071A3A] sm:text-2xl lg:text-3xl"
            >
              Know your phone&apos;s value{" "}
              <span className="text-[#0B5CFF]">before you swap.</span>
            </motion.p>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.22,
                ease: heroEase,
              }}
              className="mt-6 max-w-[650px] text-base leading-8 text-slate-600 sm:text-lg lg:text-xl"
            >
              Project APEX is exploring a smarter way to understand the devices
              you already own — their condition, technology, and potential value
              — before you decide what comes next.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: heroEase,
              }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-[#0B5CFF] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(11,92,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A2D82] hover:shadow-[0_22px_55px_rgba(11,92,255,0.28)]"
              >
                <span>Get Early Access</span>

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Secondary CTA */}
              <a
                href="#vision"
                className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-2xl border border-slate-200/80 bg-white/65 px-7 py-4 text-sm font-bold text-[#0A2D82] shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white"
              >
                Explore the Vision
              </a>
            </motion.div>

            {/* Scroll cue */}
            <motion.a
              href="#vision"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.9,
              }}
              className="mt-14 inline-flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-[#0B5CFF]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/60 backdrop-blur-xl">
                <ArrowDown
                  size={15}
                  aria-hidden="true"
                  className="animate-bounce"
                />
              </span>

              <span>Scroll to discover what we&apos;re building</span>
            </motion.a>
          </div>

          {/* =====================================================
              APEX DEVICE INTELLIGENCE VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1.15,
              delay: 0.16,
              ease: heroEase,
            }}
            className="relative mx-auto w-full max-w-[650px] lg:ml-auto"
          >
            {/* Product atmosphere */}
            <div
              aria-hidden="true"
              className="absolute inset-[-8%] rounded-full bg-gradient-to-br from-[#38BDF8]/20 via-[#0B5CFF]/10 to-transparent blur-[80px]"
            />

            {/* ===================================================
                APEX ANALYSIS HUD
            ==================================================== */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[5%] z-0 hidden sm:block"
            >
              {/* Outer scan ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0B5CFF]/10"
              />

              {/* Inner scan ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#38BDF8]/10"
              />

              {/* Crosshair */}
              <div className="absolute left-1/2 top-[11%] h-[78%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0B5CFF]/10 to-transparent" />

              <div className="absolute left-[11%] top-1/2 h-px w-[78%] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#0B5CFF]/10 to-transparent" />

              {/* Analysis arc */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-transparent border-t-[#38BDF8]/30"
              />
            </div>

            {/* ===================================================
                DEVICE IMAGE
            ==================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <img
                src="/heropageimage.png"
                alt="Project APEX device intelligence interface"
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_30px_70px_rgba(7,26,58,0.20)]"
              />

              {/* Scanning beam */}
              <motion.div
                aria-hidden="true"
                initial={{
                  top: "18%",
                  opacity: 0,
                }}
                animate={{
                  top: ["18%", "78%", "18%"],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
                className="pointer-events-none absolute left-[18%] right-[18%] z-20 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/70 to-transparent shadow-[0_0_18px_rgba(56,189,248,0.35)]"
              />
            </motion.div>

            {/* ===================================================
                ANALYSIS LABEL
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.85,
                ease: heroEase,
              }}
              className="absolute right-[4%] top-[6%] z-30 hidden sm:block"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/60 bg-white/45 px-3 py-2 shadow-[0_12px_35px_rgba(7,26,58,0.08)] backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B7D83F] opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B7D83F]" />
                </span>

                <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#0A2D82]">
                  APEX Analysis
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  87%
                </span>
              </div>
            </motion.div>

            {/* ===================================================
                FLOATING INTELLIGENCE POINTS
            ==================================================== */}

            {scanPoints.map((point) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.label}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: point.delay,
                    ease: heroEase,
                  }}
                  className={`absolute z-30 hidden sm:block ${point.position}`}
                >
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 4 + point.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex min-w-[118px] items-center gap-2 rounded-2xl border border-white/55 bg-white/38 px-3 py-2 shadow-[0_12px_30px_rgba(7,26,58,0.06)] backdrop-blur-xl"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/65 text-[#0B5CFF]">
                      <Icon size={13} strokeWidth={2.2} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[8px] font-black uppercase tracking-[0.12em] text-slate-400">
                        {point.label}
                      </span>

                      <span className="mt-0.5 block text-[11px] font-bold text-[#071A3A]">
                        {point.value}
                      </span>
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* ===================================================
                APEX VALUE STATE
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 4,
                ease: heroEase,
              }}
              className="absolute bottom-[2%] right-[3%] z-30 hidden sm:block"
            >
              <div className="rounded-2xl border border-[#0B5CFF]/10 bg-white/48 px-4 py-3 shadow-[0_14px_38px_rgba(7,26,58,0.08)] backdrop-blur-xl">
                <p className="text-[8px] font-black uppercase tracking-[0.15em] text-[#0B5CFF]">
                  Value intelligence
                </p>

                <p className="mt-1 text-sm font-black tracking-[-0.02em] text-[#071A3A]">
                  Profiling device
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-1 w-20 overflow-hidden rounded-full bg-blue-100">
                    <motion.span
                      initial={{ width: "20%" }}
                      animate={{
                        width: ["20%", "72%", "52%", "82%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="block h-full rounded-full bg-gradient-to-r from-[#0A2D82] via-[#0B5CFF] to-[#38BDF8]"
                    />
                  </span>

                  <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Analyzing
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Ambient product glow */}
            <div
              aria-hidden="true"
              className="absolute bottom-[-4%] left-[13%] right-[13%] h-20 rounded-full bg-[#0B5CFF]/12 blur-[55px]"
            />

            {/* Brand activity signal */}
            <motion.div
              aria-hidden="true"
              animate={{
                y: [0, -7, 0],
                opacity: [0.5, 1, 0.5],
                scale: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[8%] top-[15%] z-40 h-3 w-3 rounded-full bg-[#B7D83F] shadow-[0_0_20px_rgba(183,216,63,0.8)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApexHero;
