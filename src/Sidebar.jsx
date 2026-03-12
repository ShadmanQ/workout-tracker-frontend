import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings, UtensilsCrossed, Home } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        className="sidebar-toggle" 
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay (for mobile) */}
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Menu</h2>
        </div>

        <nav className="sidebar-nav">
          <Link 
            to="/home" 
            className={`sidebar-link ${isActive('/home') ? 'active' : ''}`}
            onClick={toggleSidebar}
          >
            <Home size={20} />
            <span>Dashboard</span>
          </Link>

          <Link 
            to="/meal-tracker" 
            className={`sidebar-link ${isActive('/meal-tracker') ? 'active' : ''}`}
            onClick={toggleSidebar}
          >
            <UtensilsCrossed size={20} />
            <span>Meal Tracker</span>
          </Link>

          <Link 
            to="/settings" 
            className={`sidebar-link ${isActive('/settings') ? 'active' : ''}`}
            onClick={toggleSidebar}
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
