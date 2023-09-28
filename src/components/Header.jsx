import Navbar from './nav/Navbar';

const Header = () => {
  return (
    <header className='text-zinc-200 p-4 bg-slate-800 zinc-200 flex gap-6 justify-around md:grid md:grid-cols-12 font-semibold absolute bottom-0 md:relative w-full'>
      <h1 className='text-xl col-span-3 hidden md:block'>FERRANDO&nbsp;Bryan</h1>
      <Navbar />
    </header>
  );
};

export default Header;