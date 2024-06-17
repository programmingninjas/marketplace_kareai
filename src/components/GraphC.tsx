import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
interface props{
    sector : string;
}

const GraphComponent: React.FC<props> = ({sector}) => {
    const [inputValue, setInputValue] = useState('');
    const [graphData, setGraphData] = useState<any>(null);
    const [graphType, setGraphType] = useState<string | null>(null);


    const handleMessageSend = async () => {
            try {
                const response = await axios.post('https://0b67-2405-201-4041-c8-9841-7806-6aab-8d4a.ngrok-free.app/api/market_size_plot',  { industry: sector });
                console.log(response.data);

                if (response.data !== null) {
                    setGraphData(response.data.data);
                    setGraphType(response.data.type);
                } else {
                    console.log('No data received');
                }
                setInputValue('');
            } catch (error) {
                console.error('Error fetching graph data:', error);
            }
    };
    useEffect(() => {
      handleMessageSend()
    
      
    }, [sector])
    

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleMessageSend();
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6">
            
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
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
                )}
            </div>
        </main>
    );
};

export default GraphComponent;
