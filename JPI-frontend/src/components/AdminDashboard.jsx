import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

const AdminDashboard = () => {
    const [inquiries, setInquiries] = useState([]);
    const [certificates, setCertificates] = useState([]);
    const [newCertificate, setNewCertificate] = useState({ title: '', imageUrl: '', issuedDate: '' });

    useEffect(() => {
        fetchInquiries();
        fetchCertificates();
    }, []);

    const fetchInquiries = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/admin/inquiries`);
        setInquiries(data);
    };

    const fetchCertificates = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/admin/certificates`);
        setCertificates(data);
    };

    const handleCertChange = (e) => {
        setNewCertificate({ ...newCertificate, [e.target.name]: e.target.value });
    };

    const addCertificate = async () => {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/admin/certificates`, newCertificate);
        fetchCertificates();
    };

    const deleteCertificate = async (id) => {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/admin/certificates/${id}`);
        fetchCertificates();
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Panel</h1>

            <section className="inquiries-section">
                <h2>User Inquiries (WhatsApp Form)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Country Code</th>
                            <th>Number</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inquiries.map((inq, idx) => (
                            <tr key={idx}>
                                <td>{inq.dialCode}</td>
                                <td>{inq.number}</td>
                                <td>{new Date(inq.collectedAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="certificates-section">
                <h2>Manage Certificates</h2>
                <input name="title" placeholder="Title" onChange={handleCertChange} />
                <input name="imageUrl" placeholder="Image URL" onChange={handleCertChange} />
                <input name="issuedDate" type="date" onChange={handleCertChange} />
                <button onClick={addCertificate}>Add Certificate</button>

                <ul>
                    {certificates.map(cert => (
                        <li key={cert._id}>
                            {cert.title} - {cert.issuedDate} 
                            <button onClick={() => deleteCertificate(cert._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AdminDashboard;
