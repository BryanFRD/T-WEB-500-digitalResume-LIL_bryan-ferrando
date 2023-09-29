const EducationDetail = ({education}) => {
  return (
    <div className='grid grid-cols-3'>
      <div className='relative overflow-hidden w-full'>
        <hr className='rotate-90 border-slate-600 border-[1px] w-full absolute left-1/4'/>
        <div className='absolute right-[calc(25%-0.5rem)] top-6 flex items-center gap-4'>
          <div className='flex flex-col gap-2 absolute right-8'>
            {education.year.map((year, index) => <span key={index} className='text-lg'>{year}</span>)}
          </div>
          <div className='w-4 h-4 rounded-full bg-primary'></div>
        </div>
      </div>
      <div className='flex gap-2 flex-col col-span-2 py-4'>
        <h3 className='text-4xl font-semibold'>{education.name}</h3>
        <span className='text-lg'>{education.place}</span>
      </div>
    </div>
  );
};

export default EducationDetail;