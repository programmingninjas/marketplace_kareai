import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Loader2 from './Loader2';
import { RefreshCw, Wand, X } from 'lucide-react';
import Image from 'next/image';
import axios from 'axios';
import { User } from '@clerk/nextjs/server';
import { toast } from './ui/use-toast';
import SkeletonDemo from './skeleton';

interface NewComponentProps {
  isOpen: boolean;
  selectedText: string;
  handleClose: () => void;
}

const NewComponent: React.FC<NewComponentProps> = ({ isOpen, selectedText, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [clientid, setClientid] = useState("");
  const [Uimage, setImage] = useState("");

  const [ws, setWs] = useState<WebSocket | null>(null);
  const [messageText, setMessageText] = useState(selectedText);
  const [messages, setMessages] = useState([
    { sender: "Cosmo", text: "Hello! How can I assist you today?" },

  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();

  useEffect(() => {
    if (!selectedText) return;
    setMessageText(selectedText);
  }, [selectedText]);

  useEffect(() => {
    if (!user) return;

    const handleIncomingMessage = (event: MessageEvent) => {
      const newMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, { sender: "Cosmo", text: newMessage }]);
      setIsLoading(false);
    };
//getting user id from clerk and seeting as the client id 
    const client_id = user.id;
    const image = user.imageUrl;
    console.log(image)
    console.log(client_id);
    const wsInstance = new WebSocket(`ws://98.70.9.194:8000/ws/${client_id}`);
    setWs(wsInstance);
    setClientid(client_id);
    setImage(image)
    wsInstance.onmessage = handleIncomingMessage;

    return () => {
      wsInstance.close();
    };
  }, [user]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const refresh = async () => {
    console.log("refreshed");
    const response = await axios.post(`http://98.70.9.194:8000/api/refresh_session?client_id=${clientid}`);
    toast({
      title: "Chat refreshed",
      description: "Your chat is now refreshed"
    });
    setMessages([{ sender: "Cosmo", text: "Hello! How can I assist you today?" }]);
  };

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(messageText);
      setMessages((prevMessages) => [...prevMessages, { sender: "You", text: messageText }]);
      setIsLoading(true);
      setMessageText("");
    }
  };

  const linkify = (text: string) => {
    const urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(urlPattern, '<a href="$1" class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">$1</a>');
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevents adding a new line
      sendMessage();
    }
  };

  return (
    <div className="relative">
      <div className="p-4 cursor-text"></div>
      <div
        className={`fixed top-0 right-0 bottom-0 w-[450px] bg-white dark:bg-gray-950 border-l shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <header className="bg-white dark:bg-gray-800 px-4 py-3 border-b flex items-center justify-between gap-3">
            <Image width={30} height={100} src="/logo2.jpg" alt="Logo" />
            <h3 className="text-lg text-zinc-800 font-semibold">Chat</h3>
            <div className='flex gap-3 items-center'>
              <RefreshCw onClick={refresh} className='w-5 cursor-pointer opacity-80' />
              <X className='w-6 opacity-80 cursor-pointer' onClick={handleClose} />
            </div>
          </header>
          <div ref={chatContainerRef} className="flex-1 bg--100 overflow-auto p-4 custom-scrollbar">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex  items-center gap-2 mb-4 ${message.sender === "You" ? "justify-end" : "justify-start"}`}
              >
                {message.sender !== "You" && (
                  <Avatar className="w-8 h-8 bg-white">
                    <AvatarFallback className="bg-white">
                      <Wand className="text-purple-700" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div className="bg--600 max-w-[85%] flex">
                  <div
                    className={`max-w-full rounded-xl text-sm ${message.sender === "You" ? "bg-purple-600 text-justify text-white px-5 py-4" : "bg-slate-100 text-justify px-7 py-5 "} break-words`}
                    dangerouslySetInnerHTML={{ __html: linkify(message.text) }}
                  />
                </div>
                {message.sender === "You" && (
                  <Avatar className="w-8 h-8 border">
                    <Image width={100} height={8} src={Uimage} alt="Avatar" />
                    <AvatarFallback>YO</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {/* {isLoading && <Loader2 messages={["Thinking.", "Thinking..", "Thinking..."]} />} */}
            {isLoading && <SkeletonDemo/>}

          </div>
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-t">
            <div className="relative">
              <Textarea
                placeholder="Message Cosmo..."
                name="message"
                id="message"
                rows={1}
                value={messageText}
                onKeyPress={handleKeyPress}
                onChange={(e) => setMessageText(e.target.value)}
                className="min-h-[48px] rounded-2xl resize-none p-4 border border-gray-200 overflow-y-hidden shadow-sm pr-16 dark:border-gray-800"
              />
              <Button
                type="button"
                size="icon"
                className="absolute top-3 right-3 w-8 h-8 bg-purple-600 hover:bg-purple-700 text-white"
                onClick={sendMessage}
              >
                <ArrowUpIcon className="w-4 h-4 text-white" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;

type IconProps = React.SVGProps<SVGSVGElement>;

function ArrowUpIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}
