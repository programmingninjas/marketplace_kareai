// import React, { useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { ResponsivePie } from "@nivo/pie";
// import { ResponsiveBar } from "@nivo/bar";
// interface props{
//     sector : string;
// }

// const GraphComponent: React.FC<props> = ({sector}) => {
//     const [inputValue, setInputValue] = useState('');
//     const [graphData, setGraphData] = useState<any>(null);
//     const [graphType, setGraphType] = useState<string | null>(null);


//     const handleMessageSend = async () => {
//             try {
//                 const response = await axios.post('https://0b67-2405-201-4041-c8-9841-7806-6aab-8d4a.ngrok-free.app/api/market_size_plot',  { industry: sector });
//                 console.log(response.data);

//                 if (response.data !== null) {
//                     setGraphData(response.data.data);
//                     setGraphType(response.data.type);
//                 } else {
//                     console.log('No data received');
//                 }
//                 setInputValue('');
//             } catch (error) {
//                 console.error('Error fetching graph data:', error);
//             }
//     };
//     useEffect(() => {
//       handleMessageSend()
    
      
//     }, [sector])
    

//     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//             handleMessageSend();
//         }
//     };

//     return (
//         <main className="flex  justify-evenly  items-center h-[500px]">
            
//             <div className="w-full max-w-2xl h-96">
//                 {graphType === 'Pie Chart' && (
//                     <ResponsivePie
//                         data={graphData}
//                         margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//                         innerRadius={0.5}
//                         padAngle={0.7}
//                         cornerRadius={3}
//                         activeOuterRadiusOffset={8}
//                         arcLinkLabelsSkipAngle={10}
//                         arcLinkLabelsTextColor="#333333"
//                         arcLabelsSkipAngle={10}
//                         arcLabelsTextColor="#333333"
//                         legends={[
//                             {
//                                 anchor: 'bottom',
//                                 direction: 'row',
//                                 justify: false,
//                                 translateX: 0,
//                                 translateY: 56,
//                                 itemsSpacing: 0,
//                                 itemWidth: 100,
//                                 itemHeight: 18,
//                                 itemTextColor: '#999',
//                                 itemDirection: 'left-to-right',
//                                 itemOpacity: 1,
//                                 symbolSize: 18,
//                                 symbolShape: 'circle',
//                                 effects: [
//                                     {
//                                         on: 'hover',
//                                         style: {
//                                             itemTextColor: '#000'
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]}
//                     />
//                 )}
//                 {graphType === 'Bar Chart' || graphType === 'Line Chart' && (
//                     <ResponsiveBar
//                         data={graphData}
//                         indexBy="label"
//                         margin={{ top: 50, right: 80, bottom: 50, left: 60 }}
//                         padding={0.3}
//                         valueScale={{ type: 'linear' }}
//                         indexScale={{ type: 'band', round: true }}
//                         colors={(d: any) => d.data.valueColor}
//                         axisLeft={{
//                             tickSize: 5,
//                             tickPadding: 5,
//                             tickRotation: 0,
//                             legend: 'USD Billion',
//                             legendPosition: 'middle',
//                             legendOffset: -50,
//                             truncateTickAt: 0
//                         }}
//                         labelSkipWidth={12}
//                         labelSkipHeight={12}
//                         labelTextColor={{
//                             from: 'color',
//                             modifiers: [['opacity', 0]]
//                         }}
//                     />
//                 )}
//             </div>
//         </main>
//     );
// };

// export default GraphComponent;


//testing 

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

interface Props {
    sector: string;
}

const GraphComponent: React.FC<Props> = ({ sector }) => {
    const [inputValue, setInputValue] = useState('');
    const [pieData, setPieData] = useState<any>(null);
    const [barData, setBarData] = useState<any>(null);

    // Static data for testing
    const staticPieData = [
        { id: "A", label: "A", value: 55 },
        { id: "B", label: "B", value: 25 },
        { id: "C", label: "C", value: 20 }
    ];

    const staticBarData = [
        { label: "A", value: 55, valueColor: "#ff7f0e" },
        { label: "B", value: 25, valueColor: "#1f77b4" },
        { label: "C", value: 20, valueColor: "#2ca02c" },
        { label: "D", value: 45, valueColor: "#d62728" },
        { label: "E", value: 35, valueColor: "#9467bd" },
        { label: "F", value: 50, valueColor: "#8c564b" },
        { label: "G", value: 40, valueColor: "#e377c2" },
        { label: "H", value: 30, valueColor: "#7f7f7f" },
        { label: "I", value: 60, valueColor: "#bcbd22" },
        { label: "J", value: 70, valueColor: "#17becf" }
    ];

    const handleMessageSend = async () => {
        try {
            // Commented out the API logic
            /*
            const response = await axios.post('https://0b67-2405-201-4041-c8-9841-7806-6aab-8d4a.ngrok-free.app/api/market_size_plot',  { industry: sector });
            console.log(response.data);

            if (response.data !== null) {
                setGraphData(response.data.data);
                setGraphType(response.data.type);
            } else {
                console.log('No data received');
            }
            */
            // Use static data for testing
            setPieData(staticPieData);
            setBarData(staticBarData);

            setInputValue('');
        } catch (error) {
            console.error('Error fetching graph data:', error);
        }
    };

    useEffect(() => {
        handleMessageSend();
    }, [sector]);

    return (
        <main className="flex  justify-evenly  items-center h-[500px]">
            <div className="w-full max-w-2xl h-96">
                <ResponsivePie
                    data={pieData}
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
            </div>
            <div className="w-full max-w-2xl h-96 mt-10">
                <ResponsiveBar
                    data={barData}
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
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                        from: 'color',
                        modifiers: [['opacity', 0]]
                    }}
                />
            </div>
        </main>
    );
};

export default GraphComponent;
