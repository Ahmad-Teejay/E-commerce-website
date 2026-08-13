import React, { useState } from 'react'
import { MapPin,Mail,Clock,PhoneCall } from 'lucide-react'
function Contact() {
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
 
    const handleChange = (e) => {
      setFormData({
     ... formData,
     [e.target.name]: [e.target.value]
    })
     setErrors({
        ...errors,
        [e.target.name]: "",
     })
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleSubmit = (e) => {
        e.preventDefault()
       const  newError = {}

       if(!formData.name){
        newError.name = "Name required"
       }
       if(!formData.email){
        newError.email = "Email required"
       } else if (!emailPattern.test(formData.email)){
          newError.email = "Enter a valid email address"
       }
       if(!formData.subject){
        newError.subject = "Add subject"
       }
       if(!formData.message){
        newError.message = "Add a message"
       }
       if(Object.keys(newError). length > 0){
           setErrors(newError)
           return
       }
       console.log("Form is valid");
       
    }
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
        <hgroup className='text-center mb-3'>
        <h2 className='text-2xl text-green-700 font-bold'>GET IN TOUCH</h2>
        <p className='text-gray-700'>We'd love to hear from you. We're here to help.</p>
        </hgroup>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div className='bg-gray-100 p-5 shadow-lg'>
        <div>
        <h3 className='text-2xl font-bold text-green-700 mb-5 text-center'>CONTACT INFORMATION</h3>
        <p className='text-gray-700'>Have a question about product, your order, or your skincare routine? we're here.</p>
        <div className='p-5'>
        <h4 className=' flex gap-3 text-gray-700 font-black'>
        <MapPin size={18}
        className='text-green-700 '
        />
            Visit Us
        </h4>
        <p>Yola, Adamawa State, Nigeria</p>
    </div>

   <div className='p-5'>
    <h4
     className=' flex gap-3 text-gray-700 font-black'>
        <PhoneCall size={18} 
        className='text-green-700 '
        />
        Call Us</h4>
    <a href="tel:+2348000000000">
      +234 800 000 0000
    </a>
  </div>

    <div className='p-5'>
        <h4 
        className=' flex gap-3 text-gray-700 font-black'>
        <Mail size={18}
        className='text-green-700 '
        />
        Email Us</h4>
        <a href="mailto:hello@naturelle.com">
        hello@naturelle.com
        </a>
    </div>

    <div className='p-5'>
        <h4
        className=' flex gap-3 text-gray-700 font-black'>
        <Clock size={18}
        className='text-green-700 '/>
            Opening Hours
        </h4>
        <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
        </div>
    </div>
            </div>
        <form
        onSubmit={handleSubmit}
         className='bg-white'
         >
            <h2 className='text-2xl font-bold text-green-700 mb-5 text-center'>SEND US A MESSAGE</h2>
         <div className='mb-5'>
            <label
            className='font-bold mb-3'
            htmlFor="name">Name</label>
            <input
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your full name'
            className='py-3 px-4 w-full bg-gray-100 rounded-lg shadow-lg outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
            type="text"
             />
             {errors.name && <p
             className='text-red-500'
             >{errors.name}</p> }

         </div>
         <div className='mb-5'>
            <label
            className='font-bold mb-3'
             htmlFor="email">Email</label>
            <input
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className='py-3 px-4 w-full bg-gray-100 rounded-lg shadow-lg outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
             type="email"
             />
             {errors.email && <p
             className='text-red-500'
             >{errors.email}</p> }

         </div>
         <div className='mb-5'>
            <label
            className='font-bold mb-3'
            htmlFor="subject">Subject</label>
            <input
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='Add your subject'
            className='py-3 px-4 w-full bg-gray-100 rounded-lg shadow-lg outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
            type="text" />
            {errors.subject && <p
            className='text-red-500'
            >{errors.subject}</p> }
         </div>
         <div>
            <label
            className='font-bold mb-3'
            htmlFor="message">Message</label>
            <textarea 
            onChange={handleChange}
            className="w-full min-h-40 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            name="message"
            ></textarea>
            {errors.message && <p
             className='  text-red-500'
             >{errors.message}</p> }
         </div>
         <button
         className='py-3 px-4 bg-green-700 rounded-md shadow-lg mb-4 mt-5 w-full text-white cursor-pointer hover:bg-green-800'
         type='submit'>Send Message</button>
        </form>
        </div>
    </div>
  )
}

export default Contact