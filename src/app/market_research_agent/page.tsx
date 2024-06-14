"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReactMarkdown from 'react-markdown';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import React, { useState, MouseEvent } from 'react'
import Loader from "@/components/Loader";
import { Copy, Save, WandIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm, Controller } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Sidebar from "@/components/sidebar"
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
// import html2pdf from 'html2pdf.js';
import html2pdf from 'html2pdf.js'
import Link from "next/link";
import { useRouter } from "next/navigation";
import NewComponent from "@/components/newC";
function Page() {


  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");
  const [content5, setContent5] = useState("");
  const [content6, setContent6] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(`https://b96b-2405-201-4041-c8-4d6b-a4f1-5a92-e190.ngrok-free.app/api/market_research`, {
        sector: data.sector,
        value_proposition: data.value_proposition,
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      setContent(response.data.industry_landscape);
      setContent2(response.data.msgp);
      setContent3(response.data.tt);
      setContent4(response.data.in);
      setContent5(response.data.top_5);
      setContent6(response.data.insights);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsSubmitting(false);
  };

  const loadingMessages = [
    "Fetching and Analyzing information...",
    "Compiling data...",
    "Almost there..."
  ];

  const customToolbarOptions = [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
    [{ direction: 'rtl' }], 
    [{ indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean'],
  ];

  const form = useForm();
  const router = useRouter();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Content copied to clipboard");
    }).catch((err) => {
      console.error('Could not copy text: ', err);
    });
  };

  const generatePDF = (content: string, filename: string) => {
    // Create a hidden div element and append the content
    const hiddenDiv = document.createElement('div');
    hiddenDiv.innerHTML = content;
    document.body.appendChild(hiddenDiv);

    // Define the pdf options
    const pdfOptions = {
      margin: 1,
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Convert the hidden div to PDF
    html2pdf().from(hiddenDiv).set(pdfOptions).save().then(() => {
      document.body.removeChild(hiddenDiv); // Clean up after download
    });
  };

  const downloadPDF = (content: string, contentId: string) => {
    generatePDF(content, `${contentId}_market_research.pdf`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isopen, setIsopen] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string>("");
  console.log(selectedText)

  const handleTextSelection = (event: MouseEvent<HTMLDivElement>) => {
    const selectedText = window.getSelection()?.toString() || "";
    setSelectedText(selectedText);
    setIsopen(true);
  }

  const handleClose = () => {
    setIsopen(false);
  }

  return (
    <div className="w-full h-screen flex overflow-hidden ">
      <div className="h-full ">
      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
       
        

      </div>
      <div className="w-full">
        <div className="py-5 w-full border-b-2 border-zinc-100">  </div>
        <div className='w-full h-full flex  text-base text-zinc-800 overflow-hidden'>

          <div className='w-1/2 h-full flex flex-col '>
            <div className='py-4 text-zinc-900 font-bold text-3xl ml-6 mb-6 bg-white'>Market Research Agent </div>
            <div className='p-6 mt-2 flex-1 overflow-hidden'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                  <FormField
                    name="sector"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='mb-2  text-2xl font-bold text-zinc-800'>Industry Sector</FormLabel>
                        <Input className='overflow-y-auto mt-2 border border-zinc-400' {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="value_proposition"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-lg font-semibold'>Value Proposition</FormLabel>
                        <Input className='h-24  border border-zinc-400 rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

<Accordion className="border border-gray-400 rounded-md" type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="text-lg p-4 border-b border-gray-300">Advanced Options</AccordionTrigger>
    <AccordionContent>
      <div className="flex items-center gap-6 p-4">

        <FormField
          name="language"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold mb-2">Language</FormLabel>
              <Controller
                name="language"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-[180px] bg-gray-50 border border-gray-300 rounded-md">
                      <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English (US)</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="tone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold mb-2">Tone of voice</FormLabel>
              <Controller
                name="tone"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-[180px] bg-gray-50 border border-gray-300 rounded-md">
                      <SelectValue placeholder="Select Tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="informal">Informal</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <FormMessage />
            </FormItem>
          )}
        />

      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>


                  <Button type="submit" className='w-full bg-gradient-to-r from-purple-700 to-[#540F66]' disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </>
                    ) : (
                      <>
                      <WandIcon className="m-2"/>
                      Run Agent
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          <div className='w-10/12 min-w-1/2 h-full border-l-2 border-zinc-100 flex justify-center text-zinc-900  py-2 overflow-hidden'   >
            <Tabs className="w-full " defaultValue="account">
              <TabsList className="flex w-full    text-zinc-900">
                <TabsTrigger value="account">Industry Landscape</TabsTrigger>
                <TabsTrigger value="password">Market Size</TabsTrigger>
                <TabsTrigger value="profile">Tech Trends</TabsTrigger>
                <TabsTrigger value="settings">News</TabsTrigger>
                <TabsTrigger value="billing">Predictions</TabsTrigger>
                <TabsTrigger value="support">Insights</TabsTrigger>
              </TabsList>
              <TabsContent className="flex-1 overflow-hidden" value="account">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Industry Landscape</CardTitle>
                    <CardDescription>Overview of the industry landscape.</CardDescription>
                  </CardHeader>
                  <div className="sample" onDoubleClick={handleTextSelection} >
                  <CardContent className="h-full overflow-hidden" id="content1">
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                      <ReactQuill className="h-[400px] py-2 mb-10" modules={{toolbar:customToolbarOptions}} value={content} onChange={setContent} />
                      <div className=" py-2   flex  gap-2">
                          <div className="relative group">
                              <Copy className="w-5 cursor-pointer hover:text-blue-500" onClick={() => copyToClipboard(content)} />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Copy 
                              </div>
                          </div>
                          <div className="relative group">
                              <Save className="w-5 cursor-pointer hover:text-blue-500" onClick={() => downloadPDF(content, "industry_landscape")} />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Save 
                              </div>
                          </div>
                      </div>
                  </>
                  
                    )}
                  </CardContent>
                  </div>
                 
                </Card>
              </TabsContent>
              <TabsContent className="flex-1 overflow-hidden" value="password">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Market Size and Projections</CardTitle>
                    <CardDescription>Current and expected growth of the market.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-full overflow-hidden" id="content2" >
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                      <div className="flex gap-2 opacity-1/2">
                      <Copy className="w-5 cursor-pointer" onClick={() => copyToClipboard(content2)}/>
                      <Save className="w-5 cursor-pointer" onClick={() => downloadPDF(content2, "Market Size and Projections")}/>
                    </div>
                        <ReactQuill  className="h-[400px] py-5 mb-5" modules={{toolbar:customToolbarOptions}} value={content2} onChange={setContent2} />
                       
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent className="flex-1 overflow-hidden" value="profile">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Tech Trends</CardTitle>
                    <CardDescription>Overview of technological trends in the industry.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-full overflow-hidden" id="content3">
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                         <div className="flex gap-2 opacity-1/2">
                      <Copy className="w-5 cursor-pointer" onClick={() => copyToClipboard(content3)}/>
                      <Save className="w-5 cursor-pointer" onClick={() => downloadPDF(content3, "Tech_Trends")}/>
                    </div>
                        <ReactQuill className="h-[400px] py-5 mb-5" modules={{toolbar:customToolbarOptions}} value={content3} onChange={setContent3} />
                        
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent className="flex-1 overflow-hidden" value="settings">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">News</CardTitle>
                    <CardDescription>Latest news in the industry.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-full overflow-hidden" id="content4">
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                         <div className="flex gap-2 opacity-1/2">
                      <Copy className="w-5 cursor-pointer" onClick={() => copyToClipboard(content4)}/>
                      <Save className="w-5 cursor-pointer" onClick={() => downloadPDF(content4, "News")}/>
                    </div>
                        <ReactQuill className="h-[400px] py-5 mb-5" value={content4} modules={{toolbar:customToolbarOptions}} onChange={setContent4} />
                        
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent className="flex-1 overflow-hidden" value="billing">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Predictions</CardTitle>
                    <CardDescription>Future predictions for the industry.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-full overflow-hidden" id="content5">
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                         <div className="flex gap-2 opacity-1/2">
                      <Copy className="w-5 cursor-pointer" onClick={() => copyToClipboard(content5)}/>
                      <Save className="w-5 cursor-pointer" onClick={() => downloadPDF(content5, "Predictions")}/>
                    </div>
                        <ReactQuill className="h-[400px] py-5 mb-5" value={content5} modules={{toolbar:customToolbarOptions}} onChange={setContent5} />
                       
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent className="flex-1 overflow-hidden" value="support">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Insights</CardTitle>
                    <CardDescription>Additional insights and recommendations.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-full overflow-hidden" id="content6">
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                    <div className="flex gap-2 opacity-1/2">
                      <Copy className="w-5 cursor-pointer" onClick={() => copyToClipboard(content6)}/>
                      <Save className="w-5 cursor-pointer" onClick={() => downloadPDF(content6, "Insights")}/>
                    </div>
                        <ReactQuill className="h-[400px] py-5 mb-5" modules={{toolbar:customToolbarOptions}} value={content6} onChange={setContent6} />
                        
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <NewComponent isOpen={isopen} selectedText={selectedText} handleClose={handleClose} />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Page;