import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const AboutMeSection = () => {
  return (
    <div id='aboutme' className='min-h-screen grid md:grid-cols-3 items-center'>
      <div className='px-0 md:px-12 md:col-span-2'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-4xl md:text-5xl font-semibold text-primary text-center md:text-left'>FERRANDO Bryan</h2>
          <h2 className='text-2xl md:text-3xl font-semibold text-center md:text-left'>
            Fullstack Developper<br/>
            Student at <span className='text-primary'>Epitech</span></h2>
        </div>
      </div>
      <div className='md:self-end justify-self-end m-8'>
        <div className='flex gap-8'>
          <Link to="https://github.com/BryanFRD">
            <SocialIcon network='github' />
          </Link>
          <Link to="https://www.linkedin.com/in/bryan-ferrando/">
            <SocialIcon network='linkedin' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;