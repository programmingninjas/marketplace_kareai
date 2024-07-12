// // src/components/Sidebar.tsx
// "use client"
// import { useState } from 'react';
// import { ChevronDown, ChevronUp, List, Menu, MessageCircle, X } from 'lucide-react';
// import Link from 'next/link';
// import { useSidebar } from '../context/SidebarContext';
// import Image from 'next/image';
// import { IconReport, IconRobot } from '@tabler/icons-react';

// const Sidebar: React.FC = () => {
//   const { isOpen, toggleSidebar } = useSidebar();
//   const [isAgentsOpen, setIsAgentsOpen] = useState(false);

//   const toggleAgents = () => {
//     setIsAgentsOpen(!isAgentsOpen);
//   };

//   return (
//     <div className={`h-screen shadow-md  flex flex-col font-sans text-base  transition-all duration-300 ${isOpen ? 'w-64' : ''}`}>
//       <div className="flex items-center justify-between p-4 mt-10">
//         <div className='flex justify-between items-center w-full'>
//           <Link href="/"><Image width={100} height={50} src="/logo.jpg" alt="Logo" className={`h-8 mr-2 ${isOpen ? 'block' : 'hidden'}`} /></Link>
//           <button onClick={toggleSidebar} className="focus:outline-none">
//             {isOpen ? <X className="w-6 h-6 text-zinc-900" /> : 
//             <div>
//               <Image
//               width={25}
//               height={100}
//               alt='no'
//               src="/logo2.jpg"/>
//               </div>}
//           </button>
//         </div>
//       </div>
//       <nav className={`flex-1 px-4 py-8 space-y-4 ${isOpen ? 'block' : 'hidden'}`}>


//         <div className='bg-gradient-to-r from-purple-700 to-[#540F66] p-2 rounded-xl text-white flex gap-2'> <List/> Agents</div>

//       </nav>
//     </div>
//   );
// };

// export default Sidebar;



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
    <div className={`h-screen shadow-md flex flex-col font-sans text-base transition-all duration-300 ${isOpen ? 'w-64' : ''}`}>
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
        <div className="relative">
          <div className='bg-gradient-to-r from-purple-700 to-[#540F66] p-2 rounded-xl text-white flex gap-2 cursor-pointer' onClick={toggleAgents}> 
            <List/> 
            <span>Agents</span>
            {isAgentsOpen ? <ChevronUp className="ml-auto" /> : <ChevronDown className="ml-auto" />}
          </div>
          {isAgentsOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link href="/market_research_agent" >
                  <h3 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    Category Playbook
                  </h3>
                </Link>
                <Link href="/medical_research_agent" >
                  <h3 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    Medical Research Agent
                  </h3>
                </Link>
                <Link href="/financial_analytics_agent" >
                  <h3 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    Financial Analytics Agent
                  </h3>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
