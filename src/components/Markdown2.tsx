import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface Props {
  tt: any;
}

const markdownContent = `| **Company**             | **Revenue (in billion USD)** | **R&D Investment (in billion USD)** | **Net Profit (in billion USD)** | **Market Capitalization (in billion USD)** | **Number of Employees** | **Key Therapeutic Areas**             | **Geographical Focus**  | **Founded Year** | **Headquarters**      | **CEO**                      | **Stock Symbol** |
|-------------------------|------------------------------|-------------------------------------|----------------------------------|--------------------------------------------|--------------------------|----------------------------------------|--------------------------|-------------------|------------------------|-----------------------------|-------------------|
| **Johnson & Johnson**   | 127.1                        | 12.2                                | 16.3                             | 465.0                                      | 141,700                  | Pharmaceuticals, Medical Devices, Consumer Health | Global                   | 1886              | New Brunswick, NJ, USA | Joaquin Duato               | JNJ               |
| **Pfizer**              | 100.3                        | 10.0                                | 21.5                             | 310.4                                      | 79,000                   | Vaccines, Oncology, Rare Diseases      | Global                   | 1849              | New York, NY, USA      | Albert Bourla                | PFE               |
| **Roche Holding**       | 64.1                         | 14.5                                | 13.5                             | 287.0                                      | 101,465                  | Oncology, Immunology, Infectious Diseases | Europe, North America    | 1896              | Basel, Switzerland     | Severin Schwan               | RHHBY             |
| **Novartis**            | 54.6                         | 9.0                                 | 10.2                             | 225.0                                      | 105,000                  | Oncology, Cardiovascular, Ophthalmology | Global                   | 1996              | Basel, Switzerland     | Vas Narasimhan               | NVS               |
| **Merck & Co.**         | 53.4                         | 10.5                                | 12.4                             | 220.6                                      | 74,000                   | Oncology, Vaccines, Infectious Diseases | North America, Europe    | 1891              | Kenilworth, NJ, USA    | Robert M. Davis              | MRK               |
| **Sanofi**              | 46.9                         | 6.0                                 | 7.3                              | 140.5                                      | 100,000                  | Vaccines, Oncology, Immunology         | Europe, North America    | 1973              | Paris, France          | Paul Hudson                  | SNY               |
| **GSK**                 | 44.5                         | 5.5                                 | 8.1                              | 120.4                                      | 99,000                   | Vaccines, Respiratory, HIV             | Europe, North America    | 2000              | Brentford, UK          | Emma Walmsley                | GSK               |
| **AstraZeneca**         | 43.4                         | 7.0                                 | 9.0                              | 200.5                                      | 76,100                   | Oncology, Cardiovascular, Respiratory  | Global                   | 1999              | Cambridge, UK          | Pascal Soriot                | AZN               |
| **Eli Lilly**           | 42.3                         | 6.6                                 | 6.8                              | 180.2                                      | 38,000                   | Diabetes, Oncology, Immunology         | North America, Europe    | 1876              | Indianapolis, IN, USA  | David A. Ricks               | LLY               |
| **Bristol Myers Squibb**| 40.8                         | 7.8                                 | 8.9                              | 160.3                                      | 30,000                   | Oncology, Cardiovascular, Immunology   | North America, Europe    | 1858              | New York, NY, USA      | Giovanni Caforio             | BMY               |

### Key Insights

1. **Revenue Leadership**: Johnson & Johnson leads the industry with a significant margin in revenue, followed by Pfizer and Roche Holding. The top three companies collectively generate more revenue than the remaining seven combined.

2. **R&D Investment**: Roche Holding invests the most in R&D, reflecting its strong focus on innovation, particularly in oncology and immunology. Johnson & Johnson and Pfizer also have substantial R&D expenditures, indicating their commitment to developing new therapies and maintaining competitive edges.

3. **Profit Margins**: Pfizer stands out with the highest net profit, largely driven by its successful vaccine portfolio. This is followed by Johnson & Johnson and Roche Holding, showcasing a strong correlation between high revenue and profitability.

4. **Market Capitalization**: Johnson & Johnson also leads in market capitalization, reflecting investor confidence. Pfizer and Roche Holding follow closely, indicating their strong market positions.

5. **Employee Strength**: Johnson & Johnson employs the most staff, which could be attributed to its diverse product range spanning pharmaceuticals, medical devices, and consumer health products.

6. **Geographical Focus**: Most companies have a global presence, with a notable focus on North America and Europe. This geographical distribution suggests a strategic approach to capturing major healthcare markets.

7. **Product Diversification**: The companies have diversified portfolios, with key products in oncology, vaccines, and immunology. This diversification helps mitigate risks associated with market volatility in specific therapeutic areas.

8. **Market Trends**: The emphasis on oncology and immunology across these companies indicates a significant industry trend towards addressing chronic and lifestyle-related diseases, which are prevalent in developed markets.

### Conclusion

The top biotech and pharmaceutical companies are characterized by high revenue, significant R&D investments, strong profitability, and extensive global reach. Johnson & Johnson, Pfizer, and Roche Holding emerge as leaders across multiple key performance indicators. These companies' strategic focus on innovation, market diversification, and global expansion positions them well to maintain their industry dominance.

[References]

[1]: Statista, "2023 ranking of the global top 10 biotech and pharmaceutical companies based on revenue (in billion U.S. dollars)". [Link](https://www.statista.com/statistics/272717/top-global-biotech-and-pharmaceutical-companies-based-on-revenue/)

[2]: GEN, "Top 25 Biotech Companies of 2023". [Link](https://www.genengnews.com/a-lists/top-25-biotech-companies-of-2023/)

[3]: Glassdoor, "Top Pharmaceutical and biotechnology Companies". [Link](https://www.glassdoor.co.in/Explore/top-pharmaceutical-and-biotechnology-companies_IS.4,36_ISEC10005.htm)
`;

// const MarkdownRenderer: React.FC<Props> = ({ tt }) => {
//   return (
//     <div className="prose prose-lg mx-auto overflow-hidden p-4">
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm]}
//         rehypePlugins={[rehypeRaw]}
//         components={{
//           table: ({ node, ...props }) => (
//             <table className="min-w-full divide-y divide-gray-200 border border-gray-300" {...props} />
//           ),
//           th: ({ node, ...props }) => (
//             <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300 whitespace-normal" {...props} />
//           ),
//           td: ({ node, ...props }) => (
//             <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 border border-gray-300" {...props} />
//           ),
//           a: ({ node, ...props }) => (
//             <a className="text-blue-500 underline" {...props} />
//           ),
//         }}
//       >
//         {tt}
//       </ReactMarkdown>
//     </div>
//   );
// };

// export default MarkdownRenderer;








const MarkdownRenderer: React.FC<Props> = ({ tt }) => {
  return (
    <div className="w-full   h-full  overflow-hidden ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
       
      >
        {tt}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;

// const MarkdownRenderer: React.FC<Props> = ({ tt }) => {
//   return (
//     <div className="w-full h-full mx-auto overflow-hidden p-4">
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm]}
//         rehypePlugins={[rehypeRaw]}
        
//       >
//         {tt}
//       </ReactMarkdown>
//     </div>
//   );
// };

// export default MarkdownRenderer;