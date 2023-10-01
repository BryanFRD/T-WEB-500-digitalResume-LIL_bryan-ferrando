const EducationDetail = ({education}) => {
  return (
    <div className='grid grid-cols-3'>
      <div className='hidden md:block relative md:overflow-hidden h-full w-full'>
        <hr className='rotate-90 mt-16 md:mt-0 border-slate-600 border-[1px] w-full absolute left-1/4'/>
        <div className='w-min flex absolute right-[calc(25%-0.5rem)] top-6 items-center gap-4'>
          <div className='flex flex-col gap-2 absolute right-8'>
            {education.year.map((year, index) => <span key={index} className='text-lg'>{year}</span>)}
          </div>
          <div className='w-4 h-4 rounded-full bg-primary'></div>
        </div>
      </div>
      <div className='flex gap-2 flex-col mx-auto md:mx-0 col-span-3 md:col-span-2 py-4'>
        <h3 className='mx-auto md:mx-0 text-4xl font-semibold'>{education.name}</h3>
        <div className='md:hidden mx-auto flex gap-4 text-slate-400'>
          {education.year.map((year, index) => <span key={index} className='text-lg'>{year}</span>)}
        </div>
        <span className='text-xl text-center md:text-left'>{education.place}</span>
      </div>
    </div>
  );
};

export default EducationDetail;