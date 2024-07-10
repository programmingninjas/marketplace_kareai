// import { SignUp } from '@clerk/nextjs';

// export default function SignUpPage() {
//   return (
//     <main className="flex h-screen w-full items-center justify-center">
//       <SignUp />
//     </main>
//   );
// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/exGTRchGLmf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SignIn, SignUp } from "@clerk/nextjs"

export default function Component() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid max-w-5xl items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Welcome back 

              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Sign in to continue your journey of exploring our powerful tools and resources. Together, we'll build something
                amazing.
              </p>
              <div className="flex items-center gap-4">
                <Button>Get Started</Button>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center text-sm font-medium text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
           <SignIn />
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Men
            </Link>
            <Link href="#" prefetch={false}>
              Women
            </Link>
            <Link href="#" prefetch={false}>
              Kids
            </Link>
            <Link href="#" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props:any) {
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
  )
}
