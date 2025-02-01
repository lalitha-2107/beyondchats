import React from 'react';

const dummyData = [
  { url: 'https://example.com/page1', status: 'Scraped', chunks: 5 },
  { url: 'https://example.com/page2', status: 'Pending', chunks: 0 },
];

function ScrapedDataTable({ websiteUrl }) {
  return (
    <div className="scraped-data">
      <h3>Scraped Data from {websiteUrl}</h3>
      <table>
        <thead>
          <tr>
            <th>Webpage</th>
            <th>Status</th>
            <th>Chunks</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data, index) => (
            <tr key={index}>
              <td>{data.url}</td>
              <td>{data.status}</td>
              <td>{data.chunks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScrapedDataTable;