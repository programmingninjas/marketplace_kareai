import React from 'react';
import ReactDOM from 'react-dom';
import ExportToExcel from '@/components/Excel';

const App = () => (
  <div>
    <h1>Excel Export Example</h1>
    <ExportToExcel />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
