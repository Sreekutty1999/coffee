import React from 'react';
import{ FaFacebook,FaGoogle,FaInstagram,FaPhone,FaTelegram } from "react-icons/fa";
import { FaMapLocation } from 'react-icons/fa6';
import CreditCards from "../../assets/website/credit-cards.webp";
import { motion } from 'framer-motion';

const Footer = () => {
  return <div className='bg-gradient-to-r from-primary to-primary pt-12 pb-8 text-white'>
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* company details */}
        <motion.div 
        initial={{opacity:0,y:100}} 
        whileInView={{opacity:1,y:0}}
        viewport={{once:true,amount:0.5}}
        transition={{
          delay:0.2,
          duration:0.6,}}
          className='space-y-6'>
        <h1 className='text-3xl font-bold uppercase'>Yummy Coffee</h1>
        <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa enim explicabo at, ad possimus, porro consequuntur in, suscipit maxime sint sit illum. Soluta facilis nostrum aperiam in labore expedita distinctio!</p>
        <div>
          <p className='flex items-center gap-2'>
          <FaPhone/>
          +1 (123) 456-7890
          </p>
          <p className='flex items-center gap-2'>
            {" "}
            <FaMapLocation/>kaarivattom, Trivandrum
          </p>
        </div>
        </motion.div>
        {/* link */}
        <motion.div initial={{opacity:0,y:100}} 
        whileInView={{opacity:1,y:0}}
        viewport={{once:true,amount:0.5}}
        transition={{
          delay:0.4,
          duration:0.6,
        }}
          className="space-y-6">
          <h1 className='text-3xl font-bold'>Quick Links</h1>
          <div className='grid grid-cols-2 gap-3'>
            {/* 1st column section */}
            <div>
              <ul className='space-y-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            {/* 2nd column section */}
            <div>
              <ul className='space-y-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </motion.div>
        {/* follow */}
        <motion.div initial={{opacity:0,y:100}} 
        whileInView={{opacity:1,y:0}}
        viewport={{once:true,amount:0.5}}
        transition={{
          delay:0.6,
          duration:0.6,
        }}
        className='space-y-6'>
          <h1 className='text-3xl font-bold'>Follow Us</h1>
          <div className='flex items-center gap-3'>
            <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
            <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
            <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
            <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
          </div>
          <div>
            <h1 className='text-xl font-semibold mb-2'>Payment Methods</h1>
            <img src={CreditCards} alt="creditcards" className='w-[80%]'/>
          </div>
        </motion.div>
      </div>
      <p className='text-white text-center mt-8 pt-border-t-2'>Copyright &copy; 2024 Coffee bucks. All rights are reserved.</p>
    </div>
  </div>
  
};

export default Footer