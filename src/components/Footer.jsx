import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaWhatsapp,  } from 'react-icons/fa';
import { motion } from "motion/react";

const MotionInstagram = motion.create(FaInstagram);
const MotionTwitter = motion.create(FaTwitter);
const MotionTiktok = motion.create(FaTiktok);
const MotionFacebook = motion.create(FaFacebook);
const MotionWhatsapp = motion.create(FaWhatsapp);

 function Footer() {
    return (
        <footer className="bg-green-700 border-y">
            <div className="mx-auto w-full  p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-30"
                                alt="Logo"
                            /> 
                        </Link>
                            <p className='text-white font-serif font-bold'>Beauty that fits your everyday.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-20 sm:grid-cols-3  text-white">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Shop</h2>
                            <ul className="t text-white font-medium">
                                <li className="mb-4">
                                    <Link to="" className="hover:underline  text-white">
                                       Skincare
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="" className="hover:underline  text-white">
                                        Makeup
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="" className="hover:underline  text-white">
                                        Haircare
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="" className="hover:underline  text-white">
                                        Fragrance   
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase  text-white">Company</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4  text-white">

                                     <Link to="/about" className="hover:underline  text-white">
                                       About Us
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link to="/" className="hover:underline  text-white">
                                        Our Story
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                 <Link to="/" className="hover:underline  text-white">
                                       Carrers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  text-white uppercase">Support</h2>
                            <ul className=" text-white font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline  text-white">
                                        Contact
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link to="#" className="hover:underline  text-white">
                                        FAQ
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link to="#" className='hover:underline text-white'>
                                      Shipping
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link to="#" className='hover:underline text-white
                                    '>
                                       Returns
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 ">
                    <MotionInstagram
                    size={22} 
                    className='text-white cursor-pointer '
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    />
                    <MotionFacebook
                    size={22} 
                    className='text-white cursor-pointer '
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                     />
                    <MotionTiktok
                    size={22}
                    className='text-white cursor-pointer '
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                     />
                    <MotionTwitter
                    size={22}
                    className='text-white cursor-pointer '
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                     />
                     <MotionWhatsapp
                     size={22}
                     className='text-white cursor-pointer '
                     whileHover={{scale: 1.05}}
                     whileTap={{scale: 0.95}}
                     />
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm  text-white sm:text-center ">
                        © 2026
    
                        <a href="https://hiteshchoudhary.com/" className="hover:underline ">
                            Naturallebeauty
                        </a>
                        . All Rights Reserved.
                    </span>
                    <ul>
                        <li>
                            <Link className='text-white hover:underline'>
                              Privacy | Terms
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer