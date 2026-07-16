"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Link from "next/link";

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try { setPosts(await api.getBlogPosts()); } catch {}
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const togglePublish = async (post: any) => {
    await api.updateBlogPost(post.id, { published: !post.published });
    load();
  };

  const deletePost = async (id: number) => {
    if (!confirm("Delete this post?")) return;
    await api.deleteBlogPost(id);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-light" style={{ fontFamily: "var(--font-fraunces)" }}>Blog Posts</h1>
        <Link href="/admin/blog/new" className="px-5 py-2 bg-forest text-cream rounded-full text-sm font-medium hover:bg-forest-dark transition-colors">New Post</Link>
      </div>

      {loading ? <p className="text-ink-soft">Loading...</p> : posts.length === 0 ? (
        <p className="text-ink-soft">No blog posts yet. Create your first one!</p>
      ) : (
        <div className="bg-white rounded-xl border border-ink-10 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-cream">
              <tr>
                <th className="text-left p-3 font-medium text-ink-soft">Title</th>
                <th className="text-left p-3 font-medium text-ink-soft">Author</th>
                <th className="text-left p-3 font-medium text-ink-soft">Status</th>
                <th className="text-left p-3 font-medium text-ink-soft">Created</th>
                <th className="text-left p-3 font-medium text-ink-soft">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-t border-ink-10">
                  <td className="p-3 font-medium">{p.title}</td>
                  <td className="p-3 text-ink-soft">{p.author}</td>
                  <td className="p-3">
                    <button onClick={() => togglePublish(p)} className={`text-xs px-2 py-0.5 rounded-full cursor-pointer border-none ${p.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                      {p.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="p-3 text-ink-soft">{new Date(p.created_at).toLocaleDateString("en-IN")}</td>
                  <td className="p-3 flex gap-2">
                    <button onClick={() => deletePost(p.id)} className="text-xs text-red-600 hover:text-red-800 cursor-pointer bg-transparent border-none">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
