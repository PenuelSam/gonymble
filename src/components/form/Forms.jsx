import Close from '@mui/icons-material/Close'
import React from 'react'
import Customer from '../custormer/Customer'

const Forms = ({onCloseModal}) => {
  return (
    <div className='relative'>
        <Close onClick={onCloseModal} fontSize='large' className='cursor-pointer top-5  absolute text-white right-0'/>
        <Customer />
    </div>
  )
}

export default Forms