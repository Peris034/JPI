import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Certificates.css';

const Certificates = () => {
    const [certificates, setCertificates] = useState([]);
    const [showAll, setShowAll] = useState(false); // Initially show only top 3 or 4

    useEffect(() => {
        fetchCertificates();
    }, []);

    const fetchCertificates = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/certificates`);

            // Filter only active certificates
            const activeCertificates = data.filter(cert => cert.isActive);

            // Sort certificates by createdAt (newest first)
            const sortedCertificates = activeCertificates.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

            setCertificates(sortedCertificates);
        } catch (error) {
            console.error('Failed to fetch certificates:', error);
        }
    };

    // Only show top 4 if not showing all
    const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

    return (
        <section id="certificates" className="certificate-wrapper">
            <h2 className="sec-ttl">Certificates</h2>

            <div className="certificate-grid">
                {visibleCertificates.map((cert, index) => (
                    <div className="certificate-item" key={cert._id || index}>
                        <img 
                            alt={cert.title} 
                            src={`${process.env.REACT_APP_BACKEND_URL}${cert.imageUrl}`} 
                            loading="lazy" 
                        />
                        <p className="certificate-name">{cert.title}</p>
                        <p className="certificate-date">{cert.description}</p>
                    </div>
                ))}
            </div>

            {/* Button to toggle between Show All and Show Less */}
            {!showAll ? (
                <button className="btn-showall" onClick={() => setShowAll(true)}>Show All</button>
            ) : (
                <button className="btn-showall" onClick={() => setShowAll(false)}>Show Less</button>
            )}
        </section>
    );
};

export default Certificates;
