import React from 'react'
import './estimate.css'
import {BiCalendar, BiDownArrow} from 'react-icons/bi'
import {VscPackage} from 'react-icons/vsc'
import {SlLocationPin} from 'react-icons/sl'
import person from '../../assets/person.png'

const Estimate = () => {
  return (
    <div className='estimate-container'>
      <div className="container estimate">
        <div className="estimate-l">
            <div className="title">
                <h2>Calculate your price</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, labore recusandae! Architecto voluptatibus numquam maiores?</p>
            </div>
            <div className="l-image">
                <img src={person} alt="" />
            </div>
        </div>
        <div className="estimate-r">
            <div className="r-content">
                <div className="r-container">
                    <div className="r-booking">
                        <div className='r-booking-box'>
                           <div> <BiCalendar/></div>
                           <span><h3>Booking Date</h3></span>
                        </div>
                        <div className="r-booking-input">
                            <input type="text" placeholder='Enter booking date'/>
                            <BiCalendar className='icon'/>
                        </div>
                    </div>
                    <div className="r-parcel">
                        <div className="r-parcel-box">
                            <div><VscPackage/></div>
                            <span><h3>Type of parcel</h3></span>
                        </div>
                        <div className="r-parcel-input">
                            <input type="text" placeholder='Select parcel type'/>
                            <BiDownArrow className='icon'/>
                        </div>
                    </div>
                    <div className="r-destination">
                        <div className="r-destination-box">
                            <div><SlLocationPin/></div>
                            <span><h3>Destination</h3></span>
                        </div>
                        <div className="r-destination-input">
                            <div className="destination-1">
                            <input type="text" placeholder='To'/>
                            <BiDownArrow className='icon'/>
                            </div>
                            <div className="destination-2">
                            <input type="text" placeholder='From'/>
                            <BiDownArrow className='icon'/>
                            </div>
                        </div>
                    </div>
                    <div className="r-button">
                        <button>Calculate</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Estimate
