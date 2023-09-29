const SectionTitle = ({children, title}) => {
  return (
    <div className='px-8 py-16'>
        <div className='flex items-center gap-4 border-b-4 rounded w-min p-4 border-primary'>
          {children}
          <h2 className='text-5xl'>{title}</h2>
        </div>
      </div>
  );
};

export default SectionTitle;