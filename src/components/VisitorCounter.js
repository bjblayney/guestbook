// src/components/VisitorCounter.js
import React from 'react';
import useVisitorCounter from '../hooks/useVisitorCounter';

const VisitorCounter = () => {
  const count = useVisitorCounter();

  return <div className="visitor-counter">{count !== null ? <p>Visitor Count: {count}</p> : <p>Loading visitor count...</p>}</div>;
};

export default VisitorCounter;
