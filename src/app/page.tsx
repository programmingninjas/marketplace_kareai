// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
// import { SignedIn, SignUp, UserButton } from "@clerk/nextjs";
// import Layout from "@/components/Layout";

// export default function Component() {
//   return (
//     <Layout>
//       <div className="flex min-h-dvh flex-col">
//         <main className="">
//           <section className="w-full py-12 md:py-14 bg- lg:py-[54px]">
//             <div className="container bg- grid max-w-3xl items-center gap- px-4 md:px-6 lg:grid-cols-1 lg:gap-10">
//               <div className="space-y-4 bg-">
//                 <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
//                   Introducing AI Analyst
//                   <span className="bg-gradient-to-r from-purple-700 to-[#540F66] bg-clip-text text-transparent">OS</span>
//                 </h1>
//                 <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                   AI Analyst OS streamlines your entire data analysis workflow. From data collection and preprocessing, to insightful analytics and reporting, and beyond. Get started with pre-built AI models.
//                 </p>
//                 <div className="flex items-center gap-4">
//                 <Link
//                     href="/sign-up"
//                     className="inline-flex items-center justify-center text-sm font-medium text-muted-foreground hover:underline"
//                     prefetch={false}
//                   >
//                   <Button className="bg-gradient-to-r from-purple-700 to-[#540F66]" >Get Started</Button>
//                   </Link>

//                   <Link
//                     href="/sign-up"
//                     className="inline-flex items-center justify-center text-sm font-medium text-muted-foreground hover:underline"
//                     prefetch={false}
//                   >
//                     Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <div className="w-full flex bg--50 rounded-lg justify-center gap-2 bg- h-full">
//             <Card className="w-[350px] shadow-lg border-2 border-zinc-100">
//               <CardHeader>
//                 <CardTitle>Category Playbook</CardTitle>
//                 <CardDescription>A useful AI powered tool to get insights of industry</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid w-full items-center gap-2">
//                   Aids businesses in understanding market trends, customer behavior, and competitive landscape
//                 </div>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <Link href="/market_research_agent">
//                   <Button className="bg-gradient-to-r from-purple-700 to-[#540F66]">Try Now</Button>
//                 </Link>
//               </CardFooter>
//             </Card>
//             <Card className="w-[350px] shadow-lg border-2 border-zinc-100">
//               <CardHeader>
//                 <CardTitle>Medical Research Agent</CardTitle>
//                 <CardDescription>AI tool to assist medical research queries</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid w-full items-center gap-2">
//                   Supports clinical studies, healthcare data analysis, and medical literature reviews for evidence-based practice.
//                 </div>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <Link href="/medical_research_agent" >
//                 <Button disabled className="bg-gradient-to-r  from-purple-700 to-[#540F66]">Coming soon...</Button>
//                 </Link>
//               </CardFooter>
//             </Card>
//             <Card className="w-[350px] shadow-lg border-2 border-zinc-100">
//               <CardHeader>
//                 <CardTitle>Financial Analytics Agent</CardTitle>
//                 <CardDescription>AI tool to assist financial research queries</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid w-full items-center gap-2 mb-5">
//                   Analyzes financial data, market conditions, and economic trends for informed investment decisions
//                 </div>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <Link href="/financial_analytics_agent">
//                 <Button className="bg-gradient-to-r from-purple-700 to-[#540F66] mt-[10px]">Try Now</Button>
//                 </Link>
//               </CardFooter>
//             </Card>
//           </div>
//         </main>
//       </div>
//     </Layout>
//   );
// }

// function ArrowRightIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12h14" />
//       <path d="m12 5 7 7-7 7" />
//     </svg>
//   );
// }



"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BentoGridThirdDemo from "@/components/Cardomponent";
import { PanelRightClose, Triangle } from "lucide-react";

export default function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Sign up",
      href: "/sign-up",
      icon: (
        <IconArrowRight className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-full mx- border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
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
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "",
                href: "#",
                icon: (
                  <Image
                    src="/logo2.jpg"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard open={open} />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
      <div className="flex gap-2 items-end">
      <Triangle/>
      <h3>Kare <span className="text-purple-700 ">ai</span></h3>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
      <PanelRightClose className="text-neutral-700 dark:text-neutral-200"/>
    </Link>
  );
};
interface DashboardProps {
  open: boolean;
}

// Dummy dashboard component with content
const Dashboard: React.FC<DashboardProps> = ({ open }) => {
  return (
    <div>
      <div className="bg--500 p-2  min-h-[44px] border-b bg-white border-neutral-200 ">
        {!open && <Image src={"/logo.jpg"} alt="no" width={100} height={100} />}
      </div>
      <div className="flex flex-1">
        <div className="rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col flex-1 w-full h-full">
          <BentoGridThirdDemo />
        </div>
      </div>
    </div>
  );
};
