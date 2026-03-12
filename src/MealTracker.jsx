import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import Sidebar from './Sidebar';
import './theme.css';
import './Settings.css'; // Reusing the same page styles

export default function MealTracker() {
  return (
    <div className="app-background">
      <Sidebar />
      
      <div className="page-container">
        <div className="page-header">
          <UtensilsCrossed size={40} color="#f9a8d4" />
          <h1 className="page-title gradient-text">Meal Tracker</h1>
        </div>

        <div className="settings-content">
          <div className="glass-card">
            <h2 style={{ marginTop: 0 }}>Track Your Nutrition</h2>
            <p style={{ color: '#94a3b8' }}>
              This page is ready for you to implement! Ideas for features:
            </p>
            <ul style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
              <li>Log daily meals (breakfast, lunch, dinner, snacks)</li>
              <li>Track calories and macros (protein, carbs, fats)</li>
              <li>Food search and database</li>
              <li>Meal history and calendar view</li>
              <li>Water intake tracker</li>
              <li>Custom meal templates</li>
              <li>Nutrition goals and progress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
