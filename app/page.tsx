"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Globe, Code, Database, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import projectImage from "../components/asset/project.png"
import MyPics from "../components/asset/mypics.jpg"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

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
      image: projectImage,
      category: "Full-Stack",
    },
    {
      title: "Hotel Management System",
      description:
          "A comprehensive hotel management system with room browsing, booking management, and guest tracking. Features RESTful APIs with Spring Boot backend and responsive React frontend.",
      technologies: ["React", "Spring Boot", "MySQL", "Spring Data JPA"],
      github: "https://hotel-booking-two-sage.vercel.app/",
      live: "https://hotel-booking-two-sage.vercel.app/",
      image: projectImage,
      category: "Full-Stack",
    },
    {
      title: "Admin Dashboard SaaS",
      description:
          "A modern admin dashboard for SaaS platforms with JWT authentication, role-based access control, and responsive design using Material UI and Tailwind CSS.",
      technologies: ["React", "Spring Boot", "MongoDB", "Material UI", "Tailwind CSS"],
      github: "https://admin-dashboard-beige-xi-12.vercel.app/",
      live: "https://admin-dashboard-beige-xi-12.vercel.app/",
      image: projectImage,
      category: "Full-Stack",
    },
    {
      title: "Event Booking System",
      description:
          "A robust backend system for event booking and management built with Spring Boot, featuring comprehensive event management capabilities.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      github: "https://github.com/bally3399/EventBookingApp.git",
      live: "#",
      image: projectImage,
      category: "Backend",
    },
    {
      title: "Election Management System",
      description:
          "A secure election management system built with Spring Boot, designed to handle voting processes and election administration efficiently.",
      technologies: ["Java", "Spring Boot", "MySQL", "Security"],
      github: "https://github.com/bally3399/ElectionManagementSystem.git",
      live: "#",
      image: projectImage,
      category: "Backend",
    },
    {
      title: "Movie App",
      description:
          "A modern movie browsing application built with React, featuring movie search, details, and user-friendly interface for movie enthusiasts.",
      technologies: ["React", "JavaScript", "CSS", "API Integration"],
      github: "https://github.com/bally3399/movieApp.git",
      live: "#",
      image: projectImage,
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
      count: 4,
      icon: <Code size={24} />,
      description: "Interactive user interfaces and web applications",
    },
  ]

  return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="px-8 py-6 flex justify-between items-center">
          <h1 className="text-xl font-medium">Bimbim.</h1>
          <a
              href="public/BimsCv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors font-medium"
          >
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

        <main className="px-8 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div id="home" className="grid lg:grid-cols-2 gap-16 mb-32">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Main Heading */}
                <div className="space-y-6">
                  <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Software
                    <br/>
                    Engineer.
                  </h2>

                  <p className="text-yellow-400 text-lg mb-12 max-w-md">
                    I'm a software engineer based in Lagos, Nigeria, skilled in frontend and backend development. I
                    build
                    innovative solutions that ensure smooth and impactful digital experiences.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed">
                  <div>
                    <p className="text-gray-300">
                      Highly skilled at progressive enhancement, modern web technologies & full-stack development.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      Over two years of experience building innovative products and solutions across various domains.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-start
              ">
                <div
                    className="w-80 h-96 rounded-2xl border-2 border-yellow-400 overflow-hidden bg-gradient-to-br from-orange-300 to-orange-400">
                  <Image
                      src={MyPics || "/placeholder.svg"}
                      alt="Baliqis Sulaiman Mosunmola"
                      width={320}
                      height={384}
                      className="w-full h-full object-cover"
                      style={{objectPosition: "center top"}}
                  />
                </div>
              </div>
            </div>

            <section className="py-20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Project Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projectCategories.map((category, index) => (
                      <div
                          key={index}
                          className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
                      >
                        <div className="text-yellow-400 mb-4 flex justify-center">{category.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                        <p className="text-yellow-400 font-medium mb-2">{category.count} Projects</p>
                        <p className="text-gray-300 text-sm">{category.description}</p>
                      </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="grid lg:grid-cols-2 gap-16 pt-16">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold mb-6">Development</h3>
                <p className="text-yellow-400 text-sm leading-relaxed">
                  My journey into coding began in 2023, driven by a deep curiosity about how software powers our digital
                  world. I specialize in both frontend and backend development, creating efficient, user-friendly
                  applications. I follow best practices like test-driven development, ensuring clean and maintainable code
                  while building innovative solutions.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl font-bold mb-6">Engineering</h3>
                <p className="text-yellow-400 text-sm leading-relaxed">
                  I have hands-on experience with modern JavaScript frameworks and tools, building scalable applications
                  with React, Spring Boot, and various databases. I thrive in collaborative environments, valuing teamwork
                  and knowledge-sharing to deliver impactful solutions that are designed for growth – performance and user
                  experience are top priorities on my radar.
                </p>
              </div>
            </div>

            <section id="skills" className="py-20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                      <div
                          key={skill}
                          className="text-center p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-800"
                          style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Badge
                            variant="secondary"
                            className="text-sm bg-yellow-400/20 text-yellow-400 border-yellow-400/30"
                        >
                          {skill}
                        </Badge>
                      </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="projects" className="py-20">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Featured Projects</h2>
                <p className="text-center text-yellow-400 text-lg mb-12">What I Have Built</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredProjects.map((project, index) => (
                      <Card
                          key={project.title}
                          className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
                      >
                        <div className="relative">
                          <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">
                            {project.category}
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between text-white">
                            <span className="text-sm font-semibold">{project.title}</span>
                            <div className="flex space-x-2">
                              <Link href={project.github} target="_blank" className="text-gray-300 hover:text-yellow-400">
                                <Github className="h-4 w-4" />
                              </Link>
                              {project.live !== "#" && (
                                  <Link href={project.live} target="_blank" className="text-gray-300 hover:text-yellow-400">
                                    <Globe className="h-4 w-4" />
                                  </Link>
                              )}
                            </div>
                          </CardTitle>
                          <CardDescription className="text-gray-300 text-xs leading-relaxed">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs text-yellow-400 border-yellow-400/30">
                                  {tech}
                                </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                  ))}
                </div>

                <div className="mt-12 text-center p-6 bg-gray-900 rounded-lg border border-gray-800">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    + More projects including Data Structures & Algorithms implementations, Python OOP applications, Todo
                    App, and additional backend systems available on GitHub
                  </p>
                  <Link
                      href="https://github.com/bally3399"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium"
                  >
                    <Github size={20} />
                    View All Projects on GitHub
                  </Link>
                </div>
              </div>
            </section>

            <section id="contact" className="py-20">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-300">
                  I'm always interested in hearing about new opportunities and interesting projects. Let's connect and
                  build something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    <a href="mailto:sulaimabaliqis@gmail.com" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Write me
                    </a>
                  </Button>
                  <Button
                      variant="outline"
                      size="lg"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="py-8 px-8 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300">© 2024 Baliqis Mosunmola Sulaiman</p>
          </div>
        </footer>
      </div>
  )
}
