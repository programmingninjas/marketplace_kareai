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
import Layout from '@/components/Layout'
import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/clerk-react';
import CardComponent from '@/components/CardComponent'
import TabsDemo from '@/components/helper'
import { Input } from '@/components/ui/input'
// import { NavbarDemo } from '@/components/Navbar'


function page() {
  const { user } = useUser();
  return (
    <Layout>

      <div className=' w-full h-full'>

          <div className=' w-full flex justify-between items-center px-6 py-4 mt-10 '>
            <h1 className='  font-bold text-3xl font-sans  '><span className='text-black'>Hello,</span> <span className='text-black'>Ayan</span>  </h1>
            <div className='flex gap-2'>
            <Input placeholder='Search Workflows' className='w-[600px] '/>
            <Button className='w-[4.5rem] h-10 bg-gradient-to-r from-purple-700 to-[#540F66]'>Search</Button>

            </div>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
          <div className='mt-3 p-5 ml-24 bg--50 flex justify-center items-center'>
            <div className='tracking-tight w-[50%] text-center justify-items-start whitespace-normal '>Lorem ipsmet consectetur  elit. Magni ipsa inventore beatae similique rem. Accusamus sit recusandae optio earum aperiam deleniti dolor beatae, commodi maiores nisi quae atque vero maxime.cusantium alias at doloribus quibusdam sit ea ex delectus  </div>
          </div>

          {/* <div className='w-[85%] mt-20 flex justify-evenly items-center m-auto bg-'  >
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>

          </div> */}
          <div className='flex items-center justify-center'>
          <TabsDemo/>

          </div>
         

        </div>

    </Layout>
  )
}

export default page