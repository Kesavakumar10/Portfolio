import { motion } from "framer-motion";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Hero() {
  return (

    <motion.section
      id="profile"
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
    <section className="hero">

  <div className="particles">
    {[...Array(25)].map((_, i) => (
     <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${5 + Math.random() * 10}s`
      }}
     />
    ))}
  </div>
  <div className="hero-card">

    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />

    <div className="profile-ring">
      <img src="/MY pic.jpg" className="profile-img" />
    </div>

    <h1>KESAVAKUMAR R</h1>

    <p>MERN Stack Developer</p>

    <div className="btn-group">

      <a href="#contact" className="btn primary">
         <FaEnvelope /> React Out
      </a>

      <a href="/cv.pdf" className="btn outline" download>
        <FaDownload /> Download CV
      </a>

    </div>

  </div>

</section>
</motion.section>
  );
}