import EducationIcon from '../icons/EducationIcon';

const EducationSection = () => {
  return (
    <div className='min-h-screen'>
      <div className='px-8 py-16'>
        <div className='flex items-center gap-4 border-b-4 rounded w-min p-4 border-primary'>
          <EducationIcon className='w-12 h-12 text-primary'/>
          <h2 className='text-5xl'>Educations:</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EducationSection;