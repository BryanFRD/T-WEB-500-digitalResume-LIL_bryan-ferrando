import AboutMeSection from '../components/sections/AboutMeSection';
import ContactSection from '../components/sections/ContactSection';
import EducationSection from '../components/sections/EducationSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectSection from '../components/sections/ProjectSection';
import SkillSection from '../components/sections/SkillSection';

const HomePage = () => {
  return (
    <div className='bg-background text-white'>
      <AboutMeSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;