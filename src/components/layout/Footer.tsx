import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-forest-dark text-cream pt-24 pb-8">
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, var(--color-kraft) 1px, transparent 2px), radial-gradient(circle at 75% 70%, var(--color-kraft) 1px, transparent 2px)",
          backgroundSize: "48px 48px, 60px 60px",
        }}
      />

      <div className="max-w-[var(--max-w)] mx-auto px-6 relative z-10">
        <div className="grid gap-12 grid-cols-1 min-[700px]:grid-cols-2 min-[1000px]:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-[42px] w-[42px] rounded-full overflow-hidden bg-white flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="NutriBrix"
                  width={42}
                  height={42}
                  className="h-full w-full object-cover"
                />
              </span>
              <span
                className="text-[1.3rem] font-semibold"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                <span className="text-cream">NUTRI</span>
                <span className="text-kraft">BRIX</span>
              </span>
            </div>
            <p className="mt-4.5 text-[0.92rem] text-kraft-pale/80 leading-rel max-w-[280px]">
              Organic Smart Block — compressed manure from crop residue and farm
              waste. Feed the soil. Fuel the future.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="uppercase tracking-[0.13em] font-medium text-[0.72rem] mb-4.5 text-kraft"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0 text-[0.92rem]">
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-kraft transition-colors duration-250"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="text-kraft shrink-0"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  WhatsApp enquiry
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 hover:text-kraft transition-colors duration-250"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="text-kraft shrink-0"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-kraft-pale/80">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-kraft shrink-0"
                >
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {SITE.location}
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4
              className="uppercase tracking-[0.13em] font-medium text-[0.72rem] mb-4.5 text-kraft"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Explore
            </h4>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0 text-[0.92rem]">
              {[
                { href: "#product", label: "Product" },
                { href: "#pricing", label: "Pricing" },
                { href: "#why", label: "Why NutriBrix" },
                { href: "#buy", label: "Where to Buy" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-kraft transition-colors duration-250"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code */}
          <div>
            <h4
              className="uppercase tracking-[0.13em] font-medium text-[0.72rem] mb-4.5 text-kraft"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Scan to Enquire
            </h4>
            <div className="inline-block bg-cream p-3 rounded-xl">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=224x224&margin=0&color=1B3D1C&bgcolor=FAF6EC&data=${encodeURIComponent("https://nutri-brix-website-44z8ujwp5-crrishrajworks-projects.vercel.app/#pricing")}`}
                alt="QR code linking to NutriBrix pricing"
                width={112}
                height={112}
                className="block rounded-md"
              />
            </div>
            <p className="mt-3.5 text-[0.78rem] text-kraft-pale/70 max-w-[200px] leading-rel">
              Point your camera at this code to view NutriBrix pricing on your phone.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col gap-3 min-[700px]:flex-row min-[700px]:items-center min-[700px]:justify-between text-[0.75rem] text-kraft-pale/70">
          <div>© 2026 NutriBrix Agritech Pvt. Ltd.</div>
          <div style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
            {SITE.domain}
          </div>
        </div>
      </div>
    </footer>
  );
}
