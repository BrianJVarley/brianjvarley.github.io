import { Project } from "@/models/project.ts";
export type GetProjectsFilters = {
    limit: number;
    page: number;
    latest?: boolean;
};
export declare function getProjects(filters?: GetProjectsFilters): Promise<Project[]>;
