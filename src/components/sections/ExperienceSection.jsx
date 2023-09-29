import ExperienceIcon from '../icons/ExperienceIcon';
import SectionTitle from './SectionTitle';

const ExperienceSection = () => {
  return (
    <div className='min-h-screen'>
      <SectionTitle title='Experiences'>  
        <ExperienceIcon className='w-12 h-12 text-primary'/>
      </SectionTitle>
      <div></div>
    </div>
  );
};

export default ExperienceSection;