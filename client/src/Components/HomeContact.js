import React,{useRef} from 'react';
import ContactMap from "./ContactMap";
import emailjs from '@emailjs/browser';

function HomeContact() {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();
  // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 
  'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };
  
  return (
    <section className='mb-32 text-gray-800 text-center'>
      <div className='px-4 py-12 md:px-12'>
        <div className='container mx-auto xl:px-32'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-6 flex items-center '>
            <div className='md:mt-12 lg:mt-0 mb-12 lg:mb-0 '>
              <div className='block rounded-lg shadow-lg px-1 py-12 md:px-12 lg:-mr-14 sm:w-508 w-300 lg:w-[540px] md:w-[520px]
               bg-gradient-to-r from-green-300 via-green-100 to-green-200'
              >
                <h2 className='text-4xl mb-16 text-center justify-center font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-28 before:h-1 before:-bottom-2 before:md:left-48 before:left-20   before:bg-gradient-to-tr from-green-400 to-green-600 transition-all ease-in-out duration-100'>Contact us</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <div className='form-group mb-6 pr-6'>
                    <input
                      type="text"
                      className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
                      placeholder='Name'
                    />

                  </div>
                  <div className='form-group mb-6 pr-6'>
                    <input
                      type="email"
                      className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
                      placeholder='Email address'
                    />
                  </div>
                  <div className='form-group mb-6 pr-6'>
                    <textarea
                      type="email"
                      className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none'
                      placeholder='Message'
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="form-group form-check text-center mb-6">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 bg-gray-100 hover:bg-green-700 border-gray-300 rounded focus:ring-2 dark:bg-gray-700  mr-2 cursor-pointer"

                    
                    />
                    <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Send
                  </button>

                </form>
              </div>
            </div>
            <div className=''>

              <ContactMap  className="md:w-[500px] md:h-600  lg:w-[620px] w-full border-0 -z-10  rounded-lg  left-0 top-0 rounded-lg"/>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}

export default HomeContact
