import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaWandMagicSparkles,
  FaRoute,
  FaRobot,
  FaLayerGroup,
} from "react-icons/fa6";

import { FaDatabase, FaTools } from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiMui,
  SiTailwindcss,
  SiVite,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiCloudflare,
  SiGoogle,
  SiDeepseek,
  SiAnthropic,
} from "react-icons/si";

// Skill Chip Component
const Chip = ({ item }) => {
  const Icon = item.icon;

  return (
    <span
      className="skill-chip"
      style={{ "--brand": item.color }}
    >
      {Icon && <Icon />}
      {item.name}
    </span>
  );
};

// Skills Data
const categories = [
  {
  title: "Frontend Technologies",
  icon: FaLayerGroup,
  groups: [
    {
      title: "Core Technologies",
      skills: [
        {
          name: "HTML",
          icon: FaHtml5,
          color: "#E34F26",
        },
        {
          name: "CSS",
          icon: FaCss3Alt,
          color: "#1572B6",
        },
        {
          name: "JavaScript",
          icon: FaJs,
          color: "#F7DF1E",
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
          color: "#3178C6",
        },
      ],
    },
    {
      title: "Frameworks & UI",
      skills: [
        {
          name: "React",
          icon: FaReact,
          color: "#61DAFB",
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "#FFFFFF",
        },
        {
          name: "Material UI",
          icon: SiMui,
          color: "#007FFF",
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4",
        },
        {
          name: "Vite",
          icon: SiVite,
          color: "#646CFF",
        },
        {
          name: "Framer Motion",
          icon: SiFramer,
          color: "#BB4BFF",
        },
      ],
    },
  ],
},

  {
    title: "Backend & Databases",
    icon: FaDatabase,
    groups: [
      {
        title: "Server & Data Technologies",
        skills: [
          {
            name: "Node.js",
            icon: FaNodeJs,
            color: "#5FA04E",
          },
          {
            name: "Express.js",
            icon: SiExpress,
            color: "#F5F5F5",
          },
          {
            name: "MongoDB",
            icon: SiMongodb,
            color: "#47A248",
          },
          {
            name: "MySQL",
            icon: SiMysql,
            color: "#7DB9DE",
          },
        ],
      },
      {
        title: "Deployment & Hosting",
        skills: [
          {
            name: "Vercel",
            icon: SiVercel,
            color: "#FFFFFF",
          },
          {
            name: "Netlify",
            icon: SiNetlify,
            color: "#00C7B7",
          },
          {
            name: "Cloudflare",
            icon: SiCloudflare,
            color: "#F38020",
          },
        ],
      },
    ],
  },

  {
    title: "Tools & AI",
    icon: FaTools,
    groups: [
      {
        title: "Development Tools",
        skills: [
          {
            name: "Git",
            icon: FaGitAlt,
            color: "#F05032",
          },
          {
            name: "GitHub",
            icon: FaGithub,
            color: "#FFFFFF",
          },
          {
            name: "Postman",
            icon: SiPostman,
            color: "#FF6C37",
          },
        ],
      },

      {
        title: "AI-Assisted Tools",
        skills: [
          {
            name: "ChatGPT",
            icon: FaRobot,
            color: "#FFFFFF",
          },
          {
            name: "Gemini",
            icon: SiGoogle,
            color: "#4285F4",
          },
          {
            name: "DeepSeek",
            icon: SiDeepseek,
            color: "#4D9BFF",
          },
          {
            name: "Claude",
            icon: SiAnthropic,
            color: "#D97757",
          },
          {
            name: "Stitch",
            icon: FaWandMagicSparkles,
            color: "#A855F7",
          },
          {
            name: "OmniRoute",
            icon: FaRoute,
            color: "#38BDF8",
          },
        ],
      },
    ],
  },
];

// Skills Component
const Skills = () => {
  return (
    <section id="skills">

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Technologies and tools I use to build modern web applications.
      </motion.p>

      {/* Skills Cards */}
      <div className="skills-grid">

        {categories.map((category, index) => {
          const CategoryIcon = category.icon;

          return (
            <motion.div
              key={category.title}
              className="skill-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <div className="skill-card-inner">

                {/* Category Heading */}
                <h3>
                  <CategoryIcon />
                  {category.title}
                </h3>

                {/* Categories Without Groups */}
                {category.skills && (
                  <div className="skill-chips">
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill.name}
                        item={skill}
                      />
                    ))}
                  </div>
                )}

                {/* Categories With Groups */}
                {category.groups &&
                  category.groups.map((group) => (
                    <div
                      className="skill-group"
                      key={group.title}
                    >
                      <h4 className="skill-group-title">
                        {group.title}
                      </h4>

                      <div className="skill-chips">
                        {group.skills.map((skill) => (
                          <Chip
                            key={skill.name}
                            item={skill}
                          />
                        ))}
                      </div>
                    </div>
                  ))}

              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default Skills;