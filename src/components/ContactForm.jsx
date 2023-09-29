const ContactForm = ({switchBg}) => {
  return (
    <form className='grid grid-cols-2 gap-8'>
      <div className='flex flex-col gap-2 col-span-2 md:col-span-1'>
        <label className='font-semibold' htmlFor="firstname">Firstname</label>
        <input id="firstname" className={`${switchBg ? 'bg-background' : 'bg-backgrounddark'} p-2`} type="text" name="firstname" required placeholder='John'/>
      </div>
      <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
        <label className='font-semibold' htmlFor="lastname">Lastname</label>
        <input id="lastname" className={`${switchBg ? 'bg-background' : 'bg-backgrounddark'} p-2`} type="text" name="lastname" required placeholder='Doe'/>
      </div>
      <div className='flex flex-col gap-2 col-span-2'>
        <label className='font-semibold' htmlFor="email">Email</label>
        <input id="email" className={`${switchBg ? 'bg-background' : 'bg-backgrounddark'} p-2`} type="text" name="email" required placeholder='JhonDoe@example.com'/>
      </div>
      <div className='flex flex-col gap-2 col-span-2'>
        <label className='font-semibold' htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4" className={`${switchBg ? 'bg-background' : 'bg-backgrounddark'} rounded-md p-2 resize-none`} required  placeholder='Your message'></textarea>
      </div>
      <button className='col-span-2 ms-auto w-min py-3 px-8 bg-green-600 font-semibold' type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;