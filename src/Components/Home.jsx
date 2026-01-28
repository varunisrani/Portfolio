import { motion } from "framer-motion";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Rapid Prototyping",
    description: "Sketching high-fidelity experiences that feel finished from day one.",
    icon: "🎯",
  },
  {
    title: "Pixel-Perfect Craft",
    description: "Refining every component with modern minimalism and subtle depth.",
    icon: "🪄",
  },
  {
    title: "Performance-Ready",
    description: "Lightweight bundles, Vite speed, and clean state management.",
    icon: "⚡",
  },
];

const stats = [
  { value: "8+", label: "Years building web experiences" },
  { value: "30+", label: "Live projects & case studies" },
  { value: "4", label: "Industries collaborated with" },
];

const toolset = [
  "React 18",
  "Vite",
  "Framer Motion",
  "Tailwind CSS",
  "Redux Toolkit",
  "Styled Design Systems",
];

const Home = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] border border-slate-100 bg-white/90 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.05)]"
        >
          <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-600">
                ✨ Modern portfolio premium
              </span>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Varun Israni — crafting thoughtful web experiences.
              </h1>
              <p className="text-lg text-slate-500">
                I design product-level interfaces with a designer&apos;s care and a developer&apos;s discipline. Every project merges clear systems, polished motion, and a white canvas that lets your work breathe.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/project"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
                >
                  Explore Work
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  Schedule a call
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <div className="font-semibold text-slate-900">Currently:</div>
                <span>Contracting across Fintech &amp; SaaS</span>
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-800 p-6 text-white shadow-lg">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  Spotlight
                </p>
                <h2 className="text-2xl font-bold">
                  Clean, white interfaces that feel
                  <br /> premium and effortless.
                </h2>
                <p className="text-sm text-white/80">
                  I collaborate with product teams into the early research phase, turning strategy into interactive systems that honor whitespace, restraint, and clarity.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="space-y-1 text-center">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.04)]"
            >
              <div className="text-3xl" aria-hidden>
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{item.description}</p>
            </div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-[32px] border border-slate-100 bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.05)]"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Expertise</p>
              <h3 className="text-2xl font-semibold text-slate-900">Designing premium front ends</h3>
            </div>
            <div className="text-sm text-slate-600">Focus on clarity, whitespace, and motion-led storytelling.</div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            {toolset.map((tool) => (
              <span
                key={tool}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
