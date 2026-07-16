"use client";

import Image from "next/image";
import { PACKS, SITE } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Pricing() {
  function handleEnquire(pack: string) {
    const event = new CustomEvent("open-enquiry", { detail: { pack } });
    window.dispatchEvent(event);
  }

  return (
    <section id="pricing" className="py-24 min-[900px]:py-33 bg-kraft-pale">
      <div className="max-w-[var(--max-w)] mx-auto px-6">
        <div className="grid gap-8 items-end min-[900px]:grid-cols-[1fr_1fr]">
          <div>
            <p
              className="uppercase tracking-[0.13em] font-medium text-[0.72rem] text-forest"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Available Pack Sizes
            </p>
            <h2
              className="mt-3.5 font-light leading-[1.04] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(2rem, 4.6vw, 3.6rem)",
              }}
            >
              One product, sized for{" "}
              <em className="italic text-clay" style={{ fontFamily: "var(--font-fraunces)" }}>
                how you farm.
              </em>
            </h2>
          </div>
          <p className="text-ink-soft text-[1.05rem] leading-rel max-w-[420px] min-[900px]:justify-self-end min-[900px]:text-left">
            The same organic block, three ways to buy — from a home-garden trial
            pack to bulk supply for FPOs.
          </p>
        </div>

        <div className="mt-16 grid gap-6 grid-cols-1 min-[780px]:grid-cols-3">
          {PACKS.map((pack) => (
            <AnimatedSection key={pack.id} className="flex flex-col">
              <div
                className={`relative bg-white border rounded-[var(--radius-card)] p-6 flex flex-col transition-all duration-400 hover:shadow-[0_20px_40px_-22px_rgba(36,28,18,0.2)] hover:border-ink-22 ${
                  pack.featured
                    ? "border-forest border-[1.5px] min-[780px]:-translate-y-3.5 min-[780px]:shadow-[0_28px_56px_-28px_rgba(27,61,28,0.4)] min-[780px]:hover:-translate-y-4"
                    : "border-ink-10"
                }`}
              >
                {pack.tag && (
                  <div className="absolute -top-3.5 left-6 bg-forest text-cream px-3 py-1 rounded-full text-[0.62rem] uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {pack.tag}
                  </div>
                )}

                {/* Product image */}
                <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden bg-cream mb-5 flex items-center justify-center">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 60%, rgba(239,227,204,0.9) 0%, rgba(201,168,118,0.3) 45%, transparent 75%)",
                    }}
                  />
                  <img
                    src={pack.image}
                    alt={`NutriBrix ${pack.weight} bag`}
                    className="relative h-[92%] w-auto object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex items-center justify-between">
                  <span
                    className="uppercase tracking-[0.13em] font-medium text-[0.72rem] text-ink-soft"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {pack.label}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-ink-soft)"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </div>

                <h3
                  className="mt-1.5 text-[2.1rem] font-light leading-none"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {pack.weight}
                </h3>
                <p className="mt-2 text-ink-soft text-[0.9rem]">
                  {pack.description}
                </p>

                <div className="mt-5.5 pt-5 border-t border-ink-10">
                  <div
                    className="font-light text-[2.2rem] text-forest leading-none"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    ₹{pack.price}
                    <span
                      className="text-[0.9rem] text-ink-soft font-normal ml-1"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      /bag
                    </span>
                  </div>
                  <div
                    className="mt-1.5 text-[0.68rem] tracking-[0.08em] text-ink-soft"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    ₹{pack.perKg}/KG
                  </div>
                </div>

                <button
                  onClick={() => handleEnquire(pack.id)}
                  className={`mt-5.5 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-[0.95rem] border cursor-pointer transition-all duration-300 ${
                    pack.featured
                      ? "bg-forest text-cream border-forest hover:bg-forest-dark hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-14px_rgba(27,61,28,0.55)]"
                      : "bg-transparent text-ink border-ink-22 hover:border-forest hover:text-forest hover:-translate-y-0.5"
                  }`}
                >
                  Enquire
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* FPO callout */}
        <div className="mt-10 border-2 border-dashed border-clay/50 rounded-[18px] bg-white/45 p-6 min-[780px]:p-7 min-[780px]:flex min-[780px]:items-center min-[780px]:justify-between min-[780px]:gap-4">
          <div>
            <p
              className="uppercase tracking-[0.13em] font-medium text-[0.72rem] text-clay"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              For FPOs & Co-ops
            </p>
            <p
              className="mt-2 text-[1.3rem] leading-[1.4] max-w-[620px]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              <strong className="font-semibold text-clay">FPOs get 10% off</strong>{" "}
              on orders of 5 or more 30–40kg bags. Ask your local Krishi Kendra
              dealer or contact us directly.
            </p>
          </div>
          <button
            onClick={() => handleEnquire("fpo-bulk")}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-clay text-cream font-medium text-[0.95rem] border-none cursor-pointer hover:bg-clay-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            Talk to us
          </button>
        </div>
      </div>
    </section>
  );
}
