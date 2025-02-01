import React, { useState } from "react";
import UserRegistration from "./components/UserRegistration";
import SetupOrganisation from "./components/SetupOrganisation";
import ChatbotIntegration from "./components/ChatbotIntegration";
import './assets/styles.css';

function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});
  const [orgData, setOrgData] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="./company-logo.png" alt="Company Logo" />
            <span>BeyondChats</span>
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#product" onClick={toggleMenu}>Product</a></li>
            <li><a href="#pricing" onClick={toggleMenu}>Pricing</a></li>
            <li><a href="#resources" onClick={toggleMenu}>Resources</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            {menuOpen ? "✖" : "☰"}
          </div>
        </div>
      </nav>

      {/* Overlay when the menu is open */}
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`} onClick={toggleMenu}></div>

      {/* Step-based Component Rendering */}
      {step === 1 && (
        <UserRegistration nextStep={nextStep} setUserData={setUserData} />
      )}
      {step === 2 && (
        <SetupOrganisation
          nextStep={nextStep}
          prevStep={prevStep}
          setOrgData={setOrgData}
        />
      )}
      {step === 3 && (
        <ChatbotIntegration prevStep={prevStep} userData={userData} orgData={orgData} />
      )}
    </div>
  );
}

export default App;
