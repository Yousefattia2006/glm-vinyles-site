"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/offerings", label: "Our Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      // Show when scrolling up or near the top, hide when scrolling down
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY < lastY) {
        setVisible(true);  // scrolling up
      } else if (currentY > lastY + 5) {
        setVisible(false); // scrolling down (5px threshold to avoid jitter)
        setOpen(false);    // close mobile menu when hiding
      }
      setScrolled(currentY > 10);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo SVG — transparent background, scales perfectly */}
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt="GLM Vinyles"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 pb-0.5 ${
                    active
                      ? "text-[#6C3FC5] border-b-2 border-[#6C3FC5]"
                      : "text-gray-700 hover:text-[#6C3FC5]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 hover:text-[#6C3FC5] transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-1 transition-colors ${
                  active ? "text-[#6C3FC5]" : "text-gray-700 hover:text-[#6C3FC5]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
