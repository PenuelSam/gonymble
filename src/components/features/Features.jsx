import React from 'react'
import './features.css'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
const Features = () => {
  return (
    <div className='features mt-[30px]'>
      <div className="container feature">
        <h1>features</h1>
        <div className="line"></div>
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                    {/* <img src={feature1} alt="" /> */}
                    <TextSnippetOutlinedIcon className='icon'/>
                    
                </div>
                <div className="card-title">
                    <h1>Easy Booking</h1>
                    <p>Anyone can book pickup from the comfort of their home or office. You don’t need to know or visit the logistics company.</p>
                </div>
            </div>
            <div className="card-content">
                <div className="card-image">
                    {/* <img src={feature2} alt="" /> */}
                    <LocalShippingOutlinedIcon className='icon' />
                </div>
                <div className="card-title">
                    <h1>Fast Delivery</h1>
                    <p>We locate the logistics companies that are closest to pickup and dropoff locations to reduce delivery time</p>
                </div>
            </div>
            <div className="card-content">
                <div className="card-image">
                    {/* <img src={feature3} alt="" /> */}
                    <MonetizationOnOutlinedIcon className='icon' />
                </div>
                <div className="card-title">
                    <h1>Rate comparison</h1>
                    <p>Customers can make a decision on which logistics company to choose based on price, track record and capacity.</p>
                </div>
            </div>
            <div className="card-content">
                <div className="card-image">
                   {/*  <img src={feature4} alt="" /> */}
                   <TrendingUpOutlinedIcon className='icon' />
                </div>
                <div className="card-title">
                    <h1>Live Tracking</h1>
                    <p>Real time tracking technology ensures you know where your package is at any point in time.</p>
                </div>
            </div>
            <div className="card-content">
                <div className="card-image">
                    {/* <img src={feature5} alt="" /> */}
                    <GppGoodOutlinedIcon className='icon' />
                </div>
                <div className="card-title">
                    <h1>Security</h1>
                    <p>Unique security code known to the owner and receiver of the package ensures deliveries only to the right recipient.</p>
                </div>
            </div>
            <div className="card-content">
                <div className="card-image">
                    {/* <img src={feature6} alt="" /> */}
                    <SupportAgentOutlinedIcon className='icon' />
                </div>
                <div className="card-title">
                    <h1>Great Support</h1>
                    <p>Support from well trained customer support team who go an extra mile to ensure every delivery is completed to satisfaction.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
