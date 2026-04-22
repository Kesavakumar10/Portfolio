import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      title: "Frontend Technologies",
      icon: <FaCode />,
      items: [
        { name: "HTML", level: 95, color: "#d31a7a" },
        { name: "CSS", level: 90, color: "#d4428b" },
        { name: "JavaScript", level: 88, color: "#35b0a2" },
        { name: "React", level: 85, color: "#22adc5" },
        { name: "Material UI", level: 90, color: "#20c45c" },
      ]
    },
    {
      title: "Backend & Databases",
      icon: <FaServer />,
      items: [
        { name: "Node.js", level: 78, color: "#bcd11a", },
        { name: "Express", level: 75, color: "#88b714" },
        { name: "MongoDB", level: 82, color: "#d37d1a" },
        { name: "MySQL", level: 80, color: "#7950e1" }
      ]
    },
    {
      title: "Tools",
      icon: <FaTools />,
      items: [
        { name: "Git & GitHub", level: 85, color: "#342bd7" },
        { name: "VS Code", level: 99, color: "#1a70d3" }
      ]
    }
  ];

  return (
  <motion.section
    id="skills"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2
      style={{
        textAlign: "center",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      DEVELOPER TOOLKIT
    </h2>
    <p className="heading-line"></p>
    <p style={{marginBottom : "30px", marginTop: "20px"}}>The tools and technologies I use to build modern web applications.</p>

    <div className="grid grid-2">
      {skills.map((category, index) => (
        <motion.div
          className="card"
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}  // 🔥 stagger
          viewport={{ once: true }}
        >
        <div className="card" key={index}>
          
          <h3 style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {category.icon} {category.title}
          </h3>

          {category.items.map((item, i) => (
            <div key={i} className="skill">

              <div className="skill-top">
                <span>{item.name}</span>

                <span
                  className="percent-badge"
                  style={{ background: item.color, color: item.textColor, boxShadow: `0 0 10px ${item.color}`}}
                >
                  {item.level}%
                </span>
              </div>

              <div className="bar">
                <div
                  className="fill"
                  style={{
                    "--width": `${item.level}%`,   // 🔥 important
                    background: item.color,
                  }}
                ></div>
              </div>

            </div>
          ))}
        
        </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);
}