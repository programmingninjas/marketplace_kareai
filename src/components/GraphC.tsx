import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
interface props{
    data : any,
    type: string,
    source: any 

}

const GraphComponent: React.FC<props> = ({data,type, source}) => {
    const [graphData, setGraphData] = useState<any>(data);
    const [graphType, setGraphType] = useState<string | null>(type);
console.log(data);


     return (
         <main className="flex  justify-evenly  items-center h-[500px]">
            
             <div className="w-full max-w-2xl h-96">
                 {graphType === 'Pie Chart' && (
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
                         legends={[
                             {
                                 anchor: 'bottom',
                                 direction: 'row',
                                 justify: false,
                                 translateX: 0,
                                 translateY: 56,
                                 itemsSpacing: 0,
                                 itemWidth: 100,
                                 itemHeight: 18,
                                 itemTextColor: '#999',
                                 itemDirection: 'left-to-right',
                                 itemOpacity: 1,
                                 symbolSize: 18,
                                 symbolShape: 'circle',
                                 effects: [
                                     {
                                         on: 'hover',
                                         style: {
                                             itemTextColor: '#000'
                                         }
                                     }
                                 ]
                             }
                         ]}
                     />
                 )}
                 {graphType === 'Bar Chart' || graphType === 'Line Chart' && (
                     <ResponsiveBar
                         data={graphData}
                         indexBy="label"
                         margin={{ top: 50, right: 80, bottom: 50, left: 60 }}
                         padding={0.3}
                         valueScale={{ type: 'linear' }}
                         indexScale={{ type: 'band', round: true }}
                         colors={(d: any) => d.data.valueColor}
                         axisLeft={{
                             tickSize: 5,
                             tickPadding: 5,
                             tickRotation: 0,
                             legend: 'USD Billion',
                             legendPosition: 'middle',
                             legendOffset: -50,
                             truncateTickAt: 0
                         }}
                         axisBottom={{
                            legend: 'Year',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legendPosition: 'middle',
                            legendOffset: 40,
                            truncateTickAt: 0
                         }}
                         labelSkipWidth={12}
                         labelSkipHeight={12}
                         labelTextColor={{
                             from: 'color',
                             modifiers: [['opacity', 0]]
                         }}
                     />
                 )}
                 <h3 className="text-xl">{source}</h3>

             </div>
         </main>
     );
 };
 export default GraphComponent;



//testing import React, { useEffect, useState } from "react";
// import { ResponsivePie } from "@nivo/pie";
// import { ResponsiveBar } from "@nivo/bar";
// import { useState } from "react";

// const GraphComponent: React.FC<any> = ({ data, type, source }) => {
//   const [graphData, setGraphData] = useState<any>(data);
//   const [graphType, setGraphType] = useState<string | null>(type);

//   console.log(data);

//   return (
//     <main className="flex justify-evenly items-center h-[500px]">
//       <div className="w-full max-w-2xl h-96">
//         {graphType === "Pie Chart" && (
//           <ResponsivePie
//             data={graphData}
//             margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//             innerRadius={0.5}
//             padAngle={0.7}
//             cornerRadius={3}
//             activeOuterRadiusOffset={8}
//             arcLinkLabelsSkipAngle={10}
//             arcLinkLabelsTextColor="#333333"
//             arcLabelsSkipAngle={10}
//             arcLabelsTextColor="#333333"
//             legends={[
//               {
//                 anchor: "bottom",
//                 direction: "row",
//                 justify: false,
//                 translateX: 0,
//                 translateY: 56,
//                 itemsSpacing: 0,
//                 itemWidth: 100,
//                 itemHeight: 18,
//                 itemTextColor: "#999",
//                 itemDirection: "left-to-right",
//                 itemOpacity: 1,
//                 symbolSize: 18,
//                 symbolShape: "circle",
//                 effects: [
//                   {
//                     on: "hover",
//                     style: {
//                       itemTextColor: "#000",
//                     },
//                   },
//                 ],
//               },
//             ]}
//           />
//         )}
//         {(graphType === "Bar Chart" || graphType === "Line Chart") && (
//           <ResponsiveBar
//             data={graphData}
//             indexBy="label"
//             margin={{ top: 50, right: 80, bottom: 50, left: 60 }}
//             padding={0.3}
//             valueScale={{ type: "linear" }}
//             indexScale={{ type: "band", round: true }}
//             colors={(d: any) => d.data.valueColor}
//             axisLeft={{
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: "USD Billion",
//               legendPosition: "middle",
//               legendOffset: -50,
//               truncateTickAt: 0,
//             }}
//             axisBottom={{
//               legend: "Year",
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legendPosition: "middle",
//               legendOffset: 40,
//               truncateTickAt: 0,
//             }}
//             labelSkipWidth={12}
//             labelSkipHeight={12}
//             labelTextColor={{
//               from: "color",
//               modifiers: [["opacity", 0]],
//             }}
//           />
//         )}
//         <h3 className="text-xl">{source}</h3>
//       </div>
//     </main>
//   );
// };

// const TestGraphs: React.FC = () => {
//   const data = {
//     assets: [
//       { id: "Current Assets", label: "Current Assets", value: 67.46744157740994 },
//       { id: "Non Current Assets", label: "Non Current Assets", value: 32.331730769230774 }
//     ],
//     liabilities: [
//       { id: "Current Liabilities", label: "Current Liabilities", value: 23.331504444200593 },
//       { id: "Non Current Liabilities", label: "Non Current Liabilities", value: 26.739822231976294 }
//     ],
//     balance_sheet: [
//       { id: "Total Assets", label: "Total Assets", value: 42.60554478806775 },
//       { id: "Total Liabilities", label: "Total Liabilities", value: 29.53568719979776 },
//       { id: "Stockholders Equity", label: "Stockholders Equity", value: 27.858768012134487 }
//     ]
//   };

//   return (
//     <div>
//       <GraphComponent data={data.assets} type="Pie Chart" source="Assets" />
//       <GraphComponent data={data.liabilities} type="Bar Chart" source="Liabilities" />
//       <GraphComponent data={data.balance_sheet} type="Bar Chart" source="Balance Sheet" />
//     </div>
//   );
// };

// export default TestGraphs;
