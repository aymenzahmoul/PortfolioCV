"use client"

import { useEffect, useRef, useState } from "react"

type Project = {
  name: string
  description: string
  tech: string[]
  image?: string
  imageUrl?: string
  link?: string
}

const projects: Project[] = [
  {
    name: "Lanci ",
    description:
      "Contributed to a modern enterprise-grade full-stack monorepo architecture using React, Express.js, TypeScript and Turborepo. Developed reusable cross-application packages to reduce code duplication and improve scalability. Implemented performant API endpoints and modular backend services following clean architecture principles.",
    tech: ["React", "Express", "TypeScript", "Turborepo", "PostgreSQL", "Docker","TRPC"],
    imageUrl: "/images/image.png",
    link: "https://lanci.tn/en",
  },
  {
    name: "EatOrder – Online Ordering Platform",
    description:
      "Developed and maintained an online ordering platform for restaurants. Integrated secure payment systems and real-time notification features. Built content management tools and enabled real-time communication.",
    tech: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
    image: "🍽️",
    imageUrl: "/images/eatorder.png",
    link: "https://localtestdemo.eatorder.fr",
  },
  {
    name: "ERP Platform",
    description:
      "Developed and maintained a complete ERP platform using Symfony and MySQL. Built front-end and back-end modules for inventory management.",
    tech: ["Symfony", "MySQL"],
    image: "🏢",
    imageUrl: "/images/nomadcloud.png",
    link: "https://nomadcloud.fr/",
  },
  {
    name: "JBScout – Analytics & Dashboards",
    description:
      "Designed and built a modular analytics application (JBScout) integrating data collection, cleaning, and visualization for decision-making. Implemented analysis pipelines and interactive dashboards with filters and KPIs to assess performance and trends. Applied best practices (tests, query optimization, error handling) and delivered a stable deployment for internal users, improving analysis speed.",
    tech: ["Symfony", "MySQL", "Dashboards"],
    image: "📊",
    imageUrl: "/images/jbscout.png",
    link: "https://jbscout.konnekt.fr/",
  },
  {
    name: "POS Mobile & ERP",
    description:
      "Maintained and enhanced an ERP (inventory, orders, invoicing, CRM). Developed a dedicated React Native app for POS management to streamline in-store transactions and improve productivity.",
    tech: ["Vue.js", "Laravel", "PostgreSQL", "React Native"],
    image: "🧾",
    imageUrl: "/images/pos.png",
    link: "https://partfly.io",
  },
  {
    name: "DjerbaFood – Web & Mobile Ordering Platform (PFE)",
    description:
      "This application enables restaurants to sell dishes online and manage operations efficiently: accounts, menus (create/modify/delete), orders (receive/manage/deliver), and posts. Customers can manage accounts, browse restaurants and posts, and purchase food online.",
    tech: ["React.js", "React Native", "Spring Boot"],
    image: "🍔",
    imageUrl: "/images/djerba.png",
  },
  // {
  //   name: "E-Commerce Platform",
  //   description: "Full-stack e-commerce solution with real-time inventory management and payment integration.",
  //   tech: ["React", "Laravel", "PostgreSQL", "Stripe"],
  //   image: "🛍️",
  // },
  // {
  //   name: "Social Media App",
  //   description: "Real-time social networking application with messaging, notifications, and user profiles.",
  //   tech: ["Vue.js", "Spring Boot", "MongoDB", "WebSocket"],
  //   image: "📱",
  // },
  // {
  //   name: "Project Management Tool",
  //   description: "Collaborative project management system with task tracking, team collaboration, and analytics.",
  //   tech: ["React", "Node.js", "PostgreSQL", "Docker"],
  //   image: "📋",
  // },
  // {
  //   name: "Analytics Dashboard",
  //   description: "Interactive analytics dashboard with real-time data visualization and custom reporting.",
  //   tech: ["React", "Laravel", "Chart.js", "TailwindCSS"],
  //   image: "📈",
  // },
  // {
  //   name: "Mobile Weather App",
  //   description: "Cross-platform mobile application for weather forecasting with advanced features.",
  //   tech: ["React Native", "TypeScript", "Weather API"],
  //   image: "🌦️",
  // },
  // {
  //   name: "CMS System",
  //   description: "Headless CMS for managing digital content with REST API and admin dashboard.",
  //   tech: ["Symfony", ".NET", "PostgreSQL", "React"],
  //   image: "📝",
  // },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), {
      threshold: 0.1,
    })
    ref.current && observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 sm:py-32 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.name}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-1 group cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${idx * 80}ms` : "0ms",
              }}
            >
              {project.imageUrl ? (
                <div className="w-full flex items-center justify-center p-2">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="max-h-64 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
                      if (fallback) fallback.style.display = "flex"
                    }}
                  />
                  <div style={{ display: "none" }} className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center text-6xl">
                    {project.image}
                  </div>
                </div>
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2 text-sm font-semibold text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    View Project →
                  </a>
                ) : (
                  <div className="w-full py-2 text-sm font-semibold text-muted-foreground/70 border rounded-lg text-center">
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
