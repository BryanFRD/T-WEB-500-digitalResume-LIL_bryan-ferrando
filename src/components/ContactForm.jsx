import { useRef } from 'react';
import toast from 'react-hot-toast';

const ContactForm = ({switchBg}) => {
  const form = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.reset();
    toast.success('Message sent !');
  }
  
  return (
    <form ref={form} className='grid grid-cols-2 gap-8 container md:mx-auto' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-2 col-span-2 md:col-span-1'>
        <label className='font-semibold' htmlFor="firstname">Firstname</label>
        <input id="firstname" className={`${switchBg ? 'bg-background' : 'bg-backgrounddark'} p-2 rounded-md`} type="text" name="firstname" required placeholder='John'/>
      </div>
      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <label className='font-semibold' htmlFor="lastname">Lastname</label>
        <input id="lastname" className={`${switchBg ? 'bg-background' : 'bg-backgrounddark'} p-2 rounded-md`} type="text" name="lastname" required placeholder='Doe'/>
      </div>
      <div className='flex flex-col gap-2 col-span-2'>
        <label className='font-semibold' htmlFor="email">Email</label>
        <input id="email" className={`${switchBg ? 'bg-background' : 'bg-backgrounddark'} p-2 rounded-md`} type="email" name="email" required placeholder='JhonDoe@example.com'/>
      </div>
      <div className='flex flex-col gap-2 col-span-2'>
        <label className='font-semibold' htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4" className={`${switchBg ? 'bg-background' : 'bg-backgrounddark'} rounded-md p-2 resize-none`} required  placeholder='Your message'></textarea>
      </div>
      <button className='col-span-2 ms-auto w-min py-3 px-8 bg-green-600 font-semibold rounded-md' type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;