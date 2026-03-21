import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import './AddWorkout.css';

export default function AddWorkout({ isOpen, onClose, onSubmitWorkout }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [workouts, setWorkouts] = useState([
    { id: 1, exercise: '', weight: '', reps: '' }
  ]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.exercise-search-container')) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  const handleSubmit = () => {

    const saveDate = new Date(selectedDate).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })
    // Format your data
    const newSession = {
      date: saveDate,
      workouts: workouts.map(w => ({
        name: w.exercise,
        type: 'weight',
        value: `${w.weight} lbs × ${w.reps} reps`
      }))
    };

    // Call parent's function
    onSubmitWorkout(newSession);

    // Close modal
    onClose();
  };
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
  // Optimized fetch with debouncing
  const fetchData = async (value) => {
    if (value.length < 3) {
      setSearchData([]);
      setShowResults(false);
      return;
    }

    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${value}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_EXERCISE_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSearchData(result.slice(0, 10)); // Limit to 10 results
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching exercises:', error);
      setSearchData([]);
    }
  };

  // Debounce to avoid too many API calls
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Create debounced version
  const debouncedFetch = debounce(fetchData, 500);

  // Handle input change
  const handleSearchChange = (workoutId, value) => {
    setSearchQuery(value);
    updateWorkout(workoutId, 'exercise', value);
    debouncedFetch(value);
  };

  // Handle selecting an exercise
  const handleSelectExercise = (workoutId, exerciseName) => {
    updateWorkout(workoutId, 'exercise', exerciseName);
    setSearchQuery(exerciseName);
    setShowResults(false);
    setSearchData([]);
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
                <div className="exercise-search-container">
                  <input
                    id={`exercise-name-${workout.id}`}
                    type="text"
                    className="workout-input"
                    placeholder="Start typing (e.g., bench press)"
                    value={workout.exercise}
                    onChange={(e) => handleSearchChange(workout.id, e.target.value)}
                    onFocus={() => workout.exercise.length >= 3 && setShowResults(true)}
                    autoComplete="off"
                  />

                  {showResults && searchData.length > 0 && (
                    <div className="search-results">
                      {searchData.map((data, index) => (
                        <div
                          key={data.id || index}
                          className="search-result-item"
                          onClick={() => handleSelectExercise(workout.id, data.name)}
                        >
                          <span className="exercise-name">{data.name}</span>
                          <span className="exercise-meta">
                            {data.bodyPart} • {data.equipment}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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

        <button className="submit-button" onClick={handleSubmit}>
          Submit!
        </button>
      </div>
    </div>
  );
}