import { MARQUEE_ITEMS } from "@/lib/constants";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="overflow-hidden whitespace-nowrap py-8 border-t border-b border-ink-10 bg-kraft-pale"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className="inline-flex gap-10 pr-10"
        style={{ animation: "marquee-scroll 42s linear infinite" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 italic font-normal text-forest-dark"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(1.6rem, 4vw, 3rem)",
            }}
          >
            {item}
            <span className="text-kraft-dark text-xl">&#127807;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
