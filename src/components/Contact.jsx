import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaUserFriends,
} from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1
        className="contact-heading"
        style={{
          textAlign: "center",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        LET'S COLLABORATE
      </h1>
      <p className="heading-line"></p>

      <motion.div
        className="contact-main-box"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            fontWeight: "600",
          }}
        >
          <FaUserFriends />
          Stay in Touch
        </h2>

        <div className="contact-item">
          <FaPhone />
          <div>
            <p style={{ color: "white" }}>Mobile</p>
            <span>+91 94442 37869</span>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope />
          <div>
            <p style={{ color: "white" }}>Email</p>
            <span>kesavakumar0005@gmail.com</span>
          </div>
        </div>

        <div className="cta-mini">Open to freelance work and meaningful collaborations</div>
      </motion.div>

      <motion.div
        className="contact-social-box"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3>Connect With Me</h3>

        <div className="social-buttons">
          <a
            href="https://github.com/Kesavakumar10"
            target="_blank"
            rel="noreferrer"
            className="social-btn github"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kesavakumar-ramesh/"
            target="_blank"
            rel="noreferrer"
            className="social-btn linkedin"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <div className="cta-box">
          <h3 className="cta-heading">Let's Work Together</h3>
          <p className="cta-text">
            Open to opportunities and meaningful collaborations. Let's create something
            impactful.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
