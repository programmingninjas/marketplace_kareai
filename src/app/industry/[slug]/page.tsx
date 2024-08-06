// "use client";

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useEffect, useState } from "react";
// import Loader from "@/components/Loader";
// import axios from "axios";


// const financial_summary = [
//   {
//     invoice: "Communication Equipment",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "Computer Hardware",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "Computer Network",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
// ];

// const management_effectiveness = [
//   {
//     coloum: "Return on Assets (RoA)",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     coloum: "RoA Ranking",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     coloum: "Return on Investment",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     coloum: "Return on Investment Ranking",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
// ];

// const valuation_ratios = [
//   {
//     invoice: "Communication Equipment",
//     Quater: "Q2",
//     Cash: "$250.00",
//     PE: "Credit Card",
//     DE: "Credit Card",
//     QR: "Credit Card",
//   },
//   {
//     invoice: "Computer Hardware",
//     Quater: "Q1",
//     Cash: "$250.00",
//     PE: "Credit Card",
//     DE: "Credit Card",
//     QR: "Credit Card",
//   },
//   {
//     invoice: "Computer Network",
//     Quater: "Q2",
//     Cash: "$250.00",
//     PE: "Credit Card",
//     DE: "Credit Card",
//     QR: "Credit Card",
//   },
// ];

// const ETFOpportunities = [
//   {
//     name: "XLF",
//     description: "SPDR Select Sect...",
//     lastPrice: "43.91",
//     netAssets: "38.796B",
//     expenseRatio: "0.09%",
//     ytdReturn: "+16.77%",
//   },
//   {
//     name: "VFH",
//     description: "Vanguard Financial...",
//     lastPrice: "107.44",
//     netAssets: "9.936B",
//     expenseRatio: "0.10%",
//     ytdReturn: "+16.45%",
//   },
//   {
//     name: "KRE",
//     description: "SPDR S&P Region...",
//     lastPrice: "58.58",
//     netAssets: "2.614B",
//     expenseRatio: "0.35%",
//     ytdReturn: "+11.73%",
//   },
//   {
//     name: "IYF",
//     description: "iShares U.S. Finan...",
//     lastPrice: "101.80",
//     netAssets: "2.582B",
//     expenseRatio: "0.40%",
//     ytdReturn: "+19.19%",
//   },
//   {
//     name: "FAS",
//     description: "Direxion Financial...",
//     lastPrice: "121.38",
//     netAssets: "2.13B",
//     expenseRatio: "0.94%",
//     ytdReturn: "+46.86%",
//   },
// ];

// const MutualFundOpportunities = [
//   {
//     name: "VFAIX",
//     description: "Vanguard Financi...",
//     lastPrice: "53.66",
//     netAssets: "9.936B",
//     expenseRatio: "0.10%",
//     ytdReturn: "+16.10%",
//   },
//   {
//     name: "VARBX",
//     description: "Vivaldi Merger Arb...",
//     lastPrice: "11.01",
//     netAssets: "1.56B",
//     expenseRatio: "2.85%",
//     ytdReturn: "+3.57%",
//   },
//   {
//     name: "VARAX",
//     description: "Vivaldi Merger Arb...",
//     lastPrice: "10.78",
//     netAssets: "1.56B",
//     expenseRatio: "2.85%",
//     ytdReturn: "+3.45%",
//   },
//   {
//     name: "VARCX",
//     description: "--",
//     lastPrice: "10.95",
//     netAssets: "1.56B",
//     expenseRatio: "2.85%",
//     ytdReturn: "-",
//   },
//   {
//     name: "TFIFX",
//     description: "T. Rowe Price Finan...",
//     lastPrice: "41.66",
//     netAssets: "1.529B",
//     expenseRatio: "0.93%",
//     ytdReturn: "+18.22%",
//   },
// ];

// export default function TableDemo() {
//   const [financialSummary, setFinancialSummary] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     axios
//       .get("YOUR_API_ENDPOINT")
//       .then((response) => {
//         setFinancialSummary(response.data.financial_summary);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);


//   return (
//     <div className="w-full h-full overflow-y-auto">
//       <div className="bg-white m-5">
//         <div className="p-5 border-2 border-gray-200 m-5">
//           <h1 className="text-2xl mb-3 font-semibold">Financial Summary</h1>
//           <Table className="border border-gray-200   shadow-gray-200">
//             <TableCaption></TableCaption>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-[150px] border">Industry</TableHead>
//                 <TableHead>Revenue Growth</TableHead>
//                 <TableHead>Net Income Growth</TableHead>
//                 <TableHead>Net Margin</TableHead>
//                 <TableHead>Stock Growth (YTD)</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//                 {financialSummary.map((item, index) => (
//                   <TableRow key={index}>
//                     <TableCell className="font-medium border">
//                       {item.Industry}
//                     </TableCell>
//                     <TableCell className="border">
//                       {item["Revenue Growth (Y/Y)"]}
//                     </TableCell>
//                     <TableCell className="border">
//                       {item["Net Income Growth (Y/Y)"]}
//                     </TableCell>
//                     <TableCell className="border">{item["Net Margin"]}</TableCell>
//                     <TableCell className="border">
//                       {item["Stock Growth (YTD)"]}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//           </Table>
//         </div>
//         <div className="p-5 border-2 border-gray-200 m-5">
//           <h1 className="text-2xl mb-3 font-semibold">Management Effectiveness</h1>
//           <Table className="border border-gray-200   shadow-gray-200">
//             <TableCaption></TableCaption>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-[150px] border"></TableHead>
//                 <TableHead>Q2,2024</TableHead>
//                 <TableHead>Q1,2024</TableHead>
//                 <TableHead>Q4,2023</TableHead>
//                 <TableHead>Q3,2023</TableHead>
//                 <TableHead>Q2,2023</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {management_effectiveness.map((item) => (
//                 <TableRow key={item.coloum}>
//                   <TableCell className="font-medium border">{item.coloum}</TableCell>
//                   <TableCell className="border">{item.paymentStatus}</TableCell>
//                   <TableCell className="font-medium border">
//                     {item.paymentMethod}
//                   </TableCell>
//                   <TableCell className="font-medium border">
//                     {item.paymentMethod}
//                   </TableCell>
//                   <TableCell className="font-medium border">{item.totalAmount}</TableCell>
//                   <TableCell className="font-medium border">{item.totalAmount}</TableCell>

//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//         <div className="p-5 border-2 border-gray-200 m-5">
//           <h1 className="text-2xl mb-3 font-semibold">Validation and Ratios</h1>
//           <Table className="border border-gray-200   shadow-gray-200">
//             <TableCaption></TableCaption>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-[150px] border">Industry</TableHead>
//                 <TableHead>Quater</TableHead>
//                 <TableHead>Cash Flow Margin</TableHead>
//                 <TableHead>P/E Ration</TableHead>
//                 <TableHead>Debt to Equity Ratio</TableHead>
//                 <TableHead>Quick Ratio</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {valuation_ratios.map((invoice) => (
//                 <TableRow key={invoice.invoice}>
//                   <TableCell className="font-medium border">{invoice.invoice}</TableCell>
//                   <TableCell className="border">{invoice.Quater}</TableCell>
//                   <TableCell className="font-medium border">{invoice.Cash}</TableCell>
//                   <TableCell className="font-medium border">{invoice.PE}</TableCell>
//                   <TableCell className="font-medium border">{invoice.DE}</TableCell>
//                   <TableCell className="font-medium border">{invoice.QR}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//         <div className="p-5 border-2 border-gray-200 m-5">
//           <h1 className="text-2xl mb-3 font-semibold">ETF Opportunities</h1>
//           <Table className="border border-gray-200   shadow-gray-200">
//             <TableCaption></TableCaption>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-[150px] border">Name</TableHead>
//                 <TableHead>Last Price</TableHead>
//                 <TableHead>Net Assets</TableHead>
//                 <TableHead>Expense Ratio</TableHead>
//                 <TableHead>YTD Return</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {ETFOpportunities.map((etf) => (
//                 <TableRow key={etf.name}>
//                   <TableCell className="font-medium border text-purple-7009">{etf.name}</TableCell>
//                   <TableCell className="border">{etf.lastPrice}</TableCell>
//                   <TableCell className="font-medium border">{etf.netAssets}</TableCell>
//                   <TableCell className="font-medium border">{etf.expenseRatio}</TableCell>
//                   <TableCell className="font-medium border text-green-400">{etf.ytdReturn}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//         <div className="p-5 border-2 border-gray-200 m-5">
//           <h1 className="text-2xl mb-3 font-semibold">Mutual Fund Opportunities</h1>
//           <Table className="border border-gray-200   shadow-gray-200">
//             <TableCaption></TableCaption>
//             <TableHeader>
//               <TableRow className="font-bold">
//                 <TableHead className="w-[150px] font-bold border">Name</TableHead>
//                 <TableHead>Last Price</TableHead>
//                 <TableHead>Net Assets</TableHead>
//                 <TableHead>Expense Ratio</TableHead>
//                 <TableHead>YTD Return</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {MutualFundOpportunities.map((fund) => (
//                 <TableRow key={fund.name}>
//                   <TableCell className="font-bold border text-purple-700">{fund.name}</TableCell>
//                   <TableCell className="border">{fund.lastPrice}</TableCell>
//                   <TableCell className="font-medium border">{fund.netAssets}</TableCell>
//                   <TableCell className="font-medium border">{fund.expenseRatio}</TableCell>
//                   <TableCell className=" text-green-400">{fund.ytdReturn}</TableCell>

//                   </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useParams } from "next/navigation";
import { string } from "zod";

interface FinancialSummary {
  Industry: string;
  RevenueGrowth: string;
  NetIncomeGrowth: string;
  NetMargin: string;
  StockGrowth: string;
}

interface ManagementEffectiveness {
  [key: string]: {
    "2 Q 2024": string;
    "1 Q 2024": string;
    "4 Q 2023": string;
    "3 Q 2023": string;
    "2 Q 2023": string;
  };
}

interface ValuationRatios {
  Industry: string;
  Quarters: string;
  "Cash Flow Margin": string;
  "P/E Ratio": string;
  "Debt to Equity Ratio": string;
  "Quick Ratio": string;
}

interface RecentNews {
  category: string;
  title: string;
  link: string;
}

const TableDemo: React.FC = () => {
  const [financialSummary, setFinancialSummary] = useState<FinancialSummary[]>([]);
  const [managementEffectiveness, setManagementEffectiveness] = useState<ManagementEffectiveness>({});
  const [valuationRatios, setValuationRatios] = useState<ValuationRatios[]>([]);
  const [recentNews, setRecentNews] = useState<RecentNews[]>([]);
  
  const params = useParams<{ slug: string }>();

  const url = params.slug;


  useEffect(() => {
    axios
      .get(`http://98.70.9.194:8069/api/sectors/${url}`)
      .then((response) => {
        console.log(response);
        const financialData = response.data.financial_summary;
        const formattedFinancialData = Object.keys(financialData).map(industry => ({
          Industry: industry,
          RevenueGrowth: financialData[industry]["Revenue Growth (Y/Y)"],
          NetIncomeGrowth: financialData[industry]["Net Income Growth (Y/Y)"],
          NetMargin: financialData[industry]["Net Margin"],
          StockGrowth: financialData[industry]["Stock Growth (YTD)"]
        }));
        setFinancialSummary(formattedFinancialData);

        setManagementEffectiveness(response.data.management_effectiveness);

        const valuationData = response.data.valuation_ratios;
        const formattedValuationData = Object.keys(valuationData).map(industry => ({
          Industry: industry,
          Quarters: valuationData[industry].Quaters,
          "Cash Flow Margin": valuationData[industry]["Cash Flow Margin"],
          "P/E Ratio": valuationData[industry]["P/E Ratio"],
          "Debt to Equity Ratio": valuationData[industry]["Debt To Equity"],
          "Quick Ratio": valuationData[industry]["Quick Ratio"]
        }));
        setValuationRatios(formattedValuationData);

        setRecentNews(response.data.recent_news);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  const formatIndustryName = (industry: string) => {
    return industry.replace(/\s+/g, "_").replace(/&/g, "");
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="bg-white m-5">
        <div className="parent_div w-full py-5  h-[500px] bg- flex">
          <div className="p-10 w-1/2 bg--200 h-full overflow-y-auto border rounded-xl drop-  border-gray-200 m-2">
            <h1 className="text-2xl mb-3 font-semibold">Financial Summary</h1>
            <Table className=" border--200 shadow- shadow--200">
              <TableCaption></TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Industry</TableHead>
                  <TableHead>Revenue Growth</TableHead>
                  <TableHead>Net Income Growth</TableHead>
                  <TableHead>Net Margin</TableHead>
                  <TableHead>Stock Growth (YTD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {financialSummary.map((item, index) => (
                  <TableRow key={index}>
                      <Link href={`/comapnies/${formatIndustryName(item.Industry)}`}>
                      <TableCell className="font-medium ">{item.Industry}</TableCell>

                    </Link>

                    <TableCell className="">{item.RevenueGrowth}</TableCell>
                    <TableCell className="">{item.NetIncomeGrowth}</TableCell>
                    <TableCell className="">{item.NetMargin}</TableCell>
                    <TableCell className="">{item.StockGrowth}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="p-10 w-1/2 h-full bg--100 border rounded-xl border-gray-200 m-2">
            <h1 className="text-2xl mb-3 font-semibold">Management Effectiveness</h1>
            <Table className="border--200 shadow- shadow-gray-200">
              <TableCaption></TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Q2, 2024</TableHead>
                  <TableHead>Q1, 2024</TableHead>
                  <TableHead>Q4, 2023</TableHead>
                  <TableHead>Q3, 2023</TableHead>
                  <TableHead>Q2, 2023</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.keys(managementEffectiveness).map((key, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium ">{key}</TableCell>
                    <TableCell className="">{managementEffectiveness[key]["2 Q 2024"]}</TableCell>
                    <TableCell className="">{managementEffectiveness[key]["1 Q 2024"]}</TableCell>
                    <TableCell className="">{managementEffectiveness[key]["4 Q 2023"]}</TableCell>
                    <TableCell className="">{managementEffectiveness[key]["3 Q 2023"]}</TableCell>
                    <TableCell className="">{managementEffectiveness[key]["2 Q 2023"]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="parent_div2 w-full py-5  h-[500px] bg- flex">
        <div className="p-10 w-1/2 bg--200 h-full overflow-y-auto border rounded-xl border-gray-200 m-2">
          <h1 className="text-2xl mb-3 font-semibold">Valuation and Ratios</h1>
          <Table className=" border-gray-200   shadow-gray-200">
            <TableCaption></TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] ">Industry</TableHead>
                <TableHead>Quarter</TableHead>
                <TableHead>Cash Flow Margin</TableHead>
                <TableHead>P/E Ratio</TableHead>
                <TableHead>Debt to Equity Ratio</TableHead>
                <TableHead>Quick Ratio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {valuationRatios.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium ">{item.Industry}</TableCell>
                  <TableCell className="">{item.Quarters}</TableCell>
                  <TableCell className="">{item["Cash Flow Margin"]}</TableCell>
                  <TableCell className="">{item["P/E Ratio"]}</TableCell>
                  <TableCell className="">{item["Debt to Equity Ratio"]}</TableCell>
                  <TableCell className="">{item["Quick Ratio"]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="p-10 w-1/2 bg--200 h-full overflow-hidden border rounded-xl border-gray-200 m-2">
          <h1 className="text-2xl mb-3 font-semibold">Recent News</h1>
          <div className="relative overflow-hidden h-full">
          <Table className=" border-gray-200 overflow-hidden   shadow-gray-200">
            <TableCaption></TableCaption>
            <TableHeader className="sticky top-0 bg-white z-10">
              <TableRow >
                <TableHead className="w-[150px] ">Category</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className=" animate-scroll  ">
              {recentNews.map((item, index) => (
                <TableRow key={index} >
                  <TableCell className="font-medium   ">{item.category}</TableCell>
                  <TableCell className="">{item.title}</TableCell>
                  <TableCell className="">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                     <span className="text-blue-600"> Read More</span>
                    </a>
                  </TableCell>
                </TableRow>
              ))}
               {recentNews.map((item, index) => (
              <TableRow key={index + recentNews.length} className="w-full">
                <TableCell className="font-medium">{item.category}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <span className="text-blue-600">Read More</span>
                  </a>
                </TableCell>
              </TableRow>
            ))}
             
            </TableBody>
          </Table>
          </div>
         
        </div>

        </div>

       
      </div>
    </div>
  );
};

export default TableDemo;
