import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className='p-2 pt-4 pb-24 flex gap-8 justify-center items-center bg-backgrounddark text-white font-semibold shadow-inner'>
      <div className=''>
        <span>
          Ferrando Bryan
        </span>
      </div>
      <div className='flex gap-6'>
        <Link to="https://github.com/BryanFRD">
          <SocialIcon network='github' />
        </Link>
        <Link to="https://www.linkedin.com/in/bryan-ferrando/">
          <SocialIcon network='linkedin' />
        </Link>
      </div>
    </div>
  );
};

export default Footer;