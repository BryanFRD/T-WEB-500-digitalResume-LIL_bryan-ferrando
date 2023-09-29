import Navbar from './nav/Navbar';

const Header = () => {
  return (
    <header className='text-white p-4 bg-background flex gap-6 justify-around md:grid md:grid-cols-12 font-semibold absolute md:top-0 md:sticky bottom-0 w-full h-min shadow-lg z-50'>
      <h1 className='text-xl col-span-3 hidden md:block '>FERRANDO&nbsp;Bryan</h1>
      <Navbar />
    </header>
  );
};

export default Header;