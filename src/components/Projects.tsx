import { ArrowUpRight, Code2, FolderGit2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectGallery from "./ProjectGallery";
// ===============================
// GILIZA AI SCREENSHOTS
// ===============================
import gilizaLogin from "../assets/Giliza-Login.png";
import gilizaSignin from "../assets/Giliza-Signin.png";
import patientDash from "../assets/Patient-Dash.png";
import patientAI from "../assets/Patient-AI.png";
import doctorDash from "../assets/Droctor-Dash.png";
import doctorSym from "../assets/Droctor-Sym.png";
import hospDash from "../assets/Hosp-Dash.png";
import hospAnalytics from "../assets/Hosp-Analytics.png";
import manageDash from "../assets/Manage-Dash.png";
import manageAI from "../assets/Manage-AI.png";
// NEXA IMAGES
import nexaLogin from "../assets/nexa-login.png";
import nexaDashboard from "../assets/nexa-dashboard.png";
import nexaBilling from "../assets/nexa-billing.png";
import nexaHistory from "../assets/nexa-history.png";

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured: boolean;
  screenshots: string[];
}

function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const projects: Project[] = [
    {
  number: "01",
  title: "Giliza AI",
  category: "AI-Powered Healthcare Platform",
  description:
    "A healthcare platform designed to connect patients, doctors, hospitals, and administrators through role-based dashboards and modern digital healthcare features.",

  technologies: [
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
  ],

  featured: true,

  screenshots: [

    // Authentication
    gilizaLogin,
    gilizaSignin,

    // Patient Dashboard
    patientDash,
    patientAI,

    // Doctor Dashboard
    doctorDash,
    doctorSym,

    // Hospital Dashboard
    hospDash,
    hospAnalytics,

    // Admin / Management Dashboard
    manageDash,
    manageAI,

  ],
},

    {
      number: "02",
      title: "Nexa Electric Billing",
      category: "Electricity Billing Management System",
      description:
        "A digital system designed to manage electricity billing, customer information, bill calculations, and billing-related operations efficiently.",
      technologies: [
        "Java",
        "Database",
        "Web Development",
      ],
      featured: false,

      // ADD NEXA SCREENSHOTS HERE LATER
      screenshots: [
  nexaLogin,
  nexaDashboard,
  nexaBilling,
  nexaHistory,
],
    },

    {
      number: "03",
      title: "DIGIASSIST",
      category: "Digital Learning Assistant",
      description:
        "A learning-focused application designed to support students with digital resources and improve access to educational information.",
      technologies: [
        "Java",
        "Web Development",
        "Learning Tools",
      ],
      featured: false,

      // ADD DIGIASSIST SCREENSHOTS HERE LATER
      screenshots: [],
    },
  ];

  return (
    <>
      <section id="projects" className="projects section">
        <div className="section-container">

          <motion.div
            className="section-heading projects-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="section-label">MY WORK</p>

              <h2>Projects I've Built.</h2>

              <p className="projects-intro">
                A collection of projects where I apply my skills,
                solve problems, and continue learning through
                real-world development.
              </p>
            </div>
          </motion.div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.article
                className={`project-card ${
                  project.featured ? "featured-project" : ""
                }`}
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -7 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >

                {/* PROJECT PREVIEW */}
<div className="project-preview">

  {project.screenshots.length > 0 ? (
    <img
      src={project.screenshots[0]}
      alt={`${project.title} Preview`}
      className="project-preview-image"
    />
  ) : (
    <div className="project-placeholder">
      <FolderGit2 size={42} />

      <span>Project Preview</span>

      <small>
        Screenshots will be added soon
      </small>
    </div>
  )}

  {project.featured && (
    <div className="featured-badge">
      Featured Project
    </div>
  )}

</div>

                {/* PROJECT CONTENT */}
                <div className="project-content">

                  <div className="project-top">
                    <span className="project-number">
                      {project.number}
                    </span>

                    <Code2 size={22} />
                  </div>

                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="technology-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* VIEW GALLERY BUTTON */}
                  <button
                    className="project-link active-project-link"
                    type="button"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Gallery
                    <ArrowUpRight size={18} />
                  </button>

                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECT GALLERY MODAL */}
      {selectedProject && (
        <ProjectGallery
          projectTitle={selectedProject.title}
          screenshots={selectedProject.screenshots}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default Projects;