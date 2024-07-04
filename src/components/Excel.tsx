// import React from 'react';
// import Spreadsheet from 'react-spreadsheet';

// const Excel: React.FC = () => {
//   const columnLabels = ["Metric", "Value"];

//   const data = [
//     [{ value: "Treasury Shares Number" }, { value: 0.0 }],
//     [{ value: "Ordinary Shares Number" }, { value: 24640000000.0 }],
//     [{ value: "Share Issued" }, { value: 24640000000.0 }],
//     [{ value: "Net Debt" }, { value: 2429000000.0 }],
//     [{ value: "Total Debt" }, { value: 11056000000.0 }],
//     [{ value: "Tangible Book Value" }, { value: 37436000000.0 }],
//     [{ value: "Invested Capital" }, { value: 52687000000.0 }],
//     [{ value: "Working Capital" }, { value: 33714000000.0 }],
//     [{ value: "Net Tangible Assets" }, { value: 37436000000.0 }],
//     [{ value: "Capital Lease Obligations" }, { value: 1347000000.0 }],
//     [{ value: "Common Stock Equity" }, { value: 42978000000.0 }],
//     [{ value: "Total Capitalization" }, { value: 51437000000.0 }],
//     [{ value: "Total Equity Gross Minority Interest" }, { value: 42978000000.0 }],
//     [{ value: "Stockholders Equity" }, { value: 42978000000.0 }],
//     [{ value: "Gains Losses Not Affecting Retained Earnings" }, { value: 27000000.0 }],
//     [{ value: "Other Equity Adjustments" }, { value: 27000000.0 }],
//     [{ value: "Treasury Stock" }, { value: 0.0 }],
//     [{ value: "Retained Earnings" }, { value: 29817000000.0 }],
//     [{ value: "Additional Paid In Capital" }, { value: 13132000000.0 }],
//     [{ value: "Capital Stock" }, { value: 2000000.0 }],
//     [{ value: "Common Stock" }, { value: 2000000.0 }],
//     [{ value: "Preferred Stock" }, { value: 0.0 }],
//     [{ value: "Total Liabilities Net Minority Interest" }, { value: 22750000000.0 }],
//     [{ value: "Total Non Current Liabilities Net Minority Interest" }, { value: 12119000000.0 }],
//     [{ value: "Other Non Current Liabilities" }, { value: 65000000.0 }],
//     [{ value: "Employee Benefits" }, { value: 0.0 }],
//     [{ value: "Trade and Other Payables Non Current" }, { value: 1441000000.0 }],
//     [{ value: "Non Current Deferred Liabilities" }, { value: 1035000000.0 }],
//     [{ value: "Non Current Deferred Revenue" }, { value: 573000000.0 }],
//     [{ value: "Non Current Deferred Taxes Liabilities" }, { value: 462000000.0 }],
//     [{ value: "Long Term Debt And Capital Lease Obligation" }, { value: 9578000000.0 }],
//     [{ value: "Long Term Capital Lease Obligation" }, { value: 1119000000.0 }],
//     [{ value: "Long Term Debt" }, { value: 8459000000.0 }],
//     [{ value: "Current Liabilities" }, { value: 10631000000.0 }],
//     [{ value: "Other Current Liabilities" }, { value: 199000000.0 }],
//     [{ value: "Current Deferred Liabilities" }, { value: 764000000.0 }],
//     [{ value: "Current Deferred Revenue" }, { value: 764000000.0 }],
//     [{ value: "Current Debt And Capital Lease Obligation" }, { value: 1478000000.0 }],
//     [{ value: "Current Capital Lease Obligation" }, { value: 228000000.0 }],
//     [{ value: "Current Debt" }, { value: 1250000000.0 }],
//     [{ value: "Other Current Borrowings" }, { value: 1250000000.0 }],
//     [{ value: "Current Provisions" }, { value: 415000000.0 }],
//     [{ value: "Payables And Accrued Expenses" }, { value: 7775000000.0 }],
//     [{ value: "Current Accrued Expenses" }, { value: 4780000000.0 }],
//     [{ value: "Interest Payable" }, { value: 0.0 }],
//     [{ value: "Payables" }, { value: 2995000000.0 }],
//     [{ value: "Other Payable" }, { value: 0.0 }],
//     [{ value: "Total Tax Payable" }, { value: 296000000.0 }],
//     [{ value: "Accounts Payable" }, { value: 2699000000.0 }],
//     [{ value: "Total Assets" }, { value: 65728000000.0 }],
//     [{ value: "Total Non Current Assets" }, { value: 21383000000.0 }],
//     [{ value: "Other Non Current Assets" }, { value: 132000000.0 }],
//     [{ value: "Non Current Prepaid Assets" }, { value: 2822000000.0 }],
//     [{ value: "Non Current Deferred Assets" }, { value: 6081000000.0 }],
//     [{ value: "Non Current Deferred Taxes Assets" }, { value: 6081000000.0 }],
//     [{ value: "Investments And Advances" }, { value: 1546000000.0 }],
//     [{ value: "Other Investments" }, { value: 1546000000.0 }],
//     [{ value: "Goodwill And Other Intangible Assets" }, { value: 5542000000.0 }],
//     [{ value: "Other Intangible Assets" }, { value: 1112000000.0 }],
//     [{ value: "Goodwill" }, { value: 4430000000.0 }],
//     [{ value: "Net PPE" }, { value: 5260000000.0 }],
//     [{ value: "Accumulated Depreciation" }, { value: -3509000000.0 }],
//     [{ value: "Gross PPE" }, { value: 8769000000.0 }],
//     [{ value: "Leases" }, { value: 0.0 }],
//     [{ value: "Construction In Progress" }, { value: 189000000.0 }],
//     [{ value: "Other Properties" }, { value: 1346000000.0 }],
//     [{ value: "Machinery Furniture Equipment" }, { value: 5200000000.0 }],
//     [{ value: "Buildings And Improvements" }, { value: 1816000000.0 }],
//     [{ value: "Land And Improvements" }, { value: 218000000.0 }],
//     [{ value: "Properties" }, { value: 0.0 }],
//     [{ value: "Current Assets" }, { value: 44345000000.0 }],
//     [{ value: "Other Current Assets" }, { value: 3080000000.0 }],
//     [{ value: "Prepaid Assets" }, { value: 0.0 }],
//     [{ value: "Inventory" }, { value: 5282000000.0 }],
//     [{ value: "Finished Goods" }, { value: 2058000000.0 }],
//     [{ value: "Work In Process" }, { value: 1505000000.0 }],
//     [{ value: "Raw Materials" }, { value: 1719000000.0 }],
//     [{ value: "Receivables" }, { value: 9999000000.0 }],
//     [{ value: "Accounts Receivable" }, { value: 9999000000.0 }],
//     [{ value: "Allowance For Doubtful Accounts Receivable" }, { value: 0.0 }],
//     [{ value: "Gross Accounts Receivable" }, { value: 0.0 }],
//     [{ value: "Cash Cash Equivalents And Short Term Investments" }, { value: 25984000000.0 }],
//     [{ value: "Other Short Term Investments" }, { value: 18704000000.0 }],
//     [{ value: "Cash And Cash Equivalents" }, { value: 7280000000.0 }]
//   ];

//   return (
//     <div className='w-full h-full'>
//       <Spreadsheet
//         className='w-full h-full overflow-auto'
//         data={data}
//         columnLabels={columnLabels}
//       />
//     </div>
//   );
// };

// export default Excel;



import useDownload from '@/hooks/useDownload';
import { FileText } from 'lucide-react';
import React, { useState } from 'react';
import Spreadsheet from 'react-spreadsheet';

interface ExcelProps {
  balance_sheet: any;
  url:string
}



  

const Excel: React.FC<ExcelProps> = ({ balance_sheet,url }) => {
  const columnLabels = ["Metric", "Value"];

  const data = Object.entries(balance_sheet).map(([metric, value]) => [
    { value: metric },
    { value: value !== null ? value : '' },
  ]);
  const [filename, setFilename] = useState('');

  const handleDownload = () => {
    setFilename(`${url}`);
  };
  useDownload(filename);
  return (
    <div className='w-full h-full'>
      <Spreadsheet
        className='w-full h-full overflow-auto'
        data={data}
        columnLabels={columnLabels}
      />
       <div className=" bg--900 mb-10 flex gap-2 py-2">
                            <div className="relative group">
                              <FileText
                                className="w-5 cursor-pointer hover:text-blue-500"
                                onClick={() => handleDownload()}
                              />
                              
                              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 w-max p-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Excel
                              </div>
                            </div>
                          </div>
    </div>
  );
};

export default Excel;
