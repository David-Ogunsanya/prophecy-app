// src/App.js
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import VersesList from './components/VersesList';
import VerseForm from './components/VerseForm';
import ProphecyTool from './pages/timeline_history';
import * as THREE from 'three';

function Layout({ children }) {
  const location = useLocation();
  const hideNav = location.pathname === '/Prophecy Tool';
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNav && (
        <header
          style={{ backgroundColor: '#f9efe4' }}
          className={`sticky top-0 z-50 text-black font-sans text-lg p-4 tracking-wide transition-shadow duration-300 ${
            hasScrolled ? 'shadow-md' : ''
          }`}
        >
          <div className="navbar-container flex justify-between items-center">
            {/* Left: Brand */}
            <div className="navbar-logo font-bold text-xl">
              <Link to="/">Sealed Scriptures</Link>
            </div>
            {/* Center: Navigation Links */}
            <nav className="navbar-links">
              <ul className="flex gap-6 items-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/verses">Verses</Link>
                </li>
                <li>
                  <Link to="/add-verse">Add Verse</Link>
                </li>
                <li>
                  <Link to="/Prophecy Tool">Prophecy Tool</Link>
                </li>
              </ul>
            </nav>
            {/* Right: Optional action buttons */}
            <div className="navbar-actions flex gap-3">
              <button className="border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition">
                Book a demo
              </button>
              <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition">
                Start for free
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {!hideNav && (
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>© 2024 Sealed Scriptures. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/login" element={<Layout><LoginForm /></Layout>} />
        <Route path="/register" element={<Layout><RegisterForm /></Layout>} />
        <Route path="/verses" element={<Layout><VersesList /></Layout>} />
        <Route path="/add-verse" element={<Layout><VerseForm /></Layout>} />
        <Route path="/Prophecy Tool" element={<Layout><ProphecyTool /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
