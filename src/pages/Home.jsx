import React from 'react'
import { ShoppingCart, Search, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import heroImage from '../assets/Naturelle.png'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  return (
    <div>
        <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 md:flex-row mb-10">
            <motion.div className="flex-1"
              initial={{opacity: 0, x:-50}}
              animate={{opacity:1, x:0}}
              transition={{duration: 0.8}}
              >
  
                <h2 className='font-bold mb-5 md:text-2xl lg:text-3xl'>Beauty & Skincare</h2>
                <h1 className='font-extrabold mb-5 md:text-2xl lg:text-5xl text-green-700'>Elevate Your Everyday Beauty</h1>
                <p className='text-gray-500'>Discover skincare and beauty essentials thoughtfully selected to bring confidence, care, and elegance to your everyday routine.</p>
                 <motion.button 
                 onClick={() => navigate('/products')}
                 className="flex items-center gap-2  bg-green-700 p-2 text-white mt-5 cursor-pointer hover:bg-green-800"
                 whileHover={{scale: 1.05}}
                 whileTap={{scale: 0.95}}
                 >
                     Shop Now
                    <ArrowRight size={18} />
                 </motion.button>
            </motion.div>
            
            <div className="flex-1">
               <motion.img 
               src={heroImage} 
               alt="Skincare products" 
               className='w-3xl h-120  '
               initial={{opacity: 0, x: 50}}
               animate={{opacity:1, x: 0}}
               transition={{duration:0.8}}
               />
            </div>
        </section>
    </div>
  )
}

export default Home