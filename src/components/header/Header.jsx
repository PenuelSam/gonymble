import React from 'react'
import image from '../../assets/logo2.png'
const Header = () => {
  return (
    <div className='header'>
      <div className="container flex relative top-[30%] lg:top-[40%]  justify-between items-center">
            <div>
            <h1 className='text-white w-fit leading-[1.7] font-bold text-[3rem] lg:text-[4rem] md:text-[2rem] pr-[20px] xsm:text-[1.5rem] ml-0 lg:ml-[15px]'>Gonymble – simple, efficient, and dependable delivery for your customers.</h1>
            <div className='mt-[15px] ml-0 lg:ml-[15px]'>
              <input type="text" placeholder='Track your package' className='p-[5px] px-[15px] outline-none border-none lg:p-[10px] lg:px-[20px] md:p-[5px] md:px-[15px] xsm:px-[8px]  text-[18px] lg:text-[30px] md:text-[20px]  input' />
              <button className='text-white p-[5px] px-[10px] lg:p-[10px] md:p-[5px] xsm:px-[8px] md:px-[15px] text-[18px] lg:text-[30px] md:text-[20px] btn'>Track</button>
            </div>
            </div>

          <div className='w-full flex lg:hidden'>
            <img src={image} alt="" className='' />
          </div>
      </div>
    </div>
  )
}

export default Header