import React, { useState } from 'react';
import FeedbackBar from './FeedbackBar';
import SuccessUI from './SuccessUI';
import ErrorUI from './ErrorUI';

function ChatbotIntegration({ prevStep, userData, orgData }) {
  const [integrationStatus, setIntegrationStatus] = useState(null);

  const handleTestChatbot = () => {
    window.open(orgData.websiteUrl, '_blank');
  };

  const handleIntegrate = () => {
    setIntegrationStatus('pending');
    setTimeout(() => {
      setIntegrationStatus('success');
    }, 2000);
  };

  return (
    <div className="chatbot-integration">
      <h1>Chatbot Integration & Testing</h1>
      <button onClick={handleTestChatbot}>Test Chatbot</button>
      <button onClick={handleIntegrate}>Integrate on Your Website</button>
      <button onClick={() => setIntegrationStatus('test')}>
        Test Integration
      </button>
      {integrationStatus === 'success' && <SuccessUI />}
      {integrationStatus === 'error' && <ErrorUI />}
      <FeedbackBar />
      <button onClick={prevStep}>Back</button>
    </div>
  );
}

export default ChatbotIntegration;