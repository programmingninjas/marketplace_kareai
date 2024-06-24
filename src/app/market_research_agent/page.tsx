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
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");
  const [content5, setContent5] = useState("");
  const [content6, setContent6] = useState("");
  const [wordFile, setWordFile] = useState("");
  const [isHovered, setIsHovered] = useState(false);

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
      const response = await axios.post(`http://98.70.9.194:8000/api/market_research`, {
        sector: data.sector,
        value_proposition: data.value_proposition,
        model: data.model,
        language: data.language
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
      setWordFile(response.data.file);
      setData(response.data.data);
      setType(response.data.type);
      console.log(response);
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
    console.log(left)
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
      model: 'llama3-70b-8192',
      sector:"",
      value_proposition:""
    },
  });
  const router = useRouter();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Content copied to clipboard");
    }).catch((err) => {
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

  //     // Optional: Parse the filename from the Content-Disposition header if available
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
  //   }
  // };

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
    <Layout>
      <div className="w-full h-screen flex overflow-hidden ">
        <div className="w-full">
          <div className="py-5 w-full border-b-2 border-zinc-100"> </div>
          <div className="w-full  h-full flex  text-base text-zinc-800 overflow-hidden">
            {left ? (
              <>
                <div
                  className={`leftDiv w-1/2 h-full flex flex-col ${
                    left ? "inline" : "block"
                  }`}
                >
                  <div className="py-4 flex items-center  justify-between pr-6  text-zinc-900 font-bold text-3xl ml-6 mb-6 bg-white">
                    Market Research Agent
                    <div className="relative group">
                      <PanelRightClose
                        onClick={toggleInput}
                        className="cursor-pointer  hover:text-blue-600 "
                      />
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 mb-4 bg-white shadow-md text-zinc-900 text-xs rounded opacity-0 group-hover:opacity-100 font-[200] transition-opacity duration-300">
                        Tap to hide
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
                          name="sector"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="mb-2  text-2xl font-bold text-zinc-800">
                                Industry Sector
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
                                className="h-24  border border-zinc-400 rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...field}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />

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
                                            <SelectTrigger className="w-[180px] bg-gray-50 border border-gray-300 rounded-md">
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
                                            <SelectTrigger className="w-[180px] bg-gray-50 border border-gray-300 rounded-md">
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
                                                Google|Gemini Pro
                                              </SelectItem>
                                              <SelectItem value="claude-3-5-sonnet-20240620">
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

            <div className="w-full   h-full border-l-2  border-zinc-100 flex justify-center text-zinc-900   py-2 overflow-hidden"  onMouseUp={handleTextSelection}>
              <Tabs className="w-full bg--200 " defaultValue="account">
                <TabsList
                  className={`flex w-full ${
                    left ? "justify-evenly" : "justify-around gap-12"
                  } text-zinc-900`}
                >
                  <PanelRightClose
                    onClick={toggleInput}
                    className={`cursor-pointer ${left ? "hidden" : "block"}`}
                  />
                  <TabsTrigger value="account">Industry Landscape</TabsTrigger>
                  <TabsTrigger value="password">Market Size</TabsTrigger>
                  <TabsTrigger value="Graphs">Graphs</TabsTrigger>
                  <TabsTrigger value="profile">Tech Trends</TabsTrigger>
                  <TabsTrigger value="settings">News</TabsTrigger>
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
                        className="h-full overflow-hidden"
                        id="content1"
                      >
                        {isSubmitting ? (
                          <Loader messages={loadingMessages} />
                        ) : (
                          <>
                            <ReactQuill
                              className="h-[400px] py-2 mb-10"
                              modules={{ toolbar: customToolbarOptions }}
                              value={content}
                              onChange={setContent}
                            />
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
                                <Save
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  // onClick={() =>
                                  //   downloadPDF(content, "industry_landscape")
                                  // }
                                />
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  PDF
                                </div>
                              </div>
                              <div className="relative group">
                                <FileText
                                  className="w-5 cursor-pointer hover:text-blue-500"
                                  // onClick={() => downloadWord(wordFile)}
                                />
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Word
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
                        <Loader messages={loadingMessages} />
                      ) : (
                        <>
                          <ReactQuill
                            className="h-[400px] py-2 mb-10"
                            modules={{ toolbar: customToolbarOptions }}
                            value={content2}
                            onChange={setContent2}
                          />

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
                              <Save
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() =>
                                //   downloadPDF(content2, "Market_Size")
                                // }
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PDF
                              </div>
                            </div>
                            <div className="relative group">
                              <FileText
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() => downloadWord(wordFile)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Word
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
                    <CardContent className=" h-full overflow-hidden">
                      {isSubmitting ? (
                        <Loader messages={loadingMessages} />
                      ) : (
                        <>
                          <GraphComponent data={data} type={type} />
                          {/* <ReactQuill className="h-[400px] py-2 mb-10" modules={{toolbar:customToolbarOptions}} value={content} onChange={setContent} /> */}
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent className="flex-1 overflow-hidden" value="profile">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-zinc-900">
                        Tech Trends
                      </CardTitle>
                      <CardDescription>
                        Overview of technological trends in the industry.
                      </CardDescription>
                    </CardHeader>
                    <CardContent
                      className="h-full overflow-hidden"
                      id="content3"
                    >
                      {isSubmitting ? (
                        <Loader messages={loadingMessages} />
                      ) : (
                        <>
                          <ReactQuill
                            className="h-[400px] py-2 mb-10"
                            modules={{ toolbar: customToolbarOptions }}
                            value={content3}
                            onChange={setContent3}
                          />
                          <div className=" py-2   flex  gap-2">
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
                              <Save
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() =>
                                //   downloadPDF(content3, "tech_trends")
                                // }
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PDF
                              </div>
                            </div>
                            <div className="relative group">
                              <FileText
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() => downloadWord(wordFile)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Word
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
                        <Loader messages={loadingMessages} />
                      ) : (
                        <>
                          <ReactQuill
                            className="h-[400px] py-2 mb-10"
                            value={content4}
                            modules={{ toolbar: customToolbarOptions }}
                            onChange={setContent4}
                          />
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
                              <Save
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() => downloadPDF(content4, "News")}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PDF
                              </div>
                            </div>
                            <div className="relative group">
                              <FileText
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() => downloadWord(wordFile)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Word
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
                        <Loader messages={loadingMessages} />
                      ) : (
                        <>
                          <ReactQuill
                            className="h-[400px] py-2 mb-10"
                            value={content5}
                            modules={{ toolbar: customToolbarOptions }}
                            onChange={setContent5}
                          />
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
                              <Save
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() =>
                                //   downloadPDF(content5, "Predictions")
                                // }
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PDF
                              </div>
                            </div>
                            <div className="relative group">
                              <FileText
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() => downloadWord(wordFile)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Word
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
                        <Loader messages={loadingMessages} />
                      ) : (
                        <>
                          <ReactQuill
                            className="h-[400px] py-2 mb-10"
                            modules={{ toolbar: customToolbarOptions }}
                            value={content6}
                            onChange={setContent6}
                          />
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
                              <Save
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() =>
                                //   downloadPDF(content6, "Recommendations")
                                // }
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                PDF
                              </div>
                            </div>
                            <div className="relative group">
                              <FileText
                                className="w-5 cursor-pointer hover:text-blue-500"
                                // onClick={() => downloadWord(wordFile)}
                              />
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Word
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                hii
              </Tabs>
              <div
      className="fixed bottom-5 right-10 h-10  bg-white cursor-pointer drop-shadow-xl rounded-full transition-all ease-in-out animate-slide-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        onClick={handlePopupClick}
        className="bg-white rounded-full focus:outline-none w-full h-full"
      >
        <Image
          width={10}
          height={8}
          src="/logo2.jpg"
          className="object-fill w-full h-full"
          alt="Chat Logo"
        />
      </Button>
      {isHovered && (
        <div className="absolute bottom-1/2 w-28  right-10 transform translate-y-1/2 mr-6   p-2  text-zinc-900 text-xs rounded shadow-lg z-50">
          Open Chat Bot
        </div>
      )}
    </div>       
                 {isPopupOpen && (
                <div className="fixed top-[20%] right-0  bg-white cursor-pointer shadow-lg rounded-lg transition-all ease-in-out animate-slide-in">
                  <Button
                    onClick={handlePopupClick}
                    className=" bg-white rounded-full focus:outline-none"
                  >
                    <Image
                      width={10}
                      height={8}
                      src="/logo2.jpg"
                      className="object-fill w-full h-full"
                      alt="Chat Logo"
                      onClick={handlePopupClick}
                    />
                  </Button>
                  
                </div>
              )}
              

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
