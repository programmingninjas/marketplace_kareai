"use client"
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, History, List, X } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';
import { useSidebar } from '../context/SidebarContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconHistoryToggle, IconReport } from '@tabler/icons-react';
import next from 'next';

interface Report {
  timestamp: string;
  title: string;
  id: string;
  data: any;
}

const Sidebar: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const [reportHistory, setReportHistory] = useState<Report[]>([]);
  const [Cid, setCid] = useState("");
  const router = useRouter();

  const toggleAgents = () => {
    setIsAgentsOpen(!isAgentsOpen);
  };

  useEffect(() => {
    const fetchReportHistory = async () => {
      if (isOpen) {
        try {
          const response = await axios.get(`http://98.70.9.194:8000/api/get_reports/${"user_2idwZINLIRt9Vrd1jOIop3TEXeB"}`);
          const reports = response.data.map((report: any) => ({
            id: report._id,
            title: report.title.split('\n')[0].replace(/forecast/gi, '').trim(),
            timestamp: report.timestamp,
            data: report // Fetch other necessary fields
          }));
          console.log(response.data);
          setReportHistory(reports);
          console.log(reports)
          
        } catch (error) {
          console.error('Error fetching report history:', error);
        }
      }
    };

    fetchReportHistory();
  }, [isOpen]);
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-based
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  return (
    <div
      className={`h-screen shadow-md flex flex-col font-sans text-base transition-all duration-300 ${
        isOpen ? "min-w-64" : ""
      }`}
    >
      <div className="flex items-center justify-between p-4 mt-10">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <Image
              width={100}
              height={50}
              src="/logo.jpg"
              alt="Logo"
              className={`h-8 mr-2 ${isOpen ? "block" : "hidden"}`}
            />
          </Link>
          <button onClick={toggleSidebar} className="focus:outline-none">
            {isOpen ? (
              <X className="w-6 h-6 text-zinc-900" />
            ) : (
              <div>
                <Image width={25} height={100} alt="no" src="/logo2.jpg" />
              </div>
            )}
          </button>
        </div>
      </div>
      <nav
        className={`flex-1 px-4 py-8 space-y-4 ${isOpen ? "block" : "hidden"}`}
      >
        <div className="relative">
          <div
            className="bg-gradient-to-r from-purple-700 to-[#540F66] p-2 rounded-xl text-white items-center flex gap-2 cursor-pointer"
            onClick={toggleAgents}
          >
            <List />
            <span className="  text-xl">Workspace</span>
            {isAgentsOpen ? (
              <ChevronUp className="ml-auto" />
            ) : (
              <ChevronDown className="ml-auto" />
            )}
          </div>

          {isAgentsOpen && (
            <div
              className={`absolute right-0 mt-2 min-w-[14rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link href="/market_research_agent">
                  <h3
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Category Playbook
                  </h3>
                </Link>
                <Link href="/medical_research_agent">
                  <h3
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Medical Research Agent
                  </h3>
                </Link>
                <Link href="/financial_analytics_agent">
                  <h3
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Financial Analytics Agent
                  </h3>
                </Link>
              </div>
            </div>
          )}
          <a href={"/reports"} target="_blank" rel="noopener noreferrer">
          <div  className="bg-gradient-to-r items-center mt-2 leading-none tracking-normal  from-purple-700 to-[#540F66] p-2 rounded-xl text-white flex gap-2 cursor-pointer">
              <IconReport />
              <span className="text-xl">My Reports</span>
            </div>       
             </a>
            
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
