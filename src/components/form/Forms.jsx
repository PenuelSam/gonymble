import Close from '@mui/icons-material/Close'
import React from 'react'
import Customer from '../custormer/Customer'

const Forms = ({onCloseModal}) => {
  return (
    <div className='relative'>
        <Close onClick={onCloseModal} className='cursor-pointer text-[20px] absolute text-white right-0'/>
        <Customer />
    </div>
  )
}

export default Forms