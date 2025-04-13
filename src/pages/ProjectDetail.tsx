
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProjects } from '@/data/projectsData';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(allProjects[0]);

  useEffect(() => {
    // Find the project by its title (URL-friendly version)
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
  }, [projectId, navigate]);

  // Go back to previous page
  const handleBack = () => {
    navigate(-1);
  };

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
            </div>

            <div className="rounded-2xl overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto" 
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="py-8">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p>
                  Este es un proyecto de ejemplo donde se mostraría toda la información detallada
                  del proyecto. En una implementación real, este contenido se cargaría desde una
                  base de datos o un CMS.
                </p>
              </div>

              <div className="py-8">
                <h2 className="text-2xl font-semibold mb-4">Proceso de Diseño</h2>
                <p>
                  Aquí se mostraría información sobre el proceso de diseño, metodologías utilizadas,
                  y decisiones tomadas durante el desarrollo del proyecto.
                </p>
              </div>

              <div className="py-8">
                <h2 className="text-2xl font-semibold mb-4">Resultados</h2>
                <p>
                  En esta sección se mostrarían los resultados del proyecto, métricas relevantes,
                  y el impacto que tuvo en el negocio o en los usuarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
