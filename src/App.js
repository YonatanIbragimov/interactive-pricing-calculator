import React, { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Pricing Calculator</h1>
        <p>Total: ${total}</p>
      </header>
    </div>
  );
}

export default App;
