import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { SignedIn, SignUp, UserButton } from "@clerk/nextjs";
import Layout from "@/components/Layout";

export default function Component() {
  return (
    <Layout>
      <div className="flex min-h-dvh flex-col">
        <main className="">
          <section className="w-full py-12 md:py-14 bg- lg:py-[48px]">
            <div className="container bg- grid max-w-3xl items-center gap- px-4 md:px-6 lg:grid-cols-1 lg:gap-10">
              <div className="space-y-4 bg-">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Introducing AI Analyst
                  <span className="bg-gradient-to-r from-purple-700 to-[#540F66] bg-clip-text text-transparent">OS</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  AI Analyst OS streamlines your entire data analysis workflow. From data collection and preprocessing, to insightful analytics and reporting, and beyond. Get started with pre-built AI models.
                </p>
                <div className="flex items-center gap-4">
                <Link
                    href="/sign-up"
                    className="inline-flex items-center justify-center text-sm font-medium text-muted-foreground hover:underline"
                    prefetch={false}
                  >
                  <Button className="bg-gradient-to-r from-purple-700 to-[#540F66]" >Get Started</Button>
                  </Link>

                  <Link
                    href="/sign-up"
                    className="inline-flex items-center justify-center text-sm font-medium text-muted-foreground hover:underline"
                    prefetch={false}
                  >
                    Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className="w-full flex bg--50 rounded-lg justify-center gap-2 bg- h-full">
            <Card className="w-[350px] shadow-lg border-2 border-zinc-100">
              <CardHeader>
                <CardTitle>Category Playbook</CardTitle>
                <CardDescription>A useful AI powered tool to get insights of industry</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-2">
                  Aids businesses in understanding market trends, customer behavior, and competitive landscape
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/market_research_agent">
                  <Button className="bg-gradient-to-r from-purple-700 to-[#540F66]">Try Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="w-[350px] shadow-lg border-2 border-zinc-100">
              <CardHeader>
                <CardTitle>Medical Research Agent</CardTitle>
                <CardDescription>AI tool to assist medical research queries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-2">
                  Supports clinical studies, healthcare data analysis, and medical literature reviews for evidence-based practice.
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/medical_research_agent">
                <Button className="bg-gradient-to-r from-purple-700 to-[#540F66]">Try Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="w-[350px] shadow-lg border-2 border-zinc-100">
              <CardHeader>
                <CardTitle>Financial Analytics Agent</CardTitle>
                <CardDescription>AI tool to assist financial research queries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-2 mb-5">
                  Analyzes financial data, market conditions, and economic trends for informed investment decisions
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/financial_analytics_agent">
                <Button className="bg-gradient-to-r from-purple-700 to-[#540F66] mt-[10px]">Try Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </Layout>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
