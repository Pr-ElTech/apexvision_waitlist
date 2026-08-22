import { ArrowDown, ArrowRight, Settings2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import GlassBubble from "./GlassBubble";
import GlassCard from "./GlassCard";
import { APEX_IMAGES } from "../../data/apex";

const heroEase = [0.16, 1, 0.3, 1] as const;

const ApexHero = () => {
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
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-[34%] top-[-18%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#38BDF8]/12 blur-[150px]" />

        <div className="absolute right-[-8%] top-[15%] h-[520px] w-[520px] rounded-full bg-[#0B5CFF]/10 blur-[160px]" />

        <div className="absolute bottom-[-22%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#0A2D82]/10 blur-[160px]" />
      </div>

      {/* =========================================================
          GLASS FLOATERS
      ========================================================== */}

      <GlassBubble size={170} top="12%" right="9%" opacity={0.22} delay={0} />

      <GlassBubble size={92} top="42%" left="3%" opacity={0.22} delay={1.5} />

      <GlassBubble
        size={125}
        bottom="10%"
        right="17%"
        opacity={0.17}
        delay={3}
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl items-center px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.78fr)] lg:gap-16 xl:gap-20">
          {/* =====================================================
              HERO COPY
          ====================================================== */}

          <div className="max-w-[780px]">
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
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF7C8] text-[#0A2D82]"
              >
                <Settings2 size={16} strokeWidth={2.2} />
              </span>

              <span>PR-EL TECH</span>

              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B7D83F]"
              />

              <span className="text-slate-500">Project APEX</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="apex-hero-title"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: heroEase,
              }}
              className="mt-7 max-w-[820px] text-[clamp(3.4rem,7vw,6.5rem)] font-black leading-[0.97] tracking-[-0.045em] text-[#071A3A]"
            >
              <span className="block">Something</span>

              <span className="block apex-gradient-text">bigger is coming</span>
            </motion.h1>

            {/* Product hook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.14,
                ease: heroEase,
              }}
              className="mt-6"
            >
              <p className="max-w-xl text-xl font-bold leading-tight tracking-[-0.025em] text-[#071A3A] sm:text-2xl lg:text-3xl">
                Know your phone's value
                <span className="text-[#0B5CFF]"> before you swap.</span>
              </p>
            </motion.div>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: heroEase,
              }}
              className="mt-6 max-w-[680px] text-base leading-8 text-slate-600 sm:text-lg lg:text-xl"
            >
              Project APEX is exploring a smarter way to understand the devices
              you already own — their condition, technology, and potential value
              — before you decide what comes next.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.28,
                ease: heroEase,
              }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              {/* Primary */}
              <Link
                to="/early-access"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0B5CFF] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(11,92,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A2D82] hover:shadow-[0_22px_55px_rgba(11,92,255,0.28)]"
              >
                <span>Get Early Access</span>

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary */}
              <a
                href="#vision"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-7 py-4 text-sm font-bold text-[#0A2D82] shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white"
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
                delay: 0.75,
              }}
              className="mt-14 inline-flex items-center gap-3 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-[#0B5CFF]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/60 backdrop-blur-xl">
                <ArrowDown
                  size={15}
                  aria-hidden="true"
                  className="animate-bounce"
                />
              </span>

              <span>Scroll to discover what we're building</span>
            </motion.a>
          </div>

          {/* =====================================================
              HERO VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 24,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.18,
              ease: heroEase,
            }}
            className="relative mx-auto w-full max-w-[500px] lg:ml-auto"
          >
            {/* Image atmosphere */}
            <div
              aria-hidden="true"
              className="absolute inset-[-8%] rounded-[44px] bg-gradient-to-br from-[#38BDF8]/20 via-[#0B5CFF]/10 to-transparent blur-3xl"
            />

            {/* Main glass frame */}
            <GlassCard className="relative p-3" hover={false}>
              <div className="relative aspect-[0.86] overflow-hidden rounded-[24px]">
                <img
                  src={APEX_IMAGES.hero.src}
                  alt={APEX_IMAGES.hero.alt}
                  className="h-full w-full object-cover"
                />

                {/* Cinematic overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/90 via-[#071A3A]/15 to-transparent"
                />

                {/* Product insight panel */}
                <div className="absolute left-5 right-5 top-5">
                  <div className="rounded-[20px] border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100">
                        <Sparkles size={13} aria-hidden="true" />

                        <span>Device Insight</span>
                      </div>

                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_10px_rgba(183,216,63,0.7)]"
                      />
                    </div>

                    <p className="mt-3 text-sm font-semibold text-white/90">
                      Understand your device before making your next move.
                    </p>
                  </div>
                </div>

                {/* Device value visual */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-[22px] border border-white/20 bg-[#071A3A]/35 p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-blue-100/70">
                          Value intelligence
                        </p>

                        <p className="mt-2 text-xl font-bold leading-tight text-white">
                          Know it before you swap.
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Sparkles
                          size={18}
                          className="text-[#38BDF8]"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
                        <motion.span
                          initial={{ width: "22%" }}
                          animate={{
                            width: ["22%", "68%", "42%", "68%"],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="block h-full rounded-full bg-gradient-to-r from-[#0A2D82] via-[#0B5CFF] to-[#38BDF8]"
                        />
                      </span>

                      <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-blue-100/60">
                        Analyzing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Floating status card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -left-6 hidden w-56 sm:block"
            >
              <GlassCard padding="p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#0B5CFF]">
                  APEX Status
                </p>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="text-sm font-bold text-[#071A3A]">
                    In development
                  </p>

                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-[#B7D83F] shadow-[0_0_12px_rgba(183,216,63,0.7)]"
                  />
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-blue-100">
                    <motion.span
                      initial={{ width: "20%" }}
                      animate={{
                        width: ["20%", "70%", "45%", "70%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="block h-full rounded-full bg-gradient-to-r from-[#0A2D82] via-[#0B5CFF] to-[#38BDF8]"
                    />
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Building
                  </span>
                </div>
              </GlassCard>
            </motion.div>

            {/* Lime brand accent */}
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
              className="absolute -right-2 top-[16%] hidden h-3 w-3 rounded-full bg-[#B7D83F] shadow-[0_0_20px_rgba(183,216,63,0.65)] sm:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApexHero;
