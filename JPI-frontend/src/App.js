import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Certificates from './components/Certificates/Certificates';
import Downloads from './components/Downloads/Downloads';
import Payments from './components/Payments/Payments';
import Inquiry from './components/Inquiry/Inquiry';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/inquiry" element={<Inquiry />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
export default App;
