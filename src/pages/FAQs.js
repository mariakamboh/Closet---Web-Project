import React, { useState } from 'react';
import '../styles/FAQs.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { 
      question: "Is rent charged per day or per event?", 
      answer: `At Closet, we love our customers and hence want to provide maximum benefit to our renters.
      Formal dresses are given at just one rent amount for 3 days! The dress is given one day before your event and taken back the very next day of your event.
      So, if the rent mentioned is Rs.700/-, you will have to only pay Rs.700/- for those three days.
      Bridal dresses are given at just one rent amount for 5 days! The dress is given two day before your event and taken back two days after your event.
      So, if the rent mentioned is Rs.3000/-, you will have to only pay Rs.3000/- for those five days.`
    },
    { 
      question: "How do I book a dress via website?", 
      answer: `You need to select your event date. The system shall automatically block your delivery date, event date and pickup date and you shall proceed to check out where you need to fill in basic information. To proceed you need to pay either 30% of the rent as advance or full rent. You can pay while on the website via debit/credit card or Easy-paisa currently.
      Once the payment is made, Closet's team shall coordinate with you and process your order.
      For queries, please WhatsApp us at 090078601.`
    },
    { 
      question: "Can I try a dress before placing an order?", 
      answer: `Team Closet welcomes you to any of our outlets to try a dress and book it for your event if it is available in your city's outlet. If you would like to rent out an intercity dress, you won’t be able to try it on.`
    },
    { 
      question: "Can I cancel an order after booking?", 
      answer: `You can cancel an order however the advance given for the dress is non-refundable and unexchangeable under any circumstances.`
    },
    { 
      question: "Does Closet charge a security deposit?", 
      answer: `Yes. Closet charges a security deposit while handing over the dress to you. These charges vary from dress to dress depending on its total rent and your city.`
    },
    { 
      question: "When is the security deposit returned?", 
      answer: `When you return the dress back to Closet in due time and in the same condition as given, Closet returns your deposit back to you there and then. In case of the dress being received by Closet via delivery, your security deposit shall be disbursed to your bank account within 7 working days.`
    },
    { 
      question: "Can I buy clothes from Closet?", 
      answer: `No. Closet does not buy or sell clothes.`
    }
  ];
  

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
