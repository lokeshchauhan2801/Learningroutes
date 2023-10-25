// Navbar.js

import React from 'react';
import './TestNavbar.css';
import logoImage from '../Images/logo.png';

const TestNavbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Company Logo" />
      </div>
      <div className="explore-colleges">
        <ul href="#" className="explore-colleges-link">
          Explore Colleges
          <div className="dropdown-content">
            
            <a href="#">Amity Online University</a>
            <a href="#">Institute of Management Technology CDL</a>
            <a href="#">Chandigarh University Online </a>
            <a href="#">Online Uttaranchal University </a>
            <a href="#">UPES -CCE </a>
           
          </div>
        </ul>
      </div>
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li className="dropdown">
          <a href="#">Our Courses</a>
          <div className="dropdown-content">
            <a href="#">Online PG Programmes </a>
            <a href="#">Executive MBA Programmes</a>
            <a href="#">Online UG Programmes </a>
            <a href="#">Online MSc Programmes </a>
            <a href="#">Online DBA Programmes </a>
            <a href="#">Executive Programmes </a>
            <a href="#">Certifications Courses </a>
            <a href="#">Join-Linked Courses </a>
            <a href="#">Join-Linked Programs(upGrade) </a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#">Contact</a>
          <div className="dropdown-content">
            <a href="#">Gurugram Office</a>
            <a href="#">Jaipur Office</a>
            <a href="#">Mohali Office</a>
            <a href="#">Delhi Office</a>
            <a href="#">Mumbai Office</a>
            <a href="#">Bengaluru Office</a>
           </div>
        </li>
        <li className="dropdown">
          <a href="#">Explore More</a>
          <div className="dropdown-content">
            <a href="#">About The Company</a>
            <a href="#">Life @ LR</a>
            <a href="#">Career</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default TestNavbar;
