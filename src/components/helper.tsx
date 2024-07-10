"use client";

import Image from "next/image";
// import { Tabs } from "../ui/tabs2";
import { Tabs } from "@/components/ui/tabs2";
import CardComponent from "@/components/CardComponent";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
export default function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (<div className="flex gap-4">
        <Link href={"/market_research_agent"}>
        <CardComponent name= {"Market Research Agent"}/>
        </Link>
        <CardComponent name= {"Medical Research Agent"}/>
        <Link href={"/financial_analytics_agent"}>
        <CardComponent name= {"Financial Analytics Agent"}/>
        </Link>
        </div>


      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="flex gap-5">
        <Link href={"/market_research_agent"}>
        <CardComponent name= {"Market Research Agent"}/>
        </Link>
        <CardComponent name= {"Medical Research Agent"}/>
        <Link href={"/financial_analytics_agent"}>
        <CardComponent name= {"Financial Analytics Agent"}/>
        </Link>
        </div>


      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="flex gap-5">
          
          <Link href={"/market_research_agent"}>
        <CardComponent name= {"Market Research Agent"}/>
        </Link>
        <CardComponent name= {"Medical Research Agent"}/>
        <Link href={"/financial_analytics_agent"}>
        <CardComponent name= {"Financial Analytics Agent"}/>
        </Link>
        </div>


      ),
    },
    
    
  ];

  return (
    <div className="h-[20rem] bg--400 md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-5 ">
      <Tabs tabs={tabs} />
      
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
