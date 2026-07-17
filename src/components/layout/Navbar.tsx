"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    { href: "#product", label: "Product" },
    { href: "#pricing", label: "Pricing" },
    { href: "#why", label: "Why NutriBrix" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400 border-b border-transparent",
          scrolled &&
            "bg-cream/88 backdrop-blur-[14px] border-ink-10"
        )}
      >
        <div className="max-w-[var(--max-w)] mx-auto px-6 flex items-center justify-between h-[68px]">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="h-9 w-9 rounded-full overflow-hidden border border-ink-10 bg-white flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="NutriBrix logo"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </span>
            <span
              className="text-[1.15rem] font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              <span className="text-forest">NUTRI</span>
              <span className="text-kraft-dark">BRIX</span>
            </span>
          </Link>

          <ul className="hidden min-[900px]:flex items-center gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.86rem] font-medium text-ink hover:text-forest transition-colors duration-250"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="hidden min-[900px]:inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest text-cream font-medium text-[0.95rem] hover:bg-forest-dark hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-14px_rgba(27,61,28,0.55)] transition-all duration-300"
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            Enquire on WhatsApp
          </a>

          <button
            className="min-[900px]:hidden bg-none border-none cursor-pointer p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-[68px_0_0_0] bg-cream z-[49] p-8 flex-col gap-7 border-t border-ink-10 transition-all duration-300",
          mobileOpen ? "flex" : "hidden"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="text-[1.6rem] font-medium text-ink"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {item.label}
          </a>
        ))}
        <a
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest text-cream font-medium text-[0.95rem] self-start mt-2"
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMobileOpen(false)}
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          Enquire on WhatsApp
        </a>
      </div>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.03 0C5.42 0 .06 5.36.06 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.96 11.96 0 0 0 5.84 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.49-8.43z" />
    </svg>
  );
}
