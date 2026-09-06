import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-container">
        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">GET IN TOUCH</p>

          <h2>Let's Build Something Together.</h2>

          <p className="contact-description">
            I'm always interested in learning opportunities, collaborations,
            internships, and exciting projects. Feel free to reach out!
          </p>

          <div className="contact-actions">
            <a
              href="mailto:prernavarade43@gmail.com"
              className="contact-email"
            >
              <Mail size={20} />
              prernavarade43@gmail.com
            </a>

            <a
              href="mailto:prernavarade43@gmail.com"
              className="contact-button"
            >
              Send a Message <Send size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;