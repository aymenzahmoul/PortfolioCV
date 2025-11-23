"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20 -z-10 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-20 -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Aymen Zahmoul
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
            Full-Stack Web & Mobile Developer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I build scalable web and mobile experiences with modern technologies. Passionate about clean code, user
            experience, and solving complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-16">
            <a
              href="https://github.com/aymenzahmoul"
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-all group"
            >
              <span className="text-lg group-hover:scale-125 transition-transform">𝚪</span>
            </a>
            <a
              href="https://linkedin.com/in/aymen-zahmoul"
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-all group"
            >
              <span className="text-lg group-hover:scale-125 transition-transform">in</span>
            </a>
            <a
              href="mailto:zahmoulaymen7@gmail.com"
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-all group"
            >
              <span className="text-lg group-hover:scale-125 transition-transform">✉</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
