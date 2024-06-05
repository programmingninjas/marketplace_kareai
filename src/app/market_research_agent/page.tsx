"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReactMarkdown from 'react-markdown';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import React, { useState } from 'react'
import Loader from "@/components/Loader";
import { WandIcon } from "lucide-react";
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

function Page() {
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
      const response = await axios.post(`http://localhost:8000/api/market_research`, {
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

  return (
    <div className="w-full h-screen flex overflow-hidden ">
      <div className="h-full">
        <Sidebar />
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
                        <Input className='mt-2 border border-zinc-400' {...field} />
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

                  <Accordion className=" " type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg border border-zinc-400 p-3">Advanced options</AccordionTrigger>
                      <AccordionContent>
                        <div className='flex items-center gap-5 p-4'>


                          <FormField
                            name="language"
                            control={form.control}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-l mb-2 font-semibold'>Select Language</FormLabel>
                                <Controller
                                  name="language"
                                  control={form.control}
                                  render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                      <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select Language" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="english">English</SelectItem>
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
                                <FormLabel className='text-l mb-2 font-semibold'>Select Model</FormLabel>
                                <Controller
                                  name="model"
                                  control={form.control}
                                  render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                      <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select Model" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="gpt">GPT</SelectItem>
                                        <SelectItem value="gemini">Gemini</SelectItem>
                                        <SelectItem value="llama 3">Llama 3</SelectItem>
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

                  <Button type="submit" className='w-full bg-gradient-to-r from-pink-600 to-[#540F66]' disabled={isSubmitting}>
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
          <div className='w-full min-w-1/2 h-full border-l-2 border-zinc-100 flex justify-center text-zinc-900  py-2 overflow-hidden'>
            <Tabs className="w-full " defaultValue="account">
              <TabsList className="flex w-full   mb-[50px] text-zinc-900">
                <TabsTrigger value="account">Industry Landscape</TabsTrigger>
                <TabsTrigger value="password">Market Size</TabsTrigger>
                <TabsTrigger value="profile">Tech Trends</TabsTrigger>
                <TabsTrigger value="settings">News</TabsTrigger>
                <TabsTrigger value="billing">Predictions</TabsTrigger>
                <TabsTrigger value="support">Insights</TabsTrigger>
              </TabsList>
              <TabsContent className="flex-1 overflow-hidden" value="account">
                <Card className="border-0 h-full">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Industry Landscape</CardTitle>
                    <CardDescription>Brief overview of the selected industry.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-full overflow-hidden">
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                        <ReactQuill className="h-[400px] py-5 mb-5 " modules={{toolbar:customToolbarOptions}} value={content} onChange={setContent} />
                        {/* <ReactMarkdown className="mt-4" children={content} components={{
                          a: ({ node, ...props }) => (
                            <a {...props} className='text text-purple-700 hover:underline'>
                              {props.children}
                            </a>
                          )
                        }} /> */}
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent className="flex-1 overflow-hidden" value="password">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Market Size and Projections</CardTitle>
                    <CardDescription>Current and expected growth of the market.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-full overflow-hidden">
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                        <ReactQuill value={content2} onChange={setContent2} />
                        <ReactMarkdown className="mt-4" children={content2} components={{
                          a: ({ node, ...props }) => (
                            <a {...props} className='text text-purple-700 hover:underline'>
                              {props.children}
                            </a>
                          )
                        }} />
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
                  <CardContent className="h-full overflow-hidden">
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                        <ReactQuill value={content3} onChange={setContent3} />
                        <ReactMarkdown className="mt-4" children={content3} components={{
                          a: ({ node, ...props }) => (
                            <a {...props} className='text text-purple-700 hover:underline'>
                              {props.children}
                            </a>
                          )
                        }} />
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
                  <CardContent className="h-full overflow-hidden">
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                        <ReactQuill value={content4} onChange={setContent4} />
                        <ReactMarkdown className="mt-4" children={content4} components={{
                          a: ({ node, ...props }) => (
                            <a {...props} className='text text-purple-700 hover:underline'>
                              {props.children}
                            </a>
                          )
                        }} />
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
                  <CardContent className="h-full overflow-hidden">
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                        <ReactQuill value={content5} onChange={setContent5} />
                        <ReactMarkdown className="mt-4" children={content5} components={{
                          a: ({ node, ...props }) => (
                            <a {...props} className='text text-purple-700 hover:underline'>
                              {props.children}
                            </a>
                          )
                        }} />
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent className="flex-1 overflow-hidden" value="support">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Insights</CardTitle>
                    <CardDescription>Key insights and takeaways.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-full overflow-hidden">
                    {isSubmitting ? (
                      <Loader messages={loadingMessages}/>
                    ) : (
                      <>
                        <ReactQuill value={content6} onChange={setContent6} />
                        <ReactMarkdown className="mt-4" children={content6} components={{
                          a: ({ node, ...props }) => (
                            <a {...props} className='text text-purple-700 hover:underline'>
                              {props.children}
                            </a>
                          )
                        }} />
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
