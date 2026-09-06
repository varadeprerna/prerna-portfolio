import { Brain, Code2, Database, Rocket } from "lucide-react";
import { motion } from "framer-motion";

function Learning() {
  const learningItems = [
    {
      icon: <Code2 size={26} />,
      title: "Full-Stack Development",
      description:
        "Improving my skills in building complete applications using modern frontend and backend technologies.",
    },
    {
      icon: <Database size={26} />,
      title: "Databases & APIs",
      description:
        "Learning how databases, REST APIs, authentication, and backend services work together.",
    },
    {
      icon: <Brain size={26} />,
      title: "Artificial Intelligence",
      description:
        "Exploring AI technologies and understanding how AI can be integrated into real-world applications.",
    },
    {
      icon: <Rocket size={26} />,
      title: "Real-World Development",
      description:
        "Building practical projects and improving my problem-solving and software development skills.",
    },
  ];

  return (
    <section id="learning" className="learning section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">CURRENTLY LEARNING</p>
          <h2>Always Learning. Always Building.</h2>
        </motion.div>

        <div className="learning-grid">
          {learningItems.map((item) => (
            <motion.div
              className="learning-card"
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="learning-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learning;