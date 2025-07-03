"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Globe, Code, Database, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "HTML/CSS",
    "Tailwind CSS",
    "Material UI",
    "Git",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "JWT Authentication",
  ]

  const featuredProjects = [
    {
      title: "Quagga - Construction Services Platform",
      description:
          "A cutting-edge full-stack application designed to bridge the gap between construction services and client satisfaction. Built with modern technologies to streamline interactions and enhance efficiency.",
      technologies: ["React", "Spring Boot", "MongoDB", "JWT"],
      github: "https://quagga-inky.vercel.app/",
      live: "https://quagga-inky.vercel.app/",
      image: "/project.png",
      category: "Full-Stack",
    },
    {
      title: "Hotel Management System",
      description:
          "A comprehensive hotel management system with room browsing, booking management, and guest tracking. Features RESTful APIs with Spring Boot backend and responsive React frontend.",
      technologies: ["React", "Spring Boot", "MySQL", "Spring Data JPA"],
      github: "https://hotel-booking-two-sage.vercel.app/",
      live: "https://hotel-booking-two-sage.vercel.app/",
      image: "/project.png",
      category: "Full-Stack",
    },
    {
      title: "Admin Dashboard SaaS",
      description:
          "A modern admin dashboard for SaaS platforms with JWT authentication, role-based access control, and responsive design using Material UI and Tailwind CSS.",
      technologies: ["React", "Spring Boot", "MongoDB", "Material UI", "Tailwind CSS"],
      github: "https://admin-dashboard-beige-xi-12.vercel.app/",
      live: "https://admin-dashboard-beige-xi-12.vercel.app/",
      image: "/project.png",
      category: "Full-Stack",
    },
    {
      title: "Event Booking System",
      description:
          "A robust backend system for event booking and management built with Spring Boot, featuring comprehensive event management capabilities.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      github: "https://github.com/bally3399/EventBookingApp.git",
      live: "#",
      image: "/project.png",
      category: "Backend",
    },
    {
      title: "Election Management System",
      description:
          "A secure election management system built with Spring Boot, designed to handle voting processes and election administration efficiently.",
      technologies: ["Java", "Spring Boot", "MySQL", "Security"],
      github: "https://github.com/bally3399/ElectionManagementSystem.git",
      live: "#",
      image: "/project.png",
      category: "Backend",
    },
    {
      title: "Movie App",
      description:
          "A modern movie browsing application built with React, featuring movie search, details, and user-friendly interface for movie enthusiasts.",
      technologies: ["React", "JavaScript", "CSS", "API Integration"],
      github: "https://github.com/bally3399/movieApp.git",
      live: "#",
      image: "/project.png",
      category: "Frontend",
    },
  ]

  const projectCategories = [
    {
      title: "Full-Stack Applications",
      count: 3,
      icon: <Layers size={24} />,
      description: "Complete web applications with frontend and backend",
    },
    {
      title: "Backend Systems",
      count: 6,
      icon: <Database size={24} />,
      description: "Robust server-side applications and APIs",
    },
    {
      title: "Frontend Projects",
      count: 2,
      icon: <Code size={24} />,
      description: "Interactive user interfaces and web applications",
    },
  ]

  return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="header">
          <h1 className="logo">Bimbim.</h1>
          <a href="/BimsCv.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
            View CV
            <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
              <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="currentColor"
              />
              <path
                  d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                  fill="currentColor"
              />
            </svg>
          </a>
        </header>

        {/* Main Content */}
        <main className="main">
          <div className="container">
            {/* Hero Section */}
            <div id="home" className="hero-section">
              {/* Left Column */}
              <div className="hero-content">
                {/* Main Heading */}
                <div className="hero-text">
                  <h2 className="hero-title">
                    Software
                    <br />
                    Engineer.
                  </h2>

                  <p className="hero-description">
                    I'm a software engineer based in Lagos, Nigeria, skilled in frontend and backend development. I build
                    innovative solutions that ensure smooth and impactful digital experiences.
                  </p>
                </div>

                {/* Two Column Description */}
                <div className="hero-stats">
                  <div>
                    <p className="stat-text">
                      Highly skilled at progressive enhancement, modern web technologies & full-stack development.
                    </p>
                  </div>
                  <div>
                    <p className="stat-text">
                      Over two years of experience building innovative products and solutions across various domains.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Profile Image */}
              <div className="hero-image">
                <div className="profile-image">
                  <Image
                      src="/mypics.jpg"
                      alt="Baliqis Sulaiman Mosunmola"
                      width={320}
                      height={384}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center top" }}
                  />
                </div>
              </div>
            </div>

            {/* Project Categories */}
            <section className="categories-section">
              <div className="categories-container">
                <h2 className="categories-title">Project Categories</h2>
                <div className="categories-grid">
                  {projectCategories.map((category, index) => (
                      <div key={index} className="category-card">
                        <div className="category-icon">{category.icon}</div>
                        <h3 className="category-title">{category.title}</h3>
                        <p className="category-count">{category.count} Projects</p>
                        <p className="category-description">{category.description}</p>
                      </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom Sections */}
            <div className="bottom-sections">
              {/* Development Section */}
              <div className="section">
                <h3 className="section-title">Development</h3>
                <p className="section-description">
                  My journey into coding began in 2023, driven by a deep curiosity about how software powers our digital
                  world. I specialize in both frontend and backend development, creating efficient, user-friendly
                  applications. I follow best practices like test-driven development, ensuring clean and maintainable code
                  while building innovative solutions.
                </p>
              </div>

              {/* Engineering Section */}
              <div className="section">
                <h3 className="section-title">Engineering</h3>
                <p className="section-description">
                  I have hands-on experience with modern JavaScript frameworks and tools, building scalable applications
                  with React, Spring Boot, and various databases. I thrive in collaborative environments, valuing teamwork
                  and knowledge-sharing to deliver impactful solutions that are designed for growth – performance and user
                  experience are top priorities on my radar.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <section id="skills" className="skills-section">
              <div className="skills-container">
                <h2 className="skills-title">Skills & Technologies</h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                      <div key={skill} className="skill-item">
                        <span className="skill-badge">{skill}</span>
                      </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects-section">
              <div className="projects-container">
                <h2 className="projects-title">Featured Projects</h2>
                <p className="projects-subtitle">What I Have Built</p>
                <div className="projects-grid">
                  {featuredProjects.map((project, index) => (
                      <div key={project.title} className="project-card">
                        <div className="project-image">
                          <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                          />
                          <div className="project-category">{project.category}</div>
                        </div>
                        <div className="project-content">
                          <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-links">
                              <Link href={project.github} target="_blank" className="project-link">
                                <Github className="h-4 w-4" />
                              </Link>
                              {project.live !== "#" && (
                                  <Link href={project.live} target="_blank" className="project-link">
                                    <Globe className="h-4 w-4" />
                                  </Link>
                              )}
                            </div>
                          </div>
                          <p className="project-description">{project.description}</p>
                          <div className="project-technologies">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="tech-badge">
                            {tech}
                          </span>
                            ))}
                          </div>
                        </div>
                      </div>
                  ))}
                </div>

                {/* Additional Projects Note */}
                <div className="more-projects">
                  <p className="more-projects-text">
                    + More projects including Data Structures & Algorithms implementations, Python OOP applications, Todo
                    App, and additional backend systems available on GitHub
                  </p>
                  <Link
                      href="https://github.com/bally3399"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                  >
                    <Github size={20} />
                    View All Projects on GitHub
                  </Link>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
              <div className="contact-container">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-description">
                  I'm always interested in hearing about new opportunities and interesting projects. Let's connect and
                  build something amazing together!
                </p>
                <div className="contact-buttons">
                  <a href="mailto:sulaimabaliqis@gmail.com" className="contact-btn primary">
                    <Mail className="h-4 w-4" />
                    Write me
                  </a>
                  <a href="#" className="contact-btn secondary">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <p className="footer-text">© 2024 Baliqis Mosunmola Sulaiman</p>
          </div>
        </footer>
      </div>
  )
}
