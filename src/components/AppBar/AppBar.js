import React from 'react';
import './AppBar.css';

const AppBar = data => (
  <header className="AppBar">
    <ul className="AppBar__nav">
      <li>{data.linkOne}</li>
      <li>{data.linkTwo}</li>
      <li>{data.linkThree}</li>
    </ul>
  </header>
);

export default AppBar;
