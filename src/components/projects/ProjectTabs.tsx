import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allProjects, projectsByCategory } from "@/data/projectsData";
import ProjectsGrid from "./ProjectsGrid";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ProjectTabsProps {
  isVisible: boolean;
}

const ProjectTabs = ({ isVisible }: ProjectTabsProps) => {
  return (
    <Tabs defaultValue="case-study" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-secondary/70 backdrop-blur-sm">
          <TabsTrigger value="case-study" className="text-sm">Case study</TabsTrigger>
          <TabsTrigger value="side-projects" className="text-sm">Side projects</TabsTrigger>
          <TabsTrigger value="ui-concept" className="text-sm">UI Concept</TabsTrigger>
          <TabsTrigger value="design-system" className="text-sm">Design System</TabsTrigger>
          <TabsTrigger value="quien-soy" className="text-sm">Quien soy</TabsTrigger>
          <TabsTrigger value="all" className="text-sm">All projects</TabsTrigger>
        </TabsList>
      </div>
      
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
      
      <TabsContent value="quien-soy" className="mt-0">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">👋 Hola! Soy David Sanz</CardTitle>
            <CardDescription>
              <a
                href="https://dsanz.me/dsanz/Hola-Soy-David-Sanz-19dc0bb1a603818fb4c6da8f645b9dc7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Ver más sobre mí
              </a>
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
      
      <TabsContent value="all" className="mt-0">
        <ProjectsGrid projects={allProjects} />
      </TabsContent>
    </Tabs>
  );
};

export default ProjectTabs;
