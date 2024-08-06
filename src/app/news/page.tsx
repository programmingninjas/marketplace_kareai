"use client"

import Announcements from "@/components/Newstable"
import { Sparkle } from "lucide-react"

const page = () => {
  return (
    <div className="w-full h-full p-5 ">
    <h1 className="text-2xl font-semibold leading-4">Announcements Dashboard</h1>
    <div className="flex items-center gap-1 mt-3">
    <p className="text-sm font-light text-gray-400">Powered by ai</p>
    <Sparkle className="text-purple-700 w-4 h-4 "/>

    </div>
      <Announcements/>
      
    </div>
  )
}

export default page