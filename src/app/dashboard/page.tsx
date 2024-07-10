"use client";

import Image from "next/image";
// import { Tabs } from "../ui/tabs2";
import { Tabs } from "@/components/ui/tabs2";
import CardComponent from "@/components/CardComponent";
export default function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (<div className="flex gap-4">
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>

        </div>


      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="flex gap-5">
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>

        </div>


      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="flex gap-5">
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>

        </div>


      ),
    },
    
    
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10 ">
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
