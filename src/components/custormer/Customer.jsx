import React from 'react'

const Customer = () => {
  return (
    <div className='w-[600px] md:w-[100vw] md:h-[70%] lg:h-[600px] h-[500px]  bg-black/70'>
       <h1 className='text-[30px] text-green-500 font-normal pt-[30px] pl-[10px] '>Contact Us</h1>
       <div className='w-full h-[1px] bg-white'></div>
       <form className='flex flex-col justify-center items-center h-full '>
        <div className='flex items-center md:flex-col md:items-start justify-between gap-[20px] py-[10px] mr-[20%] ml-[10%]'>
          <label className='font-normal text-slate-200 lg:text-[25px] md:text-[20px]'>Name:</label>
          <input type="text" placeholder='Name' className='ml-[60px] md:ml-0 text-white bg-transparent border py-[5px] px-[10px] outline-none' />
        </div>
        <div className='flex items-center md:flex-col md:items-start justify-between gap-[20px] py-[10px]  mr-[20%] ml-[10%]'>
          <label className='font-normal text-slate-200 lg:text-[25px] md:text-[20px]'>Email:</label>
          <input type="email" placeholder='Email' className='ml-[70px] md:ml-0  text-white bg-transparent border py-[5px] px-[10px] outline-none' />
        </div>
        <div className='flex items-center md:flex-col md:items-start justify-between gap-[20px] py-[10px]  mr-[20%] ml-[10%]'>
          <label className='font-normal text-slate-200 lg:text-[25px] md:text-[20px]'>Phone Number:</label>
          <input type="number" placeholder='PhoneNumber' className='bg-transparent  text-white border py-[5px] px-[10px] outline-none' />
        </div>
        <div className='flex items-center md:flex-col md:items-start justify-between gap-[20px] py-[10px]  mr-[20%] ml-[10%]'>
          <label className='font-normal text-slate-200 lg:text-[25px] md:text-[20px]'>Message:</label>
          <textarea cols="25" placeholder='Message' className='overflow-hidden md:ml-0  text-white ml-[60px] bg-transparent border py-[5px] px-[10px] outline-none'></textarea>
        </div>
        <button className='btn-theme bgc m-[20px] md:ml-0 ml-[20%] text-white lg:text-[25px] md:text-[20px]'>Message</button>
       </form>
    </div>
  )
}

export default Customer