import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HabitTracker from './components/HabitTracker';
import DietPlanner from './components/DietPlanner';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habitos" element={<HabitTracker />} />
        <Route path="/dieta" element={<DietPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;