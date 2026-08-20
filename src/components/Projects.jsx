import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFolderOpen,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Headless CMS",
      images: [
        "/Headless-cms.png",
        "",
        "",
      ],
      github: "https://github.com/Kesavakumar10/Headless-cms-client-react",
      live: "https://blogspace-cms.netlify.app",
      description:
        "Developed a full-stack Headless CMS with AI-powered blog and image generation, rich text editing, SEO management, scheduled publishing, and secure admin authentication.",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Multer",
        "Tiptap",
        "Gemini AI",
        "Pollinations AI",
      ],
    },

    {
      title: "Lead Management CRM",
      images: [
        "/CRM.png",
        "/CRM1.png",
        "",
      ],
      github:
        "https://github.com/Kesavakumar10/leadflow/tree/main/frontend/myapp",
      live: "https://leadflowcr.netlify.app/",
      description:
        "Developed a CRM dashboard to manage leads and streamline customer follow-ups.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "REST API",
        "Axios",
        "Node Cron",
        "Nodemailer",
      ],
    },

    // {
      // title: "Shopping Cart Web Application",
    //   images: [
    //     "/WebCart.png",
    //     "",
    //     "",
    //   ],
    //   github: "https://github.com/Kesavakumar10/EliteArena",
    //   live: "https://elitecart1.netlify.app/",
    //   description:
    //     "Built a responsive shopping cart app with smooth product browsing and cart management.",
    //   tech: [
    //     "React",
    //     "JavaScript",
    //     "CSS",
    //     "Material-UI",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "REST API",
    //   ],
    // },
  ];

  const [currentSlides, setCurrentSlides] = useState({});

  const getValidImages = (project) => {
    return project.images.filter((image) => image !== "");
  };

  const nextSlide = (projectIndex, totalImages) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) + 1) % totalImages,
    }));
  };

  const previousSlide = (projectIndex, totalImages) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) - 1 + totalImages) %
        totalImages,
    }));
  };

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
          A glimpse into what I've been working on.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => {
          const images = getValidImages(project);
          const currentIndex = currentSlides[index] || 0;

          return (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="project-image-slider">
                <img
                  src={images[currentIndex]}
                  alt={project.title}
                />

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="slider-btn slider-prev"
                      onClick={() =>
                        previousSlide(index, images.length)
                      }
                      aria-label="Previous image"
                    >
                      <FaChevronLeft />
                    </button>

                    <button
                      type="button"
                      className="slider-btn slider-next"
                      onClick={() =>
                        nextSlide(index, images.length)
                      }
                      aria-label="Next image"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>

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
                <a
                  href={project.github}
                  className="project-btn github-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="project-btn live-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}