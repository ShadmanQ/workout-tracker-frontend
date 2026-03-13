# 💪 FitTrack

A modern, elegant fitness tracking application designed to help you monitor your workout progress, track your weight goals, and stay motivated on your fitness journey.

### Live Demo Available [Here](https://workout-tracker-frontend-green.vercel.app/login) 
(use any credentials you like, POC does not store any data)

## 🎯 Purpose

FitTrack is built to be your personal fitness companion — a simple yet powerful tool to log workouts, visualize progress, and maintain consistency in your fitness routine. Whether you're just starting out or you're a seasoned athlete, this app helps you stay accountable and see how far you've come.

## ✨ Current Features

### 📊 Weight Progress Tracking
- Monitor your current weight vs. goal weight
- Visual progress bar showing how close you are to your target
- Clean, at-a-glance dashboard

### 🏋️ Workout History
- View your complete workout history organized by date
- Track different exercise types:
  - **Weight training** (sets × reps with weight)
  - **Cardio** (duration-based activities)
  - **Bodyweight exercises** (rep-based movements)
- Color-coded icons for quick visual scanning

### 💬 Daily Motivation
- Random motivational quotes from a curated database
- Fresh inspiration every time you open the app
- Quotes powered by a custom FastAPI backend

### 🎨 Beautiful Design
- Modern gradient UI with smooth animations
- Responsive design that works on desktop and mobile
- Glass-morphism cards with subtle blur effects
- Cohesive purple-pink color scheme throughout

### 🔐 User Authentication
- Simple login flow (authentication in progress)
- Personalized greeting with your name

## 🚀 Planned Features

The following features are on the roadmap:

- [ ] **Complete Workout Logging** - Fully functional "Log Workout" modal to add new exercises
- [ ] **Exercise Library** - Pre-built database of common exercises with instructions
- [ ] **Progress Charts** - Visual graphs showing weight trends over time
- [ ] **Personal Records** - Track your PRs (personal records) for each exercise
- [ ] **Workout Templates** - Save and reuse your favorite workout routines
- [ ] **Calendar View** - See your workout frequency at a glance
- [ ] **Rest Day Tracking** - Monitor recovery and rest days
- [ ] **Notes & Reflections** - Add notes to workouts about how you felt
- [ ] **Export Data** - Download your workout history as CSV/PDF
- [ ] **Social Features** - Share achievements with friends
- [ ] **Analytics Dashboard** - Deep insights into your training patterns
- [ ] **Mobile App** - Native iOS and Android versions

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **Lucide Icons** - Beautiful icon set
- **CSS3** - Custom animations and styling

### Backend
- **FastAPI** - High-performance Python web framework
- **SQLite** - Lightweight database for quotes and user data
- **Uvicorn** - ASGI server

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Python](https://www.python.org/) (v3.8 or higher)
- [pip](https://pip.pypa.io/en/stable/installation/) (Python package manager)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ShadmanQ/workout-tracker-frontend.git
cd workout-tracker-frontend
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Create User Data File

Create `src/userData.json` with your personal information:

```json
{
  "username": "YourName",
  "currentWeight": 185,
  "goalWeight": 170,
  "weightUnit": "lbs"
}
```

### 4. Set Up the Backend

```bash
cd backend
pip install -r requirements.txt
```

### 5. Run the Application

**Terminal 1 - Backend Server:**
```bash
cd backend
python main.py
```
Backend runs at `http://localhost:8000`

**Terminal 2 - Frontend App:**
```bash
npm start
```
App opens at `http://localhost:3000`

## 📁 Project Structure

```
workout-tracker-frontend/
├── backend/
│   ├── main.py              # FastAPI server with quote endpoints
│   ├── requirements.txt     # Python dependencies
│   └── fitness.db           # SQLite database (auto-generated)
├── src/
│   ├── App.js               # Main app with routing
│   ├── Login.jsx            # Login page component
│   ├── FitnessTracker-with-css.jsx  # Main dashboard
│   ├── historyCard.jsx      # Workout history card component
│   ├── theme.css            # Shared color scheme and variables
│   ├── FitnessTracker.css   # Dashboard-specific styles
│   ├── Login.css            # Login page styles
│   ├── historyCard.css      # History card styles
│   └── userData.json        # Your personal data (create this)
├── public/
├── package.json
└── README.md
```

## 🎮 Using the App

### Login Page
- Navigate to `http://localhost:3000`
- Enter any credentials (full authentication coming soon!)
- Click "Sign In" to access the dashboard

### Dashboard
- **View Progress** - See your current weight, goal weight, and progress percentage
- **Read Quotes** - Get daily motivation from the quote database
- **Browse History** - Scroll through your workout history
- **Log Workout** - Click the floating "+" button (feature in development)

## 🔧 API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/quote/random` | Get a random motivational quote |
| GET | `/api/quotes` | Get all quotes in the database |
| POST | `/api/quotes` | Add a new quote |

### Example API Usage

```bash
# Get a random quote
curl http://localhost:8000/api/quote/random

# Add a new quote
curl -X POST "http://localhost:8000/api/quotes?text=Stay%20strong&author=Unknown"
```

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Backend not connecting
- Verify the backend is running on port 8000
- Check that there are no CORS errors in the browser console
- Ensure `http://localhost:3000` is in the CORS allowed origins

### Database issues
```bash
# Delete and regenerate the database
rm backend/fitness.db
python backend/main.py
```

### Port conflicts
If ports 3000 or 8000 are in use:
- **Frontend**: Create React App will prompt you to use a different port
- **Backend**: Edit `main.py` and change `uvicorn.run(app, port=8001)`

## 🤝 Contributing

Contributions are welcome! If you'd like to add features or fix bugs:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Motivational quotes curated from various fitness sources
- Icons by [Lucide](https://lucide.dev/)
- Inspiration from modern fitness tracking apps

## 📧 Contact

Shadman Q - [@ShadmanQ](https://github.com/ShadmanQ)

Project Link: [https://github.com/ShadmanQ/workout-tracker-frontend](https://github.com/ShadmanQ/workout-tracker-frontend)

---

**Built with 💪 and ☕ by Shadman Q**