import React from 'react';
import { Link } from 'react-router-dom';

function Candy() {
  return (
    <div className="snack-page">
      <h1>Candy</h1>
      <p>Indulge in some sweet, delicious candy.</p>
      <Link to="/" className="back-link">Go back</Link>
    </div>
  );
}

export default Candy;