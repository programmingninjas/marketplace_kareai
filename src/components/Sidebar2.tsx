"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Sidebar = ({ categories, onSearch, onSelectCategory, selectedCategory }: any) => {
  return (
    <div className="w-64 bg-white h-screen max-h-full dark:bg-black border-r-2 border-neutral-200 p-4">
      <input
        type="text"
        placeholder="Search agents..."
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="space-y-4">
        {categories.map((category: string, index: number) => (
          <button
            key={index}
            onClick={() => onSelectCategory(category)}
            className={`block w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
              selectedCategory === category
                ? 'bg-purple-500 text-white'
                : 'text-gray-800 dark:text-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
