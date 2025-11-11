import React from 'react';

const QuoteSummary = ({ total }) => {
  return (
    <div className="quote-summary">
      <h2>Quote Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default QuoteSummary;
