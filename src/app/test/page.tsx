"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CardProps {
  sector: string;
  lastUpdate: string;
  revenueGrowth: string;
  netMargin: string;
  peRatio: string;
  revenuePerEmployee: string;
  sentiment: string;
  rank: string;
  imageSrc: string; // Add this line
}

const Card = ({
  sector,
  lastUpdate,
  revenueGrowth,
  netMargin,
  peRatio,
  revenuePerEmployee,
  sentiment,
  rank,
  imageSrc, // Add this line
}: CardProps) => {
  const sentimentColor = sentiment === "Green" ? "green" : sentiment === "Yellow" ? "yellow" : "red";
  console.log(sector)

  return (
    <div className="m-4 transition-transform transform hover:scale-105 ">
      <div className=" p-5 flex justify-between border-purple-700 rounded-lg shadow-gray-300 shadow-lg w-[600px] hover:shadow-2xl hover:shadow-emerald-500/[0.1]">
      <div className="flex flex-col gap-1">
          <div className="mb-2 text-xl font-bold">{sector}</div>
          <div className="text-gray-500 text-sm mb-12">Last Update: {lastUpdate}</div>
          <Image src={imageSrc} className="ml-10" alt={`${sector} image`} width={80} height={50} />
        </div>
        <div>
          <div className="mb-2">Revenue Growth: {revenueGrowth}</div>
          <div className="mb-2">Net Margin: {netMargin}</div>
          <div className="mb-2">P/E Ratio: {peRatio}</div>
          <div className="mb-2">Revenue/Employee: {revenuePerEmployee}</div>
          <div className="flex items-center mb-2">
            <span className="mr-2">Sentiment:</span>
            <span className={`w-3 h-3 rounded-full bg-${sentimentColor}-500`}></span>
          </div>
          <div>Rank: {rank}</div>
          <Link href={`/industry/${sector.toLowerCase().replace("sector","")}`}>
          <Button   className="mt-4 bg-gradient-to-r from-purple-700 to-[#540F66] text-white py-2 px-4 rounded">Portfolio</Button>

          </Link>
        </div>
      </div>
    </div>
  );
};

interface ApiData {
  revenue_growths: Record<string, string>;
  net_margins: Record<string, string>;
  pe_ratios: Record<string, string>;
  revenue_per_employees: Record<string, string>;
  sentiment: Record<string, string>;
}

const sectors = [
  "technology",
  "energy",
  "healthcare",
  "retail",
  "financial",
  "consumer_cyclic",
  "consumer_noncyclic",
  "services",
  "basic_materials",
  "capital_goods",
  "transportation",
  "utilities",
  "conglomerates",
];
const images: Record<string, string> = {
  technology: "/tech.png",
  energy: "/energy.png",
  healthcare: "/health.png",
  retail: "/retail.png",
  financial: "/financial.png",
  consumer_cyclic: "/consumer_cyclic.png",
  consumer_noncyclic: "/consumer_noncyclic.png",
  services: "/services.png",
  basic_materials: "/basic_materials.png",
  capital_goods: "/capital_goods.png",
  transportation: "/transportation.png",
  utilities: "/utilities.png",
  conglomerates: "/conglomerates.png",
};



const CardDemo: React.FC = () => {
  const [data, setData] = useState<CardProps[]>([]);
  // const apiData: ApiData = {
  //   revenue_growths: {
  //     technology: "6.68 %",
  //     energy: "3.17 %",
  //     healthcare: "1.01 %",
  //     retail: "1.12 %",
  //     financial: "9.47 %",
  //   },
  //   net_margins: {
  //     technology: "18.87 %",
  //     energy: "3.75 %",
  //     healthcare: "5.47 %",
  //     retail: "3.47 %",
  //     financial: "9.83 %",
  //   },
  //   pe_ratios: {
  //     technology: "37.24",
  //     energy: "11.78",
  //     healthcare: "118.03",
  //     retail: "34.67",
  //     financial: "15.99",
  //   },
  //   revenue_per_employees: {
  //     technology: "601,310",
  //     energy: "2,730,903",
  //     healthcare: "527,597",
  //     retail: "402,374",
  //     financial: "1,290,622",
  //   },
  //   sentiment: {
  //     technology: "Green",
  //     energy: "Yellow",
  //     healthcare: "Red",
  //     retail: "Red",
  //     financial: "Green",
  //   },
  // };
  useEffect(() => {
    const fetchD = async () => {
      const response = await axios.get("http://98.70.9.194:8069/api/sectors");
      const apiData : ApiData = response.data;
       const Fdata = sectors.map((sector) => ({
        sector: `${sector.charAt(0).toUpperCase() + sector.slice(1)} Sector`,
        lastUpdate: "July 29th, 2024",
        revenueGrowth: apiData.revenue_growths[sector] || "N/A",
        netMargin: apiData.net_margins[sector] || "N/A",
        peRatio: apiData.pe_ratios[sector] || "N/A",
        revenuePerEmployee: `$${apiData.revenue_per_employees[sector]}` || "N/A",
        sentiment: apiData.sentiment[sector] || "N/A",
        rank: "4/5", // Assuming rank is static for now as it's not provided by the API
        imageSrc: images[sector], // Add this line
      }));
      setData(Fdata);
    }
    fetchD();
   
    
  
  }, [])
  
  


  return (
    <div className="flex flex-wrap p-5 justify-center h-full overflow-scroll w-full">
      {data.map((item) => (
        <Card key={item.sector} {...item} />
      ))}
    </div>
  );
};

export default CardDemo;







// import { Button } from '@/components/ui/button'
// import React from 'react'

// function page() {
//   return (
//     <div className='w-full h-full p-5 '>
      
//       <div className='w-1/3 h-1/2 bg--700 shadow-lg shadow-zinc-400 border-2 flex gap-14 border-purple-600'>
//       <div className='w-[170px] p-2 py-5 bg--100 flex flex-col justify-between gap-2 h-full'>
//         <div className=" text-sm mb-4">
//         <h1 className='text-2xl font-semibold tracking-tight'>Technology</h1>

//           Last Update: 20.12.2032</div>
//         <Button >Portfolio</Button>

//       </div>

//       <div className='w-full p-2 py-6 bg--100 h-full'>
//         <div className='flex flex-col justify-between h-full font-[500] leading-2'>
//         <div className="mb-2">Revenue Growth: </div>
//      <div className="mb-2">Net Margin: </div>
//      <div className="mb-2">P/E Ratio: </div>
//      <div className="mb-2">Revenue/Employee: </div>
//      <div className="flex items-center mb-2">
//        <span className="mr-2">Sentiment:</span>
//        <span className={`w-3 h-3 rounded-full bg--500`}></span>
//      </div>
//      <div>Rank: </div>
//         </div>
//       </div>

//       </div>
//     </div>
//   )
// }

// export default page