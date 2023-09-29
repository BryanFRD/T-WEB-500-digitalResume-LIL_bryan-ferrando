const EducationDetail = ({education}) => {
  return (
    <div className='grid grid-cols-3'>
      <div className='relative overflow-hidden w-full'>
        <hr className='rotate-90 lg:rotate-0 border-slate-600 border-[1px]'/>
        <div className='w-4 h-4 rounded-full bg-primary absolute left-[calc(50%-0.5rem)] top-4'></div>
      </div>
      <div className='flex gap-2 flex-col col-span-2 py-4'>
        <h3 className='text-4xl font-semibold'>{education.name}</h3>
        <span className='text-lg text-slate-400'>{education.year}</span>
        <span className='text-lg'>{education.place}</span>
      </div>
    </div>
  );
};

export default EducationDetail;