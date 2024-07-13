// src/components/Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-2 rounded-full ml-5 mt- h-full space-x-2">
      <div className="dot bg-gray-400 rounded-full w-3 h-3 animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="dot bg-gray-400 rounded-full w-3 h-3 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="dot bg-gray-400 rounded-full w-3 h-3 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );
};

export default Loader;
