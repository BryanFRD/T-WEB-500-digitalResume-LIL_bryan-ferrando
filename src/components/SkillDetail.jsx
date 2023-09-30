import { useEffect, useState } from 'react';

const SkillDetail = ({skill}) => {
  const [color, setColor] = useState();
  
  useEffect(() => {
    setColor((skill.progress >= 4 ? 'bg-green-600' : (skill.progress > 2 ? 'bg-yellow-600' : 'bg-red-600')));
  }, [skill]);
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto items-center w-full'>
      <div className='flex items-center gap-4 md:col-span-2 mx-auto'>
        {skill.img &&
          <img className='w-8 h-8 md:w-12 md:h-12' src={skill.img} alt={`${skill.name} image`} />
        }
        <h3 className='text-2xl md:text-3xl'>{skill.name}</h3>
      </div>
      <div class="rounded-full h-2.5 bg-gray-600 w-36 md:w-full mx-auto md:mx-0">
        <div class={`${color ?? 'bg-blue-600'} h-2.5 rounded-full`} style={{width: `${skill.progress*100/5}%`}}></div>
      </div>
    </div>
  );
};

export default SkillDetail;