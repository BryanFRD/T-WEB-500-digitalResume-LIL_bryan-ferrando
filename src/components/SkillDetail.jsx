const SkillDetail = ({skill}) => {
  return (
    <div className='grid grid-cols-3 gap-4 mx-auto items-center'>
      <div className='flex items-center gap-4 col-span-2'>
        {skill.img &&
          <img className='w-12 h-12' src={skill.img} alt={`${skill.name} image`} />
        }
        <h3 className='text-3xl'>{skill.name}</h3>
      </div>
      <progress className='h-min' max={5} value={skill.progress}/>
    </div>
  );
};

export default SkillDetail;