import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css'; // Import the CSS file

function VendingMachine() {
  return (
    <div className="vending-machine">
      <h1>Vending Machine</h1>
      <div>
        <Link to="/chips" className="snack-link">Chips</Link>
        <Link to="/soda" className="snack-link">Soda</Link>
        <Link to="/candy" className="snack-link">Candy</Link>
      </div>
    </div>
  );
}

export default VendingMachine;