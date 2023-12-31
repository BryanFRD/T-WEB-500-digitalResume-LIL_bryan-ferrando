import AboutMeIcon from '../icons/AboutMeIcon';
import ContactIcon from '../icons/ContactIcon';
import EducationIcon from '../icons/EducationIcon';
import ExperienceIcon from '../icons/ExperienceIcon';
import HomeIcon from '../icons/HomeIcon';
import ProjectIcon from '../icons/ProjectIcon';
import SkillIcon from '../icons/SkillIcon';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <nav className='md:col-span-8 flex justify-center items-center w-full'>
      <ul className='flex justify-around md:justify-normal gap-8 md:gap-4 px-4'>
        <li><NavbarLink to="/" icon={<HomeIcon />}>Home</NavbarLink></li>
        <li><NavbarLink to="#aboutme" icon={<AboutMeIcon />}>About&nbsp;Me</NavbarLink></li>
        <li><NavbarLink to="#project" icon={<ProjectIcon />}>Projects</NavbarLink></li>
        <li><NavbarLink to="#skill" icon={<SkillIcon />}>Skills</NavbarLink></li>
        {/* NO EXPERIENCES YET
        <li><NavbarLink to="#experiences" icon={<ExperienceIcon />}>Experiences</NavbarLink></li>
        */}
        <li><NavbarLink to="#education" icon={<EducationIcon />}>Educations</NavbarLink></li>
        <NavbarLink to="#contact" icon={<ContactIcon />}>Contact</NavbarLink>
      </ul>
    </nav>
  );
};

export default Navbar;