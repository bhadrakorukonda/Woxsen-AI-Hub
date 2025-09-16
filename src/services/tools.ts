import { api, ApiListResponse } from "@/lib/api";

export type Category = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
};

export type Tool = {
  id: string;
  name: string;
  description?: string | null;
  url: string;
  createdAt: string;
  categoryId: string;
  category?: Category;
};

export type ToolsQuery = {
  search?: string;
  category?: string; // categoryId
  page?: number;
  pageSize?: number;
  sort?: "new" | "name";
};

function qs(params: Record<string, any>) {
  const u = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") return;
    u.set(k, String(v));
  });
  const s = u.toString();
  return s ? `?${s}` : "";
}

export const toolsApi = {
  list: (q: ToolsQuery) =>
    api.get<ApiListResponse<Tool>>(`/api/tools${qs(q)}`),
  get: (id: string) => api.get<Tool>(`/api/tools/${id}`),
  create: (input: { name: string; description?: string; url: string; categoryId: string }) =>
    api.post<Tool>("/api/tools", input),
  update: (id: string, patch: Partial<{ name: string; description?: string; url: string; categoryId: string }>) =>
    api.patch<Tool>(`/api/tools/${id}`, patch),
  delete: (id: string) => api.del<void>(`/api/tools/${id}`),
};

export const categoriesApi = {
  list: () => api.get<Category[]>("/api/categories"),
};

