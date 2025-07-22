import React from 'react';
import Image from 'next/image';

interface WhatsAppButtonProps {
  phoneNumber: string; // e.g., "91XXXXXXXXXX" for India
  message?: string;    // Optional pre-filled message
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp-logo.svg" // Make sure you have a whatsapp-logo.svg in your public directory
        alt="WhatsApp"
        width={60} // Adjust size as needed
        height={60} // Adjust size as needed
        className="rounded-full shadow-lg"
      />
    </a>
  );
};