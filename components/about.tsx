"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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
      id="about"
      ref={ref}
      className="py-20 sm:py-32 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="glass-card rounded-2xl p-8 h-64 sm:h-80 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-primary/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <p className="text-sm text-muted-foreground">Professional Photo</p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with expertise in both web and mobile development. With a strong
                foundation in modern frameworks and technologies, I create elegant, scalable solutions that users love
                to interact with.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in development has taken me through various technologies and frameworks. I specialize in
                building responsive applications using React.js, Vue.js, Laravel, and more. I believe in writing clean,
                maintainable code and staying up-to-date with industry best practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outside of coding, I enjoy exploring new technologies, contributing to open source, and sharing
                knowledge with the community. I'm always excited about new challenges and opportunities to grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
