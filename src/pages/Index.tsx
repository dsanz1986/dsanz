
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import PrinciplesSection from '@/components/PrinciplesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import useScrollReveal from '@/hooks/useScrollReveal';

const Index = () => {
  // Use the scroll reveal hook
  useScrollReveal();

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetEl = document.querySelector(href);
        if (!targetEl) return;
        
        window.scrollTo({
          top: targetEl.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {});
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AnnouncementBar />
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <PrinciplesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
