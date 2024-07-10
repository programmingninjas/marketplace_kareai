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
import Layout from '@/components/Layout'
import { SignOutButton } from '@clerk/nextjs';
import { CircleUserIcon, PersonStandingIcon, Rocket } from 'lucide-react'

interface Props {
  name: string
}

const CardComponent: React.FC<Props> = ({ name }) => {
  return (
    <Card className='border-2 text-black'>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>Based on company it analyses the earnings of the company and generates insights.</p>
        <p></p>
        <div className='flex gap-2 mt-5'>
          <div className="rounded-full bg-gradient-to-r from-purple-700 to-[#540F66] px-3 py-1 w-[6rem] text-xs font-medium text-primary-foreground flex items-center justify-center">
            <span>framework</span>
          </div>
          <div className="rounded-full bg-gradient-to-r from-purple-700 to-[#540F66] px-3 py-2 w-[6rem] text-xs font-medium text-primary-foreground flex items-center justify-center">
            <span>framework</span>
          </div>
        </div>
        {/* <div className='mt-5 flex justify-between gap-1 w-full text-black '>
          <div className='flex gap-1'>
            <CircleUserIcon />
            KareAi
          </div>
          <div className='flex'>
            <Rocket />
            1024 runs
          </div>
        </div> */}
      </CardContent>
    </Card>
  )
}

export default CardComponent
