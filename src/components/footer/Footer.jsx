import React from 'react'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='w-full bg-black text-white'>
        <div className='container'>
        <div className='flex justify-between md:flex-col md:items-start  items-center'>
            <img src={logo} alt="" className='logo' />
        <div className='mt-[1em]'>
            <h1 className='text-[20px] pt-[20px]'>Our Company</h1>
            <div className='flex flex-col text-slate-200 mt-[15px]'>
                <span className='pb-[10px]'>About Us</span>
                <span className='pb-[10px]'>Blog</span>
                <span className='pb-[10px]'>API</span>
            </div>
        </div>
        <div className='mt-[4em] md:mt-0'>
            <h1 className='text-[20px] pt-[20px]'>Support</h1>
            <div className='flex flex-col text-slate-200 mt-[15px]'>
                <span className='pb-[10px]'>Help Center</span>
                <span className='pb-[10px]'>Privacy Policy</span>
                <span className='pb-[10px]'>Terms & Conditions</span>
                <span className='pb-[10px]'>FAQ's</span>
            </div>
        </div>
        </div>
        <div className='w-full h-[1px] bg-slate-200'></div>
        <div className='py-[20px] flex justify-center items-center'>
            <span>&copy; Gonymble.All rights reserved.</span>
        </div>
        </div>
    </div>
  )
}

export default Footer