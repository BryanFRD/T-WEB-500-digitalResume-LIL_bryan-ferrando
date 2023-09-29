import EducationIcon from '../icons/EducationIcon';
import SectionTitle from './SectionTitle';

const EducationSection = () => {
  return (
    <div className='min-h-screen'>
      <SectionTitle title='Educations'>  
        <EducationIcon className='w-12 h-12 text-primary'/>
      </SectionTitle>
      <div></div>
    </div>
  );
};

export default EducationSection;