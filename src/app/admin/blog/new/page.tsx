"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function NewBlogPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("NutriBrix Team");
  const [coverImage, setCoverImage] = useState("");
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.createBlogPost({ title, excerpt, content, author, cover_image: coverImage, published });
      router.push("/admin/blog");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-light mb-6" style={{ fontFamily: "var(--font-fraunces)" }}>New Blog Post</h1>

      {error && <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-ink-10 p-6">
        <div className="mb-4">
          <label className="block text-xs uppercase tracking-wider text-ink-soft mb-1.5" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full px-4 py-2.5 rounded-lg border border-ink-10 text-sm focus:border-forest outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-xs uppercase tracking-wider text-ink-soft mb-1.5" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Excerpt</label>
          <input type="text" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-ink-10 text-sm focus:border-forest outline-none" placeholder="Short summary..." />
        </div>
        <div className="mb-4">
          <label className="block text-xs uppercase tracking-wider text-ink-soft mb-1.5" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Content (Markdown)</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required rows={12} className="w-full px-4 py-2.5 rounded-lg border border-ink-10 text-sm focus:border-forest outline-none resize-y font-mono" placeholder="Write your blog post content here..." />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-ink-soft mb-1.5" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Author</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-ink-10 text-sm focus:border-forest outline-none" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-ink-soft mb-1.5" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Cover Image URL</label>
            <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-ink-10 text-sm focus:border-forest outline-none" placeholder="https://..." />
          </div>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <input type="checkbox" id="published" checked={published} onChange={(e) => setPublished(e.target.checked)} className="accent-forest" />
          <label htmlFor="published" className="text-sm text-ink-soft">Publish immediately</label>
        </div>
        <div className="flex gap-3">
          <button type="submit" disabled={loading} className="px-6 py-2.5 bg-forest text-cream rounded-full text-sm font-medium hover:bg-forest-dark transition-colors disabled:opacity-50 cursor-pointer border-none">
            {loading ? "Saving..." : "Create Post"}
          </button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2.5 bg-white text-ink border border-ink-10 rounded-full text-sm font-medium hover:border-forest transition-colors cursor-pointer">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
