import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './Accordion'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const accordionData = [
  {
    index: 0, 
    title: 'Exchanges and returns', 
    content: 'Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/ or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same returns policy.' 
  },
  { 
    index: 1, 
    title: 'Return Process', 
    content: 'The customer can choose to cancel an order any time before its dispatched. The order cannot be canceled once its out for delivery. However, the customer may choose to reject it at the doorstep'
  },
  { 
    index: 2, 
    title: 'Refund Policy',
    content: 'Get your money back quickly' 
  },
];

const AccordionItem = ({ index, title, content }) => {
  const dispatch = useDispatch();
  const openIndex = useSelector((state) => state.accordion.openIndex);

  const handleToggle = () => {
    dispatch(toggle(index));
  };

  return (
    <div className="border-b border-gray-300">
      <button
        className={`w-full text-left px-4 py-3 flex items-center justify-between bg-gray-100 hover:bg-gray-200 focus:outline-none ${openIndex === index ? 'bg-gray-200' : ''}`}
        onClick={handleToggle}
      >
        <span className="text-lg font-semibold">{title}</span>
        <span className="text-xl">
          {openIndex === index ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
        </span>
      </button>
      {openIndex === index && (
        <div className="px-4 py-3 bg-gray-50">
          <p className="text-gray-700">{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden">
      {accordionData.map(item => (
        <AccordionItem
          key={item.index}
          index={item.index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
