import React, { useState, useEffect } from 'react';
import { Activity, TrendingDown, Calendar, Dumbbell, Timer, Hash } from 'lucide-react';
import userData from './userData.json'
import './theme.css';
import './FitnessTracker.css';
import HistoryCard from './HistoryCard';
import Sidebar from './Sidebar';
import AddWorkout from './AddWorkout';

export default function FitnessTracker() {
  // ALL HOOKS MUST BE AT THE TOP - BEFORE ANY RETURNS
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quote, setQuote] = useState("Loading inspiration...");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  // Load user data from file
  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate a slight delay to mimic database loading
        await new Promise(resolve => setTimeout(resolve, 500));
        setData(userData);
        setLoading(false);
        
        // Trigger animations after data loads
        setTimeout(() => setIsLoaded(true), 100);
      } catch (error) {
        console.error('Error loading user data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Fetch a random quote from the backend
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/quote/random');
        const data = await response.json();
        setQuote(data.text);
        setQuoteAuthor(data.author);
      } catch (error) {
        console.error('Error fetching quote:', error);
        // Fallback quote if backend is not available
        setQuote("Every workout is progress, no matter how small.");
        setQuoteAuthor("Unknown");
      }
    };

    fetchQuote();
  }, []);

  const workoutHistory = [
    {
      date: "January 29, 2026",
      workouts: [
        { name: "Bench Press", type: "weight", value: "185 lbs × 8 reps" },
        { name: "Squats", type: "weight", value: "225 lbs × 10 reps" },
        { name: "Pull-ups", type: "reps", value: "12 reps" },
        { name: "Running", type: "time", value: "25 min" }
      ]
    },
    {
      date: "January 27, 2026",
      workouts: [
        { name: "Deadlift", type: "weight", value: "275 lbs × 6 reps" },
        { name: "Overhead Press", type: "weight", value: "115 lbs × 8 reps" },
        { name: "Cycling", type: "time", value: "40 min" }
      ]
    },
    {
      date: "January 25, 2026",
      workouts: [
        { name: "Leg Press", type: "weight", value: "320 lbs × 12 reps" },
        { name: "Lat Pulldown", type: "weight", value: "150 lbs × 10 reps" },
        { name: "Plank", type: "time", value: "3 min" },
        { name: "Swimming", type: "time", value: "30 min" }
      ]
    },
    {
      date: "January 23, 2026",
      workouts: [
        { name: "Incline Bench Press", type: "weight", value: "155 lbs × 10 reps" },
        { name: "Romanian Deadlift", type: "weight", value: "185 lbs × 12 reps" },
        { name: "Running", type: "time", value: "30 min" }
      ]
    }
  ];

  // Show loading screen while data is being fetched
  if (loading || !data) {
    return (
      <div className="fitness-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Activity size={64} color="#f9a8d4" style={{ animation: 'pulse 2s ease-in-out infinite', marginBottom: '16px' }} />
          <p style={{ fontSize: '1.25rem', color: '#cbd5e1' }}>Loading your fitness data...</p>
        </div>
      </div>
    );
  }

  const progressPercentage = Math.min(100, Math.max(0, 
    (1 - Math.abs(data.currentWeight - data.goalWeight) / data.currentWeight) * 100
  ));

  return (
    <div className="fitness-container">
      <Sidebar />
      
      <div className="fitness-wrapper">
        {/* Header Section */}
        <header className={`fitness-header ${isLoaded ? 'loaded' : ''}`}>
          <div className="header-flex">
            <Activity className="icon-float" size={40} color="#f9a8d4" />
            <h1 className="fitness-title">Hi, {data.username}</h1>
          </div>
        </header>

        {/* Motivational Quote */}
        <div className={`quote-container ${isLoaded ? 'loaded' : ''}`}>
          <blockquote className="quote-text">
            "{quote}"
            {quoteAuthor && quoteAuthor !== "Unknown" && (
              <footer style={{ marginTop: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
                — {quoteAuthor}
              </footer>
            )}
          </blockquote>
        </div>

        {/* Weight Progress Card */}
        <div className={`weight-card ${isLoaded ? 'loaded' : ''}`}>
          <div className="section-title">
            <TrendingDown size={24} color="#f9a8d4" />
            <h2 style={{ margin: 0 }}>Weight Progress</h2>
          </div>
          
          <div className="stats-grid">
            <div className="stat-box">
              <p className="stat-label">Current</p>
              <p className="stat-value">{data.currentWeight}</p>
              <p className="stat-unit">{data.weightUnit}</p>
            </div>
            
            <div className="stat-box goal">
              <p className="stat-label">Goal</p>
              <p className="stat-value">{data.goalWeight}</p>
              <p className="stat-unit">{data.weightUnit}</p>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-info">
              <span style={{ color: '#94a3b8' }}>Progress to goal</span>
              <span style={{ fontWeight: '600', color: '#f9a8d4' }}>
                {Math.abs(data.currentWeight - data.goalWeight)} {data.weightUnit} to go
              </span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressPercentage}%` }} />
            </div>
          </div>
        </div>

        {/* Workout History Section */}
        <div>
          <div className={`section-title history-header ${isLoaded ? 'loaded' : ''}`}>
            <Calendar size={24} color="#f9a8d4" />
            <h2 style={{ margin: 0 }}>Workout History</h2>
          </div>

          <div className="history-cards">
            {workoutHistory.map((session, sessionIndex) => (
              <HistoryCard 
                key={sessionIndex}
                session={session} 
                sessionIndex={sessionIndex}
                isLoaded={isLoaded}
              />
            ))}
          </div>
        </div>

        {/* Footer Spacing */}
        <div style={{ height: '48px' }}></div>
      </div>

      {/* Log Workout Button */}
      <button className="log-button" onClick={() => setIsModalOpen(true)}>
        + Log Workout
      </button>

      {/* Workout Modal */}
      <AddWorkout 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
