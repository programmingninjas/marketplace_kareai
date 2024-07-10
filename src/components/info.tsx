import { InfoIcon } from "lucide-react";
import React from 'react'
interface props{
    msg:string;
}
const info :React.FC<props> = ({msg}) => {
  return (
    <div className="relative group">
                              <InfoIcon
                                className="w-4 cursor-pointer hover:text-blue-500"
                                
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               {msg}
                              </div>
   </div>
  )
}

export default info