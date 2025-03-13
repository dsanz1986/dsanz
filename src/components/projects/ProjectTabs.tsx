
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allProjects, projectsByCategory } from "@/data/projectsData";
import ProjectsGrid from "./ProjectsGrid";

interface ProjectTabsProps {
  isVisible: boolean;
}

const ProjectTabs = ({ isVisible }: ProjectTabsProps) => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-secondary/70 backdrop-blur-sm">
          <TabsTrigger value="all" className="text-sm">All projects</TabsTrigger>
          <TabsTrigger value="case-study" className="text-sm">Case study</TabsTrigger>
          <TabsTrigger value="side-projects" className="text-sm">Side projects</TabsTrigger>
          <TabsTrigger value="ui-concept" className="text-sm">UI Concept</TabsTrigger>
          <TabsTrigger value="design-system" className="text-sm">Design System</TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="all" className="mt-0">
        <ProjectsGrid projects={allProjects} />
      </TabsContent>
      
      <TabsContent value="case-study" className="mt-0">
        <ProjectsGrid projects={projectsByCategory["case-study"]} />
      </TabsContent>
      
      <TabsContent value="side-projects" className="mt-0">
        <ProjectsGrid projects={projectsByCategory["side-projects"]} />
      </TabsContent>
      
      <TabsContent value="ui-concept" className="mt-0">
        <ProjectsGrid projects={projectsByCategory["ui-concept"]} />
      </TabsContent>
      
      <TabsContent value="design-system" className="mt-0">
        <ProjectsGrid projects={projectsByCategory["design-system"]} />
      </TabsContent>
    </Tabs>
  );
};

export default ProjectTabs;
