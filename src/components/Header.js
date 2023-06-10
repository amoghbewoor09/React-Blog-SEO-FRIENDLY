import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <div className="header">
      <div className="menu">
        <a href="/">BI Checking & Skor</a>
        <div className="dropdown">
          <button className="dropbtn">
            Cicilan<i className="fas fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/">B1</a>
            <a href="/">B2</a>
            <a href="/">B3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            Pinjaman <i className="fas fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/">C1</a>
            <a href="/">C2</a>
            <a href="/">C3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            Your Money <i className="fas fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/">D1</a>
            <a href="/">D2</a>
            <a href="/">D3</a>
          </div>
        </div>
        <a href="/">Fraud Scam</a>
        <a href="/">Skorlife journey</a>
        <a href="/">Skorlifepedia</a>
      </div>
    </div>
  );
};

export default Header;
