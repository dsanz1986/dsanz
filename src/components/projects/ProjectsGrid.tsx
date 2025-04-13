
import { Project } from "@/data/projectsData";
import ProjectCard from "../ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          index={index}
          {...project}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
