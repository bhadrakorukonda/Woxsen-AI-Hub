import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toolsApi, categoriesApi, ToolsQuery, Tool } from "@/services/tools";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: categoriesApi.list,
    staleTime: 60_000,
  });
}

export function useTools(q: ToolsQuery) {
  return useQuery({
    queryKey: ["tools", q],
    queryFn: () => toolsApi.list(q),
    keepPreviousData: true,
  });
}

export function useCreateTool() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: toolsApi.create,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tools"] });
    },
  });
}

export function useDeleteTool() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: toolsApi.delete,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tools"] });
    },
  });
}

