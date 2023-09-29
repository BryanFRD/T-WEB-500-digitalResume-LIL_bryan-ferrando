import ContactForm from '../ContactForm';
import ContactIcon from '../icons/ContactIcon';
import SectionTitle from './SectionTitle';

const ContactSection = ({className}) => {
  return (
    <div id='contact' className={`${className} min-h-screen py-8`}>
      <SectionTitle title='Contact'>
        <ContactIcon className='w-12 h-12 text-primary'/>
      </SectionTitle>
      <div className='px-24'>
        <ContactForm switchBg={className}/>
      </div>
    </div>
  );
};

export default ContactSection;