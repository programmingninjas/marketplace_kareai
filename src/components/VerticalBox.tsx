import React from 'react';

interface FinancialSummaryProps {
  currentRatio: string;
  DebtTEq: string;
  QuickR: string;
  Roe: string;
  AssetT: string;
}

export const FinancialSummary: React.FC<FinancialSummaryProps> = ({
  currentRatio,
  DebtTEq,
  QuickR,
  Roe,
  AssetT,
}) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md max-w-xs mx-auto">
      <div className="space-y-4">
        <div className='flex justify-around'>
        <div className="h-14 bg-gray-200 w-32 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-sm text-center font-semibold">Current Ratio</h3>
          </div>
        </div>
        <div className="h-14 bg-gray-200 w-32 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">{currentRatio}</span>
          </div>
        </div>
        </div>
        

        <div className='flex justify-around'>
        <div className="h-14 bg-gray-200 w-32 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-sm text-center font-semibold">Debt to Equity</h3>
          </div>
        </div>
        <div className="h-14 bg-gray-200 w-32 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">{DebtTEq}</span>
          </div>
        </div>
        </div>
        <div className='flex justify-around'>
        <div className="h-14 bg-gray-200 w-32 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-sm text-center font-semibold">Quick Ratio</h3>
          </div>
        </div>
        <div className="h-14 bg-gray-200 w-32 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">{QuickR}</span>
          </div>
        </div>
        </div>

        <div className='flex justify-around'>
        <div className="h-14 bg-gray-200 w-32 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-sm text-center font-semibold p-">Return of Investment </h3>
          </div>
        </div>
        <div className="h-14 bg-gray-200 w-32 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">{Roe}</span>
          </div>
        </div>
        </div>

        <div className='flex justify-around'>
        <div className="h-14 bg-gray-200 w-32 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-sm text-center font-semibold">Asset Turnover </h3>
          </div>
        </div>
        <div className="h-14 bg-gray-200 w-32 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">{AssetT}</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

