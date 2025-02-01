import React from 'react';

function SuccessUI() {
  return (
    <div className="success-ui">
      <h2>🎉 Integration Successful!</h2>
      <button>Explore Admin Panel</button>
      <button>Start Talking to Your Chatbot</button>
      <div className="social-sharing">
        <button>Share on Twitter</button>
        <button>Share on LinkedIn</button>
      </div>
    </div>
  );
}

export default SuccessUI;