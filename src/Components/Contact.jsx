import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.15 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    clearForm();
  };

  return (
    <>
      <Navbar />
      <motion.main
        className="min-h-screen bg-black text-white px-4 sm:px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.section className="section-card" variants={fadeIn}>
            <p className="contact-lede">Contact</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Let's build a monochrome experience together
            </h1>
            <p className="hero-note">
              Drop a note if you need a high-contrast interface, tooling portal, or automation shell with sharp outlines and crisp typography.
            </p>
            <div className="hero-actions">
              <a className="outline-button" href="mailto:hello@varunisrani.dev">
                Email directly
              </a>
              <button type="button" className="bw-button button-ok">
                Ok
              </button>
            </div>
          </motion.section>

          <motion.section className="section-card contact-panel" variants={fadeIn}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-field"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-field"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="contact-field"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="contact-field contact-textarea"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="outline-button w-full justify-center"
              >
                Submit
              </motion.button>
            </form>
          </motion.section>
        </div>
      </motion.main>
    </>
  );
};

export default ContactForm;
