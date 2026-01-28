import { motion } from "framer-motion";
import Navbar from "./Navbar";

const projects = [
  {
    title: "Releqai",
    description: "Thoughtful automation for teams who ship daily.",
    url: "https://www.releqai.com/",
  },
  {
    title: "Releqai.in",
    description: "Regional launchpad for data and ops tooling.",
    url: "https://www.releqai.in/",
  },
  {
    title: "ecommerce-project",
    description: "Headless commerce shell with clean search flows.",
    url: "https://ecommerce-project-d61ej5ms9-varuns-projects-859429fc.vercel.app",
  },
  {
    title: "spotify-clone",
    description: "UX-backed player demo with API-first mindset.",
    url: "https://spotify-4djukq9jy-varuns-projects-859429fc.vercel.app/",
  },
  {
    title: "movie-list",
    description: "Data-heavy UI with focus on typography and spacing.",
    url: "https://movie-list-u66o-z77zlfhan-varuns-projects-859429fc.vercel.app",
  },
  {
    title: "network-detector",
    description: "Realtime diagnostics framed for engineers.",
    url: "https://network-detector-kowjkr085-varuns-projects-859429fc.vercel.app",
  },
  {
    title: "Photo-filter",
    description: "Interactive visual tooling with minimal chrome.",
    url: "https://practice-routing-sandy.vercel.app/",
  },
  {
    title: "Youtube-clone",
    description: "Playlists and keyboard-first navigation.",
    url: "https://youtube-clone-zeta-olive.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Project = () => {
  return (
    <>
      <Navbar />
      <motion.main
        className="min-h-screen bg-black text-white px-4 sm:px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          <motion.section className="section-card" variants={fadeUp}>
            <p className="contact-lede">Project Showcase</p>
            <h1 className="text-4xl md:text-5xl font-semibold">High-contrast case studies</h1>
            <p className="hero-note">
              Every deployment is framed with strong outlines so the work feels structured and modern.
            </p>
            <div className="hero-actions">
              <a className="outline-button" href="/services">
                Services
              </a>
              <button type="button" className="bw-button button-ok">
                Ok
              </button>
            </div>
          </motion.section>

          <motion.section
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={fadeUp}
          >
            {projects.map((project) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="project-card"
                variants={fadeUp}
              >
                <div>
                  <p className="project-label">{project.title}</p>
                  <h2 className="text-2xl font-semibold mt-2">{project.description}</h2>
                </div>
                <div className="project-footer">
                  <span className="project-link">External link</span>
                  <span className="project-url">{project.url}</span>
                </div>
              </motion.a>
            ))}
          </motion.section>
        </div>
      </motion.main>
    </>
  );
};

export default Project;
