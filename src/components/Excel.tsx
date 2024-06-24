import React from 'react'

import Spreadsheet from "react-spreadsheet";

const Excel = () => {
  const columnLabels = ["Flavour", "Food"];
  const rowLabels = ["Item 1", "Item 2","Item 2","Item 2","Item 2","Item 2"];
  const data = [
    [{ value: "Vanilla" },{ value: "Vanilla" },{ value: "Vanilla" },{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Vanilla" },{ value: "Vanilla" },{ value: "Vanilla" },{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Vanilla" },{ value: "Vanilla" },{ value: "Vanilla" },{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Vanilla" },{ value: "Vanilla" },{ value: "Vanilla" },{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Vanilla" },{ value: "Vanilla" },{ value: "Vanilla" },{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }, { value: "Cookies" }, { value: "Cookies" }, { value: "Cookies" }],

  ];
  return (
    <div className='w-full h-full '>
      <Spreadsheet
    className='w-full h-full'
      data={data}
      columnLabels={columnLabels}
      rowLabels={rowLabels}
    />
    </div>
    
  );
};

export default Excel