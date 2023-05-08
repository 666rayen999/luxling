import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value })
  const handleSubmit = (event) => {
    event.preventDefault()
    // validate form fields and submit form data
  }
  return (
  <section id='contact' className='relative flex p-6 flex-col justify-center items-center mt-16 mb-8'>
    <div className='absolute -translate-y-1/1 sm:left-1/4 left-0 0 w-24 h-32 bg-[#64b] opacity-30 z-[1] sm:blur-[100vh] blur-[30vw]' />
    <div className='absolute translate-y-1/1 sm:right-1/4 right-0 w-24 h-32 bg-[#64b] opacity-30 z-[1] sm:blur-[100vh] blur-[30vw]' />
    <div className='flex sm:w-auto w-full flex-col items-center bg-item-gradient p-4 rounded-3xl z-[5]'>
      <h1 className='mb-4 text-white font-bold text-3xl'>Contact US</h1>
      <form className="contact-form flex sm:flex-row w-full flex-col sm:gap-8 gap-2" onSubmit={handleSubmit}>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className='px-3 py-2 rounded-2xl outline-none border-none sm:w-96 w-full h-48 resize-none bg-[#baf2] text-white'
          required
        />
        <div className='flex flex-col gap-2'>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className='px-3 py-2 rounded-2xl outline-none border-none bg-[#baf2] text-white'
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className='px-3 py-2 rounded-2xl outline-none border-none bg-[#baf2] text-white'
            required
          />
          <button type="submit" className='px-3 py-2 rounded-2xl outline-none border-none bg-[#bafa] text-white font-semibold'>Submit</button>
        </div>
      </form>
    </div>
  </section>
)}

export default Contact