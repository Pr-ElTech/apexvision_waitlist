const ApexFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-200/70 bg-white/70 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* =========================================================
              BRAND
          ========================================================== */}

          <div>
            <a
              href="#top"
              className="group inline-flex items-center gap-3"
              aria-label="Back to top — PR-EL TECH Project APEX"
            >
              {/* Real PR-EL TECH Logo */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.04]">
                <img
                  src="/preltech-logo.png"
                  alt="PR-EL TECH"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Brand Name */}
              <div className="leading-none">
                <p className="text-sm font-black tracking-[-0.02em] text-[#071A3A]">
                  PR-EL TECH
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Project APEX
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Building Africa&apos;s trusted technology ecosystem — one
              meaningful product, system, and experience at a time.
            </p>
          </div>

          {/* =========================================================
              EXPLORE
          ========================================================== */}

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-[#071A3A]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#vision"
                className="w-fit text-sm text-slate-500 transition-colors duration-200 hover:text-[#0B5CFF]"
              >
                Vision
              </a>

              <a
                href="#why-apex"
                className="w-fit text-sm text-slate-500 transition-colors duration-200 hover:text-[#0B5CFF]"
              >
                Why APEX
              </a>

              <a
                href="#waitlist"
                className="w-fit text-sm text-slate-500 transition-colors duration-200 hover:text-[#0B5CFF]"
              >
                Join Waitlist
              </a>
            </div>
          </div>

          {/* =========================================================
              COMPANY
          ========================================================== */}

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-[#071A3A]">
              PR-EL TECH
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#top"
                className="w-fit text-sm text-slate-500 transition-colors duration-200 hover:text-[#0B5CFF]"
              >
                Main Website
              </a>

              <a
                href="mailto:hello@preltech.com"
                className="w-fit text-sm text-slate-500 transition-colors duration-200 hover:text-[#0B5CFF]"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================== */}

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {currentYear} PR-EL TECH. All rights reserved.
          </p>

          <p className="text-xs font-medium tracking-wide text-slate-400">
            Project APEX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ApexFooter;
