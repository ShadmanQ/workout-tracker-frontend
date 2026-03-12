import React, { useState } from 'react';
import './AddWorkout.css';

export default function AddWorkout({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">New Workout</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="workout-date">
            Workout Date
          </label>
          <input
            id="workout-date"
            type="date"
            className="date-input"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Add your workout form fields here */}
        <div className="placeholder-area">
          <p className="placeholder-text">
            <input name="workOut input" placeholder='What did you work on today, big dog?'></input><button>Submit!</button>
          </p>
        </div>
      </div>
    </div>
  );
}
