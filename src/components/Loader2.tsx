import React, { useEffect, useState } from 'react';
import { LoaderPinwheel } from 'lucide-react';

interface LoaderProps {
  messages: string[];
}

const Loader: React.FC<LoaderProps> = ({ messages }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (messages && messages.length > 0) {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => {
          if (prevIndex < messages.length - 1) {
            return prevIndex + 1;
          } else {
            clearInterval(interval); // Clear the interval once the last message is reached
            return prevIndex; // Keep the last message index
          }
        });
      }, 4000); // Change message every 3 seconds
      return () => clearInterval(interval);
    }
  }, [messages]);

  return (
    <div className="flex flex-col items-center mt-52 justify-center space-x-2">
      <LoaderPinwheel className="h-8 w-8 animate-spin text-[#540F66]" />
      {messages && messages.length > 0 ? messages[currentMessageIndex] : 'Loading...'}
    </div>
  );
};

export default Loader;