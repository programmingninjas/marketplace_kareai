import React from 'react';
import Spreadsheet from "react-spreadsheet";

const Excel = () => {
  const columnLabels = ["Metric", "Value"];
  
  const data = [
    [{ value: "Treasury Shares Number" }, { value: 0.0 }],
    [{ value: "Ordinary Shares Number" }, { value: 24640000000.0 }],
    [{ value: "Share Issued" }, { value: 24640000000.0 }],
    [{ value: "Net Debt" }, { value: 2429000000.0 }],
    [{ value: "Total Debt" }, { value: 11056000000.0 }],
    [{ value: "Tangible Book Value" }, { value: 37436000000.0 }],
    [{ value: "Invested Capital" }, { value: 52687000000.0 }],
    [{ value: "Working Capital" }, { value: 33714000000.0 }],
    [{ value: "Net Tangible Assets" }, { value: 37436000000.0 }],
    [{ value: "Capital Lease Obligations" }, { value: 1347000000.0 }],
    [{ value: "Common Stock Equity" }, { value: 42978000000.0 }],
    [{ value: "Total Capitalization" }, { value: 51437000000.0 }],
    [{ value: "Total Equity Gross Minority Interest" }, { value: 42978000000.0 }],
    [{ value: "Stockholders Equity" }, { value: 42978000000.0 }],
    [{ value: "Gains Losses Not Affecting Retained Earnings" }, { value: 27000000.0 }],
    [{ value: "Other Equity Adjustments" }, { value: 27000000.0 }],
    [{ value: "Treasury Stock" }, { value: 0.0 }],
    [{ value: "Retained Earnings" }, { value: 29817000000.0 }],
    [{ value: "Additional Paid In Capital" }, { value: 13132000000.0 }],
    [{ value: "Capital Stock" }, { value: 2000000.0 }],
    [{ value: "Common Stock" }, { value: 2000000.0 }],
    [{ value: "Preferred Stock" }, { value: 0.0 }],
    [{ value: "Total Liabilities Net Minority Interest" }, { value: 22750000000.0 }],
    [{ value: "Total Non Current Liabilities Net Minority Interest" }, { value: 12119000000.0 }],
    [{ value: "Other Non Current Liabilities" }, { value: 65000000.0 }],
    [{ value: "Employee Benefits" }, { value: 0.0 }],
    [{ value: "Trade and Other Payables Non Current" }, { value: 1441000000.0 }],
    [{ value: "Non Current Deferred Liabilities" }, { value: 1035000000.0 }],
    [{ value: "Non Current Deferred Revenue" }, { value: 573000000.0 }],
    [{ value: "Non Current Deferred Taxes Liabilities" }, { value: 462000000.0 }],
    [{ value: "Long Term Debt And Capital Lease Obligation" }, { value: 9578000000.0 }],
    [{ value: "Long Term Capital Lease Obligation" }, { value: 1119000000.0 }],
    [{ value: "Long Term Debt" }, { value: 8459000000.0 }],
    [{ value: "Current Liabilities" }, { value: 10631000000.0 }],
    [{ value: "Other Current Liabilities" }, { value: 199000000.0 }],
    [{ value: "Current Deferred Liabilities" }, { value: 764000000.0 }],
    [{ value: "Current Deferred Revenue" }, { value: 764000000.0 }],
    [{ value: "Current Debt And Capital Lease Obligation" }, { value: 1478000000.0 }],
    [{ value: "Current Capital Lease Obligation" }, { value: 228000000.0 }],
    [{ value: "Current Debt" }, { value: 1250000000.0 }],
    [{ value: "Other Current Borrowings" }, { value: 1250000000.0 }],
    [{ value: "Current Provisions" }, { value: 415000000.0 }],
    [{ value: "Payables And Accrued Expenses" }, { value: 7775000000.0 }],
    [{ value: "Current Accrued Expenses" }, { value: 4780000000.0 }],
    [{ value: "Interest Payable" }, { value: 0.0 }],
    [{ value: "Payables" }, { value: 2995000000.0 }],
    [{ value: "Other Payable" }, { value: 0.0 }],
    [{ value: "Total Tax Payable" }, { value: 296000000.0 }],
    [{ value: "Accounts Payable" }, { value: 2699000000.0 }],
    [{ value: "Total Assets" }, { value: 65728000000.0 }],
    [{ value: "Total Non Current Assets" }, { value: 21383000000.0 }],
    [{ value: "Other Non Current Assets" }, { value: 132000000.0 }],
    [{ value: "Non Current Prepaid Assets" }, { value: 2822000000.0 }],
    [{ value: "Non Current Deferred Assets" }, { value: 6081000000.0 }],
    [{ value: "Non Current Deferred Taxes Assets" }, { value: 6081000000.0 }],
    [{ value: "Investments And Advances" }, { value: 1546000000.0 }],
    [{ value: "Other Investments" }, { value: 1546000000.0 }],
    [{ value: "Goodwill And Other Intangible Assets" }, { value: 5542000000.0 }],
    [{ value: "Other Intangible Assets" }, { value: 1112000000.0 }],
    [{ value: "Goodwill" }, { value: 4430000000.0 }],
    [{ value: "Net PPE" }, { value: 5260000000.0 }],
    [{ value: "Accumulated Depreciation" }, { value: -3509000000.0 }],
    [{ value: "Gross PPE" }, { value: 8769000000.0 }],
    [{ value: "Leases" }, { value: 0.0 }],
    [{ value: "Construction In Progress" }, { value: 189000000.0 }],
    [{ value: "Other Properties" }, { value: 1346000000.0 }],
    [{ value: "Machinery Furniture Equipment" }, { value: 5200000000.0 }],
    [{ value: "Buildings And Improvements" }, { value: 1816000000.0 }],
    [{ value: "Land And Improvements" }, { value: 218000000.0 }],
    [{ value: "Properties" }, { value: 0.0 }],
    [{ value: "Current Assets" }, { value: 44345000000.0 }],
    [{ value: "Other Current Assets" }, { value: 3080000000.0 }],
    [{ value: "Prepaid Assets" }, { value: 0.0 }],
    [{ value: "Inventory" }, { value: 5282000000.0 }],
    [{ value: "Finished Goods" }, { value: 2058000000.0 }],
    [{ value: "Work In Process" }, { value: 1505000000.0 }],
    [{ value: "Raw Materials" }, { value: 1719000000.0 }],
    [{ value: "Receivables" }, { value: 9999000000.0 }],
    [{ value: "Accounts Receivable" }, { value: 9999000000.0 }],
    [{ value: "Allowance For Doubtful Accounts Receivable" }, { value: 0.0 }],
    [{ value: "Gross Accounts Receivable" }, { value: 0.0 }],
    [{ value: "Cash Cash Equivalents And Short Term Investments" }, { value: 25984000000.0 }],
    [{ value: "Other Short Term Investments" }, { value: 18704000000.0 }],
    [{ value: "Cash And Cash Equivalents" }, { value: 7280000000.0 }]
  ];

  return (
    <div className='w-full h-full'>
      <Spreadsheet
        className='w-full h-full overflow-auto'
        data={data}
        columnLabels={columnLabels}
        
      />
    </div>
  );
};

export default Excel;
