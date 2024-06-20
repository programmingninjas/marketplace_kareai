"use client"
import React, { useState, MouseEvent } from 'react';
import NewComponent from '@/components/newC';
import Loader from '@/components/Loader';

const App: React.FC = () => {
  const [isopen, setIsopen] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string>("");

  const handleTextSelection = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedText = window.getSelection()?.toString() || "";
    setSelectedText(selectedText);
    setIsPopupOpen(true);
  };

  const handlePopupClick = () => {
    setIsPopupOpen(false);
    setIsopen(true);
  };

  const handleClose = () => {
    setIsopen(false);
  };

  return (
    <div className="relative" onDoubleClick={handleTextSelection}>
      <div className="p-4">Double-click on this text to select and open chat.</div>
      {isPopupOpen && (
        <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg">
          <button
            onClick={handlePopupClick}
            className="p-2 bg-blue-600 text-white rounded-full shadow-lg focus:outline-none"
          >
            Open Chat
          </button>
        </div>
      )}
      <NewComponent isOpen={isopen} selectedText={selectedText} handleClose={handleClose} />
    </div>
  );
};

export default App;
