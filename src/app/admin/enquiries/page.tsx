"use client";

import { useEffect, useState, useCallback } from "react";
import { api } from "@/lib/api";

export default function EnquiriesPage() {
  const [data, setData] = useState<any>({ enquiries: [], total: 0, page: 1, totalPages: 1 });
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getEnquiries({ status: statusFilter || undefined, page });
      setData(res);
    } catch {}
    setLoading(false);
  }, [statusFilter, page]);

  useEffect(() => { load(); }, [load]);

  const updateStatus = async (id: number, status: string) => {
    await api.updateEnquiry(id, { status });
    load();
  };

  const deleteEnquiry = async (id: number) => {
    if (!confirm("Delete this enquiry?")) return;
    await api.deleteEnquiry(id);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-light" style={{ fontFamily: "var(--font-fraunces)" }}>Enquiries</h1>
        <span className="text-sm text-ink-soft">{data.total} total</span>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {["", "new", "contacted", "converted"].map((s) => (
          <button key={s} onClick={() => { setStatusFilter(s); setPage(1); }} className={`px-4 py-1.5 rounded-full text-sm border cursor-pointer transition-colors ${statusFilter === s ? "bg-forest text-cream border-forest" : "bg-white text-ink border-ink-10 hover:border-forest"}`}>
            {s || "All"}
          </button>
        ))}
      </div>

      {loading ? <p className="text-ink-soft">Loading...</p> : (
        <div className="bg-white rounded-xl border border-ink-10 overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead className="bg-cream">
              <tr>
                <th className="text-left p-3 font-medium text-ink-soft">Name</th>
                <th className="text-left p-3 font-medium text-ink-soft">Phone</th>
                <th className="text-left p-3 font-medium text-ink-soft">Pack</th>
                <th className="text-left p-3 font-medium text-ink-soft">Location</th>
                <th className="text-left p-3 font-medium text-ink-soft">Message</th>
                <th className="text-left p-3 font-medium text-ink-soft">Status</th>
                <th className="text-left p-3 font-medium text-ink-soft">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.enquiries.map((e: any) => (
                <tr key={e.id} className="border-t border-ink-10">
                  <td className="p-3 font-medium">{e.name}</td>
                  <td className="p-3 text-ink-soft">{e.phone}</td>
                  <td className="p-3 text-ink-soft">{e.pack}</td>
                  <td className="p-3 text-ink-soft">{e.location}</td>
                  <td className="p-3 text-ink-soft max-w-[200px] truncate">{e.message}</td>
                  <td className="p-3">
                    <select value={e.status} onChange={(ev) => updateStatus(e.id, ev.target.value)} className="text-xs border border-ink-10 rounded-lg px-2 py-1 bg-white cursor-pointer">
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="converted">Converted</option>
                    </select>
                  </td>
                  <td className="p-3">
                    <button onClick={() => deleteEnquiry(e.id)} className="text-xs text-red-600 hover:text-red-800 cursor-pointer bg-transparent border-none">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {data.totalPages > 1 && (
        <div className="flex gap-2 mt-4 justify-center">
          <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="px-3 py-1 rounded border border-ink-10 text-sm disabled:opacity-40 cursor-pointer bg-white">Prev</button>
          <span className="px-3 py-1 text-sm text-ink-soft">Page {data.page} of {data.totalPages}</span>
          <button disabled={page >= data.totalPages} onClick={() => setPage((p) => p + 1)} className="px-3 py-1 rounded border border-ink-10 text-sm disabled:opacity-40 cursor-pointer bg-white">Next</button>
        </div>
      )}
    </div>
  );
}
