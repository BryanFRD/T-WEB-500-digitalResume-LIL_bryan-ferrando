import { useEffect, useState } from 'react';

const SkillDetail = ({skill}) => {
  const [color, setColor] = useState();
  
  useEffect(() => {
    setColor((skill.progress >= 4 ? 'green' : (skill.progress > 2 ? 'yellow' : 'red')));
  }, [skill]);
  // My progress bar doesn't apply my tailwind classes, I don't know why
  return (
    <div className='grid grid-cols-3 gap-4 mx-auto items-center'>
      <div className='flex items-center gap-4 col-span-2'>
        {skill.img &&
          <img className='w-12 h-12' src={skill.img} alt={`${skill.name} image`} />
        }
        <h3 className='text-3xl'>{skill.name}</h3>
      </div>
      <progress className={`h-min rounded-md [&::-webkit-progress-bar]:bg-${color}-500 [&::-moz-progress-bar]:bg-${color}-500`} max={5} value={skill.progress} />
    </div>
  );
};

export default SkillDetail;