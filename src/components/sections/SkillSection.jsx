import SkillDetail from '../SkillDetail';
import SkillIcon from '../icons/SkillIcon';
import SectionTitle from './SectionTitle';
import { useEffect, useState } from 'react';
import { skillData } from '../../datas/SkillDatas';

const SkillSection = ({className}) => {
  const [skills, setSkills] = useState([]);
  const [showAll, setShowAll] = useState(false);
  
  useEffect(() => {
    setSkills(
      skillData.sort((a, b) => {
        if (a.progress === b.progress) {
          return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
        } else {
          return (a.progress < b.progress) ? 1 : -1;
        }
      })
    );
  }, [skillData]);
  
  return (
    <div id='skill' className={`${className} min-h-screen py-8`}>
      <SectionTitle title="Skills">
        <SkillIcon className='w-12 h-12 text-primary'/>
      </SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 p-8'>
        {skills.slice(0, (showAll ? undefined : 12)).map((skill, index) => <SkillDetail key={index} skill={skill} />)}
      </div>
      <div className='flex justify-center'>
        <button className='px-4 py-2 rounded-md bg-primary text-white' onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  );
};

export default SkillSection;