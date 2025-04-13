
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProjects, Project } from '@/data/projectsData';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowLeft, Globe, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project by its slug (URL-friendly version of title)
    const foundProject = allProjects.find(
      p => p.title.toLowerCase().replace(/\s+/g, '-') === projectId
    );
    
    if (foundProject) {
      setProject(foundProject);
      // Set page title
      document.title = `${foundProject.title} | David Sanz Portfolio`;
    } else {
      // Redirect to 404 if project not found
      navigate('/not-found', { replace: true });
    }
    setLoading(false);
  }, [projectId, navigate]);

  // Go back to previous page
  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <NavBar />
        <main className="flex-grow pt-24">
          <div className="container max-w-4xl py-12">
            <div className="animate-pulse space-y-8">
              <div className="h-10 w-40 bg-muted rounded"></div>
              <div className="h-16 w-3/4 bg-muted rounded"></div>
              <div className="h-80 bg-muted rounded-2xl"></div>
              <div className="space-y-4">
                <div className="h-8 w-1/2 bg-muted rounded"></div>
                <div className="h-24 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavBar />
      <main className="flex-grow pt-24">
        <div className="container max-w-4xl py-12">
          <Button 
            onClick={handleBack} 
            variant="outline" 
            className="mb-8 hover:bg-primary/5"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver
          </Button>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
              {project.description && (
                <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
              )}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  <Globe size={14} className="mr-1" />
                  Ver proyecto original
                </a>
              )}
            </div>

            <div className="rounded-2xl overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto" 
              />
            </div>

            {project.content && (
              <div className="prose prose-lg max-w-none">
                {project.content.overview && (
                  <div className="py-6 border-b">
                    <h2 className="text-2xl font-semibold mb-4">Resumen del proyecto</h2>
                    <p>{project.content.overview}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b">
                  {project.content.challenge && (
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-medium mb-3">El desafío</h3>
                        <p>{project.content.challenge}</p>
                      </CardContent>
                    </Card>
                  )}
                  
                  {project.content.solution && (
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-medium mb-3">La solución</h3>
                        <p>{project.content.solution}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
                
                {project.content.results && (
                  <div className="py-8 border-b">
                    <h2 className="text-2xl font-semibold mb-4">Resultados</h2>
                    <p>{project.content.results}</p>
                  </div>
                )}
                
                {project.content.technologies && project.content.technologies.length > 0 && (
                  <div className="py-8">
                    <h2 className="text-2xl font-semibold mb-4">Tecnologías utilizadas</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.content.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="px-3 py-1 bg-secondary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.content.images && project.content.images.length > 1 && (
                  <div className="py-8">
                    <h2 className="text-2xl font-semibold mb-6">Galería</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.content.images.map((img, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                          <img 
                            src={img} 
                            alt={`${project.title} - Imagen ${index + 1}`} 
                            className="w-full h-auto" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <Accordion type="single" collapsible className="mt-8">
                  <AccordionItem value="more-info">
                    <AccordionTrigger>Más información</AccordionTrigger>
                    <AccordionContent>
                      <p className="mt-2">
                        Este proyecto forma parte del portfolio de David Sanz, un diseñador UX/UI 
                        especializado en crear experiencias digitales centradas en el usuario. 
                        Para más información o para discutir posibles colaboraciones, no dudes en 
                        contactar a través de la sección de contacto.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
