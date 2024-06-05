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
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(`http://localhost:8000/api/medical_research`, {
        query: data.query,
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setContent(response.data.research);
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
            <div className='py-4 text-zinc-900 font-bold text-3xl ml-6 mb-6 bg-white'>Medical Research Agent </div>
            <div className='p-6 mt-2 flex-1 overflow-hidden'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                  <FormField
                    name="query"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='mb-2  text-2xl font-bold text-zinc-800'>Query</FormLabel>
                        <Input className='mt-2 border border-zinc-400' {...field} />
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
              <TabsContent className="flex-1 overflow-hidden" value="account">
                <Card className="border-0 h-full">
                  <CardHeader>
                    <CardTitle className="text-zinc-900">Research Summary</CardTitle>
                    <CardDescription>Summary of the research related to the query.</CardDescription>
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
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
