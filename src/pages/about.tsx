import { Link } from 'gatsby';
import React from 'react';

// @ts-ignore
enum Flag {
  X = 'x',
  Y = 'y',
}

export default () => {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
  );
};
