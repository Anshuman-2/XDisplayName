import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (firstName.trim() && lastName.trim()) {
      setFullName(firstName.trim() + ' ' + lastName.trim());
      setIsSubmitted(true);
    }
  };

  return (
    <div className="container">
      <h1>Full Name Display</h1>
      
      <form id="nameForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>

      <div id="displayArea" className="display-area" style={{ display: isSubmitted ? 'block' : 'none' }}>
        <h2>Full Name:</h2>
        <p id="fullName">{fullName}</p>
      </div>
    </div>
  );
}

export default App;
