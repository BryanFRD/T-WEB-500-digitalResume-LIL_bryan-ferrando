import ContactIcon from './icons/ContactIcon';
import Navbar from './nav/Navbar';
import NavbarLink from './nav/NavbarLink';

const Header = () => {
  return (
    <header className='text-zinc-200 p-4 bg-slate-800 zinc-200 flex gap-2 justify-center md:grid md:grid-cols-12 font-semibold absolute bottom-0 md:relative w-full'>
      <h1 className='text-xl col-span-3 hidden md:block'>FERRANDO Bryan</h1>
      <Navbar />
      <div className='md:ms-auto md:col-span-3'>
        <NavbarLink to="#contact" icon={<ContactIcon />}>Contact</NavbarLink>
      </div>
    </header>
  );
};

export default Header;