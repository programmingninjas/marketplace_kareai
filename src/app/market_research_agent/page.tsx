"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import React, { useState, MouseEvent, useEffect } from 'react'
import dynamic from 'next/dynamic';
import useDownloadWord from '@/hooks/useDownloadWord';

import Loader from "@/components/Loader";
import { BarChart, BarChart2Icon, BarChart3, Copy, File, FileText, GitGraph, GitGraphIcon, InfoIcon, PanelLeft, PanelLeftClose, PanelRightClose, RefreshCwIcon, Save, Triangle, WandIcon } from "lucide-react";
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
import { SignedIn, UserButton } from "@clerk/nextjs";
import router from "next/router";
const defaultValues = {
  language: 'english',
  model: 'llama3-70b-8192',
  sector: '',
  value_proposition: '',
  files: null,
};
function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");
  const [content5, setContent5] = useState("");
  const [content6, setContent6] = useState("");
  const [wordFile, setWordFile] = useState("");
  const [tittle, setTittle] = useState("title");
  const [source, setSource] = useState("source");

  const [data, setData] = useState();
  const [type, setType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [graph, setGraph] = useState(false);
  const [left, setLeft] = useState(true);
  const {toast} = useToast();
  const form = useForm({
    defaultValues: {
      sector: '',
      value_proposition: '',
      language: 'english',
      model: 'llama3-70b-8192',
      Company_name:'',
      files: null as FileList | null,
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('sector', data.sector);
    formData.append('value_proposition', data.value_proposition);
    formData.append('model', data.model);
    formData.append('language', data.language);
    // formData.append('Company_name', data.Company_name);


    if (data.files && data.files[0]) {
      formData.append('files', data.files[0]);
      console.log(data.files[0])
    }

    try {
      const response = await axios.post('http://98.70.9.194:8000/api/market_research', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Store the response data in local storage
      localStorage.setItem('marketResearchData', JSON.stringify(response.data));

      // Set the state with the response data
      setContent(response.data.industry_landscape);
      setContent2(response.data.msgp);
      setContent3(response.data.tt);
      setContent4(response.data.in);
      setContent5(response.data.top_5);
      setContent6(response.data.insights);
      setWordFile(response.data.file);
      setData(response.data.data);
      setType(response.data.type);
      setTittle(response.data.title);
      setSource(response.data.source);

      console.log(response);
    } catch (error) {
      toast({
        title: 'ERROR API CALL',
        description: 'There is an error in making the call',
        variant: 'destructive',
      });
      console.error('Error fetching data:', error);
    }
    setIsSubmitting(false);
    setLeft(false);
    console.log(left);
  };

  const loadDataFromLocalStorage = () => {
    const storedData = localStorage.getItem('marketResearchData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      setContent(parsedData.industry_landscape);
      setContent2(parsedData.msgp);
      setContent3(parsedData.tt);
      setContent4(parsedData.in);
      setContent5(parsedData.top_5);
      setContent6(parsedData.insights);
      setWordFile(parsedData.file);
      setData(parsedData.data);
      setType(parsedData.type);
      setTittle(parsedData.title);
      setSource(parsedData.source);
    }
  };

  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  const [filename, setFilename] = useState('');

  const handleDownload = (file: string) => {
    setFilename(file);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleInput = () => {
    setLeft(!left);
  };

  // Chatbox states
  const [isopen, setIsopen] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string>('');

  const handleTextSelection = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedText = window.getSelection()?.toString() || '';
    setSelectedText(selectedText);
    if (selectedText.length > 0) {
      setIsPopupOpen(true);
    }
  };

  const [refreshTriggered, setRefreshTriggered] = useState(false);

  const refresh = () => {
    console.log('refreshed');
    setRefreshTriggered(true); // Set state to trigger useEffect
    toast({
      title: 'Chat refreshed',
      description: 'Your chat is now refreshed and local storage is cleared',
    });
  };

  useEffect(() => {
    if (refreshTriggered) {
      localStorage.clear(); // Clears the local storage
      setRefreshTriggered(false); // Reset state after clearing local storage
    }
  }, [refreshTriggered]);

  const handlePopupClick = () => {
    setIsPopupOpen(false);
    setIsopen(true);
  };

  const handleClose = () => {
    setIsopen(false);
  };


  const customToolbarOptions = [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
    [{ direction: 'rtl' }], 
    [{ indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean'],
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Content copied to clipboard");
    }).catch((err) => {
      console.error('Could not copy text: ', err);
    });
  };
  return (
    <Layout>
      <div className="w-full h-screen flex overflow-x-hidden ">
        <div className="w-full">
          <div className="py-3 w-full border-b-2 flex justify-end px-3 border-zinc-100">
            <SignedIn>
              <UserButton afterSignOutUrl="/sign-in" />
            </SignedIn>
          </div>
          <div className="w-full h-full flex text-base overflow-hidden text-zinc-800">
            {left ? (
              <div className="leftDiv w-1/2 h-full flex overflow-x-hidden flex-col">
                <div className="py-4 flex items-center justify-between pr-6 overflow-x-hidden text-zinc-900 font-bold text-3xl ml-6 mb- bg-white">
                  Category Playbook
                  <div className="flex gap-3">
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
                <div className="px-6 py-2 mt-1 overflow-y-auto flex-1">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        name="sector"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="mb-2 text-lg font-bold text-zinc-800">Category Name</FormLabel>
                            <Input placeholder="Enter your category" className="overflow-y-auto mt-2 border border-zinc-400" {...field} />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="value_proposition"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            
                            <FormLabel className="text-lg font-semibold">Description</FormLabel>
                            <Textarea
                              placeholder="Describe your product or service here "
                              className="h-24 overflow-y-auto border border-zinc-400 rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              {...field}
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                         <FormField
                        name="Company_name"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                                                        <FormLabel className="text-lg font-semibold">Company Name </FormLabel>

                            {/* <div className="flex items-center gap-2">

                            <div className="ibutton relative group">
                              <InfoIcon
                                className="w-4 cursor-pointer hover:text-blue-500"
                                
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Enter the name of the company
                              </div>
                            </div>
                            </div> */}
                            
                            <Textarea
                              placeholder="Enter your company details"
                              className="h-24 overflow-y-auto border border-zinc-400 rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              {...field}
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Accordion className="border border-gray-400" type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg p-4">Advanced Options</AccordionTrigger>
                          <AccordionContent className="border-t border-gray-300">
                            <div className="flex items-center gap-8 p-4">
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
                                name="model"
                                control={form.control}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-sm font-semibold mb-2">Model</FormLabel>
                                    <Controller
                                      name="model"
                                      control={form.control}
                                      render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                          <SelectTrigger className="w-[180px] bg-gray-50 border border-gray-300 rounded-md">
                                            <SelectValue placeholder="Select Model" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="llama3-70b-8192">Default</SelectItem>
                                            <SelectItem value="gpt-4o">Premium</SelectItem>
                                            
                                          </SelectContent>
                                        </Select>
                                      )}
                                    />
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <FormField
                              name="files"
                              control={form.control}
                              render={({ field }) => (
                                <FormItem className="ml-4">
                                  <FormLabel className="text-sm font-semibold mb-2">File</FormLabel>
                                  <Input
                                      type="file"
                                      className="w-[392px] cursor-pointer bg-gray-50 border border-gray-300 rounded-md"
                                      onChange={(e) => {
                                        const files = e.target.files;
                                        if (files) {
                                          field.onChange(files);
                                        }
                                      }}
                                    />
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Button type="submit" className="w-full bg-gradient-to-r from-purple-700 to-[#540F66]" disabled={isSubmitting}>
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
            ) : (
              ''
            )}

            <div className="w-full   h-full border-l-2  border-zinc-100 flex justify-center text-zinc-900 overflow-x-hidden   py-2 overflow-y-auto "  onMouseUp={handleTextSelection}>
              <Tabs className="w-full bg--200 " defaultValue="account">
                <TabsList
                  className={`flex w-full px-6 ${
                    left ? "justify-evenly" : "justify-around gap-12"
                  } text-zinc-900`}
                >
                  <PanelRightClose
                    onClick={toggleInput}
                    className={`cursor-pointer ${left ? "hidden" : "block"}`}
                  />
                  <TabsTrigger value="account">Industry Landscape</TabsTrigger>
                  <TabsTrigger value="password">Market Size</TabsTrigger>
                  <TabsTrigger value="Graphs">Visualisation</TabsTrigger>
                  <TabsTrigger value="profile">Competitive analysis</TabsTrigger>
                  <TabsTrigger value="settings">Category Alert</TabsTrigger>
                  <TabsTrigger value="billing">Predictions</TabsTrigger>
                  <TabsTrigger value="support">Recommendations</TabsTrigger>
                </TabsList>
                <TabsContent className="flex-1 overflow-hidden" value="account">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between  ">
                        <CardTitle className="text-zinc-900">
                          Industry Landscape
                        </CardTitle>
                        {/* <PanelRightClose onClick={toggleInput} className="cursor-pointer"/> */}
                      </div>

                      <CardDescription>
                        Overview of the industry landscape.
                      </CardDescription>
                    </CardHeader>
                      <CardContent
                      className="h-full w-full overflow-y-auto  "
                        id="content1"
                      >
                        {isSubmitting ? (
                          <div className="w-[400px]">
                            <Loader  />

                          </div>
                        ) : (
                          <>
                                                     <MarkdownRenderer tt={content} />

                            <div className=" py-2   flex  gap-2">
                              <div className="relative group">
                                <Copy
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => copyToClipboard(content)}
                                />
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Copy
                                </div>
                               
                              </div>
                              <div className="relative group">
                                <FileText
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => handleDownload(wordFile)}
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
                              
                              <div className="relative group">
                                {/* <Save
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  // onClick={() =>
                                  //   downloadPDF(content, "industry_landscape")
                                  // }
                                /> */}
                                {/* <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  PDF
                                </div> */}
                              </div>
                            
                            </div>
                          </>
                        )}
                      </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-hidden"
                  value="password"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">
                        Market Size and Projections
                      </CardTitle>
                      <CardDescription>
                        Current and expected growth of the market.
                      </CardDescription>
                    </CardHeader>
                    <CardContent
                      className="h-full overflow-hidden"
                      id="content2"
                    >
                      {isSubmitting ? (
                          <Loader  />
                      ) : (
                        <>
                                                    <MarkdownRenderer tt={content2} />


                          <div className=" py-2   flex  gap-2">
                            <div className="relative group">
                              <Copy
                                className="w-5 cursor-pointer hover:text-blue-500"
                                onClick={() => copyToClipboard(content2)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Copy
                              </div>
                            </div>
                            <div className="relative group">
                                <FileText
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => handleDownload(wordFile)}
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
                            <div className="relative group">
                              {/* <Save
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() =>
                                //   downloadPDF(content2, "Market_Size")
                                // }
                              /> */}
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PDF
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
                      <CardTitle className="text-zinc-900">Graph</CardTitle>
                      <CardDescription>
                        Graph of the market size and projections.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className=" h-full overflow-hidden justify-center text-center">
                    <h3 className="text-xl">{tittle}</h3>

                      {isSubmitting ? (
                          <Loader  />
                      ) : (
                        <>
                          <GraphComponent data={data} type={type} source={source} title={""}/>
                          {/* <ReactQuill className="h-[400px] py-2 mb-10" modules={{toolbar:customToolbarOptions}} value={content} onChange={setContent} /> */}
                        </>
                      )}
                       {/* <Link href={source} passHref>
        <a target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl">source</h3>
        </a>
      </Link> */}
                            {/* <h3 className="text-xl"  onClick={() => router.push(`${source}`)}>source</h3> */}


                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent className="flex-1" value="profile">
                  <Card className="h-full w-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">
                      Competitive Analysis
                      </CardTitle>
                      <CardDescription>
                        Overview of competition in the industry.
                      </CardDescription>
                    </CardHeader>
                    <CardContent
                      className="h-full w-full overflow-x-hidden overflow-y-auto  "
                      id="content3"
                    >
                      {isSubmitting ? (
                          <Loader  />
                      ) : (
                        <>
                        <MarkdownRenderer tt={content3} />
      <div className=" py-2 mb-10  flex  gap-2">
                            <div className="relative group">
                              <Copy
                                className="w-5 cursor-pointer hover:text-blue-500"
                                onClick={() => copyToClipboard(content3)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Copy
                              </div>
                            </div>
                            <div className="relative group">
                                <FileText
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => handleDownload(wordFile)}
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
                            <div className="relative group">
                              {/* <Save
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() =>
                                //   downloadPDF(content3, "tech_trends")
                                // }
                              /> */}
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PDF
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
                  value="settings"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">News</CardTitle>
                      <CardDescription>
                        Latest news in the industry.
                      </CardDescription>
                    </CardHeader>
                    <CardContent
                      className="h-full overflow-hidden"
                      id="content4"
                    >
                      {isSubmitting ? (
                          <Loader  />
                      ) : (
                        <>
                                                    <MarkdownRenderer tt={content4} />

                          <div className=" py-2   flex  gap-2">
                            <div className="relative group">
                              <Copy
                                className="w-5 cursor-pointer hover:text-blue-500"
                                onClick={() => copyToClipboard(content4)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Copy
                              </div>
                            </div>
                            <div className="relative group">
                                <FileText
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => handleDownload(wordFile)}
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
                            <div className="relative group">
                              {/* <Save
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() => downloadPDF(content4, "News")}
                              /> */}
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PDF
                              </div>
                            </div>
                            
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent className="flex-1 overflow-hidden" value="billing">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">
                        Predictions
                      </CardTitle>
                      <CardDescription>
                        Future predictions of the industry.
                      </CardDescription>
                    </CardHeader>
                    <CardContent
                      className="h-full overflow-hidden"
                      id="content5"
                    >
                      {isSubmitting ? (
                          <Loader  />
                      ) : (
                        <>
                                                    <MarkdownRenderer tt={content5} />

                          <div className=" py-2   flex  gap-2">
                            <div className="relative group">
                              <Copy
                                className="w-5 cursor-pointer hover:text-blue-500"
                                onClick={() => copyToClipboard(content5)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Copy
                              </div>
                            </div>
                            <div className="relative group">
                                <FileText
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => handleDownload(wordFile)}
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
                            <div className="relative group">
                              {/* <Save
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() =>
                                //   downloadPDF(content5, "Predictions")
                                // }
                              /> */}
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PDF
                              </div>
                            </div>
                            
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent className="flex-1 overflow-hidden" value="support">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">
                        Recommendations
                      </CardTitle>
                      <CardDescription>
                        As per your value proposition.
                      </CardDescription>
                    </CardHeader>
                    <CardContent
                      className="h-full overflow-hidden"
                      id="content6"
                    >
                      {isSubmitting ? (
                        <Loader />
                      ) : (
                        <>
                                                   <MarkdownRenderer tt={content6} />

                          <div className=" py-2   flex  gap-2">
                            <div className="relative group">
                              <Copy
                                className="w-5 cursor-pointer hover:text-blue-500"
                                onClick={() => copyToClipboard(content6)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Copy
                              </div>
                            </div>
                            <div className="relative group">
                                <FileText
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  onClick={() => handleDownload(wordFile)}
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
                            <div className="relative group">
                              {/* <Save
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() =>
                                //   downloadPDF(content6, "Recommendations")
                                // }
                              /> */}
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PDF
                              </div>
                            </div>
                            
                          </div>
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
        className={`bg-white  rounded-full focus:outline-none w-full transition-all ease-in h-full ${isPopupOpen ? "bg-gradient-to-r from-purple-700 to-[#540F66]" : ("")}`}
      >
        <Triangle className={`text-purple-800 ${isPopupOpen ? "text-white" : ("")}`}/>
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
    </Layout>
  );
}

export default Page;
