import React from 'react';
import { ResponsiveBar } from "@nivo/bar";
import { FinancialSummary } from "./VerticalBox";

const FinancialSummaryComponent: React.FC = () => {
  return (
    <div className="p-10 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          {/* <h2 className="text-lg font-semibold">Working Capital</h2> */}
          <BarChart className="w-full aspect-[5/3]" color="#007BFF" />
          <h3 className="text-center text-lg font-semibold mt-4">Assets</h3>
          <ul className="list list-inside space-y-2 text-left">
            <li>
              <p className="font-semibold">Assets</p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Under assets we can visualize Total Assets, Total Current
                  Assets, Inventory, Cash or Cash Equivalents
                </li>
                <li>
                  LY or Last Year comparison is not required. So all the buttons
                  within the yellow border can be removed. We can put a short one
                  liner insight there to explain asset
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          {/* <h2 className="text-lg font-semibold">Total Equity</h2> */}
          <BarChart className="w-full aspect-[5/3]" color="#540F66" />
          <h3 className="text-center text-lg font-semibold mt-4">Liabilities</h3>
          <ul className="list-disc list-inside pl-4 text-left">
            <p className="font-semibold">Liabilities</p>
            <li>
              Under liabilities we can visualize short term and long term debt
              and current and total liabilities
            </li>
            <li>
              LY or Last Year comparison is not required. So all the buttons
              within the yellow border can be removed. We can put a short one
              liner insight there to explain liabilities
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="grid  grid-cols-2 gap-4">
          <div className="mt-14 ">
            <BarChart className="w-full aspect-[3/3]" color="#D1B892" />
            <h3 className="text-center text-lg font-semibold">Equity</h3>
            <ul className="list-disc list-inside pl-4 text-left">
              <li>
                Under liabilities we can visualize short term and long term debt
                and current and total liabilities
              </li>
              <li>
                LY or Last Year comparison is not required. So all the buttons
                within the yellow border can be removed. We can put a short one
                liner insight there to explain liabilities
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <FinancialSummary
              currentRatio={"1:2"}
              DebtTEq={"1:2"}
              QuickR={"1:2"}
              Roe={"1:2"}
              AssetT={"1:2"}
            />
            <h2 className="text-lg text-center mt-9 font-semibold">Ratio Analysis</h2>
            <ul className="list-disc list-inside pl-4 mt- text-left">
              <li>
                Under liabilities we can visualize short term and long term debt
                and current and total liabilities
              </li>
              <li>
                LY or Last Year comparison is not required. So all the buttons
                within the yellow border can be removed. We can put a short one
                liner insight there to explain liabilities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function BarChart({ className, color }: { className: string; color: string }) {
  return (
    <div className={className}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={[color]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

export default FinancialSummaryComponent;
