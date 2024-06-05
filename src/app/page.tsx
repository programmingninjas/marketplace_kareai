"use client"
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import React from 'react'

function page() {
  return (
    <div className='w-full flex'><Sidebar/>
    <div className='w-full h-full px-5 '>
    <div className=' w-full p-4 mt-10 '>
        <h1 className='  font-bold text-3xl font-sans  '><span className='text-[#A785B2]'>Hello,</span> <span className='text-[#540F66]'>Ayan</span>  </h1>
    </div>
    <div className='w-full mt-5 pl-4 py-7'>
        <Button className='  w-20 hover:drop-shadow-lg transition-all h-7 text-black bg-white border-2 rounded-2xl' >All 
        <span className='bg-zinc-100 border rounded-full w-5 h-5 text-[10px] ml-2 flex justify-center items-center'>4</span>
        </Button>
        <Button className=' m-3 w-auto hover:drop-shadow-lg transition-all h-7 text-black bg-white border-2 rounded-2xl' >Research Agents         <span className='bg-zinc-100 border rounded-full w-5 h-5 text-[10px] ml-2 flex justify-center items-center'>2</span>
</Button>
<Button className=' w-auto hover:drop-shadow-lg transition-all h-7 text-black bg-white border-2 rounded-2xl' >Analytics Agents<span className='bg-zinc-100 border rounded-full w-5 h-5 text-[10px] ml-2 flex justify-center items-center'>2</span>
</Button>
    </div>
    <div className='w-full py-5 flex gap-5 '>
   
<Link href={"/market_research_agent"}>
<Card className='border-2 text-[#540F66]'>
  <CardHeader>
    <CardTitle>Market Research agent</CardTitle>
    <CardDescription>Generates an Industry Landscape Report</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Based on the selected industry this</p> 
    <p>agent will give you insights about market.</p>
  </CardContent>
</Card>
</Link>
<Link href={"/medical_research_agent"}>
<Card className='border-2 text-[#540F66]'>
  <CardHeader>
    <CardTitle>Medical Research Agent</CardTitle>
    <CardDescription>Helps to find related medical researches</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Based on the query given it searches</p>
    <p>for related medical research papers.</p>
  </CardContent>
</Card>
</Link>
<Card className='border-2 text-[#540F66]'>
  <CardHeader>
    <CardTitle>Financial Analytics Agent</CardTitle>
    <CardDescription>Analyses financial insights of selected company</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Based on company it analyses the earnings</p>
    <p>of the company and generates insights.</p>
  </CardContent>
</Card>

    </div>
   

        </div>
    </div>
  )
}

export default page