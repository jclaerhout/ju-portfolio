import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CertificationsCarousel from '@/components/CertificationsCarousel';
import CareerTimeline from '@/components/CareerTimeline';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-secondary via-white to-secondary text-textDark min-h-screen">
      <HeroSection />
      <AboutSection />
      <CertificationsCarousel />
      <CareerTimeline />
      <ProjectsSection />
      <Footer />
    </main>
  );
}