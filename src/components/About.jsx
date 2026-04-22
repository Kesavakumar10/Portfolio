import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
    <section>
      <h2>ABOUT ME</h2>
      <p className="heading-line"></p>
      <p style={{marginTop: "40px"}}>
        A Full Stack Developer with a strong interest in frontend development,
        focused on building responsive and user-friendly web applications.
      </p>

      <p style={{ marginTop: "10px" }}>
        Experienced in working with technologies like React, JavaScript, Node.js,
        and Express, along with databases such as MongoDB and MySQL to build
        scalable full-stack applications.
      </p>

      <p style={{ marginTop: "10px" }}>
        Focused on writing clean, maintainable code while continuously improving
        problem-solving skills and creating smooth user experiences.
      </p>
    </section>
    </motion.section>
  );
}