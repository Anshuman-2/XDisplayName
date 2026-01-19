import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid = firstName.trim() !== '' && lastName.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setFullName(firstName.trim() + ' ' + lastName.trim());
      setIsSubmitted(true);
    }
  };

  return (
    <div className="container">
      <form id="nameForm" onSubmit={handleSubmit}>
        <h1>Enter Your Name</h1>

        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
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
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <button type="submit" id="submitBtn" disabled={!isFormValid}>
          Submit
        </button>
      </form>

      <div className="display-area" style={{ display: isSubmitted ? 'block' : 'none' }}>
        <h2>Full Name:</h2>
        <p id="fullName">{fullName}</p>
      </div>
    </div>
  );
}

export default App;
