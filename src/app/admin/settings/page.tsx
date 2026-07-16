"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function SettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    api.getSettings().then((s) => { setSettings(s); setLoading(false); });
  }, []);

  const save = async () => {
    await api.updateSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return <p className="text-ink-soft">Loading settings...</p>;

  const fields = [
    { key: "whatsapp_number", label: "WhatsApp Number", placeholder: "91XXXXXXXXXX" },
    { key: "email", label: "Email", placeholder: "info@nutribrix.in" },
    { key: "phone", label: "Phone", placeholder: "+91 XXXXX XXXXX" },
    { key: "location", label: "Location", placeholder: "Rajkot, Gujarat" },
    { key: "domain", label: "Website Domain", placeholder: "www.nutribrix.in" },
  ];

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-light mb-6" style={{ fontFamily: "var(--font-fraunces)" }}>Site Settings</h1>

      <div className="bg-white rounded-xl border border-ink-10 p-6">
        {fields.map((f) => (
          <div key={f.key} className="mb-4">
            <label className="block text-xs uppercase tracking-wider text-ink-soft mb-1.5" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>{f.label}</label>
            <input
              type="text"
              value={settings[f.key] || ""}
              onChange={(e) => setSettings({ ...settings, [f.key]: e.target.value })}
              placeholder={f.placeholder}
              className="w-full px-4 py-2.5 rounded-lg border border-ink-10 text-sm focus:border-forest outline-none"
            />
          </div>
        ))}

        <button onClick={save} className="px-6 py-2.5 bg-forest text-cream rounded-full text-sm font-medium hover:bg-forest-dark transition-colors cursor-pointer border-none mt-2">
          {saved ? "Saved!" : "Save Settings"}
        </button>
      </div>
    </div>
  );
}
