
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allProjects, projectsByCategory } from "@/data/projectsData";
import ProjectsGrid from "./ProjectsGrid";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SquareUserRound } from "lucide-react";

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
          <TabsTrigger value="all" className="text-sm">All projects</TabsTrigger>
          <TabsTrigger value="quien-soy" className="text-sm">Quien soy</TabsTrigger>
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
      
      <TabsContent value="all" className="mt-0">
        <ProjectsGrid projects={allProjects} />
      </TabsContent>
      
      <TabsContent value="quien-soy" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="w-full glass-card rounded-2xl overflow-hidden hover-scale section-transition">
            <a 
              href="https://dsanz.me/dsanz/Hola-Soy-David-Sanz-19dc0bb1a603818fb4c6da8f645b9dc7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block h-full"
            >
              <div className="aspect-video w-full overflow-hidden flex items-center justify-center bg-secondary/20">
                <SquareUserRound size={120} className="text-primary/70" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">👋 Hola! Soy David Sanz</CardTitle>
                <CardDescription>Mi historia, mi camino profesional</CardDescription>
              </CardHeader>
            </a>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProjectTabs;

