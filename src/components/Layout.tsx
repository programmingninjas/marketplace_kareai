// // components/Layout.tsx
// "use client";
// import React, { useState } from "react";
// import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
// import {
//   IconArrowLeft,
//   IconBrandTabler,
//   IconSettings,
//   IconUserBolt,
// } from "@tabler/icons-react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { FileCheckIcon, PanelRightCloseIcon, Triangle } from "lucide-react";
// import { SignedIn, UserButton, useUser } from "@clerk/nextjs";

// const links = [
//   {
//     label: "Dashboard",
//     href: "/",
//     icon: (
//       <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//     ),
//   },
//   {
//     label: "Profile",
//     href: "#",
//     icon: (
//       <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//     ),
//   },
//   {
//     label: "My Reports",
//     href: "/reports",
//     icon: (
//       <FileCheckIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//     ),
//   },
//   {
//     label: "Logout",
//     href: "#",
//     icon: (
//       <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//     ),
//   },
// ];

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   const [open, setOpen] = useState(false);
//   const { user } = useUser();

//   // Assuming user object has an email property
//   const email = user?.emailAddresses[0]?.emailAddress || '';
//   const emailPrefix = email.split('@')[0];

//   return (
//     <div
//       className={cn(
//         "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-full border border-neutral-200 dark:border-neutral-700 overflow-hidden",
//         "h-screen" // Adjust this as needed
//       )}
//     >
//       <Sidebar open={open} setOpen={setOpen}>
//         <SidebarBody className="justify-between gap-10">
//           <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
//             {open ? <Logo /> : <LogoIcon />}
//             <div className="mt-8 flex flex-col gap-2">
//               {links.map((link, idx) => (
//                 <SidebarLink key={idx} link={link} />
//               ))}
//             </div>
//           </div>
//           <div>
//             <SidebarLink
//               link={{
//                 label: `${emailPrefix}`,
//                 href: "#",
//                 icon: (
//                   <SignedIn>
//                     <UserButton afterSignOutUrl="/sign-in" />
//                   </SignedIn>
//                 ),
//               }}
//             />
//           </div>
//         </SidebarBody>
//       </Sidebar>
//       <div className="flex flex-1">
//         <div className="rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col flex-1 w-full h-full">
//           <div className='bg--500 p-2 h-[47px] border-b bg-white border-neutral-200'>
//             <Image className={cn('block', { 'hidden': open })} src={"/logo.jpg"} alt="Logo" width={100} height={100} />
//           </div>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// const Logo = () => {
//   return (
//     <Link
//       href="#"
//       className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
//     >
//       <div className="flex items-end gap-1">
//         <Triangle />
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="font-medium text-black dark:text-white whitespace-pre"
//         >
//           <h3>Kare <span className="text-purple-600">ai</span></h3>
//         </motion.span>
//       </div>
//     </Link>
//   );
// };

// const LogoIcon = () => {
//   return (
//     <Link
//       href="#"
//       className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
//     >
//       <PanelRightCloseIcon className="text-neutral-800" />
//     </Link>
//   );
// };



// components/Layout.tsx
"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconReport,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Brain, FileCheckIcon, ListPlusIcon, Mail, MailsIcon, PanelRightCloseIcon, Triangle } from "lucide-react";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Avatar } from "@radix-ui/react-avatar";
type AgentNames = {
  [key: string]: string;
};

const links = [
  {
    label: "AI Agents",
    href: "/",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "AI Copilot",
    href: "/copilot",
    icon: (
      <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "My Reports",
    href: "/reports",
    icon: (
      <FileCheckIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "News and Alerts",
    href: "/news",
    icon: (
      <IconReport className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Watchlist",
    href: "/watchlist",
    icon: (
      <ListPlusIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Email Updates",
    href: "/updates",
    icon: (
      <MailsIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

const agentNames:AgentNames = {
  "/": "Home ",
  "/market_research_agent": "Category Playbook",
  "/financial_analytics_agent": "Financial Analytics Agent",
  "/copilot": "AI copilot ",


 
  // Add other paths and corresponding agent names here
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const pathname = usePathname();
  
  // Assuming user object has an email property
  const email = user?.emailAddresses[0]?.emailAddress || '';
  const emailPrefix = email.split('@')[0];

  // Get the agent name based on the current path
  const agentName = agentNames[pathname] || "Default Agent";

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-full border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // Adjust this as needed
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <div className={` rounded-sm w-full  flex shadow-indigo-700 justify-start drop-shadow-lg text-white ${open ? ("bg-white px-1"):("")}`}>
              <SidebarLink
                link={{
                  label: agentName,
                  href: "",
                  icon: (
                    <Brain className="text-indigo-600 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                  ),
                }}
              />
              </div>
              
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: `${emailPrefix}`,
                href: "#",
                icon: (
                  <SignedIn>
                    <UserButton afterSignOutUrl="/sign-in" />
                  </SignedIn>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1">
        <div className="rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col flex-1 w-full h-full">
          <div className='bg--500 p-2 h-[47px] border-b bg-white border-neutral-200'>
            <Image className={cn('block', { 'hidden': open })} src={"/logo.jpg"} alt="Logo" width={100} height={100} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="flex items-end gap-1">
        <Triangle />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-black dark:text-white whitespace-pre"
        >
          <h3>Kare <span className="text-purple-600">ai</span></h3>
        </motion.span>
      </div>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <PanelRightCloseIcon className="text-neutral-800" />
    </Link>
  );
};
