import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 bg-mesh-gradient opacity-90" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div
        className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-120px] top-10 h-96 w-96 rounded-full bg-sky-300/35 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg
        className="absolute right-[8%] top-[18%] h-40 w-40 text-violet-300/30"
        viewBox="0 0 120 120"
      >
        <motion.rect
          x="10"
          y="10"
          width="100"
          height="100"
          rx="18"
          fill="currentColor"
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <svg
        className="absolute left-[6%] bottom-[12%] h-28 w-28 text-sky-300/35"
        viewBox="0 0 100 100"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="36"
          fill="currentColor"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
