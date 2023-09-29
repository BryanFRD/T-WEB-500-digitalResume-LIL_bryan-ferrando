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
      <ProjectSection className={'bg-backgrounddark'} />
      <SkillSection className={''} />
      {/* NO EXPERIENCES YET
      <ExperienceSection /> 
      */}
      <EducationSection className={'bg-backgrounddark'} />
      <ContactSection className={''}/>
    </div>
  );
};

export default HomePage;