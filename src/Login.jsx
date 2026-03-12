import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Mail, Lock } from 'lucide-react';
import './theme.css';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // For now, just navigate to home without checking credentials
    // You can add validation logic here later
    navigate('/home');
  };

  return (
    <div className="app-background login-container">
      <div className="login-content">
        {/* Logo/Brand Section */}
        <div className="login-header fade-in">
          <Activity className="icon-float login-icon" size={56} color="#f9a8d4" />
          <h1 className="login-title gradient-text">FitTrack</h1>
          <p className="login-subtitle">Track your fitness journey</p>
        </div>

        {/* Login Form */}
        <div className="glass-card login-card slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="form-title">Welcome Back</h2>
          <p className="form-subtitle">Sign in to continue your progress</p>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="input-wrapper">
                <Mail size={20} className="input-icon" />
                <input
                  id="email"
                  type="email"
                  className="input-field input-with-icon"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-wrapper">
                <Lock size={20} className="input-icon" />
                <input
                  id="password"
                  type="password"
                  className="input-field input-with-icon"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="primary-button login-button">
              Sign In
            </button>
          </form>

          <div className="login-footer">
            <p className="footer-text">
              Don't have an account? <span className="footer-link">Sign up</span>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <p className="login-info fade-in" style={{ animationDelay: '0.4s' }}>
          Your fitness data is secure and private
        </p>
      </div>
    </div>
  );
}
