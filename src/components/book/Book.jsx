import React from 'react'
import './book.css'
import apple from '../../assets/apple.png'
import google from '../../assets/googleplay.png'
import group from '../../assets/Group.png'
const Book = () => {
  return (
    <div className="book mt-[20px]">
        <div className='container booking'>
      <div className="book-l">
        <div className='book-content'>
            <h1>Book your package delivery in seconds</h1>
            <span></span>
        </div>
        <p>Choose your pickup & dropoff location and select a logistics company. We will take care of the rest</p>
        <div className="book-image">
            <div className="image-1">
            <img src={apple} alt="" />
            </div>
            <div className="image-2">
            <img src={google} alt="" />
            </div>
        </div>
      </div>
      <div className="book-r">
        <img src={group} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Book
