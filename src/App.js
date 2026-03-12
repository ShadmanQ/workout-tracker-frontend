import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import FitnessTracker from './FitnessTracker';
import Settings from './Settings';
import MealTracker from './MealTracker';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page - default route */}
        <Route path="/login" element={<Login />} />
        
        {/* Home page - the fitness tracker */}
        <Route path="/home" element={<FitnessTracker />} />
        
        {/* Settings page */}
        <Route path="/settings" element={<Settings />} />
        
        {/* Meal Tracker page */}
        <Route path="/meal-tracker" element={<MealTracker />} />
        
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
