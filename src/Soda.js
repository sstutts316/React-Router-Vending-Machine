import React from 'react';
import { Link } from 'react-router-dom';

function Soda() {
  return (
    <div className="snack-page">
      <h1>Soda</h1>
      <p>Refresh yourself with a fizzy soda.</p>
      <Link to="/" className="back-link">Go back</Link>
    </div>
  );
}

export default Soda;