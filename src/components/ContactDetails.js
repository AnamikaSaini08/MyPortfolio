import React from 'react'

const ContactDetails = () => {
  return (
    <div className='flex mt-20 h-screen'>
      <div className='w-1/2'>
      <img className='rounded-lg shadow-lg '
      src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?b=1&s=170667a&w=0&k=20&c=2sJEN1Hhg6heUi1ZxKs6pJDwcyLYXPc4pUGd3hEjOjE="/>
      </div>
      <div className='ml-36 '>
        <h1 className='text-center text-slate-800 text-3xl text-bold'>Address</h1>
        <p className='text-xl text-gray-800 text-bold mb-7'>Prayagraj, Uttar Pradesh, India</p>
        <h1 className='text-center text-slate-800 text-3xl text-bold'>Email</h1>
        <p className='text-xl text-gray-800 text-bold mb-7'>anamika08saini08@gmail.com</p>
        <h1 className='text-center text-slate-800 text-3xl text-bold'>Contact Number</h1>
        <p className='text-center text-xl text-gray-800 text-bold'>+91-6388031881</p>
      </div>
    </div>
  )
}

export default ContactDetails
