"use client"

import { useEffect, useRef, useState } from "react"

export default function CV() {
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
    <section id="cv" ref={ref} className="py-20 sm:py-32 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Curriculum Vitae</h2>

        <div
          className={`glass-card rounded-2xl p-8 sm:p-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* CV Preview Header */}
          <div className="border-b-2 border-foreground/10 pb-8 mb-8">
            <h3 className="text-3xl font-bold text-foreground">ZAHMOUL AYMEN</h3>
            <p className="text-lg text-primary font-semibold mt-2">Full-Stack Web & Mobile Developer</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
              <a href="mailto:zahmoulaymen7@gmail.com">📧 zahmoulaymen7@gmail.com</a>
              <a href="tel:+21625588529">📱 +216 25 588 529</a>
              <span>📍 Ariana, Tunisie</span>
              <a href="https://linkedin.com/in/aymen-zahmoul" target="_blank" rel="noopener noreferrer">linkedin.com/in/aymen-zahmoul</a>
              <a href="https://github.com/aymenzahmoul" target="_blank" rel="noopener noreferrer">github.com/aymenzahmoul</a>
            </div>
          </div>

          {/* CV Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Professional Summary */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Profile</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full stack web and mobile developer experienced in React.js, React Native, Express, Symfony, Laravel, Vue.js,
                and Java Spring Boot. Looking for full-time opportunities to contribute to dynamic software development teams.
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>• Full-Stack Development</div>
                <div>• Web Architecture</div>
                <div>• Mobile Development</div>
                <div>• Team Leadership</div>
                <div>• Cloud Solutions</div>
                <div>• Performance Optimization</div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Education</h4>
              <div className="text-sm space-y-2">
                <p className="text-foreground font-medium">
                  Bachelor’s degree in Information Technology — Higher Institute of Technological Studies of Kélibia
                </p>
                <p className="text-muted-foreground">Sep 2020 – Jun 2023 — Kelibia, Tunisie</p>
                <p className="text-foreground font-medium">Baccalaureate in Computer Science — Lycée Houmt Souk</p>
                <p className="text-muted-foreground">Sep 2019 – Jun 2020 — Djerba, Tunisie</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Certificates</h4>
              <div className="text-sm space-y-1 text-muted-foreground">
                <p>• React.js</p>
                <p>• Spring Boot</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Languages</h4>
              <div className="text-sm space-y-1 text-muted-foreground">
                <p>• French (Fluent)</p>
                <p>• English (Intermediate)</p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-12 pt-8 border-t border-foreground/10">
            <a
              href="/file%20cv/CvAymen.pdf"
              download
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              📥 Download PDF CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
