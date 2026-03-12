import logo from './logo.svg';
import './App.css';
import FitnessTracker from './FitnessTracker.jsx';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
    <Router>
      <Routes>
        {/* Login page - default route */}
        <Route path="/login" element={<Login />} />
        
        {/* Home page - the fitness tracker */}
        <Route path="/home" element={<FitnessTracker />} />
        
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
