// src/components/Sidebar.tsx
"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp, List, Menu, MessageCircle, X } from 'lucide-react';
import Link from 'next/link';
import { useSidebar } from '../context/SidebarContext';
import Image from 'next/image';
import { IconReport, IconRobot } from '@tabler/icons-react';

const Sidebar: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);

  const toggleAgents = () => {
    setIsAgentsOpen(!isAgentsOpen);
  };

  return (
    <div className={`h-screen shadow-md  flex flex-col font-sans text-base  transition-all duration-300 ${isOpen ? 'w-64' : ''}`}>
      <div className="flex items-center justify-between p-4 mt-10">
        <div className='flex justify-between items-center w-full'>
          <Link href="/"><Image width={100} height={50} src="/logo.jpg" alt="Logo" className={`h-8 mr-2 ${isOpen ? 'block' : 'hidden'}`} /></Link>
          <button onClick={toggleSidebar} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6 text-zinc-900" /> : 
            <div>
              <Image
              width={25}
              height={100}
              alt='no'
              src="/logo2.jpg"/>
              </div>}
          </button>
        </div>
      </div>
      <nav className={`flex-1 px-4 py-8 space-y-4 ${isOpen ? 'block' : 'hidden'}`}>
        <div className='bg-gradient-to-r from-purple-700 to-[#540F66] p-2 rounded-xl text-white flex gap-2'> <MessageCircle/> Chats</div>
          
        <div className='bg-gradient-to-r from-purple-700 to-[#540F66] p-2 rounded-xl text-white flex gap-2'> <IconReport/> Reports</div>

        <div className='bg-gradient-to-r from-purple-700 to-[#540F66] p-2 rounded-xl text-white flex gap-2'> <List/> Agents</div>

      </nav>
    </div>
  );
};

export default Sidebar;
