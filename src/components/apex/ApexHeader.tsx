import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

type ApexHeaderProps = {
  onOpenWaitlist: () => void;
};

const ApexHeader = ({ onOpenWaitlist }: ApexHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMobileWaitlist = () => {
    closeMenu();
    onOpenWaitlist();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Build With APEX",
      to: "/build-with-apex",
    },
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-0 sm:px-3 lg:px-4">
      <div
        className={[
          "mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled
            ? [
                "mt-3",
                "max-w-7xl",
                "rounded-[22px]",
                "border border-slate-200/60",
                "bg-white/75",
                "shadow-[0_16px_50px_rgba(7,26,58,0.10)]",
                "backdrop-blur-2xl",
              ].join(" ")
            : [
                "mt-0",
                "max-w-none",
                "rounded-none",
                "border-b border-slate-200/30",
                "bg-white/45",
                "shadow-none",
                "backdrop-blur-2xl",
              ].join(" "),
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex items-center justify-between px-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 lg:px-8",
            isScrolled ? "h-[72px]" : "h-20",
          ].join(" ")}
        >
          {/* =========================================================
              BRAND
          ========================================================== */}

          <Link
            to="/"
            onClick={closeMenu}
            aria-label="PR-EL TECH Project APEX"
            className="group flex cursor-pointer items-center gap-3"
          >
            <div
              className={[
                "relative flex shrink-0 items-center justify-center overflow-hidden transition-all duration-300",
                isScrolled ? "h-10 w-10 rounded-xl" : "h-11 w-11 rounded-2xl",
              ].join(" ")}
            >
              <img
                src="/preltech-logo.png"
                alt="PR-EL TECH"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </div>

            <div className="leading-none">
              <p className="text-sm font-black tracking-[-0.02em] text-[#071A3A]">
                PR-EL TECH
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Project APEX
              </p>
            </div>
          </Link>

          {/* =========================================================
              DESKTOP NAVIGATION
          ========================================================== */}

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "cursor-pointer rounded-full px-4 py-2.5",
                    "text-sm font-medium",
                    "transition-all duration-300",
                    isActive
                      ? [
                          "bg-white",
                          "text-[#0B5CFF]",
                          "shadow-[0_8px_24px_rgba(11,92,255,0.08)]",
                        ].join(" ")
                      : [
                          "text-slate-600",
                          "hover:bg-white/80",
                          "hover:text-[#0B5CFF]",
                          "hover:shadow-[0_8px_24px_rgba(11,92,255,0.06)]",
                        ].join(" "),
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* =========================================================
              DESKTOP EARLY ACCESS
          ========================================================== */}

          <button
            type="button"
            onClick={onOpenWaitlist}
            className={[
              "group hidden cursor-pointer items-center gap-2 rounded-full",
              "bg-[#0B5CFF] px-5 py-3",
              "text-sm font-semibold text-white",
              "shadow-[0_10px_30px_rgba(11,92,255,0.20)]",
              "transition-all duration-300",
              "hover:-translate-y-0.5",
              "hover:bg-[#0A2D82]",
              "hover:shadow-[0_14px_36px_rgba(11,92,255,0.25)]",
              "md:inline-flex",
            ].join(" ")}
          >
            <span>Early Access</span>

            <ArrowRight
              size={15}
              strokeWidth={2.2}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_8px_rgba(183,216,63,0.65)]"
            />
          </button>

          {/* =========================================================
              MOBILE MENU BUTTON
          ========================================================== */}

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="apex-mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            className={[
              "flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl",
              "border border-slate-200/70",
              "bg-white/65 backdrop-blur-xl",
              "text-[#071A3A]",
              "transition-all duration-300",
              "hover:border-blue-200",
              "hover:bg-white",
              "hover:text-[#0B5CFF]",
              "md:hidden",
            ].join(" ")}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* =========================================================
            MOBILE NAVIGATION
        ========================================================== */}

        <div
          id="apex-mobile-navigation"
          className={[
            "overflow-hidden px-4 transition-[max-height,opacity,padding] duration-300 md:hidden",
            isMenuOpen
              ? "max-h-96 pb-4 opacity-100"
              : "pointer-events-none max-h-0 pb-0 opacity-0",
          ].join(" ")}
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-2 rounded-2xl border border-slate-200/60 bg-white/70 p-2 backdrop-blur-2xl"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    "cursor-pointer rounded-xl px-4 py-3",
                    "text-sm font-medium",
                    "transition-all duration-200",
                    isActive
                      ? "bg-blue-50 text-[#0B5CFF]"
                      : "text-slate-600 hover:bg-blue-50 hover:text-[#0B5CFF]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={handleMobileWaitlist}
              className={[
                "group mt-1 flex cursor-pointer items-center justify-center gap-2",
                "rounded-xl bg-[#0B5CFF] px-4 py-3",
                "text-sm font-semibold text-white",
                "shadow-[0_10px_30px_rgba(11,92,255,0.18)]",
                "transition-all duration-300",
                "hover:bg-[#0A2D82]",
                "hover:shadow-[0_14px_36px_rgba(11,92,255,0.25)]",
              ].join(" ")}
            >
              <span>Early Access</span>

              <ArrowRight
                size={15}
                strokeWidth={2.2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_8px_rgba(183,216,63,0.65)]"
              />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ApexHeader;
