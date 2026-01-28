import { motion } from "framer-motion";
import Navbar from "./Navbar";

const services = [
  {
    title: "Design Systems",
    description: "Build cohesive, reusable UI foundations with scale-ready tokens and components.",
    items: ["Tailwind + CSS Variables", "Component libraries", "Design QA"],
  },
  {
    title: "Product Interfaces",
    description: "Translate research into clean, intuitive layouts for SaaS and consumer apps.",
    items: ["Figma to code", "Motion-led feedback", "Accessibility-first"],
  },
  {
    title: "Frontend Mastery",
    description: "Ship performant, maintainable React/Vite applications with modern tooling.",
    items: ["React 18", "Vite + SWC", "Redux/Context"],
  },
];

const Services = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <section className="mx-auto max-w-6xl space-y-10 px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-slate-100 bg-white/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.05)]"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Services</p>
          <h1 className="text-4xl font-bold text-slate-900">White-space first experiences</h1>
          <p className="mt-3 text-slate-600">
            I partner with teams crafting premium digital products. The focus stays on clarity, whitespace, and gentle motion, so users feel calm and confident.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.04)]"
            >
              <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-3 text-sm text-slate-500">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
