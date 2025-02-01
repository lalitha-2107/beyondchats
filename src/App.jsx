import React, { useState } from 'react';
import UserRegistration from './components/UserRegistration';
import SetupOrganisation from './components/SetupOrganisation';
import ChatbotIntegration from './components/ChatbotIntegration';

function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});
  const [orgData, setOrgData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="app">
      {step === 1 && (
        <UserRegistration
          nextStep={nextStep}
          setUserData={setUserData}
        />
      )}
      {step === 2 && (
        <SetupOrganisation
          nextStep={nextStep}
          prevStep={prevStep}
          setOrgData={setOrgData}
        />
      )}
      {step === 3 && (
        <ChatbotIntegration
          prevStep={prevStep}
          userData={userData}
          orgData={orgData}
        />
      )}
    </div>
  );
}

export default App;