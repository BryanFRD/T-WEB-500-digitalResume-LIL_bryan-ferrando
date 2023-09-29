import EducationDetail from '../EducationDetail';
import EducationIcon from '../icons/EducationIcon';
import SectionTitle from './SectionTitle';

const educations = [
  {
    name: 'MSc Pro',
    place: 'Epitech, Lille',
    year: '2023 - 2026'
  },
  {
    name: 'DWWM',
    place: 'AFPA, Cambrai',
    year: '2022 - 2023'
  },
  {
    name: 'DAEU',
    place: 'Université Polytechnique Hauts-de-France, Cambrai',
    year: '2020 - 2022'
  }
]

const EducationSection = () => {
  return (
    <div id='education' className='min-h-screen'>
      <SectionTitle title='Educations'>  
        <EducationIcon className='w-12 h-12 text-primary'/>
      </SectionTitle>
      <div>
        {educations.map(education => <EducationDetail education={education}/>)}
      </div>
    </div>
  );
};

export default EducationSection;