import React, { useState } from 'react'
import './accordion.css'

const Accordion = (props) => {
    const [show, setShow] = useState(false);
  return (
    <div>
      <div className="faq">
            <div className="faq-content">
              <div className="faq-question">
                <p>{props.question}</p>
              </div>
              <div
              className="faq-button"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? (
                <div className="faq-minus">-</div>
              ) : (
                <div className="faq-plus">+</div>
              )}
            </div>
            </div>
            {show && (
                <div className="faq-answer">
                    <p>{props.answer}</p>
                </div>
                 
                
              )}
          </div>
    </div>
  )
}

export default Accordion
