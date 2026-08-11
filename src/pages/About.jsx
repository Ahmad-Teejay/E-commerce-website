import React from 'react'
import image from '../assets/cus.jpg'
import { motion } from "motion/react";
import { ShoppingCart, Search, ArrowRight } from "lucide-react";
function About() {
  return (
    <section className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center p-6 md:p-10">
          <motion.img 
          src={image} 
          alt="about-image" 
          className="h-130 md:h-160  w-full object-cover p-10 rounded-full"
          initial={{opacity: 0, x: 50}}
          animate={{opacity:1, x: 0}}
          transition={{duration:0.8}}
          />
        </div>
        <motion.div
        className="flex flex-col justify-center p-8 md:p-12"
        initial={{opacity: 0, x:-50}}
        animate={{opacity:1, x:0}}
        transition={{duration: 0.8}}
        >
        <p className='mb-4 '>ABOUT NATURÈLLE</p>
        <h2 className='mb-3 text-3xl font-bold text-green-700'>Beauty, Naturally Yours.</h2>
        <p>At Naturèlle Beauty, we believe beauty should feel simple, personal, and effortless. We bring together carefully selected skincare, makeup, haircare, and fragrance products to help you create a routine that feels uniquely yours.</p>
        <p>From everyday essentials to something special, we're here to make discovering your next beauty favorite an enjoyable experience.</p>
        <div>
          <button className='flex gap-2 items-center mt-4 p-2 bg-green-700 text-white cursor-pointer hover:bg-green-800'>
          Discover Our Story
         <ArrowRight size={18}/>
        </button>
        </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About