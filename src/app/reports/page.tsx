// "use client"
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table"
// import axios from "axios";
// import { Delete, DeleteIcon, FileText, Trash, Trash2 } from "lucide-react";
// import Image from "next/image"
// import { useEffect, useState } from "react";
// interface Report {
//     id: string;
//     title: string;
//     timestamp: string;
//     description: string; // Add other fields as necessary
//   }
  
  
  
//   export default function TableDemo() {
//     const [reportHistory, setReportHistory] = useState<Report[]>([]);


//     useEffect(() => {
//         const fetchReportHistory = async () => {
//             try {
//               const response = await axios.get(`http://98.70.9.194:8000/api/get_reports/${"user_2idwZINLIRt9Vrd1jOIop3TEXeB"}`);
//               const reports = response.data.map((report: any) => ({
//                 id: report._id,
//                 title: report.title.replace(/\b(\d{4}|market|revenue|forecast|-)\b/gi, '').trim(),
//                 timestamp: report.timestamp,
//               }));
//               console.log(response.data);
//               setReportHistory(reports);
//               console.log(reports)
              
//             } catch (error) {
//               console.error('Error fetching report history:', error);
//             }
//         };
    
//         fetchReportHistory();
//       }, []);
//       const formatDate = (timestamp: string) => {
//         const date = new Date(timestamp);
//         const day = date.getDate().toString().padStart(2, '0');
//         const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-based
//         const year = date.getFullYear();
//         return `${day}.${month}.${year}`;
//       };



//     return (<div className="flex  p-5 min-h-dvh flex-col ">
//         <div className="text-5xl flex items-center gap-2 pl-1 font-semibold tracking-tighter sm:text-5xl   bg--200 md:text-4xl">
//          <Image src={"/history.png"} width={50} height={50} alt="no"/> My Reports
//         </div>
     
//          <div className=" bg--300 shadow-lg border shadow-zinc-300 mt-10 py-10 md:py-14 bg- lg:py-[35px] w-full h-full ">
//              <Table>
//         <TableCaption>A list of your recent invoices.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">Title</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead>Download</TableHead>
//             <TableHead className="text-right">Delete</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//         {reportHistory.map((report, index) => (
//             <TableRow className="bg--500" key={index}>
//               <TableCell className="font-medium w-52 bg- whitespace-nowrap">{report.title}</TableCell>
//               <TableCell>{formatDate(report.timestamp)}</TableCell>
//               <TableCell><FileText className="text-purple-700"/></TableCell>
//               <TableCell className="text-right"><Trash2 className="text-red-600"/></TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
        
//       </Table>
//         </div>
//     </div>
       
     
//     )
//   }
 

"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Delete, DeleteIcon, FileText, Trash, Trash2 } from "lucide-react";
import Image from "next/image"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface Report {
    id: string;
    title: string;
    timestamp: string;
    file:string;
    key:string;
    description: string; // Add other fields as necessary
}

export default function TableDemo() {
    const [reportHistory, setReportHistory] = useState<Report[]>([]);
    const [cid , setCid] = useState("");
    const { user } = useUser();
    // const {router} = useRouter();
  
    useEffect(() => {
      if (!user) return;
  
      // Getting user id from clerk and setting as the client id 
      const client_id = user.id;
      setCid(client_id); // Update state with the client id
  
    }, [user])

    useEffect(() => {
        const fetchReportHistory = async () => {
            try {
                const response = await axios.get(`http://98.70.9.194:8000/api/get_reports/${cid}`);
                const reports = response.data.map((report: any) => ({
                    id: report._id,
                    title: report.sector,
                    timestamp: report.timestamp,
                    file:report.file,
                }));
                console.log(response.data);
                setReportHistory(reports);
                console.log(reports)

            } catch (error) {
                console.error('Error fetching report history:', error);
            }
        };

        fetchReportHistory();
    }, [cid]);

    const formatDate = (timestamp: string) => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-based
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const handleDelete = (id: string,file:string) => {
        // Remove the report from the state
        setReportHistory(prevReports => prevReports.filter(report => report.id !== id));
        // const url = `https://kareai-reports.s3.ap-south-1.amazonaws.com/${file}`
        // Optionally, send a request to delete the report from the server
        axios.delete(`http://98.70.9.194:8000/api/delete_report/${file}`)
            .then(response => {
                console.log('Report deleted:', response.data);
            })
            .catch(error => {
                console.error('Error deleting report:', error);
            });
    };

    function handleDownload(file: string) {
    }

    return (
        <div className="flex  p-5 min-h-dvh flex-col ">
            <div className="text-5xl flex items-center gap-2 pl-1 font-semibold tracking-tighter sm:text-5xl   bg--200 md:text-4xl">
                <Image  src={"/history2.png"} width={50} height={50} alt="no" /> My Reports
            </div>

            <div className=" bg--300 shadow-lg border shadow-zinc-300 mt-10 py-10 md:py-14 bg- lg:py-[35px] w-full h-full ">
                <Table>
                    <TableCaption>A list of your recent Reports.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Title</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Download</TableHead>
                            <TableHead className="text-">Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {reportHistory.map((report, index) => (
                            <TableRow className="bg--500" key={index}>
                                <TableCell className="font-medium w-52 bg- whitespace-nowrap">{report.title}</TableCell>
                                <TableCell>{formatDate(report.timestamp)}</TableCell>
                                <TableCell>          <a href={report.file} target="_blank" rel="noopener noreferrer">

                                    <FileText onClick={()=>{handleDownload(report.file)}} className="text-purple-700" />
                                        </a>
                                    </TableCell>
                                <TableCell className="text-right">
                                    <Trash2 className="text-red-600 cursor-pointer" onClick={() => handleDelete(report.id,report.file)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
