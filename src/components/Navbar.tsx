import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/research", label: "Research" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function linkClass(isActive: boolean) {
  return [
    "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
    isActive
      ? "bg-violet-600/10 text-violet-800"
      : "text-slate-600 hover:bg-white/60 hover:text-slate-900",
  ].join(" ");
}

const resumeClass =
  "rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-white/60 hover:text-slate-900";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/50">
      <div className="glass-nav">
        <nav
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6"
          aria-label="Primary"
        >
          <NavLink
            to="/"
            className="group flex items-center gap-2 font-semibold tracking-tight text-slate-900"
            onClick={() => setOpen(false)}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-sky-500 text-sm font-bold text-white shadow-soft">
              ZE
            </span>
            <span className="hidden sm:inline">Zakir Elaskar</span>
          </NavLink>

          <div className="hidden flex-wrap items-center justify-end gap-1 lg:flex">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) => linkClass(isActive)}
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                [resumeClass, isActive ? "bg-violet-600/10 text-violet-800" : ""].filter(Boolean).join(" ")
              }
            >
              Resume
            </NavLink>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 p-2 text-slate-800 shadow-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden border-t border-white/60 lg:hidden"
              id="mobile-nav"
            >
              <div className="flex flex-col gap-1 px-4 py-3">
                {navItems.map(({ to, label }) => {
                  const isActive =
                    to === "/"
                      ? pathname === "/"
                      : pathname === to || pathname.startsWith(`${to}/`);
                  return (
                    <NavLink
                      key={to}
                      to={to}
                      end={to === "/"}
                      className={linkClass(isActive)}
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </NavLink>
                  );
                })}
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    [resumeClass, isActive ? "bg-violet-600/10 text-violet-800" : ""]
                      .filter(Boolean)
                      .join(" ")
                  }
                  onClick={() => setOpen(false)}
                >
                  Resume
                </NavLink>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
