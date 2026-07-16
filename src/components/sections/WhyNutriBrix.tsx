import { WHY_POINTS, COMPARE_ROWS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function WhyNutriBrix() {
  return (
    <section id="why" className="py-24 min-[900px]:py-33">
      <div className="max-w-[var(--max-w)] mx-auto px-6">
        <div className="max-w-[720px]">
          <p
            className="uppercase tracking-[0.13em] font-medium text-[0.72rem] text-forest"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            How Is NutriBrix Unique?
          </p>
          <h2
            className="mt-3.5 font-light leading-[1.04] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(2rem, 4.6vw, 3.6rem)",
            }}
          >
            Same soil benefit.{" "}
            <em className="italic text-forest">Far less hassle.</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 min-[900px]:grid-cols-[1.05fr_1fr] min-[900px]:gap-16">
          {/* Checklist */}
          <ul className="list-none m-0 p-0">
            {WHY_POINTS.map((point, i) => (
              <AnimatedSection key={i}>
                <li className="flex gap-4 items-start pb-5 mb-5 border-b border-ink-10 last:border-b-0 last:mb-0 last:pb-0">
                  <span className="shrink-0 h-7 w-7 rounded-full bg-forest text-cream flex items-center justify-center mt-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <p className="text-[1.08rem] leading-[1.55]">{point}</p>
                </li>
              </AnimatedSection>
            ))}
          </ul>

          {/* Comparison table */}
          <AnimatedSection>
            <div className="border border-ink-10 rounded-[var(--radius-card)] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-forest text-cream">
                {["Feature", "Ordinary Manure", "NutriBrix"].map((h, i) => (
                  <div
                    key={h}
                    className={`px-4 py-3.5 text-[0.66rem] uppercase tracking-[0.1em] border-l border-white/15 ${
                      i === 0 ? "border-l-0" : ""
                    } ${i === 2 ? "bg-forest-dark" : ""}`}
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {h}
                  </div>
                ))}
              </div>
              {/* Rows */}
              {COMPARE_ROWS.map((row, ri) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 text-[0.9rem] border-b border-ink-10 last:border-b-0"
                >
                  <div className="px-4 py-3.5 font-medium border-l border-ink-10 border-l-0">
                    {row.feature}
                  </div>
                  <div className="px-4 py-3.5 text-ink-soft border-l border-ink-10">
                    {row.ordinary}
                  </div>
                  <div
                    className="px-4 py-3.5 text-forest font-medium border-l border-ink-10"
                    style={{ background: "rgba(239,227,204,0.4)" }}
                  >
                    {row.nb}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
