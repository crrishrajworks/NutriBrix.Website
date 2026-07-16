"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Link from "next/link";

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.getStats().then(setStats).catch((e) => setError(e.message));
  }, []);

  if (error) return <div className="text-red-600 p-4">{error}</div>;
  if (!stats) return <p className="text-ink-soft">Loading dashboard...</p>;

  const cards = [
    { label: "Enquiries", value: stats.totals.enquiries, href: "/admin/enquiries", color: "bg-kraft-pale text-forest" },
    { label: "Blog Posts", value: stats.totals.blogPosts, href: "/admin/blog", color: "bg-green-50 text-green-700" },
    { label: "Testimonials", value: stats.totals.testimonials, href: "/admin/testimonials", color: "bg-blue-50 text-blue-700" },
    { label: "Products", value: stats.totals.products, href: "/admin/products", color: "bg-orange-50 text-orange-700" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-light mb-6" style={{ fontFamily: "var(--font-fraunces)" }}>Dashboard</h1>

      <div className="grid grid-cols-2 min-[900px]:grid-cols-4 gap-4 mb-8">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className={`${c.color} rounded-xl p-5 hover:shadow-md transition-shadow`}>
            <div className="text-3xl font-light" style={{ fontFamily: "var(--font-fraunces)" }}>{c.value}</div>
            <div className="text-sm mt-1 font-medium">{c.label}</div>
          </Link>
        ))}
      </div>

      <h2 className="text-lg font-medium mb-4" style={{ fontFamily: "var(--font-fraunces)" }}>Recent Enquiries</h2>
      <div className="bg-white rounded-xl border border-ink-10 overflow-hidden">
        {stats.recentEnquiries.length === 0 ? (
          <p className="p-6 text-ink-soft text-sm">No enquiries yet.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-cream">
              <tr>
                <th className="text-left p-3 font-medium text-ink-soft">Name</th>
                <th className="text-left p-3 font-medium text-ink-soft">Phone</th>
                <th className="text-left p-3 font-medium text-ink-soft">Pack</th>
                <th className="text-left p-3 font-medium text-ink-soft">Status</th>
                <th className="text-left p-3 font-medium text-ink-soft">Date</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentEnquiries.map((e: any) => (
                <tr key={e.id} className="border-t border-ink-10">
                  <td className="p-3 font-medium">{e.name}</td>
                  <td className="p-3 text-ink-soft">{e.phone}</td>
                  <td className="p-3 text-ink-soft">{e.pack}</td>
                  <td className="p-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${e.status === "new" ? "bg-blue-100 text-blue-700" : e.status === "contacted" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                      {e.status}
                    </span>
                  </td>
                  <td className="p-3 text-ink-soft">{new Date(e.created_at).toLocaleDateString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
