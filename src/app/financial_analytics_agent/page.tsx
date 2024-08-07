"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import React, { useState, MouseEvent, useEffect } from 'react'
import dynamic from 'next/dynamic';
import useDownload from '@/hooks/useDownload';

import Loader from "@/components/Loader";
import { BarChart, BarChart2Icon, BarChart3, Copy, File, FileText, GitGraph, GitGraphIcon, PanelLeft, PanelLeftClose, PanelRightClose, RefreshCwIcon, Save, Triangle, WandIcon } from "lucide-react";
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
// import Sidebar from "@/components/sidebar"
import axios from "axios";
// import ReactQuill from 'react-quill';
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
})
import 'react-quill/dist/quill.snow.css'; // import styles
// import html2pdf from 'html2pdf.js';
// import html2pdf from 'html2pdf.js'
import Link from "next/link";
import { useRouter } from "next/navigation";
import NewComponent from "@/components/newC";
import Layout from "@/components/Layout";
import MyResponsiveBar from "@/components/GraphC";
import GraphComponent from "@/components/GraphC";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import MarkdownRenderer from "@/components/Markdown";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Excel from "@/components/Excel";
import TestGraphs from "@/components/GraphC";
import Component from "@/components/GraphFc";
function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [content, setContent] = useState([]);
  const [content2, setContent2] = useState([]);
  const [content3, setContent3] = useState([]);
  const [content4, setContent4] = useState("");
  // const [content5, setContent5] = useState("");
  // const [content6, setContent6] = useState("");
  // const [wordFile, setWordFile] = useState("");
  const [tittle, setTittle] = useState("title");
  const [source, setSource] = useState("");
  const [File, setFile] = useState("");


  const [type, setType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [graph, setGraph] = useState("");
  const [left, setLeft] = useState(true);
  const {toast} = useToast();
  const [sector, setSector] = useState("")
  const [cid , setCid] = useState("");

  const { user } = useUser();

  useEffect(() => {
    if (!user) return;

    // Getting user id from clerk and setting as the client id 
    const client_id = user.id;
    setCid(client_id); // Update state with the client id

  }, [user])



  const onSubmit = async (data: any) => {
    console.log(data);
    setIsSubmitting(true);
  
    // source setting
    const src = data.ticker;
    setSector(src);
    console.log(sector);
    const newSource = `https://finance.yahoo.com/quote/${data.ticker}`;
    setSource(newSource);
    console.log(newSource);
  
    try {
      const response = await axios.post(`http://98.70.9.194:8000/api/financial_analytics`, {
        ticker: data.ticker,
        year: data.year,
        model: data.model,
        language: data.language,
        user_id : cid,
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      // Store the response data in local storage
      localStorage.setItem('financialData', JSON.stringify(response.data));
  
      // Set the state with the response data
      setContent(response.data.financial_data.balance_sheet);
      setContent2(response.data.financial_data.income_statement);
      setContent3(response.data.financial_data.cash_flow); // Cash flow data
      setContent4(response.data.insights);
      setFile(response.data.file);

      
      setGraph(response.data.graphs);
      
      setType("Pie Chart");
      
      console.log(response);
    } catch (error:any) {
      const errorMessage = "Recheck year and ticker symbol"
       
    // console.log(errorMessage);
      toast({
        title: "ERROR API CALL",
        description: errorMessage,
        variant: "destructive"
      });
    
      console.error("Error fetching data:", error);
    }
    setIsSubmitting(false);
    setLeft(false);
    console.log(left);
  };
  
  // Function to load data from local storage
  // const loadDataFromLocalStorage = () => {
  //   const storedData = localStorage.getItem('financialData');
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData);
  
  //     setContent(parsedData.financial_data.balance_sheet);
  //     setContent2(parsedData.financial_data.income_statement);
  //     setContent2([]);

     
  //     setContent4(parsedData.insights);
  //     setGraph(parsedData.graphs);

      
      
  //     setType("Pie Chart");
  //   }
  // };
  const loadDataFromLocalStorage = () => {
    const storedData = localStorage.getItem('financialData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
  
      setContent([]);
      setContent2([]);
      setContent2([]);

     
      setContent4("");
      setGraph("");

      
      
      setType("Pie Chart");
    }
  };
  // Call this function on component mount or wherever appropriate
  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  const [refreshTriggered, setRefreshTriggered] = useState(false);
  const refresh = () => {
    console.log('refreshed');
    setRefreshTriggered(true); // Set state to trigger useEffect
    // toast({
    //   title: 'Chat refreshed',
    //   description: 'Your chat is now refreshed and local storage is cleared',
    // });
  };


  useEffect(() => {
      if (refreshTriggered) {
        localStorage.clear();
        setContent([]);
        setContent2([]);
        setContent3([]);
        setContent4("");
        
        setGraph("");
        
    };
    setRefreshTriggered(false)
  }, [refreshTriggered]);


  

  const loadingMessages = [
    "Initializing model...",
    "Fetching information...",
    "Analysing gathered information...",
    "Synthesizing information...",
    "Refining output quality...",
    "Finalizing analysis...",
    "Almost ready with your response..."
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

  const form = useForm({
    defaultValues: {
      language: 'english',
      year:'2020',
      model: 'llama3-70b-8192',
      ticker:"",
      

    },
  });
  const router = useRouter();

  // const copyToClipboard = (text: string) => {
  //   navigator.clipboard.writeText(text).then(() => {
  //     alert("Content copied to clipboard");
  //   }).catch((err) => {
  //     console.error('Could not copy text: ', err);
  //   });
  // };

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
  
 
  
  const [filename, setFilename] = useState('');

  const handleDownload = () => {
    window.location.href=`https://kareai-reports.s3.ap-south-1.amazonaws.com/${File}`;
  };


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleInput = () => {
    setLeft(!left);
  };


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
      <div className="w-full h-screen flex overflow-hidden ">
        <div className="w-full">
         
          <div className="w-full  h-full flex  text-base text-zinc-800 overflow-hidden">
            {left ? (
              <>
                <div
                  className={`leftDiv w-1/2 h-full flex flex-col ${
                    left ? "inline" : "block"
                  }`}
                >
                  <div className="py-4 flex items-center  justify-between pr-3  text-zinc-900 font-bold text-3xl ml-6 mb-6 bg-white">
                    Financial Analytics Agent
                    <div className=" ml-2 flex bg--50 gap-2">
                  <div className="relative group">
                    <PanelLeftClose
                      onClick={toggleInput}
                      className="cursor-pointer hover:text-blue-600"
                    />
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 mb-4 bg-white shadow-md text-zinc-900 text-xs rounded opacity-0 group-hover:opacity-100 font-[200] transition-opacity duration-300">
                      Tap to hide
                    </div>
                  </div>
                  <div className="relative group">
                              <RefreshCwIcon
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => refresh()}
                                />
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-white text-zinc-900 text-xs rounded opacity-0  font-[200] shadow-md group-hover:opacity-100 transition-opacity duration-300">
                                  Refresh
                                </div>
                              </div>
                  </div>
                  </div>
                  <div className="p-6 mt-2 flex-1 overflow-hidden">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <FormField
                          name="ticker"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="mb-2  text-2xl font-bold text-zinc-800">
                                Ticker Symbol
                              </FormLabel>
                              <Input
                                className="overflow-y-auto mt-2 border border-zinc-400"
                                {...field}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* <FormField
                          name="value_proposition"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-lg font-semibold">
                                Value Proposition
                              </FormLabel>
                              <Textarea
                                className="h-24 overflow-y-auto border border-zinc-400 rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...field}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        /> */}

                        <Accordion
                          className="border border-gray-400 "
                          type="single"
                          collapsible
                        >
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg p-4">
                              Advanced Options
                            </AccordionTrigger>
                            <AccordionContent className="border-t  border-gray-300">
                              <div className="flex items-center gap-6 p-4">
                                <FormField
                                  name="language"
                                  control={form.control}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-sm font-semibold mb-2">
                                        Language
                                      </FormLabel>
                                      <Controller
                                        name="language"
                                        control={form.control}
                                        render={({ field }) => (
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
                                        )}
                                      />
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
                                      <Controller
                                        name="model"
                                        control={form.control}
                                        render={({ field }) => (
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
                                              <SelectItem
                                                className="cursor-not-allowed"
                                                disabled
                                                value="gemini-1.5-pro"
                                              >
                                                Google|Gemini Pro
                                              </SelectItem>
                                              <SelectItem
                                                className="cursor-not-allowed"
                                                disabled
                                                value="claude-3-5-sonnet-20240620"
                                              >
                                                Anthropic|Sonnet-3.5
                                              </SelectItem>
                                            </SelectContent>
                                          </Select>
                                        )}
                                      />
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
                </div>
              </>
            ) : (
              ""
            )}

            <div
              className="w-full   h-full border-l-2  border-zinc-100 flex justify-center text-zinc-900   py-2 overflow-y-auto "
              onMouseUp={handleTextSelection}
            >
              <Tabs className="w-full bg--200 " defaultValue="Balance sheet">
                <TabsList
                  className={`flex w-full ${
                    left ? "justify-evenly" : "justify-around gap-12"
                  } text-zinc-900`}
                >
                  <PanelRightClose
                    onClick={toggleInput}
                    className={`cursor-pointer ${left ? "hidden" : "block"}`}
                  />
                  <TabsTrigger value="Graphs">Dashboard</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>

                  <TabsTrigger value="Balance sheet">Balance sheet</TabsTrigger>
                  <TabsTrigger value="Income Statement">
                    Income Statement
                  </TabsTrigger>
                  <TabsTrigger value="Cash flow">Cash flow</TabsTrigger>
                </TabsList>
                <TabsContent className="flex-1 " value="Balance sheet">
                  <Card className="h-full w-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">
                        Balance Sheet
                      </CardTitle>
                      <CardDescription>
                        Overview of balance sheet of the provided the ticker
                        symbol.
                      </CardDescription>
                    </CardHeader>
                    <CardContent
                      className="h-full w-full overflow-y-auto  "
                      id="content3"
                    >
                      {isSubmitting ? (
                        <Loader />
                      ) : (
                        <>
                          {/* <MarkdownRenderer tt={content3} /> */}
                          <div className="w-full bg--100 h-full">
                            <Excel
                              balance_sheet={content}
                              // url={"api/download_balance_sheet/"}
                            />
                          </div>
                          <div className=" py-2 mb-7   flex  gap-2">
                            <div  className="relative  group ">
                              <FileText
                              
                                className="w-5 cursor-pointer disabled hover:text-blue-500"
                                onClick={() =>
                                  handleDownload()
                                }
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Word
                              </div>
                            </div>
                            <div className="relative group">
                              <RefreshCwIcon
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => refresh()}
                                />
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Refresh
                                </div>
                              </div>
                          </div>
                          {/* <div className=" py-2   flex  gap-2">
                            <div className="relative group">
                              <FileText
                                className="w-5 cursor-pointer hover:text-blue-500"
                                onClick={() => handleDownload(wordFile)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Word
                              </div>
                            </div>
                          </div> */}
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent className="flex-1 " value="Income Statement">
                  <Card className="h-full w-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">
                        Income Statement
                      </CardTitle>
                      <CardDescription>
                        Overview of income statement of the provided ticker
                        symbol.
                      </CardDescription>
                    </CardHeader>
                    <CardContent
                      className="h-full w-full overflow-y-auto  "
                      id="content3"
                    >
                      {isSubmitting ? (
                        <Loader />
                      ) : (
                        <>
                          {/* <MarkdownRenderer tt={content3} /> */}
                          {/* <div className=" mb-20 py-2">
                            <div className="relative group">
                              <FileText
                                className="w-5 cursor-pointer hover:text-blue-500"
                                onClick={() => handleDownload(wordFile)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Word
                              </div>
                            </div>
                          </div> */}
                          <Excel
                            balance_sheet={content2}
                            // url={"api/download_income_statement/"}
                          />
                           <div className=" py-2 mb-7  flex  gap-2">
                            <div className="relative group">
                              <FileText
                                className="w-5 cursor-pointer  hover:text-blue-500"
                                onClick={() =>
                                  handleDownload()
                                }
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Word
                              </div>
                            </div>
                            <div className="relative group">
                              <RefreshCwIcon
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => refresh()}
                                />
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Refresh
                                </div>
                              </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent className="flex-1 " value="Cash flow">
                  <Card className="h-full w-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">Cash Flow</CardTitle>
                      <CardDescription>
                        Overview of Cash Flow of the provided ticker symbol.
                      </CardDescription>
                    </CardHeader>
                    <CardContent
                      className="h-full w-full overflow-y-auto  "
                      id="content3"
                    >
                      {isSubmitting ? (
                        <Loader />
                      ) : (
                        <>
                          {/* <MarkdownRenderer tt={content3} /> */}
                          <Excel
                            balance_sheet={content3}
                            // url={"api/download_cash_flow/"}
                          />
                          <div className=" py-2   flex  gap-2">
                            <div className="relative group">
                              <FileText
                                className="w-5 cursor-pointer  hover:text-blue-500"
                                onClick={() =>handleDownload()
                                }
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Excel
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent
                  className="flex-1 overflow-hidden"
                  value="insights"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">Insights</CardTitle>
                      <CardDescription>
                        Insights based on 5 financial metrics.
                      </CardDescription>
                    </CardHeader>
                    <CardContent
                      className="h-full overflow-hidden"
                      id="content4"
                    >
                      {isSubmitting ? (
                        <Loader />
                      ) : (
                        <>
                         <MarkdownRenderer tt={content4}/>
                          <div className=" py-2 mb-7  flex  gap-2">
                            <div  className="relative group">
                              <FileText
                              
                                className="w-5 cursor-pointer hidden hover:text-blue-500"
                                onClick={() =>
                                  handleDownload()
                                }
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Word
                              </div>
                            </div>
                            <div className="relative group">
                              <RefreshCwIcon
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => refresh()}
                                />
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Refresh
                                </div>
                              </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent className="flex-1 overflow-hidden" value="Graphs">
                  <Card className="h-full ">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">Dashboard</CardTitle>
                      <CardDescription>
                        Visualization of financial data.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className=" h-full overflow-hidden justify-center text-center">
                      {isSubmitting ? (
                        <Loader />
                      ) : (
                        <>
                          {/* <div className="w-full flex flex-col gap-3">
                            <GraphComponent
                              data={data}
                              type={type}
                              source={source}
                              title={"Assets Distribution"}
                            />
                            <GraphComponent
                              data={content5}
                              type={type}
                              source={source}
                              title={"Liabilities Distribution"}
                            />
                            <GraphComponent
                              data={content6}
                              type={type}
                              source={source}
                              title={"Balance Sheet Overview"}
                            />
                            <Link href={`${source}`}>
                              <h3 className="mb-20 hover:text-blue-500">Source</h3>
                            </Link>
                          </div> */}
                          <div className="w-full h-full">
                            <Component financialData={graph} left={left}/>
                          </div>
                          <a href={`${source}`} target="_blank" rel="noopener noreferrer">                          
                                <h3 className="mb- hover:text-blue-500">Source</h3>
                            </a>
                          
                          <div className=" py-2 mb-7  flex  gap-2">
                            <div className="relative group">
                              <FileText
                                className="w-5 cursor-pointer hidden hover:text-blue-500"
                                onClick={() =>
                                  handleDownload()
                                }
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Word
                              </div>
                            </div>
                            <div className="relative group">
                              <RefreshCwIcon
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => refresh()}
                                />
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Refresh
                                </div>
                              </div>
                          </div>
                          {/* <TestGraphs/> */}

                          {/* <ReactQuill className="h-[400px] py-2 mb-10" modules={{toolbar:customToolbarOptions}} value={content} onChange={setContent} /> */}
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              <div
                className="fixed bottom-5 right-10 h-10  bg-white cursor-pointer drop-shadow-xl rounded-full transition-all ease-in-out animate-slide-in"
                onMouseEnter={() => setIsPopupOpen(true)}
                onMouseLeave={() => setIsPopupOpen(false)}
              >
                <Button
                  onClick={handlePopupClick}
                  className={`bg-white  rounded-full focus:outline-none w-full transition-all ease-in h-full ${
                    isPopupOpen
                      ? "bg-gradient-to-r from-purple-700 to-[#540F66]"
                      : ""
                  }`}
                >
                  <Triangle
                    className={`text-purple-800 ${
                      isPopupOpen ? "text-white" : ""
                    }`}
                  />
                  {/* <Image
          width={100}
          height={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

          src="/logo2.jpg"
          className="object-fill w-full h-full  "
          alt="Chat Logo"
        /> */}
                </Button>
                {/* {isPopupOpen && (
        <div className="absolute bottom-1/2 w-40 bg-gradient-to-r from-purple-700 to-[#540F66] right-10 transform translate-y-1/2 mr-6   p-2  text-white text-xs rounded shadow-lg z-50">
          Click to open the Chat 
        </div>
      )} */}
              </div>

              <NewComponent
                isOpen={isopen}
                selectedText={selectedText}
                handleClose={handleClose}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Page;
