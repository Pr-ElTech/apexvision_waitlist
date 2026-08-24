import { ArrowRight, Handshake, Lightbulb, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import GlassCard from "./GlassCard";

const collaborationPaths = [
  {
    icon: Lightbulb,
    title: "Collaborate",
    description:
      "Bring ideas, expertise, technology, or creative capability that can help shape what APEX becomes.",
    label: "Build together",
  },
  {
    icon: Handshake,
    title: "Partner",
    description:
      "Connect your organization, network, distribution capability, or technology ecosystem to the APEX journey.",
    label: "Explore partnership",
  },
  {
    icon: TrendingUp,
    title: "Support",
    description:
      "Explore sponsorship and investment opportunities for a technology product being built for long-term impact.",
    label: "Explore opportunities",
  },
] as const;

const reveal = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  },
};

const ApexBuildWithUs = () => {
  return (
    <section
      id="build-with-apex"
      aria-labelledby="apex-build-title"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-16 h-[320px] w-[560px] -translate-x-1/2 rounded-full bg-[#38BDF8]/6 blur-[100px]" />

        <div className="absolute bottom-[-20%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[#0B5CFF]/6 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* =========================================================
            INTRO
        ========================================================== */}

        <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_10px_rgba(183,216,63,0.45)]"
            />

            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0B5CFF]">
              Build With APEX
            </span>

            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_10px_rgba(183,216,63,0.45)]"
            />
          </div>

          <h2
            id="apex-build-title"
            className="mt-5 text-4xl font-black leading-[1.04] tracking-[-0.045em] text-[#071A3A] sm:text-5xl lg:text-6xl"
          >
            The future shouldn&apos;t be built{" "}
            <span className="apex-gradient-text">alone.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            Project APEX is being shaped with people and organizations that
            believe technology can create clearer value. There are different
            ways to become part of that journey.
          </p>
        </motion.div>

        {/* =========================================================
            COLLABORATION PATHS
        ========================================================== */}

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {collaborationPaths.map((path, index) => {
            const Icon = path.icon;

            return (
              <motion.div
                key={path.title}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <GlassCard hover padding="p-7 sm:p-8" className="group h-full">
                  {/* Card header */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7C8] text-[#0A2D82] transition-transform duration-300 group-hover:scale-[1.04]">
                      <Icon size={20} strokeWidth={2.1} aria-hidden="true" />
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B7D83F]"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-2xl font-bold tracking-[-0.025em] text-[#071A3A]">
                    {path.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                    {path.description}
                  </p>

                  {/* Application link */}
                  <Link
                    to="/build-with-apex/apply"
                    className="group/link mt-7 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-[#0B5CFF] transition-colors duration-200 hover:text-[#0A2D82]"
                  >
                    <span>{path.label}</span>

                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            STRATEGIC CTA
        ========================================================== */}

        <motion.div {...reveal} className="mt-10">
          <div className="relative overflow-hidden rounded-[28px] bg-[#071A3A] px-7 py-9 sm:px-10 sm:py-11 lg:px-12">
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="absolute right-[-10%] top-[-70%] h-[420px] w-[420px] rounded-full bg-[#0B5CFF]/18 blur-[110px]"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-[-70%] left-[25%] h-[360px] w-[360px] rounded-full bg-[#38BDF8]/10 blur-[110px]"
            />

            {/* Content */}
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_10px_rgba(183,216,63,0.55)]"
                  />

                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#38BDF8]">
                    Strategic Opportunity
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
                  Have a capability, network, or opportunity that could move
                  APEX forward?
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/70 sm:text-base">
                  We&apos;re opening conversations with collaborators, strategic
                  partners, sponsors, investors, and ecosystem players who want
                  to contribute to what comes next.
                </p>
              </div>

              <Link
                to="/build-with-apex/apply"
                className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-[#071A3A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF7C8]"
              >
                <span>Start a conversation</span>

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApexBuildWithUs;
