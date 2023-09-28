import AboutMeSection from '../components/sections/AboutMeSection';
import EducationSection from '../components/sections/EducationSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectSection from '../components/sections/ProjectSection';
import SkillSection from '../components/sections/SkillSection';

const HomePage = () => {
  return (
    <div>
      <AboutMeSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
};

export default HomePage;