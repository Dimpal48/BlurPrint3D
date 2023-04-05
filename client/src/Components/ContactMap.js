import React from 'react'

function ContactMap() {
  return (
    <div className='w-full shadow-lg rounded-lg'>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.396201243764!2d76.99529511451772!3d28.407299500991023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d5ab5c439e1%3A0xdee55a2c01e31695!2sDLF%20Corporate%20Greens!5e0!3m2!1sen!2sin!4v1677688252363!5m2!1sen!2sin"
       className='md:w-[500px] md:h-600  lg:w-[620px] w-full border-0 -z-10  rounded-lg  left-0 top-0 rounded-lg'
       allowfullscreen=""
       loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >

      </iframe>
    </div>
  )
}

export default ContactMap
