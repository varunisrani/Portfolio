import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    clearForm();
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] border border-slate-100 bg-white/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.05)]"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Contact</p>
          <h1 className="text-4xl font-bold text-slate-900">Let&apos;s build something calm &amp; confident.</h1>
          <p className="mt-3 text-slate-600">
            Share a project brief, team makeup, or timeline and I&apos;ll respond with ideas, next steps, and availability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="grid gap-10 lg:grid-cols-2"
        >
          <div className="space-y-6 rounded-[28px] border border-slate-100 bg-white p-8 shadow-[0_30px_100px_rgba(15,23,42,0.07)]">
            <h2 className="text-2xl font-semibold text-slate-900">Digital partner details</h2>
            <p className="text-slate-600">
              I collaborate remotely with product teams of 2–20 people, across MEA, Europe, and the US. Delivery focuses on clarity, polish, and measurable velocity.
            </p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>• Available for 1:1 consultations, sprints, and long-term retainers.</li>
              <li>• Delivery: Figma to React, polished interactions, accessibility-first.</li>
              <li>• Tools: Vite, Framer Motion, Tailwind, Redux Toolkit.</li>
            </ul>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
              <span>Remote-first</span>
              <span>UTC +5:30 base</span>
              <span>Responsive within 24h</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-slate-100 bg-white p-8 shadow-[0_30px_120px_rgba(15,23,42,0.05)]"
          >
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-slate-700">
                Name
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Message
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800"
              >
                Send message
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactForm;
