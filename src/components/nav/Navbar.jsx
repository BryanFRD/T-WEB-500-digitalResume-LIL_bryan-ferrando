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
    <nav className='md:col-span-9 flex w-full'>
      <ul className='flex justify-around md:justify-normal gap-8 md:gap-4 w-full'>
        <li><NavbarLink to="/" icon={<HomeIcon />}>Home</NavbarLink></li>
        <li><NavbarLink to="#about" icon={<AboutMeIcon />}>About&nbsp;Me</NavbarLink></li>
        <li><NavbarLink to="#projects" icon={<ProjectIcon />}>Projects</NavbarLink></li>
        <li><NavbarLink to="#skills" icon={<SkillIcon />}>Skills</NavbarLink></li>
        {/* NO EXPERIENCES YET
        <li><NavbarLink to="#experiences" icon={<ExperienceIcon />}>Experiences</NavbarLink></li>
        */}
        <li><NavbarLink to="#educations" icon={<EducationIcon />}>Educations</NavbarLink></li>
        <NavbarLink className="md:ms-auto" to="#contact" icon={<ContactIcon />}>Contact</NavbarLink>
      </ul>
    </nav>
  );
};

export default Navbar;