import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import './AddWorkout.css';

export default function AddWorkout({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  // Store workout data as objects, not components
  const [workouts, setWorkouts] = useState([
    { id: 1, exercise: '', weight: '', reps: '' } // Initial row
  ]);

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  // Add a new workout row
  const addWorkoutRow = () => {
    const newWorkout = {
      id: Date.now(), // Unique ID using timestamp
      exercise: '',
      weight: '',
      reps: ''
    };
    setWorkouts([...workouts, newWorkout]);
  };

  // Update a specific workout field
  const updateWorkout = (id, field, value) => {
    setWorkouts(workouts.map(workout => 
      workout.id === id 
        ? { ...workout, [field]: value }
        : workout
    ));
  };

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

        <div className="workout-section">
          <h3 className="section-heading">Weights</h3>

          {/* Render a row for each workout */}
          {workouts.map((workout) => (
            <div key={workout.id} className="exercise-row">
              <div className="form-group exercise-name-group">
                <label className="form-label" htmlFor={`exercise-name-${workout.id}`}>
                  Exercise
                </label>
                <input
                  id={`exercise-name-${workout.id}`}
                  type="text"
                  className="workout-input"
                  placeholder="Bench Press"
                  value={workout.exercise}
                  onChange={(e) => updateWorkout(workout.id, 'exercise', e.target.value)}
                />
              </div>

              <div className="form-group exercise-value-group">
                <label className="form-label" htmlFor={`exercise-weight-${workout.id}`}>
                  Weight (lbs)
                </label>
                <input
                  id={`exercise-weight-${workout.id}`}
                  type="number"
                  className="workout-input"
                  placeholder="185"
                  value={workout.weight}
                  onChange={(e) => updateWorkout(workout.id, 'weight', e.target.value)}
                />
              </div>

              <div className="form-group exercise-value-group">
                <label className="form-label" htmlFor={`exercise-reps-${workout.id}`}>
                  Reps
                </label>
                <input
                  id={`exercise-reps-${workout.id}`}
                  type="number"
                  className="workout-input"
                  placeholder="8"
                  value={workout.reps}
                  onChange={(e) => updateWorkout(workout.id, 'reps', e.target.value)}
                />
              </div>
            </div>
          ))}

          {/* Add button below all workout rows */}
          <button className="add-exercise-button-full" type="button" onClick={addWorkoutRow}>
            <Plus size={20} />
            <span>Add Exercise</span>
          </button>
        </div>

        <button className="submit-button">
          Submit!
        </button>
      </div>
    </div>
  );
}