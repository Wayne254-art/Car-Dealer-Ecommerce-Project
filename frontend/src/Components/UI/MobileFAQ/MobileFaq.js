

import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './mobile-faq.css'; // Create and import the CSS file for mobile-specific styles

const MobileFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);
  const answerRefs = useRef([]);

  const faqs = [
    {
      question: "Do you offer financing options?",
      answer: "Yes, we offer a variety of financing options to suit your needs. Whether you have excellent credit, bad credit, or no credit, we can help you find a financing solution that works for you.",
    },
    {
      question: "What kind of warranty do you provide with your cars?",
      answer: "We offer a range of warranty options, from standard manufacturer warranties to extended warranties that cover various components of your vehicle. Please speak with our sales team for detailed information on the warranties available.",
    },
    {
      question: "Can I trade in my old car?",
      answer: "Absolutely! We accept trade-ins and can provide you with an appraisal to help offset the cost of your new vehicle. Bring in your current car for an assessment.",
    },
    {
      question: "What should I bring when buying a car?",
      answer: "To make the process smooth, bring your driver's license, proof of insurance, and proof of income. If you’re trading in a vehicle, don’t forget your car’s title, registration, and keys.",
    },
    {
      question: "What is the process for ordering a specific car model?",
      answer: "If we don't have the specific model you’re looking for, we can place a special order for you. This includes selecting the exact features, color, and specifications you want. Our sales team will guide you through the ordering process.",
    },
    {
      question: "Do you offer any special discounts or promotions?",
      answer: "We regularly offer promotions, including discounts for military personnel, recent college graduates, and more. Check our website or speak to our sales team for the latest offers.",
    },
    // {
    //   question: "What causes brake pulsation?",
    //   answer: "Brake pulsation is often caused by warped brake rotors, which can occur due to excessive heat or improper installation.",
    // },
    // {
    //   question: "Why is it important to rotate tires?",
    //   answer: "Rotating your tires helps ensure even tire wear and extends the life of your tires. It also improves vehicle handling and safety.",
    // },
  ];

  useEffect(() => {
    if (activeIndex !== null && faqRefs.current[activeIndex]) {
      faqRefs.current[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeIndex]);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      const answerElement = answerRefs.current[activeIndex];
      if (answerElement) {
        answerElement.style.height = `${answerElement.scrollHeight}px`;
      }
    }
  }, [activeIndex]);

  return (
    <div className="mobile-faq-container">
      <h2 className="mobile-faq-title">Frequently Asked Questions</h2>
      <div className="mobile-faq-list" style={{fontSize:'12px',fontWeight:'bolder'}}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mobile-faq-item ${activeIndex === index ? 'active' : ''}`}
            ref={el => faqRefs.current[index] = el}
          >
            <div
              className="mobile-faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <div
              ref={el => answerRefs.current[index] = el}
              className="mobile-faq-answer"
            >
              <div className="mobile-faq-answer-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mobile-faq-footer">
        <button className="mobile-faq-button">
          <Link to='/about' className="mobile-faq-link">Learn more</Link>
        </button>
      </div>
    </div>
  );
};

export default MobileFaq;
