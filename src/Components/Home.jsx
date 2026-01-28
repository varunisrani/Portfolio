import { motion } from "framer-motion";
import Navbar from "./Navbar";

const stats = [
  { label: "Deployments", value: "120+", detail: "Monochrome automations maintained" },
  { label: "Uptime", value: "99.99%", detail: "Alerts kept silenced" },
  { label: "Tools", value: "React · Vite", detail: "Reliable web stack" },
];

const features = [
  {
    title: "Interface Systems",
    detail:
      "Components framed with precise outlines, sharp typography, and deliberate spacing provide fast readibility for teams that ship nightly.",
  },
  {
    title: "Design Ops",
    detail:
      "Black-and-white tokens, purposeful transitions, and atomic spacing ladders keep every screen aligned with engineering velocity.",
  },
  {
    title: "Automation Shells",
    detail:
      "Monitoring dashboards, launch sequences, and tooling portals that look calm without losing clarity when the data spikes.",
  },
];

const tags = ["Interface Systems", "Automation", "Design Ops", "Monochrome Cast"].map((tag) =>
  tag.toUpperCase()
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <>
      <Navbar />
      <motion.main
        className="home-root"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section className="hero-section" variants={fadeInUp}>
          <motion.div className="hero-copy" variants={fadeInUp}>
            <p className="hero-lede">Black & White Portfolio</p>
            <h1>
              Varun Israni builds crisp, monochrome tooling that engineers can read like a log file
            </h1>
            <p className="hero-lede">
              I pair lean stacks with stark visual systems so critical dashboards, tooling suites, and
              product launches stay focused and fast—no color distractions, just sharp intent.
            </p>
            <div className="hero-actions">
              <button type="button" className="bw-button button-ok">
                Ok
              </button>
              <a className="outline-button" href="/project">
                View case studies
              </a>
            </div>
            <div className="hero-tags">
              {tags.map((tag) => (
                <span key={tag} className="hero-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div className="hero-panel" variants={fadeInUp}>
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <p className="hero-note">{stat.detail}</p>
                </div>
              ))}
            </div>
            <p className="hero-note">
              Every layout leans into contrast, quiet frames, and glassy outlines so context is always
              clear, even when the log stream accelerates.
            </p>
          </motion.div>
        </motion.section>

        <motion.section className="feature-grid" variants={fadeInUp}>
          {features.map((feature) => (
            <motion.div key={feature.title} className="feature-card" variants={fadeInUp}>
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section className="bw-highlight" variants={fadeInUp}>
          <h2>Black & White Systems</h2>
          <p>
            Crisp black-and-white systems deliver clarity when the stakes are high. Every component is
            built with intention, guided by outlines, deliberate spacing, and typography that feels at
            home in a dev console.
          </p>
          <div className="hero-actions">
            <a className="outline-button" href="/services">
              Explore services
            </a>
            <button type="button" className="bw-button button-ok">
              Ok
            </button>
          </div>
        </motion.section>
      </motion.main>
    </>
  );
};

export default Home;
