import React, { useState } from 'react';

function UserRegistration({ nextStep, setUserData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === generatedCode) {
      setUserData({ name, email, password });
      nextStep();
    } else {
      alert('Invalid verification code');
    }
  };

  const sendVerificationCode = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(randomCode);
    setVerificationSent(true);
    alert(`Verification code sent to ${email}: ${randomCode}`);
  };

  const simulateGoogleSignIn = () => {
    // Simulate Google Sign-In by pre-filling user data
    const simulatedUser = {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
    };
    setUserData(simulatedUser);
    alert('Simulated Google Sign-In successful!');
    nextStep();
  };

  return (
    <div className="form-container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        {!verificationSent ? (
          <button type="button" onClick={sendVerificationCode}>
            Send Verification Code
          </button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Verification Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button type="submit">Next</button>
          </>
        )}
        <button type="button" className="google-btn" onClick={simulateGoogleSignIn}>
        <img src="./google.png" alt="Google Logo" className="google-logo" width="24" height="24"/>
        <span>Continue with Google</span>
        </button>
      </form>
    </div>
  );
}

export default UserRegistration;