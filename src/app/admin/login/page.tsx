"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import Link from "next/link";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream p-6">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg border border-ink-10">
        <h1 className="text-2xl font-light mb-2" style={{ fontFamily: "var(--font-fraunces)" }}>Admin Login</h1>
        <p className="text-ink-soft text-sm mb-6">Sign in to manage your NutriBrix website.</p>

        {error && <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider text-ink-soft mb-1.5" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2.5 rounded-lg border border-ink-10 text-sm focus:border-forest outline-none" />
          </div>
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-ink-soft mb-1.5" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2.5 rounded-lg border border-ink-10 text-sm focus:border-forest outline-none" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-forest text-cream rounded-full font-medium hover:bg-forest-dark transition-colors disabled:opacity-50 cursor-pointer border-none text-sm">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-ink-soft">
          No admin account? <Link href="/admin/register" className="text-forest font-medium hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}
