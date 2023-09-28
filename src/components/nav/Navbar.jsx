import AboutMeIcon from '../icons/AboutMeIcon';
import EducationIcon from '../icons/EducationIcon';
import ExperienceIcon from '../icons/ExperienceIcon';
import HomeIcon from '../icons/HomeIcon';
import ProjectIcon from '../icons/ProjectIcon';
import SkillIcon from '../icons/SkillIcon';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <nav className='md:col-span-6 flex justify-center gap-6s'>
        <ul className='flex gap-2 md:gap-6'>
          <li><NavbarLink to="/" icon={<HomeIcon />}>Home</NavbarLink></li>
          <li><NavbarLink to="#about" icon={<AboutMeIcon />}>About Me</NavbarLink></li>
          <li><NavbarLink to="#projects" icon={<ProjectIcon />}>Project</NavbarLink></li>
          <li><NavbarLink to="#skills" icon={<SkillIcon />}>Skills</NavbarLink></li>
          <li><NavbarLink to="#experiences" icon={<ExperienceIcon />}>Experiences</NavbarLink></li>
          <li><NavbarLink to="#educations" icon={<EducationIcon />}>Educations</NavbarLink></li>
        </ul>
      </nav>
  );
};

export default Navbar;