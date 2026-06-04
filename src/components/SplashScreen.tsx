"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Lock scroll while splash is showing
    document.body.style.overflow = "hidden";

    const fadeTimer  = setTimeout(() => setHiding(true), 1800);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      // Unlock scroll once splash is gone
      document.body.style.overflow = "";
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        hiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo.svg"
        alt="GLM Vinyles"
        className="h-20 w-auto mb-6"
        style={{ maxWidth: "260px" }}
      />

      {/* Loading bar */}
      <div className="w-40 h-0.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#6C3FC5] rounded-full"
          style={{ animation: "splash-bar 1.6s ease-in-out forwards" }}
        />
      </div>

      <style>{`
        @keyframes splash-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
