import { Calendar, Dumbbell, Timer, Hash } from "lucide-react";
import './HistoryCard.css';

export default function HistoryCard({ session, sessionIndex, isLoaded }) {
    return (
        <div
            className={`workout-card ${isLoaded ? 'loaded' : ''}`}
            style={{ transitionDelay: `${0.5 + sessionIndex * 0.1}s` }}
        >
            <div className="card-header">
                <Calendar size={20} color="#94a3b8" />
                <h3 className="card-date">{session.date}</h3>
            </div>

            <div className="workout-list">
                {session.workouts.map((workout, workoutIndex) => (
                    <div
                        key={workoutIndex}
                        className="workout-item"
                    >
                        <div className="workout-left">
                            {workout.type === 'weight' && <Dumbbell size={20} color="#a78bfa" />}
                            {workout.type === 'time' && <Timer size={20} color="#60a5fa" />}
                            {workout.type === 'reps' && <Hash size={20} color="#4ade80" />}
                            <span className="workout-name">{workout.name}</span>
                        </div>
                        <span className="workout-value">{workout.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}