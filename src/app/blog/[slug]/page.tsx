import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await api.getBlogPost(slug);
    return {
      title: `${post.title} — NutriBrix Blog`,
      description: post.excerpt || post.title,
    };
  } catch {
    return { title: "Blog Post — NutriBrix" };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = await api.getBlogPost(slug);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream pt-[88px]">
      <article className="max-w-[720px] mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-[0.85rem] text-kraft hover:text-forest transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <div
          className="text-[0.72rem] uppercase tracking-[0.12em] text-kraft font-medium mb-3"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          {post.author || "NutriBrix Team"} · {new Date(post.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        </div>

        <h1
          className="text-[2.2rem] font-bold text-forest leading-tight mb-6"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {post.title}
        </h1>

        {post.cover_image && (
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-ink/80 leading-rel text-[1.05rem]">
          {post.content.split("\n").map((paragraph: string, i: number) => {
            if (!paragraph.trim()) return <br key={i} />;
            return <p key={i} className="mb-5">{paragraph}</p>;
          })}
        </div>

        <div className="mt-14 pt-8 border-t border-ink/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[0.9rem] text-kraft hover:text-forest transition-colors font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
        </div>
      </article>
    </main>
  );
}
