import React from "react";
import "./faq.css";
import Accordion from "../accordion/Accordion";
import { questions } from "../accordion/data";
import { useState } from "react";

const Faq = () => {
    const [data] = useState(questions)
  
  return (
    <div className="container f">
      <h1 className="faq-title">faqs</h1>
      <div className="faqs">
        {data.map((item) => 
        <Accordion key={item.id} question={item.question} answer={item.answer}/>
        )}     
       
      </div>
    </div>
  );
};

export default Faq;
