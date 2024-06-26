"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReactMarkdown from 'react-markdown';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import React, { useState, MouseEvent, useEffect } from 'react'
import Loader from "@/components/Loader";
import { BarChart, BarChart2Icon, BarChart3, Copy, File, FileText, GitGraph, GitGraphIcon, PanelRightClose, Save, WandIcon } from "lucide-react";
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
// import html2pdf from 'html2pdf.js'
import Link from "next/link";
import { useRouter } from "next/navigation";
import NewComponent from "@/components/newC";
import Layout from "@/components/Layout";
import MyResponsiveBar from "@/components/GraphC";
import GraphComponent from "@/components/GraphC";
import ExportToExcel from "@/components/Excel";
import { useToast } from "@/components/ui/use-toast";
import { title } from "process";
import { Description } from "@radix-ui/react-toast";
import Excel from "@/components/Excel";
import Image from "next/image";
function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");
  const [wordFile, setWordFile] = useState("");
  const [data, setData] = useState();
  const [type, setType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [graph, setGraph] = useState(false);
  const [left, setLeft] = useState(true);
  const {toast} = useToast();
  const onSubmit = async (data: any) => {
    console.log(data);
    setIsSubmitting(true);
    // setLeft(true)
    
    try {
      const response = await axios.post(`http://98.70.9.194:8000/api/finance_agent`, {
        ticker: data.ticker,
        value_proposition: data.value_proposition
      
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data)
      
      

      setContent(response.data.industry_landscape);
      setContent2(response.data.msgp);
      setContent3(response.data.tt);
      setContent4(response.data.in);
     
      setWordFile(response.data.file);
      setData(response.data.data);
      setType(response.data.type);
      // console.log(response);
    } catch (error) {
      toast({
        title: "ERROR API CALL",
        description:"There is an error in making the call",
        variant:"destructive"
      })
      console.error("Error fetching data:", error);
    }
    setIsSubmitting(false);
    setLeft(false);
    setResponseAvailable(true)
  };

  const loadingMessages = [
    "Initializing model...",
    "Fetching information...",
    "Analysing gathered information...",
    "Synthesizing information...",
    "Refining output quality...",
    "Finalizing analysis...",
    "Almost ready with your response..."
  ];
  



  const form = useForm({
    defaultValues: {
      language: 'english',
      year:'2020',
      model: 'llama3-70b-8192',
      ticker:"",
      value_proposition:"",
      

    },
  });
  const router = useRouter();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Content copied to clipboard");
    }).catch((err) => {
      toast({
        title:"Copy Error",
        description:"Could not copy text"
      })
      console.error('Could not copy text: ', err);
    });
  };

  // const generatePDF = (content: string, filename: string) => {
  //   // Create a hidden div element and append the content
  //   const hiddenDiv = document.createElement('div');
  //   hiddenDiv.innerHTML = content;
  //   document.body.appendChild(hiddenDiv);

  //   // Define the pdf options
  //   const pdfOptions = {
  //     margin: 1,
  //     filename: filename,
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  //   };

  //   // Convert the hidden div to PDF
  //   html2pdf().from(hiddenDiv).set(pdfOptions).save().then(() => {
  //     document.body.removeChild(hiddenDiv); // Clean up after download
  //   });
  // };

  // const downloadPDF = (content: string, contentId: string) => {
  //   generatePDF(content, `${contentId}_market_research.pdf`);
  // };

  // const downloadWord = async (filename:string) => {
  //   try {
  //     const response = await fetch(`http://localhost:8000/api/download_report/${filename}`, {
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error('File download failed');
  //     }

  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;

      // Optional: Parse the filename from the Content-Disposition header if available
  //     const contentDisposition = response.headers.get('Content-Disposition');
  //     let downloadFilename = filename;
  //     if (contentDisposition) {
  //       const match = contentDisposition.match(/filename="(.+)"/);
  //       if (match) {
  //         downloadFilename = match[1];
  //       }
  //     }

  //     a.download = downloadFilename;
  //     document.body.appendChild(a);
  //     a.click();
  //     a.remove();
  //     window.URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error('Error downloading the file:', error);
  //     toast({
  //       title:"file download error",
  //       description:"Error downloading the file"
  //     })
  //   }
  // };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleInput = () => {
setLeft(true)  };

  const [responseAvailable, setResponseAvailable] = useState(false);

//chatbox states
const [isopen, setIsopen] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string>("");

  const handleTextSelection = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedText = window.getSelection()?.toString() || "";
    setSelectedText(selectedText);
    if(selectedText.length > 0){
      setIsPopupOpen(true);

    } 
  };

  const handlePopupClick = () => {
    setIsPopupOpen(false);
    setIsopen(true);
  };

  const handleClose = () => {
    setIsopen(false);
  };
  // const styles = `
  // @keyframes slideIn {
  //   0% {
  //     transform: translateX(100%);
  //     opacity: 0;
  //   }
  //   100% {
  //     transform: translateX(0);
  //     opacity: 1;
  //   }
  // }
  // .animate-slide-in {
  //   animation: slideIn 0.3s ease-out forwards;
  // }
  // `;
  
  // document.head.insertAdjacentHTML(
  //   "beforeend",
  //   `<style>${styles}</style>`
  // );

  
  return (
    <Layout>
      <div className="w-full h-screen flex">
        <div className="w-full">
          <div className=" w-full border-b-2 border-zinc-100"></div>
          {left ? ( <div className=" the div containing the form  w-full h-screen flex items-center justify-around text-base text-zinc-800">

                
<div className="  w-[600px] overflow-hidden">
  <Form {...form}>
    <form   onSubmit={form.handleSubmit(onSubmit)}
className="space-y-6 w-full">
      <FormField
        name="ticker"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="mb-2 text-2xl font-bold text-zinc-800">
              Ticker symbol
            </FormLabel>
            <Input
              className="overflow-y-auto mt-2 border border-zinc-400"
              {...field}
            />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="value_proposition"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-semibold">
              Value Proposition
            </FormLabel>
            <Input
              className="h-24 border border-zinc-400 rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...field}
            />
            <FormMessage />
          </FormItem>
        )}
      />
      <Accordion
        className="border border-gray-400"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg p-4">
            Advanced Options
          </AccordionTrigger>
          <AccordionContent className="border-t border-gray-300">
            <div className="flex items-center justify-center gap-4 p-2">
              <FormField
                name="language"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold mb-2">
                      Language
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="w-[120px] bg-gray-50 border border-gray-300 rounded-md">
                        <SelectValue placeholder="Select Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">
                          English (US)
                        </SelectItem>
                        <SelectItem value="hindi">
                          Hindi
                        </SelectItem>
                        <SelectItem value="german">
                          German
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="model"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold mb-2">
                      Model
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="w-[120px] bg-gray-50 border border-gray-300 rounded-md">
                        <SelectValue placeholder="Select Model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="llama3-70b-8192">
                          KareAI
                        </SelectItem>
                        <SelectItem value="gpt-4o">
                          OpenAI|GPT-4o
                        </SelectItem>
                        <SelectItem value="gemini-1.5-pro">
                          Google|Gemini
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="year"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold mb-2">
                      Year
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="w-[120px] bg-gray-50 border border-gray-300 rounded-md">
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020">
                          2020
                        </SelectItem>
                        <SelectItem value="2021">
                          2021
                        </SelectItem>
                        <SelectItem value="2022">
                          2022
                        </SelectItem>
                        <SelectItem value="2023">
                          2023
                        </SelectItem>
                        <SelectItem value="2024">
                          2024
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-700 to-[#540F66]"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          <>
            <WandIcon className="m-2" />
            Run Agent
          </>
        )}
      </Button>
    </form>
  </Form>
</div>
<Image
alt="no image"
width={400}
height={400}
src={"/img.avif"}

/>

</div>):("")}
           
          <div className={`w-full py-5  h-full border-l-2 border-zinc-100 ${responseAvailable ? ("block"): ("hidden")} justify-center text-zinc-900`}>
              <Tabs className="w-full bg--200" defaultValue="Balance sheet">
                <TabsList className="flex w-full justify-between px-6  text-zinc-900">
                <PanelRightClose
                    onClick={toggleInput}
                    className={`cursor-pointer ${left ? "hidden" : "block"}`}
                  />
                  <TabsTrigger value="Balance sheet">Balance sheet</TabsTrigger>
                  <TabsTrigger value="Income Statement">Income Statement</TabsTrigger>
                  <TabsTrigger value="Cash flow">Cash flow</TabsTrigger>
                  <TabsTrigger value="Insights">Insights</TabsTrigger>
                </TabsList>
                <TabsContent className="flex-1 justify-center" value="Balance sheet">
                  <Card className="h-full ">
                    <CardHeader>
                        <CardTitle className="text-zinc-900">Balance sheet</CardTitle>
                      <CardDescription>Overview of the industry landscape.</CardDescription>
                    </CardHeader>
                      <CardContent className="h-full w-full " id="content1">
                        {isSubmitting ? (
                          <div className="w-full h-screen flex items-center justify-center">
                          <Loader messages={loadingMessages} />
                          </div>
                        ) : (
                          <div className="w-full h-full " id="pdf">
                            <Excel/>
                          </div>
                        )}
                      </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent className="flex-1" value="Income Statement">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">Income Statement</CardTitle>
                      <CardDescription>Overview of the industry landscape.</CardDescription>
                    </CardHeader>
                    <div className="sample" onMouseUp={handleTextSelection}>
                      <CardContent className="h-full w-full" id="content2">
                        {isSubmitting ? (
                          <div className="w-full h-screen flex items-center justify-center">
                          <Loader messages={loadingMessages} />
                          </div>
                        ) : (
                          <div className="w-full h-full" id="pdf">
                            <p>Table content here...</p>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                </TabsContent>
                <TabsContent className="flex-1" value="Cash flow">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">Cash flow</CardTitle>
                      <CardDescription>Overview of the industry landscape.</CardDescription>
                    </CardHeader>
                    <div className="sample" onMouseUp={handleTextSelection}>
                      <CardContent className="h-full w-full" id="content3">
                        {isSubmitting ? (
                          <div className="w-full h-screen flex items-center justify-center">
                          <Loader messages={loadingMessages} />
                          </div>
                        ) : (
                          <div className="w-full h-full" id="pdf">
                            <p>Table content here...</p>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                </TabsContent>
                <TabsContent className="flex-1" value="Insights">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">Insights</CardTitle>
                      <CardDescription>Overview of the industry landscape.</CardDescription>
                    </CardHeader>
                    <div className="sample" onMouseUp={handleTextSelection}>
                      <CardContent className="h-full w-full" id="content4">
                        {isSubmitting ? (
                          <div className="w-full h-screen flex items-center justify-center">
                          <Loader messages={loadingMessages} />
                          </div>
                        ) : (
                          <div className="w-full h-full" id="pdf">
                            <p>Table content here...</p>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
        </div>
      </div>
      <NewComponent
        isOpen={isopen}
        selectedText={selectedText}
        handleClose={handleClose}
      />
    </Layout>
  );
}

export default Page;
