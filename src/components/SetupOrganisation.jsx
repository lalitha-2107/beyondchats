import React, { useState } from 'react';
import ScrapedDataTable from './ScrapedDataTable';

function SetupOrganisation({ nextStep, prevStep, setOrgData }) {
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrgData({ companyName, websiteUrl, description });
    nextStep();
  };

  return (
    <div className="form-container">
      <h1>Setup Organisation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Website URL"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          required
        />
        <textarea
          placeholder="Company Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <ScrapedDataTable websiteUrl={websiteUrl} />
        <div className="button-group">
          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default SetupOrganisation;