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
        backgroundImage: 'linear-gradient(to top, #d2c7ad, #d1c7b0, #d0c8b2, #d0c8b5, #cfc8b7)',
    }}
    className="text-black font-sans font-semibold text-lg p-4 tracking-wide"
>
    <nav className="flex justify-between">
        <div className="text-lg font-bold content-start">
            <Link to="/">Sealed Scriptures</Link>
        </div>
        <ul className="navbar-list space-x-4 flex tracking-wide">
            <li>
                <Link to="/" className="">Home</Link>
            </li>
            <li>
                <Link to="/login" className="">Login</Link>
            </li>
            <li>
                <Link to="/register" className="">Register</Link>
            </li>
            <li>
                <Link to="/verses" className="">Verses</Link>
            </li>
            <li>
                <Link to="/add-verse" className="">Add Verse</Link>
            </li>
        </ul>
    </nav>
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
