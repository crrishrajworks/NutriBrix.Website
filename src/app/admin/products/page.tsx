"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [editing, setEditing] = useState<number | null>(null);
  const [form, setForm] = useState<any>({});

  const load = async () => { try { setProducts(await api.getProducts()); } catch {} };
  useEffect(() => { load(); }, []);

  const startEdit = (p: any) => { setEditing(p.id); setForm({ weight: p.weight, price: p.price, per_kg: p.per_kg, label: p.label, description: p.description }); };

  const save = async () => {
    if (editing === null) return;
    await api.updateProduct(editing, form);
    setEditing(null);
    load();
  };

  return (
    <div>
      <h1 className="text-2xl font-light mb-6" style={{ fontFamily: "var(--font-fraunces)" }}>Products</h1>

      <div className="grid gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-xl border border-ink-10 p-5">
            {editing === p.id ? (
              <div className="grid grid-cols-2 gap-3">
                <input value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} className="px-3 py-2 rounded-lg border border-ink-10 text-sm" placeholder="Weight" />
                <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: parseInt(e.target.value) })} className="px-3 py-2 rounded-lg border border-ink-10 text-sm" placeholder="Price" />
                <input type="number" value={form.per_kg} onChange={(e) => setForm({ ...form, per_kg: parseInt(e.target.value) })} className="px-3 py-2 rounded-lg border border-ink-10 text-sm" placeholder="Per kg" />
                <input value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} className="px-3 py-2 rounded-lg border border-ink-10 text-sm" placeholder="Label" />
                <input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="col-span-2 px-3 py-2 rounded-lg border border-ink-10 text-sm" placeholder="Description" />
                <div className="col-span-2 flex gap-2">
                  <button onClick={save} className="px-4 py-2 bg-forest text-cream rounded-lg text-sm cursor-pointer border-none">Save</button>
                  <button onClick={() => setEditing(null)} className="px-4 py-2 bg-white border border-ink-10 rounded-lg text-sm cursor-pointer">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{p.weight}</span>
                  <span className="text-ink-soft ml-3">₹{p.price} (₹{p.per_kg}/kg)</span>
                  <span className="text-ink-soft ml-3 text-sm">{p.label}</span>
                </div>
                <button onClick={() => startEdit(p)} className="text-sm text-forest font-medium cursor-pointer bg-transparent border-none hover:underline">Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
