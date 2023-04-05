import React from 'react';
import ContactMap from "../ContactMap";
import { FaPhone,FaMailBulk } from "react-icons/fa";

function ContactMain() {
  return (
    <div>
      <div className='md:mt-12 lg:mt-0 mt-6 mb-8 md:mb-12 pb-32 lg:mb-0 '>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-3 md:gap-4'>
          <div className='block rounded-lg shadow-lg px-1 py-12 md:px-12 lg:-mr-14 sm:w-508 w-300 lg:w-[540px] md:w-[520px]
               bg-gradient-to-r'
          >
            <h2 className='text-5xl mb-12 text-center justify-center font-normal capitalize text-headingColor relative    transition-all ease-in-out duration-100'>Get in Touch</h2>
            <form >
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
                Send Message
              </button>

            </form>
          </div>



          <div className="items-center justify-start px-10 py-12">
            <div className="">
              <h3 className='capitalize text-3xl text-rose-400 font-semibold font-serif pb-5'>Connect with us</h3>

              <div className="flex flex-row gap-2 pb-3">
                <FaPhone className='text-slate-700 text-xl ' />
                <p className='text-slate-700  hover:text-rose-400 cursor-pointer'>
                  <a href="tel://123456789">+123 456 7890</a>
                </p>

              </div>


              <div className="flex flex-row gap-2 pb-3">
                <FaMailBulk className='text-slate-700 text-xl ' />             
                  <p className='text-slate-700  hover:text-rose-400 cursor-pointer'>
                    
                    <a href="mailto:info@yoursite.com">
                      caddman.3d@outlook.com
                    </a>
                  </p>
              </div>

              <div className="flex flex-col gap-3 pb-3">
                    <span className='text-xl font-sans text-slate-900'>Address:</span>
                    <p className='pr-20 text-slate-700'>DLF Corporate Greens Southern
                    Peripheral Rd, Sector 74A, Gurugram, Haryana 122004</p>
                  
                
              </div>


              <div className="dbox w-100 d-flex align-items-center">
                
                
                  <p className='flex flex-col gap-3 pb-3'>
                    <span className='text-xl font-sans text-slate-900'>Website:</span>
                    <a className='text-slate-700  hover:text-rose-400 cursor-pointer' href="/">BluePrint3D.com</a>
                  </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full shadow-lg rounded-lg'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.396201243764!2d76.99529511451772!3d28.407299500991023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d5ab5c439e1%3A0xdee55a2c01e31695!2sDLF%20Corporate%20Greens!5e0!3m2!1sen!2sin!4v1677688252363!5m2!1sen!2sin"
          className='md:w-[750px] md:h-600  lg:w-[1420px] w-full border-0 -z-10  rounded-lg  left-0 top-0 rounded-lg'
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >

        </iframe>
      </div>
    </div>

  )
}

export default ContactMain
