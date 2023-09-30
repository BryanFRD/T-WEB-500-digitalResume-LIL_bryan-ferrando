import ExperienceIcon from '../icons/ExperienceIcon';
import SectionTitle from './SectionTitle';

const ExperienceSection = ({className}) => {
  return (
    <div id='experience' className={`${className} min-h-screen py-8`}>
      <SectionTitle title='Experiences'>  
        <ExperienceIcon className='hidden md:block w-12 h-12 text-primary'/>
      </SectionTitle>
      <div></div>
    </div>
  );
};

export default ExperienceSection;