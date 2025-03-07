import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Components
import Header from './components/public/Header';
import Footer from './components/public/Footer';
import Home from './components/public/Home';
import Certificates from './components/public/Certificates/Certificates';
import Downloads from './components/public/Downloads/Downloads';
import Payments from './components/public/Payments/Payments';
import Inquiry from './components/public/Inquiry/Inquiry';
import Contact from './components/public/Contact/Contact';

// Admin Components
import AdminLayout from './components/admin/AdminLayout';
import DashboardHome from './components/admin/DashboardHome';
import Inquiries from './components/admin/Inquiries';
import ManageCertificates from './components/admin/ManageCertificates';
import WhatsAppNumbers from './components/admin/WhatsAppNumbers';
import AdminProducts from './components/admin/AdminProducts';
import AdminLogin from './components/admin/AdminLogin';

// Auth Guard
import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute';

import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main className="main-content">
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/certificates" element={<Certificates />} />
                        <Route path="/downloads" element={<Downloads />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/inquiry" element={<Inquiry />} />
                        <Route path="/contact" element={<Contact />} />

                        {/* Admin Login (No Guard) */}
                        <Route path="/admin/login" element={<AdminLogin />} />

                        {/* Protected Admin Routes */}
                        <Route path="/admin" element={
                            <ProtectedAdminRoute>
                                <AdminLayout />
                            </ProtectedAdminRoute>
                        }>
                            <Route index element={<DashboardHome />} />
                            <Route path="inquiries" element={<Inquiries />} />
                            <Route path="certificates" element={<ManageCertificates />} />
                            <Route path="products" element={<AdminProducts />} />
                            <Route path="whatsapp-numbers" element={<WhatsAppNumbers />} />
                        </Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
