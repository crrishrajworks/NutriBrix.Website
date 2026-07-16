const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = typeof window !== "undefined" ? localStorage.getItem("nutribrix_token") : null;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string> || {}),
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, { ...options, headers });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Request failed" }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

export const api = {
  // Auth
  checkAdmin: () => request<{ hasAdmin: boolean }>("/api/auth/check"),
  register: (data: { email: string; password: string; name?: string }) =>
    request<{ user: { id: number; email: string; name: string }; token: string }>("/api/auth/register", { method: "POST", body: JSON.stringify(data) }),
  login: (data: { email: string; password: string }) =>
    request<{ user: { id: number; email: string; name: string }; token: string }>("/api/auth/login", { method: "POST", body: JSON.stringify(data) }),
  getMe: () => request<{ id: number; email: string; name: string }>("/api/auth/me"),

  // Enquiries
  getEnquiries: (params?: { status?: string; page?: number }) => {
    const qs = new URLSearchParams();
    if (params?.status) qs.set("status", params.status);
    if (params?.page) qs.set("page", String(params.page));
    return request<{ enquiries: any[]; total: number; page: number; totalPages: number }>(`/api/enquiries?${qs}`);
  },
  updateEnquiry: (id: number, data: { status: string }) =>
    request<any>(`/api/enquiries/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteEnquiry: (id: number) =>
    request<any>(`/api/enquiries/${id}`, { method: "DELETE" }),

  // Blog
  getBlogPosts: () => request<any[]>("/api/blog/admin/all"),
  createBlogPost: (data: any) =>
    request<any>("/api/blog", { method: "POST", body: JSON.stringify(data) }),
  updateBlogPost: (id: number, data: any) =>
    request<any>(`/api/blog/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteBlogPost: (id: number) =>
    request<any>(`/api/blog/${id}`, { method: "DELETE" }),

  // Products
  getProducts: () => request<any[]>("/api/products"),
  updateProduct: (id: number, data: any) =>
    request<any>(`/api/products/${id}`, { method: "PUT", body: JSON.stringify(data) }),

  // Testimonials
  getTestimonials: () => request<any[]>("/api/testimonials"),
  createTestimonial: (data: any) =>
    request<any>("/api/testimonials", { method: "POST", body: JSON.stringify(data) }),
  updateTestimonial: (id: number, data: any) =>
    request<any>(`/api/testimonials/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteTestimonial: (id: number) =>
    request<any>(`/api/testimonials/${id}`, { method: "DELETE" }),

  // Settings
  getSettings: () => request<Record<string, string>>("/api/settings"),
  updateSettings: (data: Record<string, string>) =>
    request<any>("/api/settings", { method: "PUT", body: JSON.stringify(data) }),

  // Stats
  getStats: () => request<{ totals: { enquiries: number; blogPosts: number; testimonials: number; products: number }; recentEnquiries: any[] }>("/api/admin/stats"),
};
