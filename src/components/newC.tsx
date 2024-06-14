"use client";
import { useState, MouseEvent } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Import Tabs components as needed
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"; // Import Card components as needed

interface NewComponentProps {
  isOpen: boolean;
  selectedText: string;
  handleClose: () => void;
}

const NewComponent: React.FC<NewComponentProps> = ({ isOpen, selectedText, handleClose }) => {
  return (
    <div className="relative">
      <div className="p-4 cursor-text"></div>
      <div
        className={`fixed top-0 right-0 bottom-0 w-[400px] bg-white dark:bg-gray-950 border-l shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <header className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b flex items-center gap-3">
            <button
              className="top-4 left-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-md"
              onClick={handleClose}
            >
              <XIcon className="w-4 h-4" />
            </button>
            <h3 className="text-lg font-medium text-zinc-800 font-semibold">Chat with AI</h3>
          </header>
          <div className="flex-1 overflow-auto p-4">
            <div className="flex items-start gap-4">
              <Avatar className="border w-6 h-6">
                <img src="/placeholder.svg" alt="Avatar" />
                <AvatarFallback>YO</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-bold">You</div>
                <div className="prose prose-stone">{selectedText}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-4">
              <Avatar className="border w-6 h-6">
                <img src="/placeholder.svg" alt="Avatar" />
                <AvatarFallback>OA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-bold">ChatGPT</div>
                <div className="prose prose-stone">
                  <p>
                    The king's plan to tax the jokes in the kingdom was a clever one, but it didn't go quite as he
                    expected. Jokester, a mischievous trickster, began sneaking into the castle at night and leaving
                    jokes all over the place - under the king's pillow, in his soup, even in the royal toilet. The king
                    was furious, but he couldn't seem to stop Jokester.
                  </p>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                  >
                    <ClipboardIcon className="w-4 h-4" />
                    <span className="sr-only">Copy</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                  >
                    <ThumbsUpIcon className="w-4 h-4" />
                    <span className="sr-only">Upvote</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                  >
                    <ThumbsDownIcon className="w-4 h-4" />
                    <span className="sr-only">Downvote</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                  >
                    <RefreshCcwIcon className="w-4 h-4" />
                    <span className="sr-only">Regenerate</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-t">
            <div className="relative">
              <Textarea
                placeholder="Message ChatGPT..."
                name="message"
                id="message"
                rows={1}
                className="min-h-[48px] rounded-2xl resize-none p-4 border border-gray-200 border-neutral-400 shadow-sm pr-16 dark:border-gray-800"
              />
              <Button type="submit" size="icon" className="absolute top-3 right-3 w-8 h-8" disabled>
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
