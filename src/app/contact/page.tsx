"use client";

import { useState } from "react";

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

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
      <section className="pt-14 md:pt-20 pb-8 md:pb-12 px-5 text-center">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
          Let&apos;s Create Something Together
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
          We&apos;d love to hear from you. Fill in the form or reach out directly.
        </p>
      </section>

      <div className="max-w-lg mx-auto px-4 md:px-6 pb-16 md:pb-24">
        {submitted ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <div className="text-5xl mb-4">💌</div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gray-900 mb-2">
              Message sent!
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Thank you for reaching out. We will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C3FC5] focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C3FC5] focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your idea..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C3FC5] focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6C3FC5] text-white py-4 rounded-full font-semibold text-base hover:bg-[#5a33a8] active:scale-95 transition-all duration-300 shadow-md mt-2"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Contact info */}
        <div className="mt-8 flex flex-col gap-2">
          <a
            href="https://wa.me/201093363030"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-600 text-sm py-3.5 px-4 rounded-xl hover:bg-[#F0EEF9] hover:text-[#6C3FC5] transition-colors active:bg-[#F0EEF9]"
          >
            <span className="text-[#25D366] flex-shrink-0"><WhatsAppIcon /></span>
            <span className="font-medium">+20 109 336 3030</span>
          </a>
          <a
            href="mailto:contact@glm-vinyles.com"
            className="flex items-center gap-4 text-gray-600 text-sm py-3.5 px-4 rounded-xl hover:bg-[#F0EEF9] hover:text-[#6C3FC5] transition-colors active:bg-[#F0EEF9]"
          >
            <span className="text-[#6C3FC5] flex-shrink-0"><EmailIcon /></span>
            <span className="font-medium">contact@glm-vinyles.com</span>
          </a>
          <p className="text-gray-400 text-xs mt-3 text-center">
            We usually reply within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
