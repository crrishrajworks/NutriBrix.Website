"use client";

import { useState, useEffect, useCallback } from "react";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pack: "5kg",
    location: "",
    message: "",
  });

  const openModal = useCallback((pack?: string) => {
    if (pack) setForm((f) => ({ ...f, pack }));
    setShowSuccess(false);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent;
      openModal(ce.detail?.pack);
    };
    window.addEventListener("open-enquiry", handler);
    return () => window.removeEventListener("open-enquiry", handler);
  }, [openModal]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    const url = buildWhatsAppUrl(form);
    setShowSuccess(true);
    window.open(url, "_blank", "noopener");
  };

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-5"
      style={{
        background: "rgba(36,28,18,0.45)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="bg-cream rounded-[18px] max-w-[480px] w-full max-h-[90vh] overflow-y-auto relative">
        {/* Top soil divider */}
        <div className="soil-divider rounded-t-[18px]" />

        <div className="p-7 relative">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4.5 right-4.5 bg-none border-none cursor-pointer text-ink-soft p-1.5"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {!showSuccess ? (
            <>
              <p
                className="uppercase tracking-[0.13em] font-medium text-[0.72rem] text-forest"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Enquire
              </p>
              <h3
                className="mt-2 text-[1.75rem] font-light"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Get NutriBrix{" "}
                <em className="italic text-clay" style={{ fontFamily: "var(--font-fraunces)" }}>
                  at your farm.
                </em>
              </h3>
              <p className="mt-2.5 text-ink-soft text-[0.9rem] leading-rel">
                Share your details and we&apos;ll send them straight to our WhatsApp so
                the team can connect you with the nearest dealer or FPO.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mt-5.5 grid grid-cols-2 gap-3.5">
                  <Field
                    label="Name"
                    placeholder="Ramesh Patel"
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    required
                  />
                  <Field
                    label="Phone"
                    placeholder="+91 98•••••••"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                    required
                  />
                </div>
                <div className="mt-3.5 grid grid-cols-2 gap-3.5">
                  <div>
                    <label
                      className="block mb-1.5 text-[0.68rem] uppercase tracking-[0.1em] text-ink-soft"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      Pack size
                    </label>
                    <select
                      value={form.pack}
                      onChange={(e) => update("pack", e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[10px] border border-ink-10 bg-white font-[inherit] text-[0.92rem] text-ink focus:border-forest"
                    >
                      <option value="5kg">5 KG — Trial</option>
                      <option value="10kg">10 KG — Regular</option>
                      <option value="30-40kg">30–40 KG — Bulk</option>
                      <option value="fpo-bulk">FPO / Co-op bulk</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <Field
                    label="District / State"
                    placeholder="Rajkot, Gujarat"
                    value={form.location}
                    onChange={(v) => update("location", v)}
                  />
                </div>
                <div className="mt-3.5">
                  <label
                    className="block mb-1.5 text-[0.68rem] uppercase tracking-[0.1em] text-ink-soft"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    Anything to add?
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Land size, crops, timing…"
                    rows={3}
                    className="w-full px-3.5 py-2.5 rounded-[10px] border border-ink-10 bg-white font-[inherit] text-[0.92rem] text-ink resize-y min-h-[78px] focus:border-forest"
                  />
                </div>

                <div className="mt-6 flex flex-col gap-2.5 min-[480px]:flex-row">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-forest text-cream font-medium text-[0.95rem] border-none cursor-pointer hover:bg-forest-dark hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-14px_rgba(27,61,28,0.55)] transition-all duration-300"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.03 0C5.42 0 .06 5.36.06 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.96 11.96 0 0 0 5.84 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.49-8.43z" />
                    </svg>
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="mx-auto h-[52px] w-[52px] rounded-full bg-forest text-cream flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h4
                className="mt-4 text-[1.6rem] font-light"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Namaste — opening WhatsApp.
              </h4>
              <p className="mt-2 text-ink-soft text-[0.9rem] leading-rel">
                Send the pre-filled message and our team will get back to you
                shortly.
              </p>
              <button
                onClick={closeModal}
                className="mt-5 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-ink font-medium text-[0.95rem] border border-ink-22 hover:border-forest hover:text-forest transition-all duration-300 cursor-pointer"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label
        className="block mb-1.5 text-[0.68rem] uppercase tracking-[0.1em] text-ink-soft"
        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-3.5 py-2.5 rounded-[10px] border border-ink-10 bg-white font-[inherit] text-[0.92rem] text-ink focus:border-forest"
      />
    </div>
  );
}
