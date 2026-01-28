import { motion } from "framer-motion";
import Navbar from "./Navbar";

const serviceLogos = [
  "https://tse3.mm.bing.net/th?id=OIP.w7qCpTb-SYPa1MBrV43NXQEHDs&pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th?id=OIP.Vrn7cT83sIqFs_uwkOcH1wAAAA&pid=Api&P=0&h=180",
  "https://iconape.com/wp-content/files/yb/61798/png/flutter-logo.png",
  "https://icon-library.com/images/html5-icon/html5-icon-13.jpg",
  "https://pngicon.ru/file/uploads/css3.png",
  "https://codekitapp.com/images/help/free-tailwind-icon@2x.png",
];

const serviceDetails = [
  {
    title: "Interface Engineering",
    detail: "Components with rigorous outlines, intentional spacing, and responsive states that read like a log file.",
  },
  {
    title: "System Design",
    detail: "Reliable page structures crafted for nocturnal teams who value clarity in tooling and dashboards.",
  },
  {
    title: "Design Systems",
    detail: "Monochrome tokens, modular spacing, and purposeful typography that scale with your release velocity.",
  },
  {
    title: "Automation Shells",
    detail: "Deployable portals with calm visuals, strong contrast, and structured defaults for the ops teams on call.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.2 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
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
          <motion.section className="section-card" variants={fadeIn}>
            <p className="contact-lede">Services</p>
            <h1 className="text-4xl md:text-5xl font-semibold">High-contrast craft for developer teams</h1>
            <p className="hero-note">
              I help product teams design tooling and interfaces that stay fast, lean, and monochrome—aligned with
              engineering velocity and high-stakes data.
            </p>
            <div className="hero-actions">
              <a className="outline-button" href="/contact">
                Start a build
              </a>
              <button type="button" className="bw-button button-ok">
                Ok
              </button>
            </div>
          </motion.section>

          <motion.section
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            variants={fadeIn}
          >
            {serviceLogos.map((logo, index) => (
              <motion.div key={index} className="section-card flex flex-col items-center gap-4" variants={fadeIn}>
                <div className="monochrome-icon">
                  <img src={logo} alt={`Service icon ${index + 1}`} />
                </div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/50">Tooling icon</p>
                <p className="text-white/70 text-sm leading-relaxed text-center">
                  Visual curation that quietly frames the data so your automation stories stay bold even with dense data.
                </p>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            className="grid gap-6 md:grid-cols-2"
            variants={fadeIn}
          >
            {serviceDetails.map((service) => (
              <motion.div key={service.title} className="service-card" variants={fadeIn}>
                <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/60">{service.title}</p>
                <p className="text-white/65 text-base leading-relaxed">{service.detail}</p>
              </motion.div>
            ))}
          </motion.section>

          <motion.section className="section-card bw-highlight" variants={fadeIn}>
            <p className="contact-lede">Why monochrome?</p>
            <h2 className="text-3xl font-semibold">Contrast keeps the focus</h2>
            <p className="hero-note">
              Minimal palettes make the essential stand out. Purpose-built spacing, dark backgrounds, and bright outlined
              accents ensure the product always feels alive, even when the dashboards are dense.
            </p>
            <div className="hero-actions">
              <a className="outline-button" href="/project">
                See case studies
              </a>
              <button type="button" className="bw-button button-ok">
                Ok
              </button>
            </div>
          </motion.section>
        </div>
      </motion.main>
    </>
  );
};

export default Services;
