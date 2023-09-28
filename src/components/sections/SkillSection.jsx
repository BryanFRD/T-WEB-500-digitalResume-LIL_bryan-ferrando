import SkillIcon from '../icons/SkillIcon';

const SkillSection = () => {
  return (
    <div className='min-h-screen'>
      <div className='px-8 py-16'>
        <div className='flex items-center gap-4 border-b-4 rounded w-min p-4 border-primary'>
          <SkillIcon className='w-12 h-12 text-primary'/>
          <h2 className='text-5xl'>Skills:</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SkillSection;