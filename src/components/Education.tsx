import { GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      icon: <GraduationCap size={28} />,
      type: "CURRENT EDUCATION",
      degree: "Bachelor of Technology (BTech)",
      field: "Information Technology",
      status: "Currently Pursuing",
      description:
        "Building strong knowledge in software development, web technologies, databases, and computer science fundamentals.",
    },
    {
      icon: <BookOpen size={28} />,
      type: "COMPLETED EDUCATION",
      degree: "Diploma",
      field: "Computer Engineering",
      status: "Completed",
      description:
        "Developed a foundation in programming, web development, databases, and software development concepts.",
    },
  ];

  return (
    <section id="education" className="education section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">EDUCATION</p>
          <h2>My Academic Journey.</h2>
        </motion.div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <motion.div
              className="education-card"
              key={item.degree}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="education-icon">
                {item.icon}
              </div>

              <div className="education-content">
                <div className="education-top">
                  <span className="education-type">{item.type}</span>
                  <span className="education-status">{item.status}</span>
                </div>

                <h3>{item.degree}</h3>
                <h4>{item.field}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;