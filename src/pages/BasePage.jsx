import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const BasePage = () => {
  return (
    <div>
      <Header />
      <main className=''>
        <Outlet />
      </main>
      <Footer />
      <Toaster 
        position='bottom-right' 
        containerClassName='z-40' 
        toastOptions={
          {className: `bg-backgroundsec text-white font-semibold`}
        }
      />
    </div>
  );
};

export default BasePage;