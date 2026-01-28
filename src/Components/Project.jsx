import { motion } from "framer-motion";
import Navbar from "./Navbar";

const projects = [
  {
    title: "Releqai",
    description: "AI-powered insights platform with a focus on natural language interactions.",
    image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
    url: "https://www.releqai.com/",
    tags: ["AI", "Product"],
  },
  {
    title: "Releqai.in",
    description: "Localized continuation of the flagship product with a regional lens.",
    image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
    url: "https://www.releqai.in/",
    tags: ["Localized", "Growth"],
  },
  {
    title: "ecommerce-project",
    description: "Sleek storefront layout with flawless animation cues and smooth navigation.",
    image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
    url: "https://ecommerce-project-d61ej5ms9-varuns-projects-859429fc.vercel.app",
    tags: ["E-commerce", "Animation"],
  },
  {
    title: "spotify-clone",
    description: "Immersive streaming UI that mirrors premium music services.",
    image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
    url: "https://spotify-4djukq9jy-varuns-projects-859429fc.vercel.app/",
    tags: ["Streaming", "Motion"],
  },
  {
    title: "movie-list",
    description: "Film discovery experience with clean typography and responsive cards.",
    image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
    url: "https://movie-list-u66o-z77zlfhan-varuns-projects-859429fc.vercel.app",
    tags: ["CMS", "Clean"],
  },
  {
    title: "network-detector",
    description: "Utility dashboard that surfaces signal strength and diagnostics with clarity.",
    image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
    url: "https://network-detector-kowjkr085-varuns-projects-859429fc.vercel.app",
    tags: ["Utility", "Dashboard"],
  },
  {
    title: "Photo-filter",
    description: "Playful creative tool built with routing finesse.",
    image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
    url: "https://practice-routing-sandy.vercel.app/",
    tags: ["Creative", "Routing"],
  },
  {
    title: "Youtube-clone",
    description: "Dynamic media grid with subtle hover motion cues.",
    image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
    url: "https://youtube-clone-zeta-olive.vercel.app/",
    tags: ["Video", "Responsive"],
  },
];

const Project = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <section className="mx-auto max-w-6xl space-y-10 px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.05)]"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Case studies</p>
          <h1 className="text-4xl font-bold text-slate-900">Product work that favors white space.</h1>
          <p className="mt-3 text-slate-600">
            Every project is designed to feel calm yet confident. Digital products get crisp typography, responsive grids, and thoughtful motion so your users feel taken care of.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[30px] border border-slate-100 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_45px_90px_rgba(15,23,42,0.08)]"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-3">
                <div className="flex-1 space-y-2">
                  <h2 className="text-2xl font-semibold text-slate-900">{project.title}</h2>
                  <p className="text-sm text-slate-500">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Visit</span>
                <span className="text-sm font-semibold text-indigo-600 group-hover:text-indigo-500">↗</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Project;
