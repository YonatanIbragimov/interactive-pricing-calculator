import React from 'react';

const SliderInput = ({ label, value, min, max, step, onChange }) => {
  return (
    <div className="input-group">
      <label>{label}: {value}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default SliderInput;
