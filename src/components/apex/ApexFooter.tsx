const ApexFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-200/70 bg-white/70 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3"
              aria-label="Back to top"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0A2D82] via-[#0B5CFF] to-[#38BDF8] shadow-md shadow-blue-500/15">
                <span className="text-[10px] font-black text-white">PR-EL</span>
              </div>

              <div>
                <p className="text-sm font-black tracking-tight text-[#071A3A]">
                  PR-EL TECH
                </p>

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Project APEX
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Building Africa's trusted technology ecosystem — one meaningful
              product, system, and experience at a time.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-[#071A3A]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#vision"
                className="w-fit text-sm text-slate-500 transition-colors hover:text-[#0B5CFF]"
              >
                Vision
              </a>

              <a
                href="#why-apex"
                className="w-fit text-sm text-slate-500 transition-colors hover:text-[#0B5CFF]"
              >
                Why APEX
              </a>

              <a
                href="#waitlist"
                className="w-fit text-sm text-slate-500 transition-colors hover:text-[#0B5CFF]"
              >
                Join Waitlist
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-[#071A3A]">
              PR-EL TECH
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#top"
                className="w-fit text-sm text-slate-500 transition-colors hover:text-[#0B5CFF]"
              >
                Main Website
              </a>

              <a
                href="mailto:hello@preltech.com"
                className="w-fit text-sm text-slate-500 transition-colors hover:text-[#0B5CFF]"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {currentYear} PR-EL TECH. All rights reserved.
          </p>

          <p className="text-xs font-medium text-slate-400">Project APEX</p>
        </div>
      </div>
    </footer>
  );
};

export default ApexFooter;
