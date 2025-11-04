import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import type { AetherData } from "@/types";

export function useAetherData() {
  return useQuery<AetherData>({
    queryKey: ["aetherData"],
    queryFn: api.getAetherData,
  });
}
