import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface LoaderProps {
  messages: string[];
}

const Loader: React.FC<LoaderProps> = ({ messages }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (messages && messages.length > 0) {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 2000); // Change message every 2 seconds
      return () => clearInterval(interval);
    }
  }, [messages]);

  return (
    <div className="flex items-center mt-52 justify-center space-x-2">
      <Loader2 className="h-8 w-8 animate-spin text-[#540F66]" />
      {messages ? messages[currentMessageIndex] : 'Loading...'}
    </div>
  );
};

export default Loader;

