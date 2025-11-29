import { ProjectImage } from "./ProjectImage";

export interface Project {
  title: string;
  description: string;
  images: ProjectImage[];
  tech: string[];
  github?: string;
  githubBackend?: string;
  demo?: string;
}