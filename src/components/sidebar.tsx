// src/components/Sidebar.tsx
"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useSidebar } from '../context/SidebarContext';

const Sidebar: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);

  const toggleAgents = () => {
    setIsAgentsOpen(!isAgentsOpen);
  };

  return (
    <div className={`h-screen shadow-md flex flex-col font-sans text-base transition-all duration-300 ${isOpen ? 'w-64' : ''}`}>
      <div className="flex items-center justify-between p-4 mt-10">
        <div className='flex justify-between items-center w-full'>
          <Link href="/"><img src="./logo.jpg" alt="Logo" className={`h-8 mr-2 ${isOpen ? 'block' : 'hidden'}`} /></Link>
          <button onClick={toggleSidebar} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6 text-zinc-900" /> : <Menu className="w-6 h-6 text-zinc-900" />}
          </button>
        </div>
      </div>
      <nav className={`flex-1 px-4 py-8 space-y-4 ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#chats" className="flex items-center text-zinc-900">
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3v15h15v4.5l6-6-6-6v4.5H5V3H3zm15 12.5l3 3V15h-3v.5zm-9-7.5v2h12v-2H9zm0 4v2h6v-2H9zm-2-9V3H3v4.5L9 3zm-2 9v2H5v-2h2zm0-4v2H5v-2h2zm-2-4v2H5v-2h2zm12-1.5v2h2v-2h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z" />
          </svg>
          Chats
        </a>
        <a href="#reports" className="flex items-center text-zinc-900">
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7v2h4v-2h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H3V7h18v10zm-8-7h-2v2H9v2h2v2h2v-2h2v-2h-2V10z" />
          </svg>
          Reports
        </a>
        <div className="flex flex-col">
          <button onClick={toggleAgents} className="flex items-center justify-between text-zinc-900 focus:outline-none">
            <span className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0110 10v3l-2.29 2.29c-.63.63-1.71.18-1.71-.71v-1h-12v1c0 .89-1.08 1.34-1.71.71L2 15v-3a10 10 0 0110-10zm0-2C5.48 0 0 5.48 0 12v4c0 1.1.9 2 2 2h5v3c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-3h5c1.1 0 2-.9 2-2v-4c0-6.52-5.48-12-12-12zm1 14H9v-2h2v-2H9v-2h2V6h2v2h2v2h-2v2h2v2h-2v2zm-7-2v-2h2v2H6zm0-4v-2h2v2H6z" />
              </svg>
              A.I Agents
            </span>
            {isAgentsOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          {isAgentsOpen && (
            <div className="mt-2 space-y-2 pl-6">
              <input type="text" placeholder="Find a Agent" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
              <a href="#favorite-agents" className="block text-zinc-800">Favorite Agents (0)</a>
              <a href="#popular-agents" className="block text-zinc-800">Popular Agents (5)</a>
              <a href="#recent-agents" className="block text-zinc-800">Recent Agents (9)</a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
