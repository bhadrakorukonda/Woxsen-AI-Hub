import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCategories, useTools, useCreateTool, useDeleteTool } from "@/hooks/useTools";

export default function ToolsPage() {
  const [params, setParams] = useSearchParams();
  const [name, setName] = useState("");

  const q = useMemo(() => ({
    search: params.get("search") || undefined,
    category: params.get("category") || undefined,
    page: Number(params.get("page") || 1),
    pageSize: 12,
    sort: (params.get("sort") as "new" | "name") || "new",
  }), [params]);

  const categories = useCategories();
  const { data, isLoading } = useTools(q);
  const createTool = useCreateTool();
  const deleteTool = useDeleteTool();

  function updateParam(key: string, value?: string | number) {
    const next = new URLSearchParams(params);
    if (value === undefined || value === "" || value === null) next.delete(key);
    else next.set(key, String(value));
    setParams(next, { replace: true });
  }

  if (isLoading) return <div className="p-6">Loading…</div>;

  return (
    <div className="p-6 space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 items-center">
        <input
          defaultValue={q.search || ""}
          onChange={(e) => updateParam("search", e.target.value)}
          placeholder="Search tools…"
          className="border px-3 py-2 rounded"
        />
        <select
          value={q.category || ""}
          onChange={(e) => updateParam("category", e.target.value || undefined)}
          className="border px-3 py-2 rounded"
        >
          <option value="">All categories</option>
          {(categories.data || []).map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <select
          value={q.sort}
          onChange={(e) => updateParam("sort", e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="new">Newest</option>
          <option value="name">Name (A–Z)</option>
        </select>
      </div>

      {/* Create (demo) */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const categoryId = q.category || (categories.data?.[0]?.id ?? "");
          if (!categoryId) return alert("Pick a category first");
          createTool.mutate({ name, url: "https://example.com", categoryId });
          setName("");
        }}
        className="flex gap-2"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New tool name"
          className="border px-3 py-2 rounded"
          required
        />
        <button className="px-4 py-2 rounded bg-black text-white">
          {createTool.isPending ? "Creating…" : "Create tool"}
        </button>
      </form>

      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.items.map((t) => (
          <div key={t.id} className="border rounded p-4 space-y-2">
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-gray-500">{t.category?.name}</div>
            <a href={t.url} className="text-sm underline" target="_blank" rel="noreferrer">Open</a>
            <div>
              <button
                onClick={() => deleteTool.mutate(t.id)}
                className="text-xs px-2 py-1 border rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {data && data.pages > 1 && (
        <div className="flex gap-2 items-center">
          <button
            disabled={q.page <= 1}
            onClick={() => updateParam("page", q.page - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <div className="text-sm">
            Page {data.page} / {data.pages} · {data.total} total
          </div>
          <button
            disabled={q.page >= data.pages}
            onClick={() => updateParam("page", q.page + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
