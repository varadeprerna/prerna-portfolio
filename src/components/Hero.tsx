import profileImage from "../assets/profile.png";

import {
  ArrowDown,
  Mail,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Prerna-Varade-Resume.pdf`;

  return (
    <section id="home" className="hero">

      {/* LEFT CONTENT */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="hero-greeting">
          HELLO, I'M
        </p>

        <h1>
          Prerna <span>Varade</span>
        </h1>

        <h2>
          Aspiring Software Developer
        </h2>

        <p className="hero-description">
          I'm a BTech Information Technology student passionate about
          building practical web applications, exploring modern technologies,
          and continuously growing as a developer.
        </p>

        {/* HERO BUTTONS */}
        <div className="hero-buttons">

          {/* DOWNLOAD RESUME */}
          <a
            href={resumeUrl}
            download="Prerna-Varade-Resume.pdf"
            className="resume-button"
          >
            Download Resume
            <Download size={18} />
          </a>

          {/* VIEW PROJECTS */}
          <a
            href="#projects"
            className="primary-button"
          >
            View My Projects
            <ArrowDown size={18} />
          </a>

          {/* CONTACT */}
          <a
            href="mailto:prernavarade43@gmail.com"
            className="secondary-button"
          >
            Contact Me
            <Mail size={18} />
          </a>

        </div>

        {/* SOCIAL MEDIA LINKS */}
        <div className="hero-social-links">

          {/* GITHUB */}
          <a
            href="https://github.com/varadeprerna"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub size={22} />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/prernavarade/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin size={22} />
          </a>

        </div>

      </motion.div>

      {/* RIGHT PROFILE IMAGE */}
      <div className="hero-decoration">

        {/* BACKGROUND CIRCLES */}
        <div className="decoration-circle circle-one"></div>
        <div className="decoration-circle circle-two"></div>

        {/* PROFILE IMAGE */}
        <div className="hero-image-container">

          <div className="hero-image-glow"></div>

          <img
            src={profileImage}
            alt="Prerna Varade"
            className="hero-profile-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;