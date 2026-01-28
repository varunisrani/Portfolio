import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Project", to: "/project" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-2xl font-semibold tracking-wide text-slate-900">
          Varun Israni
        </NavLink>

        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-indigo-600" : "text-slate-500 hover:text-slate-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <a
            href="https://www.linkedin.com/in/varun-israni-a21022261/?originalSubdomain=in"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-800 hover:text-slate-900 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rcout328"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/30 transition hover:bg-slate-800"
          >
            GitHub
          </a>
        </div>

        <button
          className="inline-flex items-center rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white/95 md:hidden">
          <nav className="space-y-2 px-6 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <a
                href="https://www.linkedin.com/in/varun-israni-a21022261/?originalSubdomain=in"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 px-4 py-2 text-left text-sm font-medium text-slate-700 hover:border-slate-800"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/rcout328"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-900 px-4 py-2 text-left text-sm font-medium text-white shadow-lg shadow-slate-900/30"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
