import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from 'axios';
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

interface Message {
    text: string | JSX.Element;
    sender: 'user' | 'agent';
    time: string;
}

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hey! I'm your Data Analysis Agent. How can i help you?", sender: "agent", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    const [inputValue, setInputValue] = useState('');
    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:8000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };
    const handleMessageSend = async () => {
        if (inputValue.trim() !== '') {
            try {
                const newMessage: Message = {
                    text: inputValue,
                    sender: 'user',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages([...messages, newMessage]);
                // Clear the input field after sending the message
                setInputValue('');
                const response = await axios.post('http://localhost:8000/api/market_size_plot', { industry: inputValue });
                console.log(response.data);
                if (response.data !== null) {
                    // If plot data exists, add it to the chat history
                    if (response.data.type === 'Pie Chart') {
                    const plotMessage: Message = {
                        text: <ResponsivePie data={response.data.data} // Set data for the pie chart
                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }} // Define margins around the chart
                        innerRadius={0.5} // Set inner radius for a donut chart
                        padAngle={0.7} // Set padding between slices
                        cornerRadius={3} // Set corner radius for slices
                        activeOuterRadiusOffset={8} // Set offset for active slice on hover
                        arcLinkLabelsSkipAngle={10} // Skip angle for link labels
                        arcLinkLabelsTextColor="#333333" // Color for link labels
                        arcLabelsSkipAngle={10} // Skip angle for arc labels
                        arcLabelsTextColor="#333333" // Color for arc labels
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
                        ]}/>, // Render React Nivo chart component
                        sender: 'agent',
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    };
                    setMessages(prevMessages => [...prevMessages, plotMessage]);
                } else if (response.data.type === 'Line Chart' || response.data.type === 'Bar Chart'){
                    const plotMessage: Message = {
                        text: <ResponsiveBar data={response.data.data} indexBy="label" 
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={(d: any) => d.data.valueColor} // Use valueColor from data to set the colors
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
                            modifiers: [
                                [
                                    'opacity',
                                    0
                                ]
                            ]
                        }}/>, // Render React Nivo chart component
                        sender: 'agent',
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    };
                    console.log(response.data.data);
                    setMessages(prevMessages => [...prevMessages, plotMessage]);
                }
                }
                else {
                    // Add the agent's response to the chat history
                    const agentMessage: Message = {
                        text: response.data.output,
                        sender: 'agent',
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    };
                    // Add the agent's response to the chat history
                    setMessages(prevMessages => [...prevMessages, agentMessage]);
                }
            } catch (error) {
                console.error('Error sending message:', error);
            }
        };
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default behavior of Enter key
            handleMessageSend();
        }
    };

    return (
        <main key="1" className="flex flex-col min-h-screen">
            <Card className="flex-1">
                <CardHeader className="flex flex-col p-6 border-b gap-1">
                    <div className="flex items-center gap-2">
                        <Button size="icon" variant="ghost">
                            <ChevronLeftIcon className="h-6 w-6" />
                            <span className="sr-only">Back</span>
                        </Button>
                        <div className="flex flex-col">
                            <h1 className="text-base font-bold leading-none sm:text-sm">Data Agent</h1>
                            <p className="text-xs leading-none">Online</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col p-6 space-y-4">
                    <ul className="flex flex-col gap-4">
                        {messages.map((message, index) => (
                            <li key={index} className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'} gap-1.5`}>
                                <div className="rounded-lg p-3 bg-gray-100 dark:bg-gray-800">
                                    {typeof message.text === 'string' ? (
                                        <div className="text-sm">{message.text}</div>
                                    ) : (
                                        <div className="h-96" style={{width:'650px'}}>
                                            {message.text} {/* Render the ResponsivePie component */}
                                        </div>
                                    )}
                                </div>
                                <time className="text-xs text-gray-500 dark:text-gray-400">{message.time}</time>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 items-center fixed bottom-0 left-0 w-full p-4 bg-white dark:bg-gray-900">
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            type="text"
                            placeholder="Type a message to send..."
                            onKeyDown={handleKeyDown}
                        />
                        <Label
                            className="flex items-center gap-2"
                            htmlFor="file"
                            style={{
                                cursor: 'pointer',
                                outline: '2px solid black',
                                borderRadius: '4px',
                                padding: '8px'
                            }}>
                            <input
                                type="file"
                                id="file"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <PaperclipIcon className="h-4 w-4 mr-1 inline-block" />
                            Attach
                        </Label>
                        <Button onClick={handleMessageSend}>
                            Send
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}

export default Chat;

function ChevronLeftIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}


function PaperclipIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
    )
}