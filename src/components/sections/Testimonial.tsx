"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { useState, useEffect, useCallback } from "react";

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = TESTIMONIALS[current];

  return (
    <section className="relative overflow-hidden bg-forest-dark text-cream">
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, var(--color-kraft-pale) 1px, transparent 2px), radial-gradient(circle at 70% 80%, var(--color-kraft-pale) 1px, transparent 2px)",
          backgroundSize: "40px 40px, 55px 55px",
        }}
      />

      <div className="max-w-[var(--max-w)] mx-auto px-6 py-24 min-[900px]:py-33 relative z-10">
        <div className="grid gap-10 items-center min-[900px]:grid-cols-[auto_1fr] min-[900px]:gap-16">
          {/* Avatar */}
          <div className="relative shrink-0 mx-auto">
            <div
              className="h-32 w-32 rounded-full bg-kraft text-forest-dark flex items-center justify-center shadow-[0_0_0_4px_rgba(255,255,255,0.08)]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              <span className="text-[2.6rem] font-light">{t.initials}</span>
            </div>
            <div className="absolute -top-2 -right-2 h-[38px] w-[38px] rounded-full bg-clay flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="var(--color-cream)"
              >
                <path d="M7 7h4v5l-3 5H5l2-5H4V7h3zm9 0h4v5l-3 5h-3l2-5h-3V7h3z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div>
            <p
              className="uppercase tracking-[0.13em] font-medium text-[0.72rem] text-kraft"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              A farmer&apos;s voice
            </p>
            <p
              className="mt-4 font-light italic tracking-[-0.01em] leading-[1.28]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(1.4rem, 3vw, 2.3rem)",
              }}
              key={current}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-11 bg-kraft" />
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="mt-0.5 text-[0.88rem] text-kraft-pale/75">
                  {t.role}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="mt-8 flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-kraft"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
