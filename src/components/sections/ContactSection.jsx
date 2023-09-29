import ContactIcon from '../icons/ContactIcon';
import SectionTitle from './SectionTitle';

const ContactSection = () => {
  return (
    <div id='contact' className='min-h-screen'>
      <SectionTitle title='Contact'>  
        <ContactIcon className='w-12 h-12 text-primary'/>
      </SectionTitle>
      <div>
        <form action="">
          <div>
            <label htmlFor="">Firstname</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;