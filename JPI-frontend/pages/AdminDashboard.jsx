import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

const AdminDashboard = () => {
    return (
        <div className="admin-layout">
            <AdminSidebar />
            <div className="content">
                <AdminHeader title="Admin Dashboard" />
                <h2>Welcome to Admin Panel</h2>
                <p>Select options from sidebar to manage site content.</p>
            </div>
        </div>
    );
};

export default AdminDashboard;
