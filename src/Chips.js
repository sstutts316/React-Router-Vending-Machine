import React from 'react';
import { Link } from 'react-router-dom';
import './Snack.css'; // Import the CSS file

function Chips() {
  return (
    <div className="snack-page">
      <h1>Chips</h1>
      <p>Enjoy a bag of crispy, salty chips.</p>
      <Link to="/" className="back-link">Go back</Link>
    </div>
  );
}

export default Chips;