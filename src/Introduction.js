import React from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css';

function Introduction() {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Welcome to the Lab Walkthrough</h1>
        <p>
          This app provides an interactive walkthrough of the course labs, from learning Git basics to
          building React applications. Explore each lab to review key concepts and see how the knowledge builds up step by step.
        </p>
        <Link to="/lab/1">
          <button className="start-button">Start Walkthrough</button>
        </Link>
      </div>
    </div>
  );
}

export default Introduction;
