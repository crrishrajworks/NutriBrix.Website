"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", quote: "" });

  const load = async () => { try { setTestimonials(await api.getTestimonials()); } catch {} };
  useEffect(() => { load(); }, []);

  const add = async () => {
    if (!form.name || !form.quote) return;
    await api.createTestimonial(form);
    setForm({ name: "", role: "", quote: "" });
    setShowAdd(false);
    load();
  };

  const remove = async (id: number) => {
    if (!confirm("Delete this testimonial?")) return;
    await api.deleteTestimonial(id);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-light" style={{ fontFamily: "var(--font-fraunces)" }}>Testimonials</h1>
        <button onClick={() => setShowAdd(!showAdd)} className="px-5 py-2 bg-forest text-cream rounded-full text-sm font-medium hover:bg-forest-dark transition-colors cursor-pointer border-none">
          {showAdd ? "Cancel" : "Add Testimonial"}
        </button>
      </div>

      {showAdd && (
        <div className="bg-white rounded-xl border border-ink-10 p-5 mb-4">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-3 py-2 rounded-lg border border-ink-10 text-sm" placeholder="Name" />
            <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="px-3 py-2 rounded-lg border border-ink-10 text-sm" placeholder="Role / Location" />
          </div>
          <textarea value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} rows={3} className="w-full px-3 py-2 rounded-lg border border-ink-10 text-sm mb-3 resize-y" placeholder="Testimonial quote..." />
          <button onClick={add} className="px-5 py-2 bg-forest text-cream rounded-full text-sm font-medium cursor-pointer border-none hover:bg-forest-dark">Save</button>
        </div>
      )}

      <div className="grid gap-3">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-xl border border-ink-10 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">{t.name} <span className="text-ink-soft font-normal text-sm ml-2">{t.role}</span></p>
                <p className="text-ink-soft mt-1 text-sm italic">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <button onClick={() => remove(t.id)} className="text-xs text-red-600 hover:text-red-800 cursor-pointer bg-transparent border-none shrink-0 ml-4">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
