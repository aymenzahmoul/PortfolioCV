import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
    }

    const subject = `New message from ${name}`

    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio <onboarding@resend.dev>",
          to: ["zahmoulaymen7@gmail.com"],
          subject,
          html: `<div style='font-family:system-ui'>
            <h3>Contact Form</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Message:</b></p>
            <p>${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>`,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        return NextResponse.json({ ok: false, error: data?.error || "Resend send failed" }, { status: 500 })
      }
      return NextResponse.json({ ok: true, data })
    }

    const form = new URLSearchParams()
    form.append("name", name)
    form.append("email", email)
    form.append("message", message)
    form.append("_subject", subject)

    const res = await fetch("https://formsubmit.co/ajax/zahmoulaymen7@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      },
      body: form.toString(),
    })

    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ ok: false, error: text || "Send failed" }, { status: 500 })
    }

    const data = await res.json()
    return NextResponse.json({ ok: true, data })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unexpected error" }, { status: 500 })
  }
}