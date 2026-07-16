"use client";

import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative py-32 pb-16 overflow-hidden min-h-[92vh] flex items-center">
      {/* Blobs */}
      <div
        className="absolute pointer-events-none rounded-full mix-blend-multiply opacity-50"
        style={{
          width: 480,
          height: 480,
          background: "var(--color-kraft)",
          filter: "blur(70px)",
          top: -120,
          right: -100,
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full mix-blend-multiply opacity-[0.22]"
        style={{
          width: 360,
          height: 360,
          background: "var(--color-forest)",
          filter: "blur(70px)",
          bottom: -140,
          left: -80,
        }}
      />

      <div className="max-w-[var(--max-w)] mx-auto px-6 relative z-10 grid gap-12 items-center min-[1000px]:grid-cols-[1.1fr_1fr] min-[1000px]:gap-14">
        {/* Left content */}
        <div>
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-ink-10 bg-white/60 mb-7">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="var(--color-forest)"
              aria-hidden="true"
            >
              <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8z" />
            </svg>
            <span
              className="uppercase tracking-[0.13em] font-medium text-[0.72rem] text-forest"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Organic Smart Block
            </span>
          </div>

          <h1
            className="font-light leading-[0.98] tracking-[-0.03em]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(2.6rem, 7.2vw, 6.2rem)",
            }}
          >
            Feed the soil.
            <br />
            Fuel the{" "}
            <em className="italic text-clay" style={{ fontFamily: "var(--font-fraunces)" }}>
              future.
            </em>
          </h1>

          <p className="mt-7 max-w-[560px] text-ink-soft text-[1.05rem] leading-[1.65]">
            NutriBrix turns crop residue and farm waste into a compressed organic
            manure block — built with{" "}
            <strong className="text-ink font-semibold">
              Micro-Granule Core Technology
            </strong>{" "}
            for gradual nutrient release and healthier soil, season after season.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest text-cream font-medium text-[0.95rem] hover:bg-forest-dark hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-14px_rgba(27,61,28,0.55)] transition-all duration-300"
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.03 0C5.42 0 .06 5.36.06 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.96 11.96 0 0 0 5.84 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.49-8.43z" />
              </svg>
              Enquire on WhatsApp
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-ink font-medium text-[0.95rem] border border-ink-22 hover:border-forest hover:text-forest hover:-translate-y-0.5 transition-all duration-300"
              href="#pricing"
            >
              See pack sizes & pricing
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-5 max-w-[560px]">
            {[
              { num: "100%", label: "Organic waste-to-wealth" },
              { num: "3", label: "Pack sizes, ₹149–₹525" },
              { num: "0", label: "Stubble burnt to make it" },
            ].map((stat, i) => (
              <div
                key={i}
                className="border-l-2 border-ink-10 pl-3.5"
              >
                <div
                  className="font-light text-forest leading-none"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)",
                  }}
                >
                  {stat.num}
                </div>
                <div
                  className="mt-1.5 uppercase tracking-[0.1em] text-[0.66rem] text-ink-soft leading-snug"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-[480px]">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(239,227,204,0.9) 0%, rgba(201,168,118,0.35) 42%, transparent 75%)",
            }}
          />
          <div className="relative h-full flex items-center justify-center z-[1]">
            <img
              src="/bag-30-40kg.jpg"
              alt="NutriBrix 30–40 KG kraft bag, Organic Smart Block"
              className="relative h-[94%] w-auto object-contain"
              style={{
                filter: "drop-shadow(0 36px 50px rgba(36,28,18,0.32))",
              }}
            />
          </div>
          {/* Badge */}
          <div className="absolute left-0 bottom-[8%] z-[2] max-w-[230px] bg-white/96 border border-ink-10 rounded-[var(--radius-card)] p-4 shadow-[0_20px_40px_-20px_rgba(36,28,18,0.18)]">
            <div
              className="uppercase tracking-[0.13em] font-medium text-[0.72rem] text-forest"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Signature
            </div>
            <div
              className="mt-1 italic text-[1.15rem] leading-snug"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              From Farm Waste to Farm Wealth
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex flex-col items-center gap-1.5 text-ink-soft">
        <span
          className="uppercase tracking-[0.13em] font-medium text-[0.72rem]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          Scroll
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-bounce"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
