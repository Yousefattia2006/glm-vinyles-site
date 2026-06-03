"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-12 px-6 text-center">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-gray-900 mb-4">
          Let&apos;s Create Something Together
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          We&apos;d love to hear from you. Fill in the form or reach out directly.
        </p>
      </section>

      <div className="max-w-lg mx-auto px-6 pb-24">
        {submitted ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <div className="text-5xl mb-4">💌</div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gray-900 mb-2">
              Message sent!
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Thank you for reaching out. Sara will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C3FC5] focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C3FC5] focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your idea..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C3FC5] focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6C3FC5] text-white py-3.5 rounded-full font-semibold text-base hover:bg-[#5a33a8] hover:scale-[1.02] transition-all duration-300 shadow-md mt-2"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Contact info */}
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <span className="text-xl">📱</span>
            <span>WhatsApp: +1 (555) 000-0000</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <span className="text-xl">✉️</span>
            <a href="mailto:hello@novastudio.com" className="hover:text-[#6C3FC5] transition-colors">
              hello@novastudio.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <span className="text-xl">📸</span>
            <a
              href="https://instagram.com/nova.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6C3FC5] transition-colors"
            >
              @nova.studio
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-2 text-center">
            We usually reply within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
