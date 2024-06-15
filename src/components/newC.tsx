"use client";
import { useState, MouseEvent,useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Import Tabs components as needed
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"; // Import Card components as needed
import Loader from "./Loader";
import { Wand } from "lucide-react";

interface NewComponentProps {
  isOpen: boolean;
  selectedText: string;
  handleClose: () => void;
}

const NewComponent: React.FC<NewComponentProps> = ({ isOpen, selectedText, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [reply, setReply] = useState("");
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([
    { sender: "You", text: "Hi Cosmo!" },
    { sender: "Cosmo", text: "Hello! How can I assist you today?" },
    // Add more predefined messages here
  ]);

  useEffect(() => {
    const handleIncomingMessage = (event: MessageEvent) => {
      const newMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, { sender: "Cosmo", text: newMessage }]);
      setIsLoading(false);
    };

    const client_id = Date.now().toString();
    const wsInstance = new WebSocket(`ws://192.168.29.141:8000/ws/${client_id}`);
    setWs(wsInstance);

    wsInstance.onmessage = handleIncomingMessage;

    return () => {
      wsInstance.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(messageText);
      setMessages((prevMessages) => [...prevMessages, { sender: "You", text: messageText }]);
      setIsLoading(true);
      setMessageText("");
    }
  };

  return (
    <div className="relative">
      <div className="p-4 cursor-text"></div>
      <div
        className={`fixed top-0 right-0 bottom-0 w-[400px] bg-white dark:bg-gray-950 border-l shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <header className="bg-white dark:bg-gray-800 px-4 py-3 border-b flex items-center justify-between gap-3">
            
            <img className=" h-6 " src="/logo2.jpg" alt="no" />
                        <h3 className="text-lg font-medium text-zinc-800 font-semibold">Chat </h3>

            <Button
              className="top-4 left-4 w-4 h-2 bg-white dark:bg-gray-800 p-4 text-black rounded-full shadow-md"
              onClick={handleClose}
            >
              X
            </Button>
          </header>
          <div className="flex-1 overflow-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"} items-start gap-4 bg--200`}
              >
                {message.sender === "Cosmo" && (
                  <Avatar className=" w-6 h-7 bg-white">
                    {/* <img src="/placeholder.svg" alt="Avatar" /> */}
                    <AvatarFallback className="bg-white "><Wand className="text-purple-700"/></AvatarFallback>
                  </Avatar>
                )}
                <div className="grid gap-1 ">
                  <div className={`font-bold flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}>{message.sender}</div>
                  <div className={`prose prose-stone  rounded-full  ${message.sender==="You" ? "bg-purple-600 py-1 px-3 text-white":"bg-white"} `}>
                    <p className="">{message.text}</p>
                  </div>
                </div>
                {message.sender === "You" && (
                  <Avatar className="border w-6 h-6">
                    {/* <img src="/placeholder.svg" alt="Avatar" /> */}
                    <AvatarFallback>YO</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && <Loader messages={["Thinking.", "Thinking..", "Thinking..."]} />}
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-t">
            <div className="relative">
              <Textarea
                placeholder="Message Cosmo..."
                name="message"
                id="message"
                rows={1}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="min-h-[48px] rounded-2xl resize-none p-4 border border-gray-200 overflow-y-hidden shadow-sm pr-16 dark:border-gray-800"
              />
              <Button
                type="button"
                size="icon"
                className="absolute top-3 right-3 w-8 h-8"
                onClick={sendMessage}
              >
                <ArrowUpIcon className="w-4 h-4" />
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




type IconProps = React.SVGProps<SVGSVGElement>

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
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}

function ClipboardIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0  0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}

function RefreshCcwIcon(props: IconProps) {
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
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  )
}

function ThumbsDownIcon(props: IconProps) {
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
    >
      <path d="M10 14 5.5 9.5a3.87 3.87 0 0 1 0-5.5 3.87 3.87 0 0 1 5.5 0L14 7v7Z" />
      <path d="M14 11h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7.5" />
      <path d="M7 11v9" />
    </svg>
  )
}

function ThumbsUpIcon(props: IconProps) {
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
    >
      <path d="M14 10.5 18.5 6a3.87 3.87 0 0 1 5.5 0 3.87 3.87 0 0 1 0 5.5L17 14H10Z" />
      <path d="M10 13V9a2 2 0 0 0-2-2H3.5" />
      <path d="M17 12v9" />
    </svg>
  )
}

function XIcon(props: IconProps) {
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
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
