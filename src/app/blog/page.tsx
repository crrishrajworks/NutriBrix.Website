import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";

export const revalidate = 60;

export const metadata = {
  title: "Blog — NutriBrix",
  description: "Articles on organic farming, sustainable agriculture, and the NutriBrix smart block manure.",
};

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    posts = await api.getPublishedPosts();
  } catch {
    posts = [];
  }

  return (
    <main className="min-h-screen bg-cream pt-[88px]">
      <div className="max-w-[var(--max-w)] mx-auto px-6 py-16">
        <h1
          className="text-[2.8rem] font-bold text-forest leading-tight mb-3"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          The NutriBrix Blog
        </h1>
        <p className="text-[1.05rem] text-ink/60 max-w-[520px] mb-14">
          Insights on organic farming, soil health, and sustainable agriculture from the NutriBrix team.
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-ink/40 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-ink/8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {post.cover_image ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] bg-gradient-to-br from-forest/10 to-kraft/10 flex items-center justify-center">
                    <span
                      className="text-[2.5rem] font-bold text-forest/15"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      NB
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <div
                    className="text-[0.72rem] uppercase tracking-[0.12em] text-kraft font-medium mb-2"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {post.author || "NutriBrix Team"} · {new Date(post.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </div>
                  <h2
                    className="text-[1.2rem] font-semibold text-forest leading-snug mb-2 group-hover:text-forest-dark transition-colors"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-[0.9rem] text-ink/55 leading-rel line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
