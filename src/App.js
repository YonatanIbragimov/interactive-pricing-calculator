import React, { useState, useEffect } from 'react';
import SliderInput from './components/SliderInput';
import DropdownInput from './components/DropdownInput';
import QuoteSummary from './components/QuoteSummary';
import './App.css';

function App() {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(50);
  const [service, setService] = useState('basic');
  const [total, setTotal] = useState(0);

  // Service multiplier
  const serviceOptions = [
    { label: 'Basic', value: 'basic' },
    { label: 'Standard', value: 'standard' },
    { label: 'Premium', value: 'premium' },
  ];

  const serviceMultiplier = {
    basic: 1,
    standard: 1.5,
    premium: 2,
  };

  useEffect(() => {
    setTotal(hours * rate * serviceMultiplier[service]);
  }, [hours, rate, service]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Pricing Calculator</h1>
      </header>

      <main>
        <SliderInput
          label="Hours"
          value={hours}
          min={1}
          max={100}
          step={1}
          onChange={setHours}
        />
        <SliderInput
          label="Rate ($/hour)"
          value={rate}
          min={10}
          max={200}
          step={5}
          onChange={setRate}
        />
        <DropdownInput
          label="Service Level"
          options={serviceOptions}
          value={service}
          onChange={setService}
        />
        <QuoteSummary total={total} />
      </main>
    </div>
  );
}

export default App;
