import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import Sidebar from './Sidebar';
import './theme.css';
import './Settings.css';

export default function Settings() {
  return (
    <div className="app-background">
      <Sidebar />
      
      <div className="page-container">
        <div className="page-header">
          <SettingsIcon size={40} color="#f9a8d4" />
          <h1 className="page-title gradient-text">Settings</h1>
        </div>

        <div className="settings-content">
          <div className="glass-card">
            <h2 style={{ marginTop: 0 }}>Account Settings</h2>

            <h3 style={{color: '#94a3b8'}}>Still under construction! Check back soon</h3>
            {/* <p style={{ color: '#94a3b8' }}>
              This page is ready for you to implement! Add settings like:
            </p>
            <ul style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
              <li>Profile information</li>
              <li>Weight unit preferences (lbs/kg)</li>
              <li>Notification settings</li>
              <li>Theme customization</li>
              <li>Privacy settings</li>
              <li>Export/import data</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
