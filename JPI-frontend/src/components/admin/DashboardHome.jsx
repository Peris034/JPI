import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => (
    <div>
        <h1>Welcome to Admin Panel</h1>
        <ul>
            <li><Link to="/admin/inquiries">Manage Inquiries</Link></li>
            <li><Link to="/admin/certificates">Manage Certificates</Link></li>
            <li><Link to="/admin/products">Manage Products</Link></li>
            <li><Link to="/admin/whatsapp-numbers">View Whatsapp Numbers</Link></li>
        </ul>
    </div>
);

export default AdminDashboard;
