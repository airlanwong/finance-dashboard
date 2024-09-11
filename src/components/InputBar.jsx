// src/App.jsx
import React, { useState } from 'react';

const App = () => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React Input Text Example</h2>
      {/* Input text field */}
      <input
        type="text"
        placeholder="Stock Symbol"
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: '10px',
          width: '300px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
      {/* Display input value */}
      <p style={{ marginTop: '20px', fontSize: '18px' }}>You typed: {inputValue}</p>
    </div>
  );
};

export default App;
