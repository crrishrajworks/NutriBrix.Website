"use client";

import { useAuth, AuthProvider } from "@/lib/auth-context";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AdminInner({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAuth();
  const pathname = usePathname();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-cream"><p className="text-ink-soft">Loading...</p></div>;
  }

  if (!user && pathname !== "/admin/login" && pathname !== "/admin/register") {
    return <>{children}</>;
  }

  if (!user) return <>{children}</>;

  const links = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/enquiries", label: "Enquiries" },
    { href: "/admin/blog", label: "Blog" },
    { href: "/admin/products", label: "Products" },
    { href: "/admin/testimonials", label: "Testimonials" },
    { href: "/admin/settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen flex bg-cream">
      {/* Sidebar */}
      <aside className="w-64 bg-forest-dark text-cream p-6 flex flex-col shrink-0 min-[900px]:block hidden">
        <Link href="/admin/dashboard" className="text-xl font-semibold mb-8" style={{ fontFamily: "var(--font-fraunces)" }}>
          <span className="text-cream">NUTRI</span><span className="text-kraft">BRIX</span>
          <span className="block text-xs text-kraft-pale/60 mt-1" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>ADMIN PANEL</span>
        </Link>
        <nav className="flex flex-col gap-1 flex-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === l.href ? "bg-white/15 text-white" : "text-kraft-pale/70 hover:text-white hover:bg-white/10"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-white/10 pt-4 mt-4">
          <p className="text-xs text-kraft-pale/50 mb-2">{user.email}</p>
          <button onClick={logout} className="text-sm text-kraft hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0">Logout</button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Mobile top bar */}
        <div className="min-[900px]:hidden bg-forest-dark text-cream p-4 flex items-center justify-between">
          <Link href="/admin/dashboard" className="font-semibold" style={{ fontFamily: "var(--font-fraunces)" }}>NUTRIBRIX</Link>
          <button onClick={logout} className="text-sm text-kraft hover:text-white cursor-pointer bg-transparent border-none">Logout</button>
        </div>
        <div className="p-6 min-[900px]:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider><AdminInner>{children}</AdminInner></AuthProvider>;
}
