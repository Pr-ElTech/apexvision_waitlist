import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const ApexHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="PR-EL TECH Project APEX"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A2D82] via-[#0B5CFF] to-[#38BDF8] shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-[1.03]">
            <span className="text-[11px] font-black tracking-tight text-white">
              PR-EL
            </span>

            <span
              aria-hidden="true"
              className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#B7D83F] shadow-[0_0_8px_rgba(183,216,63,0.65)]"
            />
          </div>

          <div>
            <p className="text-sm font-black tracking-tight text-[#071A3A]">
              PR-EL TECH
            </p>

            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Project APEX
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `
                rounded-full
                px-4
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-200
                ${
                  isActive
                    ? "bg-white text-[#0B5CFF] shadow-[0_8px_24px_rgba(11,92,255,0.07)]"
                    : "text-slate-600 hover:bg-white/75 hover:text-[#0B5CFF] hover:shadow-[0_8px_24px_rgba(11,92,255,0.07)] hover:backdrop-blur-xl"
                }
              `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Early Access CTA */}
        <Link
          to="/early-access"
          className="
            hidden
            items-center
            gap-2
            rounded-full
            bg-[#0B5CFF]
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-blue-500/20
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#0A2D82]
            hover:shadow-xl
            hover:shadow-blue-500/25
            md:inline-flex
          "
        >
          <span>Early Access</span>

          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-[#B7D83F]"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="apex-mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white/60
            text-[#071A3A]
            backdrop-blur-xl
            transition-all
            duration-200
            hover:border-blue-200
            hover:bg-white
            hover:text-[#0B5CFF]
            md:hidden
          "
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="apex-mobile-navigation"
        className={`
          overflow-hidden
          border-t
          border-slate-200/60
          bg-white/90
          px-6
          backdrop-blur-2xl
          transition-[max-height,opacity]
          duration-300
          md:hidden
          ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-7xl flex-col gap-2 py-4"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                transition-all
                duration-200
                ${
                  isActive
                    ? "bg-blue-50 text-[#0B5CFF]"
                    : "text-slate-600 hover:bg-blue-50 hover:text-[#0B5CFF]"
                }
              `
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/early-access"
            onClick={closeMenu}
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#0B5CFF]
              px-4
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-blue-500/20
            "
          >
            <span>Early Access</span>

            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#B7D83F]"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default ApexHeader;
