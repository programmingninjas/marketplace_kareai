// // import React, { useEffect, useState } from 'react';
// // import { ResponsiveBar } from "@nivo/bar";
// // import { FinancialSummary } from "./VerticalBox";
// // import MarkdownRenderer from './Markdown';

// // type FinancialData = {
// //   graphs: {
// //     assets: {
// //       data: { label: string; value: number }[];
// //       insights: string;
// //     };
// //     liabilities: {
// //       data: { label: string; value: number }[];
// //       insights: string;
// //     };
// //     equity: {
// //       data: { label: string; value: number }[];
// //       insights: string;
// //     };
// //     ratios: {
// //       data: number[];
// //       insights: string;
// //     };
// //   };
// // };

// // type FinancialSummaryComponentProps = {
// //   financialData: any;
// // };

// // const FinancialSummaryComponent: React.FC<FinancialSummaryComponentProps> = ({ financialData }) => {
// //   console.log(financialData)
// //   const [assetsData, setAssetsData] = useState(financialData.assets.data);
// //   const [liabilitiesData, setLiabilitiesData] = useState(financialData.liabilities.data);
// //   const [equityData, setEquityData] = useState(financialData.equity.data);
// //   const [financialRatios, setFinancialRatios] = useState({
// //     currentRatio: financialData.ratios.data[0],
// //     DebtTEq: financialData.ratios.data[1],
// //     QuickR: financialData.ratios.data[2],
// //     Roe: financialData.ratios.data[3],
// //     AssetT: financialData.ratios.data[4],
// //   });
// //   const [insights, setInsights] = useState({
// //     assets: financialData.assets.insights,
// //     liabilities: financialData.liabilities.insights,
// //     equity: financialData.equity.insights,
// //     ratios: financialData.ratios.insights,
// //   });

// //   return (
// //     <div className="p-10 space-y-4">
// //       <div className="grid grid-cols-2 gap-4">
// //         <div>
// //           <BarChart className="w-full aspect-[5/3]" color="#007BFF" data={assetsData} />
// //           <h3 className="text-center text-lg font-semibold mt-4">Assets</h3>
// //           <MarkdownRenderer tt={insights.assets}/>
// //         </div>
// //         <div>
// //           <BarChart className="w-full aspect-[5/3]" color="#540F66" data={liabilitiesData} />
// //           <h3 className="text-center text-lg font-semibold mt-4">Liabilities</h3>
// //           <MarkdownRenderer tt={insights.liabilities}/>
// //         </div>
// //       </div>
// //       <div className="">
// //         <div className="grid grid-cols-2 gap-4">
// //           <div className="mt-14 ">
// //             <BarChart className="w-full aspect-[3/3]" color="#D1B892" data={equityData} />
// //             <h3 className="text-center text-lg font-semibold">Equity</h3>
// //             <MarkdownRenderer tt={insights.equity}/>

// //           </div>
// //           <div className="mt-10">
// //             <FinancialSummary
// //               currentRatio={financialRatios.currentRatio}
// //               DebtTEq={financialRatios.DebtTEq}
// //               QuickR={financialRatios.QuickR}
// //               Roe={financialRatios.Roe}
// //               AssetT={financialRatios.AssetT}
// //             />
// //             <h2 className="text-lg text-center mt-9 font-semibold">Ratio Analysis</h2>
// //             <MarkdownRenderer tt={insights.ratios}/>

// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // function BarChart({ className, color, data }: { className: string; color: string; data: { label: string; value: number }[] }) {
// //   return (
// //     <div className={className}>
// //       <ResponsiveBar
// //         data={data.map(item => ({ name: item.label, value: item.value }))}
// //         keys={["value"]}
// //         indexBy="name"
// //         margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
// //         padding={0.3}
// //         colors={[color]}
// //         axisBottom={{
// //           tickSize: 0,
// //           tickPadding: 16,
// //         }}
// //         axisLeft={{
// //           tickSize: 0,
// //           tickValues: 4,
// //           tickPadding: 16,
// //         }}
// //         gridYValues={4}
// //         theme={{
// //           tooltip: {
// //             chip: {
// //               borderRadius: "9999px",
// //             },
// //             container: {
// //               fontSize: "12px",
// //               textTransform: "capitalize",
// //               borderRadius: "6px",
// //             },
// //           },
// //           grid: {
// //             line: {
// //               stroke: "#f3f4f6",
// //             },
// //           },
// //         }}
// //         tooltipLabel={({ id }) => `${id}`}
// //         enableLabel={false}
// //         role="application"
// //         ariaLabel="A bar chart showing data"
// //       />
// //     </div>
// //   );
// // }

// // export default FinancialSummaryComponent;


// import React, { useEffect, useState } from 'react';
// import { ResponsiveBar } from "@nivo/bar";
// import { FinancialSummary } from "./VerticalBox";
// import MarkdownRenderer from './Markdown';

// type FinancialData = {
//   assets: {
//     data: { label: string; value: number }[];
//     insights: string;
//   };
//   liabilities: {
//     data: { label: string; value: number }[];
//     insights: string;
//   };
//   equity: {
//     data: { label: string; value: number }[];
//     insights: string;
//   };
//   ratios: {
//     data: number[];
//     insights: string;
//   };
// };

// type FinancialSummaryComponentProps = {
//   financialData: any;
// };

// const FinancialSummaryComponent: React.FC<FinancialSummaryComponentProps> = ({ financialData }) => {
//   if (!financialData || financialData.length === 0) {
//     return <div className="p-10">No data available</div>;
//   }

//   const [assetsData, setAssetsData] = useState(financialData.assets.data || []);
//   const [liabilitiesData, setLiabilitiesData] = useState(financialData.liabilities.data || []);
//   const [equityData, setEquityData] = useState(financialData.equity.data || []);
//   const [financialRatios, setFinancialRatios] = useState({
//     currentRatio: financialData.ratios.data[0] || 0,
//     DebtTEq: financialData.ratios.data[1] || 0,
//     QuickR: financialData.ratios.data[2] || 0,
//     Roe: financialData.ratios.data[3] || 0,
//     AssetT: financialData.ratios.data[4] || 0,
//   });
//   const [insights, setInsights] = useState({
//     assets: financialData.assets.insights || '',
//     liabilities: financialData.liabilities.insights || '',
//     equity: financialData.equity.insights || '',
//     ratios: financialData.ratios.insights || '',
//   });

//   return (
//     <div className="p-10 space-y-4">
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <h3 className="text-center text-lg font-semibold mt-4">Assets</h3>
//           {assetsData.length > 0 ? (
//             <BarChart className="w-full aspect-[5/3]" color="#007BFF" data={assetsData} />
//           ) : (
//             <p>No data available</p>
//           )}
//           <MarkdownRenderer tt={insights.assets} />
//         </div>
//         <div>
//           <h3 className="text-center text-lg font-semibold mt-4">Liabilities</h3>
//           {liabilitiesData.length > 0 ? (
//             <BarChart className="w-full aspect-[5/3]" color="#540F66" data={liabilitiesData} />
//           ) : (
//             <p>No data available</p>
//           )}
//           <MarkdownRenderer tt={insights.liabilities} />
//         </div>
//       </div>
//       <div className="">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="mt-14">
//             <h3 className="text-center text-lg font-semibold">Equity</h3>
//             {equityData.length > 0 ? (
//               <BarChart className="w-full aspect-[3/3]" color="#D1B892" data={equityData} />
//             ) : (
//               <p>No data available</p>
//             )}
//             <MarkdownRenderer tt={insights.equity} />
//           </div>
//           <div className="mt-10">
//             <FinancialSummary
//               currentRatio={financialRatios.currentRatio}
//               DebtTEq={financialRatios.DebtTEq}
//               QuickR={financialRatios.QuickR}
//               Roe={financialRatios.Roe}
//               AssetT={financialRatios.AssetT}
//             />
//             <h2 className="text-lg text-center mt-9 font-semibold">Ratio Analysis</h2>
//             <MarkdownRenderer tt={insights.ratios} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// function BarChart({ className, color, data }: { className: string; color: string; data: { label: string; value: number }[] }) {
//   return (
//     <div className={className}>
//       <ResponsiveBar
//         data={data.map(item => ({ name: item.label, value: item.value }))}
//         keys={["value"]}
//         indexBy="name"
//         margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
//         padding={0.3}
//         colors={[color]}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 4,
//           tickPadding: 16,
//         }}
//         gridYValues={4}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         tooltipLabel={({ id }) => `${id}`}
//         enableLabel={false}
//         role="application"
//         ariaLabel="A bar chart showing data"
//       />
//     </div>
//   );
// }

// export default FinancialSummaryComponent;

// import React, { useEffect, useState } from 'react';
// import { ResponsiveBar } from "@nivo/bar";
// import { FinancialSummary } from "./VerticalBox";
// import MarkdownRenderer from './Markdown';

// type FinancialData = {
//   assets: {
//     data: { label: string; value: number }[];
//     insights: string;
//   };
//   liabilities: {
//     data: { label: string; value: number }[];
//     insights: string;
//   };
//   equity: {
//     data: { label: string; value: number }[];
//     insights: string;
//   };
//   ratios: {
//     data: number[];
//     insights: string;
//   };
// };

// type FinancialSummaryComponentProps = {
//   financialData: any;
//   left:boolean;
// };

// const FinancialSummaryComponent: React.FC<FinancialSummaryComponentProps> = ({ financialData,left }) => {
//   const [assetsData, setAssetsData] = useState(financialData?.assets?.data || []);
//   const [liabilitiesData, setLiabilitiesData] = useState(financialData?.liabilities?.data || []);
//   const [equityData, setEquityData] = useState(financialData?.equity?.data || []);
//   const [financialRatios, setFinancialRatios] = useState({
//     currentRatio: financialData?.ratios?.data[0] || 0,
//     DebtTEq: financialData?.ratios?.data[1] || 0,
//     QuickR: financialData?.ratios?.data[2] || 0,
//     Roe: financialData?.ratios?.data[3] || 0,
//     AssetT: financialData?.ratios?.data[4] || 0,
//   });
//   const [insights, setInsights] = useState({
//     assets: financialData?.assets?.insights || '',
//     liabilities: financialData?.liabilities?.insights || '',
//     equity: financialData?.equity?.insights || '',
//     ratios: financialData?.ratios?.insights || '',
//   });

//   if (!financialData) {
//     return <div className="p-10">No data available</div>;
//   }

//   return (
//     <div className="p-1 space-y-4">
//       <div className="grid grid-cols-2 gap-4">
//         <div className='border shadow-lg shadow-zinc-300'>
//           <h3 className="text-center text-lg font-semibold mt-4">Assets</h3>
//           {assetsData.length > 0 ? (
//             <BarChart className="w-full  mt-5 aspect-[5/3]" color="#007BFF" data={assetsData} />
//           ) : (
//             <p>No data available</p>
//           )}
//           <MarkdownRenderer tt={insights.assets} />
//         </div>
//         <div className='border shadow-lg shadow-zinc-300'>
//           <h3 className="text-center text-lg font-semibold mt-4">Liabilities</h3>
//           {liabilitiesData.length > 0 ? (
//             <BarChart className="w-full mt-5 aspect-[5/3]" color="#540F66" data={liabilitiesData} />
//           ) : (
//             <p>No data available</p>
//           )}
//           <MarkdownRenderer tt={insights.liabilities} />
//         </div>
//       </div>
//       <div className="">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="mt-14 border shadow-zinc-300 shadow-lg">
//             <h3 className="text-center text-lg font-semibold mt-4">Equity</h3>
//             {equityData.length > 0 ? (
//               <BarChart className={`${left ? "aspect-[3/3]" : "aspect-[5/3]"} w-full mt-5 `} color="#D1B892" data={equityData} />
//             ) : (
//               <p>No data available</p>
//             )}
//             <MarkdownRenderer tt={insights.equity} />
//           </div>
//           <div className="mt-14 border shadow-lg  py-5 shadow-zinc-300 flex flex-col bg--300">
//           <h2 className="text-lg text-center mb-5  font-semibold">Ratio Analysis</h2>
//             <div className='mb-6'>
//             <FinancialSummary 
//               currentRatio={financialRatios.currentRatio}
//               DebtTEq={financialRatios.DebtTEq}
//               QuickR={financialRatios.QuickR}
//               Roe={financialRatios.Roe}
//               AssetT={financialRatios.AssetT}
//             />
//             </div>
            
//             <MarkdownRenderer  tt={insights.ratios} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// function BarChart({ className, color, data }: { className: string; color: string; data: { label: string; value: number }[] }) {
//   return (
//     <div className={className}>
//       <ResponsiveBar
//         data={data.map(item => ({ name: item.label, value: item.value }))}
//         keys={["value"]}
//         indexBy="name"
//         margin={{ top: 0, right: 14, bottom: 40, left: 40 }}
//         padding={0.3}
//         colors={[color]}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 4,
//           tickPadding: 16,
//         }}
//         gridYValues={4}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         tooltipLabel={({ id }) => `${id}`}
//         enableLabel={false}
//         role="application"
//         ariaLabel="A bar chart showing data"
//       />
//     </div>
//   );
// }

// export default FinancialSummaryComponent;

import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from "@nivo/bar";
import { FinancialSummary } from "./VerticalBox";
import MarkdownRenderer from './Markdown';

type FinancialData = {
  assets: {
    data: { label: string; value: number }[];
    insights: string;
  };
  liabilities: {
    data: { label: string; value: number }[];
    insights: string;
  };
  equity: {
    data: { label: string; value: number }[];
    insights: string;
  };
  ratios: {
    data: number[];
    insights: string;
  };
};

type FinancialSummaryComponentProps = {
  financialData: any;
  left: boolean;
};

const getNumber = (value: any): number => {
  if (typeof value === "object" && value !== null) {
    const numberValue = parseFloat(value.$numberDouble);
    return isNaN(numberValue) ? 0 : numberValue;
  }
  const numberValue = parseFloat(value);
  return isNaN(numberValue) ? 0 : numberValue;
};

const FinancialSummaryComponent: React.FC<FinancialSummaryComponentProps> = ({ financialData, left }) => {
  const [assetsData, setAssetsData] = useState(financialData?.assets?.data || []);
  const [liabilitiesData, setLiabilitiesData] = useState(financialData?.liabilities?.data || []);
  const [equityData, setEquityData] = useState(financialData?.equity?.data || []);
  const [financialRatios, setFinancialRatios] = useState({
    currentRatio: getNumber(financialData?.ratios?.data[0]),
    DebtTEq: getNumber(financialData?.ratios?.data[1]),
    QuickR: getNumber(financialData?.ratios?.data[2]),
    Roe: getNumber(financialData?.ratios?.data[3]),
    AssetT: getNumber(financialData?.ratios?.data[4]),
  });
  const [insights, setInsights] = useState({
    assets: financialData?.assets?.insights || '',
    liabilities: financialData?.liabilities?.insights || '',
    equity: financialData?.equity?.insights || '',
    ratios: financialData?.ratios?.insights || '',
  });

  // useEffect(() => {
  //   const loadDataFromLocalStorage = () => {
  //     const storedData = localStorage.getItem('financialData');
  //     if (storedData) {
  //       const parsedData = JSON.parse(storedData);

  //       setAssetsData(parsedData?.assets?.data || []);
  //       setLiabilitiesData(parsedData?.liabilities?.data || []);
  //       setEquityData(parsedData?.equity?.data || []);
  //       setFinancialRatios({
  //         currentRatio: getNumber(parsedData?.ratios?.data[0]),
  //         DebtTEq: getNumber(parsedData?.ratios?.data[1]),
  //         QuickR: getNumber(parsedData?.ratios?.data[2]),
  //         Roe: getNumber(parsedData?.ratios?.data[3]),
  //         AssetT: getNumber(parsedData?.ratios?.data[4]),
  //       });
  //       setInsights({
  //         assets: parsedData?.assets?.insights || '',
  //         liabilities: parsedData?.liabilities?.insights || '',
  //         equity: parsedData?.equity?.insights || '',
  //         ratios: parsedData?.ratios?.insights || '',
  //       });
  //     } else {
  //       // Reset the states if no data is available in local storage
  //       setAssetsData([]);
  //       setLiabilitiesData([]);
  //       setEquityData([]);
  //       setFinancialRatios({
  //         currentRatio: 0,
  //         DebtTEq: 0,
  //         QuickR: 0,
  //         Roe: 0,
  //         AssetT: 0,
  //       });
  //       setInsights({
  //         assets: '',
  //         liabilities: '',
  //         equity: '',
  //         ratios: '',
  //       });
  //     }
  //   };

  //   loadDataFromLocalStorage();
  // }, []);

  if (!financialData) {
    return <div className="p-10">No data available</div>;
  }

  return (
    <div className="p-1 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className='border shadow-lg shadow-zinc-300'>
          <h3 className="text-center text-lg font-semibold mt-4">Assets</h3>
          {assetsData.length > 0 ? (
            <BarChart className="w-full mt-5 aspect-[5/3]" color="#007BFF" data={assetsData} />
          ) : (
            <p>No data available</p>
          )}
          <MarkdownRenderer tt={insights.assets} />
        </div>
        <div className='border shadow-lg shadow-zinc-300'>
          <h3 className="text-center text-lg font-semibold mt-4">Liabilities</h3>
          {liabilitiesData.length > 0 ? (
            <BarChart className="w-full mt-5 aspect-[5/3]" color="#540F66" data={liabilitiesData} />
          ) : (
            <p>No data available</p>
          )}
          <MarkdownRenderer tt={insights.liabilities} />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-14 border shadow-zinc-300 shadow-lg">
            <h3 className="text-center text-lg font-semibold mt-4">Equity</h3>
            {equityData.length > 0 ? (
              <BarChart className={`${left ? "aspect-[3/3]" : "aspect-[5/3]"} w-full mt-5`} color="#D1B892" data={equityData} />
            ) : (
              <p>No data available</p>
            )}
            <MarkdownRenderer tt={insights.equity} />
          </div>
          <div className="mt-14 border shadow-lg py-5 shadow-zinc-300 flex flex-col bg--300">
            <h2 className="text-lg text-center mb-5 font-semibold">Ratio Analysis</h2>
            <div className='mb-6'>
              <FinancialSummary 
                currentRatio={financialRatios.currentRatio}
                DebtTEq={financialRatios.DebtTEq}
                QuickR={financialRatios.QuickR}
                Roe={financialRatios.Roe}
                AssetT={financialRatios.AssetT}
              />
            </div>
            <MarkdownRenderer tt={insights.ratios} />
          </div>
        </div>
      </div>
    </div>
  );
};

function BarChart({ className, color, data }: { className: string; color: string; data: { label: string; value: number }[] }) {
  return (
    <div className={className}>
      <ResponsiveBar
        data={data.map(item => ({ name: item.label, value: getNumber(item.value) }))}
        keys={["value"]}
        indexBy="name"
        margin={{ top: 0, right: 14, bottom: 40, left: 40 }}
        padding={0.3}
        colors={[color]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

export default FinancialSummaryComponent;
