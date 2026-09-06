import { Code2, GraduationCap, Target, User } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: "Education",
      description: "BTech in Information Technology",
    },
    {
      icon: <Code2 size={24} />,
      title: "Background",
      description: "Diploma in Computer Engineering",
    },
    {
      icon: <Target size={24} />,
      title: "Focus",
      description: "Full-Stack Development",
    },
    {
      icon: <User size={24} />,
      title: "Goal",
      description: "Learn, Build & Grow",
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">ABOUT ME</p>
          <h2>Learning, Building & Growing Every Day.</h2>
        </motion.div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm an Information Technology student with a Diploma in Computer
              Engineering and a strong interest in software and web development.
            </p>

            <p>
              I enjoy learning by building real-world projects, solving
              technical problems, and understanding how frontend, backend, APIs,
              and databases work together.
            </p>

            <p>
              As an aspiring developer, I am continuously improving my skills
              and exploring modern technologies to build meaningful digital
              solutions.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => (
              <div className="highlight-card" key={item.title}>
                <div className="highlight-icon">{item.icon}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;