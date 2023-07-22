
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';


function Contact() {
  const now = new Date();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_pgkqdmg', 'template_2pbrjmu', form.current, 'UJJBD0GlkKAn44Xm0')
      .then((result) => {
        console.log("Message Sent");
        
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact' className='p-[2rem] flex-col  mt-10 ml-10 mr-10 flex tm:py-0 sm:py-0 sm:mt-14 tm:flex-col gap-[80px] sm:gap-[20px] tm:gap-[20px] sm:flex-col'>
      <div >
      <blockquote className="font-[800] text-[1.7rem] text-[#1DD0FD;] mt-[100px] text-center ">
                        <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#1DD0FD;] relative inline-block">
                            <span className="relative text-[#fffffff0] dark:text-[#2E1342]">Contact Me</span>
                        </span>
                    </blockquote>
      </div>
      <div className='flex justify-center'>

        <form className='flex flex-col gap-4 tm:w-[88%] sm:w-[88%] lg:w-[88%] ' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className='border-2 p-4 rounded-[4px] bg-[#e4e1e1fa] dark:bg-[#222] h-[58px]'
            placeholder='Name'
            type="text"
            name="from_name"
            required />

          <label>Email</label>
          <input className='border-2 p-4 rounded-[4px]  bg-[#e4e1e1fa] dark:bg-[#222] h-[58px]'
            placeholder='Email'
            type="email"
            name="email_id"
            required />

          <label>Your Message</label>
          <textarea
            className='border-2 p-4 resize-none rounded-[4px] input bg-[#e4e1e1fa] dark:bg-[#222] h-[198px] '
            placeholder='Your message'
            type='text'
            name="message"
            required />

          <div className='flex justify-start mt-5 mb-8'>
            <button type='submit'
              className='px-[1.6em] py-[.8em] bg-[#1DD0FD] coursor-pointer rounded-[4px] flex justify-start items-center gap-1 border-[#fff] border-2 lg:text-[.8rem] sm:text-[.8rem] text-black font-[700] border-2'>Send</button>
          </div>
        </form>
      </div>

     \

    </div>
  );
}

export default Contact;