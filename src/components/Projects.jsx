import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaFolderOpen } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Shopping Cart Web Application",
      img: "/WebCart.png",
      github: "#",
      live: "#",
      description: "Built a responsive shopping cart app with smooth product browsing and cart management.",
      tech: ["React", "JavaScript", "CSS", "Material-UI"]
    },
    {
      title: "Lead Management CRM",
      img: "/CRM.png",
      github: "#",
      live: "#",
      description: "Developed a CRM dashboard to manage leads and streamline customer follow-ups.",
      tech: ["React", "Node.js", "MongoDB"]
      
    }
  ];

  return (
    <motion.section
  id="projects"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div style={{ textAlign: "center" }}>
    <h2 className="projects-heading">PROJECT SHOWCASE</h2>
    {/* <p className="heading-line"></p> */}
    <p className="projects-subtext">
      A glimpse into what I’ve been working on.
    </p>
  </div>

  <div className="projects-container">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="project-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <img src={project.img} alt={project.title} />

        <h3 className="project-title">
          <FaFolderOpen className="project-icon" />
          {project.title}
        </h3>

        <p className="project-description">
          {project.description}
        </p>
        <div className="project-tech-section">
          <p className="tech-heading">Tech Stack</p>
          <div className="project-tech">
            {project.tech.map((item, i) => (
            <span key={i} className="tech-pill">
            {item}
            </span>
            ))}
          </div>
        </div>
        <div className="project-buttons">
          <a href={project.github} className="project-btn github-btn">
            GitHub
          </a>

          <a href={project.live} className="project-btn live-btn">
            Live Demo
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>
  );
}