import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

// Define the type for the data
interface BarData {
    country: string;
    'hot dog': number;
    burger: number;
    sandwich: number;
    kebab: number;
    fries: number;
    donut: number;
}

// Static data for the chart
const data = [
    {
        country: 'AD',
        'hot dog': 72,
        burger: 92,
        sandwich: 74,
        kebab: 44,
        fries: 29,
        donut: 77,
    },
    {
        country: 'AE',
        'hot dog': 80,
        burger: 45,
        sandwich: 55,
        kebab: 91,
        fries: 35,
        donut: 72,
    },
    {
        country: 'AF',
        'hot dog': 94,
        burger: 34,
        sandwich: 66,
        kebab: 60,
        fries: 58,
        donut: 83,
    },
    // Add more data as needed
];

const MyResponsiveBar: React.FC = () => (
    <div style={{ height: '500px' }}>
        <ResponsiveBar
            data={data}
            keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
            indexBy="country"
            margin={{ top: 10, right: 130, bottom: 60, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            fill={[
                {
                    match: {
                        id: 'fries',
                    },
                    id: 'dots',
                },
                {
                    match: {
                        id: 'sandwich',
                    },
                    id: 'lines',
                },
            ]}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
        />
    </div>
);

export default MyResponsiveBar;
