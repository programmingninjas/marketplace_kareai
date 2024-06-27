"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Initializing model...",
  },
  {
    text: "Fetching information...",
  },
  {
    text: "Analyzing gathered information...",
  },
  {
    text: "Synthesizing information...",
  },
  {
    text: "Finalizing analysis...",
  },
  {
    text: "Refining the output quality",
  },
  {
    text: "Almost ready with your response...",
  },
  {
    text: "Here you go !!",
  },
];

export default function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="h-full w-full flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
    </div>
  );
}
