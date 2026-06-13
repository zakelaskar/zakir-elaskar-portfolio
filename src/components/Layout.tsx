import { Outlet } from "react-router-dom";
import { AmbientBackground } from "./AmbientBackground";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-dvh">
      <AmbientBackground />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 sm:pt-10">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200/80 bg-white/50 py-10 text-center text-sm text-slate-500 backdrop-blur">
        <p>
          © {new Date().getFullYear()} Zakir Sajid Elaskar · Built with React, Tailwind &
          Framer Motion
        </p>
      </footer>
    </div>
  );
}
