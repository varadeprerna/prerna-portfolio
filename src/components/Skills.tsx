import {
  Code2,
  Database,
  Globe,
  Server,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={26} />,
      title: "Programming",
      skills: ["Java", "C", "JavaScript", "TypeScript"],
    },
    {
      icon: <Globe size={26} />,
      title: "Frontend Development",
      skills: ["React", "HTML", "CSS", "Vite"],
    },
    {
      icon: <Server size={26} />,
      title: "Backend Development",
      skills: ["Node.js", "REST APIs", "Express.js"],
    },
    {
      icon: <Database size={26} />,
      title: "Database",
      skills: ["MongoDB", "Database Fundamentals"],
    },
    {
      icon: <Wrench size={26} />,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code",],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">MY SKILLS</p>
          <h2>Technologies I'm Learning & Working With.</h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <motion.div
              className="skill-card"
              key={category.title}
              whileHover={{ y: -8 }}
            >
              <div className="skill-icon">{category.icon}</div>

              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;