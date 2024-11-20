import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Introduction from './Introduction';
import Lab from './Lab';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Introduction Page */}
        <Route path="/" element={<Introduction />} />
        {/* Lab Walkthrough */}
        <Route path="/lab/:id" element={<Lab />} />
        {/* Catch-all route redirects to Introduction */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
