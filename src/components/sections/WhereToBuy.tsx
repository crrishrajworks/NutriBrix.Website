import { BUY_CHANNELS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

const icons: Record<string, React.ReactNode> = {
  shop: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 9l1-5h16l1 5M4 9v10h16V9M4 9h16M9 21v-6h6v6" />
    </svg>
  ),
  pin: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  users: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  phone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <line x1="10" y1="19" x2="14" y2="19" />
    </svg>
  ),
};

export default function WhereToBuy() {
  return (
    <section id="buy" className="py-24 min-[900px]:py-33">
      <div className="max-w-[var(--max-w)] mx-auto px-6">
        <div className="grid gap-8 items-end min-[900px]:grid-cols-[1fr_1fr] mb-12">
          <div>
            <p
              className="uppercase tracking-[0.13em] font-medium text-[0.72rem] text-forest"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Where to Buy
            </p>
            <h2
              className="mt-3.5 font-light leading-[1.04] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(2rem, 4.6vw, 3.6rem)",
              }}
            >
              Find NutriBrix{" "}
              <em className="italic text-forest">near you.</em>
            </h2>
          </div>
          <p className="text-ink-soft text-[1.05rem] leading-rel max-w-[420px] min-[900px]:justify-self-end min-[900px]:text-left">
            We work farmer-to-farmer and dealer-to-dealer. Four ways to get
            NutriBrix — pick whichever is closest.
          </p>
        </div>

        <div className="grid gap-5 grid-cols-1 min-[620px]:grid-cols-2 min-[1000px]:grid-cols-4">
          {BUY_CHANNELS.map((ch, i) => (
            <AnimatedSection key={ch.title} delay={i * 80}>
              <div className="bg-white border border-ink-10 rounded-[var(--radius-card)] p-6 transition-all duration-400 hover:shadow-[0_20px_40px_-22px_rgba(36,28,18,0.18)] hover:border-ink-22">
                <span className="h-[52px] w-[52px] rounded-full bg-kraft-pale text-forest flex items-center justify-center">
                  {icons[ch.icon]}
                </span>
                <h3
                  className="mt-5 text-[1.3rem] font-medium"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {ch.title}
                </h3>
                <p className="mt-2 text-ink-soft text-[0.9rem] leading-[1.55]">
                  {ch.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
