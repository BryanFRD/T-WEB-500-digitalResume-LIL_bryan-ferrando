import EducationDetail from '../EducationDetail';
import EducationIcon from '../icons/EducationIcon';
import SectionTitle from './SectionTitle';

const educations = [
  {
    name: 'MSc Pro',
    place: 'Epitech, Lille',
    year: ['2023', '2024']
  },
  {
    name: 'DWWM',
    place: 'AFPA, Cambrai',
    year: ['2022', '2023']
  },
  {
    name: 'DAEU',
    place: 'Université Polytechnique Hauts-de-France, Cambrai',
    year: ['2020', '2022']
  }
]

const EducationSection = ({className}) => {
  return (
    <div id='education' className={`${className} min-h-screen py-8`}>
      <SectionTitle title='Educations'>  
        <EducationIcon className='hidden md:block w-12 h-12 text-primary'/>
      </SectionTitle>
      <div>
        {educations.map((education, index) => <EducationDetail key={index} education={education}/>)}
      </div>
    </div>
  );
};

export default EducationSection;