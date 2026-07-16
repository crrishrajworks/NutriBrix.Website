"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { api } from "@/lib/api";
import Link from "next/link";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [hasAdmin, setHasAdmin] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.checkAdmin().then((res) => setHasAdmin(res.hasAdmin)).catch(() => setHasAdmin(false));
  }, []);

  if (hasAdmin === null) return <div className="min-h-screen flex items-center justify-center bg-cream"><p>Loading...</p></div>;

  if (hasAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream p-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-light mb-4" style={{ fontFamily: "var(--font-fraunces)" }}>Admin Already Exists</h1>
          <p className="text-ink-soft mb-6">An admin account has already been registered. Please use the login page.</p>
          <Link href="/admin/login" className="inline-block px-6 py-3 bg-forest text-cream rounded-full font-medium hover:bg-forest-dark transition-colors">Go to Login</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(email, password, name);
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream p-6">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg border border-ink-10">
        <h1 className="text-2xl font-light mb-2" style={{ fontFamily: "var(--font-fraunces)" }}>Create Admin Account</h1>
        <p className="text-ink-soft text-sm mb-6">Set up your admin credentials for NutriBrix.</p>

        {error && <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider text-ink-soft mb-1.5" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-ink-10 text-sm focus:border-forest outline-none" placeholder="Admin" />
          </div>
          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider text-ink-soft mb-1.5" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2.5 rounded-lg border border-ink-10 text-sm focus:border-forest outline-none" />
          </div>
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-ink-soft mb-1.5" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} className="w-full px-4 py-2.5 rounded-lg border border-ink-10 text-sm focus:border-forest outline-none" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-forest text-cream rounded-full font-medium hover:bg-forest-dark transition-colors disabled:opacity-50 cursor-pointer border-none text-sm">
            {loading ? "Creating..." : "Create Admin Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
