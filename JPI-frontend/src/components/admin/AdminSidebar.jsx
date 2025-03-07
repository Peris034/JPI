import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

const menuItems = [
    { path: '/admin', label: 'Dashboard' },
    { path: '/admin/inquiries', label: 'Inquiries' },
    { path: '/admin/certificates', label: 'Certificates' },
    { path: '/admin/logo', label: 'Logo' },
    { path: '/admin/products', label: 'Products' },
    { path: '/admin/payment-options', label: 'Payment Options' },
    { path: '/admin/whatsapp-settings', label: 'WhatsApp Settings' },
    { path: '/admin/whatsapp-numbers', label: 'WhatsApp Numbers List' },
];

const AdminSidebar = () => (
    <nav className="admin-sidebar">
        {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
                {item.label}
            </Link>
        ))}
    </nav>
);

export default AdminSidebar;