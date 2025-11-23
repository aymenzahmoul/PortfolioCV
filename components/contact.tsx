"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), {
      threshold: 0.1,
    })
    ref.current && observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message?: string }>({
    type: "idle",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "loading" })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (res.ok && data?.ok) {
        setStatus({ type: "success", message: "Message sent successfully." })
        setFormData({ name: "", email: "", message: "" })
      } else {
        const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`)
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
        window.location.href = `mailto:zahmoulaymen7@gmail.com?subject=${subject}&body=${body}`
        setStatus({ type: "success", message: "Opening email app..." })
      }
    } catch (err: any) {
      const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`)
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
      window.location.href = `mailto:zahmoulaymen7@gmail.com?subject=${subject}&body=${body}`
      setStatus({ type: "success", message: "Opening email app..." })
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-32 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Let's Connect</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none h-32"
                  placeholder="Your message..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-60"
              >
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status.type === "success" && (
                <p className="text-green-600 mt-2 text-sm">{status.message}</p>
              )}
              {status.type === "error" && (
                <p className="text-red-600 mt-2 text-sm">{status.message}</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">📧 Email</h3>
                  <a href="mailto:zahmoulaymen7@gmail.com" className="text-primary hover:underline">
                    zahmoulaymen7@gmail.com
                  </a>
                </div>
                <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2">📱 Phone</h3>
                  <a href="tel:+21625588529" className="text-primary hover:underline">
                    +216 25 588 529
                  </a>
                </div>
                <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-4">🔗 Social Links</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/aymenzahmoul"
                      className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
                    >
                      <span>🐙</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/aymen-zahmoul"
                      className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
                    >
                      <span>in</span>
                    </a>
                    <a
                      href="mailto:zahmoulaymen7@gmail.com"
                      className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
                    >
                      <span>✉</span>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-foreground/10 text-center text-sm text-muted-foreground">
          <p>© 2025 Aymen Zahmoul. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
