"use client"
import React, { useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

interface Props {
  data: any;
  type: string;
  source: string;
  title: string;
}

const GraphComponent: React.FC<Props> = ({ data, type, source, title }) => {
  const [graphData, setGraphData] = useState<any>(data);
  const [graphType, setGraphType] = useState<string | null>(type);

  return (
    <main className="flex justify-evenly items-center h-[500px]">
      <div className="w-full max-w-2xl h-96">
        <h3>{title}</h3>

        {graphType === "Pie Chart" && (
          <ResponsivePie
            data={graphData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLabelsSkipAngle={10}
            arcLabelsTextColor="#333333"
          />
        )}
        {(graphType === "Bar Chart" || graphType === "Line Chart") && (
          <ResponsiveBar
            data={graphData}
            indexBy="label"
            margin={{ top: 50, right: 80, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={(d: any) => d.data.valueColor}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "USD Billion",
              legendPosition: "middle",
              legendOffset: -50,
              truncateTickAt: 0,
            }}
            axisBottom={{
              legend: "Year",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: "middle",
              legendOffset: 40,
              truncateTickAt: 0,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["opacity", 0]],
            }}
          />
        )}
    <a href={`${source}`} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl">source</h3>
        </a>
      </div>
    </main>
  );
};

export default GraphComponent;
