import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CompareSection from './components/CompareSection';
import KindsSection from './components/KindsSection';
import ArchitectureSection from './components/ArchitectureSection';
import RoadmapSection from './components/RoadmapSection';
import ResourcesSection from './components/ResourcesSection';
import AuthorSection from './components/AuthorSection';
import Footer from './components/Footer';

function Divider() {
  return <div className="section-divider" />;
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <CompareSection />
        <Divider />
        <KindsSection />
        <Divider />
        <ArchitectureSection />
        <Divider />
        <RoadmapSection />
        <Divider />
        <ResourcesSection />
        <Divider />
        <AuthorSection />
      </main>
      <Footer />
    </>
  );
}