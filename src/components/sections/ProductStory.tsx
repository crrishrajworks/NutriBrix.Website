import { CHAPTERS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProductStory() {
  return (
    <section id="product" className="py-24 min-[900px]:py-33">
      <div className="max-w-[var(--max-w)] mx-auto px-6">
        <div className="max-w-[720px]">
          <p
            className="uppercase tracking-[0.13em] font-medium text-[0.72rem] text-forest"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            The Opportunity
          </p>
          <h2
            className="mt-3.5 font-light leading-[1.04] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(2rem, 4.6vw, 3.6rem)",
            }}
          >
            Every season, waste becomes{" "}
            <em className="italic text-forest">wealth</em> instead of smoke.
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Timeline line - desktop only */}
          <div
            className="hidden min-[900px]:block absolute top-[46px] left-[6%] right-[6%] h-px opacity-55"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--color-kraft-dark) 0 6px, transparent 6px 14px)",
            }}
          />

          <div className="grid gap-11 grid-cols-1 min-[640px]:grid-cols-2 min-[900px]:grid-cols-4 min-[900px]:gap-6">
            {CHAPTERS.map((ch, i) => (
              <AnimatedSection key={ch.num} delay={i * 80}>
                <div
                  className="font-light text-transparent leading-[0.85] tracking-[-0.03em]"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: "clamp(3.2rem, 8vw, 6.4rem)",
                    WebkitTextStroke: "1.4px var(--color-forest)",
                  }}
                >
                  {ch.num}
                </div>
                <div className="mt-3.5 h-[11px] w-[11px] rounded-full bg-forest relative z-[1] shadow-[0_0_0_5px_var(--color-cream)]" />
                <h3
                  className="mt-4.5 text-[1.4rem] font-medium leading-snug"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {ch.title}
                </h3>
                <p className="mt-2.5 text-ink-soft text-[0.95rem] leading-[1.55] max-w-[270px]">
                  {ch.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
