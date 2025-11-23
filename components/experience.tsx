"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Web Developer",
    company: "Konnekt — Full Remote",
    period: "Oct 2024 – Present",
    description:
      "Developed and maintained a complete ERP platform using Symfony and MySQL. Built front-end and back-end modules for inventory management.",
    sections: [
      {
        bullets: [
          "Designed and built a modular analytics application (JBScout) integrating data collection, cleaning, and visualization for decision-making.",
          "Implemented analysis pipelines and interactive dashboards with filters and KPIs to assess performance and trends.",
          "Applied best practices (tests, query optimization, error handling) and delivered a stable deployment for internal users, improving analysis speed.",
        ],
        link: "https://jbscout.konnekt.fr/",
      },
      {
        bullets: [
          "Developed ERP modules for inventory, orders, invoicing, and role-based access control with Symfony and MySQL.",
          "Built responsive front-end and admin dashboards, optimized queries and improved overall performance.",
          "Delivered stable deployments and streamlined operations for internal stakeholders.",
        ],
        link: "https://nomadcloud.fr/",
      },
    ],
  },
  {
    title: "Full Stack Web and Mobile Developer",
    company: "Otospex – Djerba, Tunisie",
    period: "Jul 2024 – Sep 2024",
    description:
      "Maintained and enhanced an ERP system (inventory, orders, invoicing, CRM). Developed a dedicated React Native app for point-of-sale (POS) management). Technologies: Vue.js, Laravel, PostgreSQL, React Native.",
    link: "https://partfly.io",
  },
  {
    title: "Full Stack Web Developer",
    company: "Alizeth Digital – Djerba, Tunisie",
    period: "Dec 2023 – Jun 2024",
    description:
      "Developed and maintained an online ordering platform for restaurants. Integrated secure payment systems and real-time notification features. Built content management tools and enabled real-time communication. Technologies: React.js, Redux, Node.js, Express.js, MongoDB.",
    link: "https://localtestdemo.eatorder.fr",
  },
  {
    title: "End-of-Studies Internship",
    company: "AZDEV+ – Djerba, Tunisie",
    period: "Feb 2023 – Jun 2023",
    description:
      "Designed and developed DjerbaFood web and mobile application. Technologies: React.js, React Native, Spring Boot.",
  },
]

export default function Experience() {
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
    <section id="experience" ref={ref} className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              className={`glass-card rounded-xl p-6 sm:p-8 transition-all duration-700 hover:shadow-lg border-l-4 border-primary ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${idx * 100}ms` : "0ms",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-4 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              {Array.isArray((exp as any).sections) ? (
                <div className="mt-3 space-y-4">
                  {((exp as any).sections as { bullets: string[]; link?: string }[]).map((sec, i) => (
                    <div key={i}>
                      {Array.isArray(sec.bullets) && (
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {sec.bullets.map((item) => (
                            <li key={item} className="pl-4">
                              <span className="mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {sec.link && (
                        <a href={sec.link} className="text-primary underline underline-offset-4 mt-2 inline-block">
                          {sec.link}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {Array.isArray((exp as any).bullets) && (
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {((exp as any).bullets as string[]).map((item) => (
                        <li key={item} className="pl-4">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {Array.isArray((exp as any).links) && (
                    <div className="mt-2 space-y-1">
                      {((exp as any).links as string[]).map((lnk) => (
                        <a key={lnk} href={lnk} className="text-primary underline underline-offset-4 inline-block">
                          {lnk}
                        </a>
                      ))}
                    </div>
                  )}
                  {!Array.isArray((exp as any).links) && (exp as any).link && (
                    <a href={(exp as any).link} className="text-primary underline underline-offset-4 mt-2 inline-block">
                      {(exp as any).link}
                    </a>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
