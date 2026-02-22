import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

interface WhatsAppButtonProps {
  text: string;
  className?: string;
  // Fix: Use React.ReactNode instead of JSX.Element to resolve "Cannot find namespace 'JSX'".
  icon?: React.ReactNode;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, className, icon, message }) => {
  const encodedMessage = encodeURIComponent(message || WHATSAPP_MESSAGE);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodedMessage}`;

  const defaultClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${defaultClasses} ${className}`}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {text}
    </a>
  );
};

export default WhatsAppButton;