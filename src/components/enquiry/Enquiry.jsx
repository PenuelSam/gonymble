import React from 'react'
import { useDispatch } from 'react-redux'
import { setOpenModal } from '../../app/FormSlice'

const Enquiry = () => {
    const dispatch = useDispatch()

    const onOpenModal = () => {
        dispatch(setOpenModal({
            modalState : true
        }))
    }

  return (
    <div className='w-full bgc ' id='/contact'>
        <div className='container flex justify-between md:flex-col  py-[30px]'>
            <h1  className='text-white font-bold text-[2rem]  ml-0 lg:ml-[15px] md:text-[2rem] xsm:text-[1.5rem] '>For more enquiries about <br className='md:hidden' />our intracity services</h1>
            <div>
            <button onClick={onOpenModal} className='button-theme font-bold border-none outline-none  mr-0 lg:mr-[15px] md:ml-5 '>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Enquiry