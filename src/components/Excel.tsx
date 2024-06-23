import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


const ExportToExcel = () => {
  // Sample data
  const data = [
    { name: 'John', age: 30, email: 'john@example.com' },
    { name: 'Jane', age: 25, email: 'jane@example.com' },
    { name: 'Doe', age: 22, email: 'doe@example.com' },
  ];

  // Convert data to worksheet
  const convertToSheet = (data: unknown[]) => {
    const ws = XLSX.utils.json_to_sheet(data);
    return ws;
  };

  // Create a workbook and add the worksheet
  const createWorkbook = (sheet: XLSX.WorkSheet) => {
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet, 'Sheet1');
    return wb;
  };

  // Download the Excel file
  const downloadExcel = (workbook: XLSX.WorkBook) => {
    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    saveAs(blob, 'sample_data.xlsx');
  };

  // Convert string to array buffer
  const s2ab = (s: string) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  };

  // Handle the export button click
  const handleExport = () => {
    const sheet = convertToSheet(data);
    const workbook = createWorkbook(sheet);
    downloadExcel(workbook);
  };

  return (
    <div>
      <button onClick={handleExport}>Export to Excel</button>
    </div>
  );
};

export default ExportToExcel;
