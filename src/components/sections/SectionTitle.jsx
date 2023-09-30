const SectionTitle = ({children, title}) => {
  return (
    <div className='ps-2 md:px-8 py-16 w-full flex justify-center text-center'>
        <div className='flex items-center gap-4 border-b-4 rounded w-min md:p-4 border-primary'>
          {children}
          <h2 className='text-4xl md:text-5xl'>{title}</h2>
        </div>
      </div>
  );
};

export default SectionTitle;