import { GetProjectsFilters } from "@/services/projects.ts";
type ProfileStore = {
    filters?: GetProjectsFilters;
    setFilters: (filters?: GetProjectsFilters) => void;
};
export declare const useProjectsStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ProfileStore>>;
export {};
