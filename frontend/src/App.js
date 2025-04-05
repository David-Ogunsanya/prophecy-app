import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import VersesList from './components/VersesList';
import VerseForm from './components/VerseForm';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Header/Nav Bar */}
                <header
  style={{
    backgroundColor: '#f9efe4'
  }}
  className="text-black font-sans text-lg p-4 tracking-wide"
>
  <div className="navbar-container flex justify-between items-center">
    {/* Left: Brand */}
    <div className="navbar-logo font-bold text-xl">
      <Link to="/">Sealed Scriptures</Link>
    </div>

    {/* Center: Navigation Links */}
    <nav className="navbar-links">
      <ul className="flex gap-6 items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/verses">Verses</Link></li>
        <li><Link to="/add-verse">Add Verse</Link></li>
      </ul>
    </nav>

    {/* Right: Actions (optional buttons) */}
    <div className="navbar-actions flex gap-3">
      <button className="border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition">Book a demo</button>
      <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition">Start for free</button>
    </div>
  </div>
</header>
                {/* Main Content */}
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="/verses" element={<VersesList />} />
                        <Route path="/add-verse" element={<VerseForm />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="bg-gray-800 text-white text-center p-4">
                    <p>© 2024 Sealed Scriptures. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
