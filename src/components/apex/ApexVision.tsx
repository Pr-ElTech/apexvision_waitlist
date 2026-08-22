import { ArrowRight, Check, Sparkles } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import GlassCard from "./GlassCard";
import {
  APEX_VISION_PILLARS,
  APEX_VISION_STEPS,
  APEX_VISION_VIDEO,
} from "../../data/apexVisionNew";

const ApexVision = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  const introY = useTransform(smoothProgress, [0, 0.5, 1], [35, 0, -25]);

  const visualY = useTransform(smoothProgress, [0, 0.5, 1], [45, 0, -20]);

  const visualScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.96, 1, 1.02],
  );

  const sectionOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.5, 0.85, 1],
    [0.55, 0.9, 1, 1, 0.72],
  );

  return (
    <section
      ref={sectionRef}
      id="vision"
      aria-labelledby="apex-vision-title"
      className="relative overflow-hidden py-28 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[10%] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-[#38BDF8]/6 blur-[110px]" />

        <div className="absolute bottom-[10%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[#0B5CFF]/6 blur-[110px]" />
      </div>

      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                opacity: sectionOpacity,
              }
        }
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* ===================================================
              INTRODUCTION
          ==================================================== */}

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <motion.div
              style={
                reduceMotion
                  ? undefined
                  : {
                      y: introY,
                    }
              }
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7D83F]" />

                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0B5CFF]">
                  The Vision
                </span>
              </div>

              <h2
                id="apex-vision-title"
                className="mt-5 text-4xl font-black leading-[1.03] tracking-[-0.045em] text-[#071A3A] sm:text-5xl lg:text-6xl"
              >
                A different way to think about{" "}
                <span className="apex-gradient-text">technology value.</span>
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-500 sm:text-lg">
                Project APEX is a product vision from PR-EL TECH focused on
                making the relationship between people, their devices, and
                technology intelligence easier to understand.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-500">
                Phones and gadgets are no longer just things we own. They carry
                information, experiences, investment, identity, and value. APEX
                is being imagined around that reality.
              </p>
            </motion.div>

            {/* =================================================
                VISUAL STORY
            ================================================== */}

            <motion.div
              style={
                reduceMotion
                  ? undefined
                  : {
                      y: visualY,
                      scale: visualScale,
                    }
              }
              className="relative mx-auto w-full max-w-2xl lg:ml-auto"
            >
              <div
                aria-hidden="true"
                className="absolute inset-[-7%] rounded-[40px] bg-gradient-to-br from-[#38BDF8]/15 via-[#0B5CFF]/8 to-transparent blur-3xl"
              />

              <GlassCard hover={false} className="relative p-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-[#071A3A]">
                  <video
                    src={APEX_VISION_VIDEO.src}
                    poster={APEX_VISION_VIDEO.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={APEX_VISION_VIDEO.alt}
                    className="h-full w-full object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/85 via-[#071A3A]/10 to-transparent"
                  />

                  <div className="absolute left-5 top-5">
                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_10px_rgba(183,216,63,0.65)]"
                      />
                      APEX / Technology
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="rounded-[22px] border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-blue-100">
                        <Sparkles size={14} aria-hidden="true" />

                        <span>Project APEX</span>
                      </div>

                      <p className="mt-2 text-xl font-bold leading-tight text-white">
                        Technology should tell a clearer story.
                      </p>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100/70">
                        APEX explores a more intelligent relationship between
                        people, devices, and technology value.
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* ===================================================
              THE PROBLEM
          ==================================================== */}

          <div className="mt-28 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0B5CFF]">
                Why APEX
              </span>

              <h3 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#071A3A] sm:text-4xl">
                Technology value is often harder to understand than it should
                be.
              </h3>
            </div>

            <GlassCard hover={false} padding="p-7 sm:p-9">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Buying, selling, upgrading, repairing, evaluating, or
                understanding a gadget can involve fragmented information and
                uncertainty. The APEX vision is to explore whether technology
                intelligence can make those decisions clearer, more informed,
                and easier to navigate.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#B7D83F]" />

                <span className="text-sm font-bold text-[#071A3A]">
                  Clarity over complexity.
                </span>
              </div>
            </GlassCard>
          </div>

          {/* ===================================================
              THREE PILLARS
          ==================================================== */}

          <div className="mt-28">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0B5CFF]">
                The APEX Principles
              </span>

              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#071A3A] sm:text-4xl">
                Understand first. Create value from there.
              </h3>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {APEX_VISION_PILLARS.map((pillar) => (
                <GlassCard key={pillar.number} hover padding="p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7C8] text-xs font-black text-[#0A2D82]">
                      {pillar.number}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#B7D83F]" />
                  </div>

                  <h4 className="mt-7 text-2xl font-bold tracking-[-0.025em] text-[#071A3A]">
                    {pillar.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                    {pillar.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* ===================================================
              HOW IT COULD WORK
          ==================================================== */}

          <div id="experience" className="mt-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0B5CFF]">
                  The Experience
                </span>

                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#071A3A] sm:text-4xl">
                  From device to decision.
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-500">
                  The long-term APEX experience is being designed around a
                  simple idea: useful technology intelligence should lead to a
                  clearer next step.
                </p>
              </div>

              <div className="grid gap-4">
                {APEX_VISION_STEPS.map((step) => (
                  <GlassCard key={step.number} hover padding="p-6">
                    <div className="flex items-start gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071A3A] text-xs font-black text-white">
                        {step.number}
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#071A3A]">
                          {step.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-slate-500">
                          {step.description}
                        </p>
                      </div>

                      <Check
                        size={17}
                        className="ml-auto mt-1 shrink-0 text-[#B7D83F]"
                        aria-hidden="true"
                      />
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>

          {/* ===================================================
              CLOSING STATEMENT
          ==================================================== */}

          <div className="mt-28">
            <GlassCard hover={false} className="overflow-hidden" padding="p-0">
              <div className="relative overflow-hidden rounded-[28px] bg-[#071A3A] p-8 sm:p-12 lg:p-16">
                <div
                  aria-hidden="true"
                  className="absolute right-[-10%] top-[-40%] h-[420px] w-[420px] rounded-full bg-[#0B5CFF]/20 blur-[110px]"
                />

                <div
                  aria-hidden="true"
                  className="absolute bottom-[-35%] left-[-5%] h-[300px] w-[300px] rounded-full bg-[#38BDF8]/10 blur-[100px]"
                />

                <div className="relative max-w-3xl">
                  <div className="flex items-center gap-3 text-[#38BDF8]">
                    <Sparkles size={16} />

                    <span className="text-xs font-black uppercase tracking-[0.2em]">
                      Where APEX is heading
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                    A more intelligent relationship with the devices we already
                    depend on.
                  </h3>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/70 sm:text-lg">
                    APEX is still being built. The vision will evolve as we
                    learn, test, design, and listen. What matters now is
                    building toward a technology experience that creates clearer
                    value for the people who use it.
                  </p>

                  <a
                    href="#waitlist"
                    className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-[#071A3A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAF7C8]"
                  >
                    Join the early community
                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ApexVision;
